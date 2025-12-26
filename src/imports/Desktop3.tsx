import imgFrame5 from "figma:asset/2edbb4b2d19fc6361b41e82bfd9990d7b801a39f.png";
import img1 from "figma:asset/8ce5b717cbc407631b6a64054263490b5b3f85ac.png";
import img2 from "figma:asset/f8d2a40c925b11141803917dff2933e19e614965.png";

function Frame() {
  return <div className="absolute bg-white left-[303px] rounded-[100px] shadow-[0px_4px_32px_0px_white] size-[169px] top-[619px]" />;
}

function Frame1() {
  return <div className="absolute bg-white left-[635px] rounded-[100px] shadow-[0px_4px_32px_0px_white] size-[169px] top-[619px]" />;
}

function Frame2() {
  return <div className="absolute bg-white left-[957px] rounded-[100px] shadow-[0px_4px_32px_0px_white] size-[169px] top-[619px]" />;
}

function Frame3() {
  return (
    <div className="absolute left-[33px] pointer-events-none rounded-[100px] size-[50px] top-[45px]">
      <div className="absolute inset-0 overflow-hidden rounded-[100px]">
        <img alt="" className="absolute left-[-20.8%] max-w-none size-[134.07%] top-[-13.04%]" src={imgFrame5} />
      </div>
      <div aria-hidden="true" className="absolute border-[#676767] border-[3px] border-solid inset-0 rounded-[100px]" />
    </div>
  );
}

function Frame4() {
  return <div className="absolute bg-[#0dbf22] left-[70px] rounded-[100px] size-[12px] top-[83px]" />;
}

export default function Desktop() {
  return (
    <div className="relative size-full" data-name="Desktop - 3" style={{ backgroundImage: "linear-gradient(rgba(251, 196, 212, 0) 9.668%, rgb(251, 196, 212) 114.31%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div className="absolute h-[598px] left-[372px] top-0 w-[695px]" data-name="云 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[116.18%] left-0 max-w-none top-0 w-full" src={img1} />
        </div>
      </div>
      <p className="absolute font-['HYXueJunJ:Regular',sans-serif] leading-[normal] left-[86px] not-italic text-[256px] text-nowrap text-white top-[256px] tracking-[81.92px]">老爷保号</p>
      <div className="absolute left-1/2 size-[464px] top-[71px] translate-x-[-50%]" data-name="老爷像 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img2} />
      </div>
      <Frame />
      <p className="absolute font-['HYXiaoBoMeiYanTiW:Regular',sans-serif] leading-[normal] left-[101px] not-italic text-[36px] text-black text-nowrap top-[52px] tracking-[4.32px]">老爷</p>
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <p className="absolute font-['HYXiaoBoMeiYanTiW:Regular',sans-serif] leading-[normal] left-[calc(50%-218px)] not-italic text-[24px] text-black text-nowrap top-[847px] tracking-[7.68px]">“后生仔，虔诚的摆上贡品吧”</p>
    </div>
  );
}