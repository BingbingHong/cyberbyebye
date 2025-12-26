import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import imgFrame5 from "figma:asset/2edbb4b2d19fc6361b41e82bfd9990d7b801a39f.png";
import cake from "../../assets/cake.png";
import tea from "../../assets/tea.png";
import apple from "../../assets/apple.png";
import leftBanner from "../../assets/left.png";
import rightBanner from "../../assets/right.png";
import img4 from "figma:asset/60d7327f6669d5ae5d7287d52c1c76a53e78e4ed.png";
import img5 from "figma:asset/f8d2a40c925b11141803917dff2933e19e614965.png";

// --- Components from Desktop5.tsx ---

function Avatar() {
  return (
    <div className="absolute left-[33px] pointer-events-none rounded-[100px] size-[50px] top-[45px]">
      <div className="absolute inset-0 overflow-hidden rounded-[100px]">
        <img alt="" className="absolute left-[-20.8%] max-w-none size-[134.07%] top-[-13.04%]" src={imgFrame5} />
      </div>
      <div aria-hidden="true" className="absolute border-[#676767] border-[3px] border-solid inset-0 rounded-[100px]" />
    </div>
  );
}

function StatusDot() {
  return <div className="absolute bg-[#0dbf22] left-[70px] rounded-[100px] size-[12px] top-[83px]" />;
}

// Left Offering Content (Cake)
function LeftOfferingContent() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <img alt="蛋糕" className="w-[91%] h-auto object-contain" src={cake} />
    </div>
  );
}

// Center Offering Content (Tea)
function CenterOfferingContent() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <img alt="茶" className="w-[78%] h-auto object-contain" src={tea} />
    </div>
  );
}

// Right Offering Content (Apple)
function RightOfferingContent() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <img alt="苹果" className="w-[65%] h-auto object-contain" src={apple} />
    </div>
  );
}

function DoneButton({ onClick }: { onClick: () => void }) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={onClick}
      className="absolute left-[calc(50%+0.5px)] rounded-[32px] top-[842px] translate-x-[-50%] w-[281px] cursor-pointer hover:bg-black/5 transition-colors"
    >
      <div className="content-stretch flex items-center justify-center overflow-clip px-[37px] py-[23px] relative rounded-[inherit] w-full">
        <p className="leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap tracking-[0.32px]">摆好啦</p>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[32px]" />
    </motion.button>
  );
}

interface OfferingStageProps {
  onComplete: () => void;
}

export default function OfferingStage({ onComplete }: OfferingStageProps) {
  const [revealed, setRevealed] = useState({ left: false, center: false, right: false });

  const allRevealed = revealed.left && revealed.center && revealed.right;

  const handleReveal = (key: 'left' | 'center' | 'right') => {
    if (!revealed[key]) {
      setRevealed(prev => ({ ...prev, [key]: true }));
    }
  };

  return (
    <div className="relative w-[1440px] h-[1024px] bg-white overflow-hidden" data-name="Desktop - 5" style={{ backgroundImage: "linear-gradient(rgba(251, 196, 212, 0) 9.668%, rgb(251, 196, 212) 114.31%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div className="absolute h-[598px] left-[372px] top-0 w-[695px]" data-name="云 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[116.18%] left-0 max-w-none top-0 w-full" src={img4} />
        </div>
      </div>
      <motion.div 
        className="absolute left-1/2 size-[464px] top-[71px] translate-x-[-50%]" 
        data-name="老爷像 1"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img5} />
      </motion.div>
      
      {/* 左侧对联 */}
      <div className="absolute left-[240px] top-[175px] pointer-events-none">
        <img alt="左联" className="h-auto w-auto max-h-[500px] object-contain" src={leftBanner} />
      </div>
      
      {/* 右侧对联 */}
      <div className="absolute right-[240px] top-[175px] pointer-events-none">
        <img alt="右联" className="h-auto w-auto max-h-[500px] object-contain" src={rightBanner} />
      </div>
      
      <Avatar />
      <StatusDot />

      {/* Left Offering Circle */}
      <div 
        onClick={() => handleReveal('left')}
        className={`absolute bg-white left-[303px] overflow-clip rounded-[100px] shadow-[0px_4px_32px_0px_white] size-[169px] top-[619px] transition-transform active:scale-95 cursor-pointer ${revealed.left ? '' : 'hover:scale-105'}`}
      >
        <AnimatePresence>
          {revealed.left && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="size-full relative"
            >
              <LeftOfferingContent />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Center Offering Circle */}
      <div 
        onClick={() => handleReveal('center')}
        className={`absolute bg-white left-[635px] rounded-[100px] shadow-[0px_4px_32px_0px_white] size-[169px] top-[619px] transition-transform active:scale-95 cursor-pointer ${revealed.center ? '' : 'hover:scale-105'}`}
      >
        <AnimatePresence>
          {revealed.center && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="size-full relative"
            >
              <CenterOfferingContent />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Right Offering Circle */}
      <div 
        onClick={() => handleReveal('right')}
        className={`absolute bg-white left-[957px] overflow-clip rounded-[100px] shadow-[0px_4px_32px_0px_white] size-[169px] top-[619px] transition-transform active:scale-95 cursor-pointer ${revealed.right ? '' : 'hover:scale-105'}`}
      >
        <AnimatePresence>
          {revealed.right && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="size-full relative"
            >
              <RightOfferingContent />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {!allRevealed && (
        <p className="absolute leading-[normal] left-1/2 -translate-x-1/2 not-italic text-[42px] text-black text-nowrap top-[847px] tracking-[1.26px] animate-pulse">
          "后生仔，虔诚的摆上贡品吧"
        </p>
      )}

      {allRevealed && <DoneButton onClick={onComplete} />}
    </div>
  );
}
