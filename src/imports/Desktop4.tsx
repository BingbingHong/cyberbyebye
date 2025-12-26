import imgFrame5 from "figma:asset/2edbb4b2d19fc6361b41e82bfd9990d7b801a39f.png";

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

function Frame3() {
  return (
    <div className="absolute bg-white h-[204px] left-[calc(50%+0.5px)] rounded-[32px] top-[calc(50%-51px)] translate-x-[-50%] translate-y-[-50%] w-[753px]">
      <div className="content-stretch flex items-start overflow-clip p-[28px] relative rounded-[inherit] size-full">
        <p className="font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap tracking-[0.32px]">我希望来年可以赚大钱！！！</p>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute left-[calc(50%-5.5px)] rounded-[32px] top-[658px] translate-x-[-50%] w-[269px]">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[37px] py-[23px] relative rounded-[inherit] w-full">
        <p className="font-['HYXiaoBoMeiYanTiW:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-nowrap tracking-[7.68px]">发送给老爷</p>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="relative size-full" data-name="Desktop - 4" style={{ backgroundImage: "linear-gradient(rgba(251, 196, 212, 0) 9.668%, rgb(251, 196, 212) 114.31%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <p className="absolute font-['HYZhangZiShanTiW:Regular',sans-serif] leading-[normal] left-[91px] not-italic text-[36px] text-black text-nowrap top-[54px] tracking-[4.32px]">老爷</p>
      <Frame />
      <Frame1 />
      <Frame3 />
      <p className="absolute font-['HYXiaoBoMeiYanTiW:Regular',sans-serif] leading-[normal] left-[calc(50%-161px)] not-italic text-[36px] text-black text-nowrap top-[274px] tracking-[11.52px]">说说你的愿望吧</p>
      <Frame2 />
    </div>
  );
}