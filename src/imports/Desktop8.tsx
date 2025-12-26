import imgFrame5 from "figma:asset/2edbb4b2d19fc6361b41e82bfd9990d7b801a39f.png";
import img1 from "figma:asset/8ce5b717cbc407631b6a64054263490b5b3f85ac.png";
import img2 from "figma:asset/f8d2a40c925b11141803917dff2933e19e614965.png";

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

function Frame2() {
  return (
    <div className="absolute bg-white h-[204px] left-[calc(50%+0.5px)] rounded-[32px] top-[calc(50%+297px)] translate-x-[-50%] translate-y-[-50%] w-[753px]">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[28px] relative rounded-[inherit] size-full">
        <p className="font-['HYXiaoBoMeiYanTiW:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-nowrap tracking-[7.68px]">“我已经记下了，来年一定愿望成功”</p>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="relative size-full" data-name="Desktop - 8" style={{ backgroundImage: "linear-gradient(rgba(251, 196, 212, 0) 9.668%, rgb(251, 196, 212) 114.31%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div className="absolute h-[882px] left-[207px] top-[20px] w-[1025px]" data-name="云 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[116.18%] left-0 max-w-none top-0 w-full" src={img1} />
        </div>
      </div>
      <p className="absolute font-['HYXueJunJ:Regular',sans-serif] leading-[normal] left-[86px] not-italic text-[256px] text-nowrap text-white top-[256px] tracking-[81.92px]">老爷保号</p>
      <div className="absolute left-1/2 size-[684px] top-[125px] translate-x-[-50%]" data-name="老爷像 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img2} />
      </div>
      <p className="absolute font-['HYXiaoBoMeiYanTiW:Regular',sans-serif] leading-[normal] left-[101px] not-italic text-[36px] text-black text-nowrap top-[52px] tracking-[4.32px]">老爷</p>
      <Frame />
      <Frame1 />
      <Frame2 />
    </div>
  );
}