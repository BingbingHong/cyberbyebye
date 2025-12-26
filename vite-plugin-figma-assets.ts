import type { Plugin } from 'vite';
import path from 'path';
import { existsSync } from 'fs';

/**
 * Vite plugin to resolve figma:asset/ imports to actual asset files
 */
export function figmaAssetsPlugin(): Plugin {
  return {
    name: 'vite-plugin-figma-assets',
    resolveId(id, importer) {
      if (id.startsWith('figma:asset/')) {
        // Extract the filename from the figma:asset/ path
        const filename = id.replace('figma:asset/', '');
        // Resolve relative to project root
        const assetPath = path.resolve(process.cwd(), 'src/assets', filename);
        
        if (existsSync(assetPath)) {
          // Return the resolved path
          return assetPath;
        } else {
          // Log warning but don't fail
          console.warn(`[figma-assets] Asset not found: ${filename}`);
          return null;
        }
      }
      return null;
    },
  };
}

