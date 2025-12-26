import { useState } from "react";
import imgFrame5 from "figma:asset/2edbb4b2d19fc6361b41e82bfd9990d7b801a39f.png";

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

function WishInput({ value, onChange }: { value: string; onChange: (val: string) => void }) {
  return (
    <div className="absolute bg-white h-[204px] left-[calc(50%+0.5px)] rounded-[32px] top-[calc(50%-51px)] translate-x-[-50%] translate-y-[-50%] w-[753px]">
      <div className="content-stretch flex items-start overflow-clip p-[28px] relative rounded-[inherit] size-full">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="我希望来年可以赚大钱！！！"
          className="w-full h-full text-[16px] text-black tracking-[0.32px] resize-none border-none outline-none bg-transparent placeholder:text-gray-400"
        />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}

function SendButton({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="absolute left-[calc(50%-5.5px)] rounded-[32px] top-[658px] translate-x-[-50%] w-[269px] hover:bg-black/5 transition-colors cursor-pointer"
    >
      <div className="content-stretch flex items-center justify-center overflow-clip px-[37px] py-[23px] relative rounded-[inherit] w-full">
        <p className="leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap tracking-[0.32px]">发送给老爷</p>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[32px]" />
    </button>
  );
}

interface WishingStageProps {
  onSend: (wish: string) => void;
}

export default function WishingStage({ onSend }: WishingStageProps) {
  const [wish, setWish] = useState("");

  return (
    <div className="relative w-[1440px] h-[1024px] bg-white overflow-hidden" data-name="Desktop - 4" style={{ backgroundImage: "linear-gradient(rgba(251, 196, 212, 0) 9.668%, rgb(251, 196, 212) 114.31%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Avatar />
      <StatusDot />
      
      <p className="absolute leading-[normal] left-1/2 -translate-x-1/2 not-italic text-[28px] text-black text-nowrap top-[274px] tracking-[0.84px]">说说你的愿望吧</p>
      
      <WishInput value={wish} onChange={setWish} />
      <SendButton onClick={() => onSend(wish)} />
    </div>
  );
}
