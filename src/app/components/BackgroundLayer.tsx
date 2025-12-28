interface BackgroundLayerProps {
  cloudImage?: string;
}

export function BackgroundLayer({ cloudImage }: BackgroundLayerProps) {
  return (
    <div 
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ 
        // 粉白渐变：从顶部的透明粉色（白色）到底部的不透明粉色 #FBC4D4
        background: "linear-gradient(to bottom, rgba(251, 196, 212, 0), rgba(251, 196, 212, 1))",
        width: '100%',
        height: '100%',
      }}
    >
      {/* 云朵背景图片 - 如果提供的话 */}
      {cloudImage && (
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${cloudImage})`,
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.8,
          }}
        />
      )}
    </div>
  );
}

