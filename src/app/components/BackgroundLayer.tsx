export function BackgroundLayer() {
  return (
    <div 
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ 
        // 粉白渐变：从顶部的透明粉色（白色）到底部的不透明粉色 #FBC4D4
        background: "linear-gradient(to bottom, rgba(251, 196, 212, 0), rgba(251, 196, 212, 1))",
        width: '100%',
        height: '100%',
      }}
    />
  );
}

