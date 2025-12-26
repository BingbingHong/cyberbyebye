import { useState, useEffect } from "react";
import { useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { motion, AnimatePresence } from "motion/react";
import imgFrame5 from "figma:asset/2edbb4b2d19fc6361b41e82bfd9990d7b801a39f.png";
import img1 from "figma:asset/60d7327f6669d5ae5d7287d52c1c76a53e78e4ed.png";
import img2 from "figma:asset/f8d2a40c925b11141803917dff2933e19e614965.png";
import img3 from "figma:asset/aa6dd4bd03ca46c92209d8c3334ad7a81ac30a74.png";
import xiang from "../../assets/xiang.png";

const ItemTypes = {
  INCENSE: 'incense'
};

function Frame() {
  return (
    <div className="absolute left-[33px] pointer-events-none rounded-[100px] size-[50px] top-[45px]">
      <div className="absolute inset-0 overflow-hidden rounded-[100px]">
        <img alt="" className="absolute left-[-20.8%] max-w-none size-[134.07%] top-[-13.04%]" src={imgFrame5} />
      </div>
      <div aria-hidden="true" className="absolute border-[#676767] border-[3px] border-solid inset-0 rounded-[100px]" />
    </div>
  );
}

function Frame1() {
  return <div className="absolute bg-[#0dbf22] left-[70px] rounded-[100px] size-[12px] top-[83px]" />;
}

// Reusable Stick component that can be dragged
function Stick({ id, isVisible, children, className, style }: any) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.INCENSE,
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  if (!isVisible) return null;

  return (
    <div 
      ref={drag} 
      className={`absolute cursor-move ${className}`} 
      style={{ 
        ...style, 
        opacity: isDragging ? 0.5 : 1,
        transform: 'none',
        scale: 1,
      }}
      onDragStart={(e) => {
        e.dataTransfer.effectAllowed = 'move';
        // 防止浏览器默认的拖动放大效果
        if (e.dataTransfer) {
          e.dataTransfer.setDragImage(new Image(), 0, 0);
        }
      }}
    >
      {children}
    </div>
  );
}

// Target area (Burner)
function BurnerArea({ onDrop }: { onDrop: (item: any) => void }) {
  const [, drop] = useDrop(() => ({
    accept: ItemTypes.INCENSE,
    drop: (item) => onDrop(item),
  }));

  return (
    <div 
      ref={drop}
      className="absolute h-[500px] left-[calc(50%-0.5px)] top-[400px] translate-x-[-50%] w-[500px] z-20 bg-transparent"
      data-name="Burner Target"
    />
  );
}

// Visual components for sticks (SVGs)
function Stick1SVG() {
  return (
    <div className="w-full h-full">
      <div className="absolute inset-[0_-4px_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.00001 120">
          <g id="Group 4">
            <line id="Line 2" stroke="var(--stroke-0, #FBC4D4)" strokeWidth="4" x1="2.00001" x2="2" y1="8.74228e-08" y2="120" />
            <line id="Line 3" stroke="var(--stroke-0, #FF6444)" strokeWidth="4" x1="2.00001" x2="2" y1="8.74228e-08" y2="13" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Stick2SVG() {
  return (
    <div className="w-full h-full">
      <div className="absolute inset-[0_-14.81%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 120">
          <g id="Group 5">
            <line id="Line 2" stroke="var(--stroke-0, #FBC4D4)" strokeWidth="4" transform="matrix(-0.219512 0.97561 -1 0 27 0)" x2="123" y1="-2" y2="-2" />
            <line id="Line 3" stroke="var(--stroke-0, #FF6444)" strokeWidth="4" transform="matrix(-0.219512 0.97561 -1 0 27 0)" x2="13.325" y1="-2" y2="-2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Stick3SVG() {
  return (
    <div className="w-full h-full">
      <div className="absolute inset-[0_-14.81%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 120">
          <g id="Group 6">
            <line id="Line 2" stroke="var(--stroke-0, #FBC4D4)" strokeWidth="4" transform="matrix(-0.219512 0.97561 -1 0 27 0)" x2="123" y1="-2" y2="-2" />
            <line id="Line 3" stroke="var(--stroke-0, #FF6444)" strokeWidth="4" transform="matrix(-0.219512 0.97561 -1 0 27 0)" x2="13.325" y1="-2" y2="-2" />
          </g>
        </svg>
      </div>
    </div>
  );
}


// Combined Bundle Component (Visual)
function IncenseBundle() {
  return (
    <div className="relative w-[82px] h-[120px]">
      <img alt="三炷香" className="w-full h-full object-contain" src={xiang} />
    </div>
  );
}

// Placed Sticks (Visuals inside burner)
function PlacedSticks({ isPlaced }: { isPlaced: boolean }) {
  return (
    <div className="absolute left-[calc(50%-1px)] top-[598px] translate-x-[-50%]">
      <AnimatePresence>
        {isPlaced && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative w-[82px] h-[120px]"
          >
            <img alt="三炷香" className="w-full h-full object-contain" src={xiang} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface IncenseStageProps {
  onComplete: () => void;
}

export default function IncenseStage({ onComplete }: IncenseStageProps) {
  const [isPlaced, setIsPlaced] = useState(false);

  const handleDrop = (item: { id: string }) => {
    if (!isPlaced) {
      setIsPlaced(true);
      setTimeout(onComplete, 1000);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="relative w-[1440px] h-[1024px] bg-white overflow-hidden" data-name="Desktop - 6" style={{ backgroundImage: "linear-gradient(rgba(251, 196, 212, 0) 9.668%, rgb(251, 196, 212) 114.31%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
        <div className="absolute h-[598px] left-[372px] top-0 w-[695px]" data-name="云 1">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[116.18%] left-0 max-w-none top-0 w-full" src={img1} />
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
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img2} />
        </motion.div>
        <Frame />
        <Frame1 />
        <p className="absolute leading-[normal] left-[calc(50%-170px)] not-italic text-[16px] text-black text-nowrap top-[876px] tracking-[0.32px]">"上三柱香，默念愿望"</p>
        
        {/* Burner is drop target */}
        <div className="absolute h-[248px] left-[calc(50%-0.5px)] top-[598px] translate-x-[-50%] w-[295px]" data-name="炉子 1">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <img alt="" className="max-w-full max-h-full object-contain" src={img3} />
          </div>
        </div>
        
        {/* Drop Zone overlay on top of burner */}
        <BurnerArea onDrop={handleDrop} />

        {/* Placed Sticks appear here */}
        <PlacedSticks isPlaced={isPlaced} />

        {/* Draggable Bundle */}
        <Stick 
          id="incense-bundle" 
          isVisible={!isPlaced}
          className="left-[358px] top-[677px]"
        >
          <IncenseBundle />
        </Stick>

      </div>
    </DndProvider>
  );
}
