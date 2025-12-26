import imgFrame5 from "figma:asset/2edbb4b2d19fc6361b41e82bfd9990d7b801a39f.png";
import img1 from "figma:asset/4c8ca258965195e005665de314617809caf91d62.png";
import img2 from "figma:asset/21c7ea2b3aa5d55c39a36e0e225014decc6e008e.png";
import img3 from "figma:asset/a3bf1c6f61dee63fe0533c9ddc1dbef89ff5da77.png";
import img4 from "figma:asset/8ce5b717cbc407631b6a64054263490b5b3f85ac.png";
import img5 from "figma:asset/f8d2a40c925b11141803917dff2933e19e614965.png";

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

function Group() {
  return (
    <div className="absolute contents left-[27px] top-[7px]">
      <div className="absolute flex h-[130.938px] items-center justify-center left-[33.75px] top-[15.56px] w-[123.251px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[31.852deg]">
          <div className="h-[104.236px] opacity-80 relative w-[80.341px]" data-name="红桃粿 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img1} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[108.328px] items-center justify-center left-[27px] top-[7px] w-[85.727px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[3.023deg]">
          <div className="h-[104.236px] relative w-[80.341px]" data-name="红桃粿 2">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents font-['HYZhangZiShanTiW:Regular',sans-serif] leading-[normal] left-[96px] not-italic text-[24px] text-black text-nowrap top-[125px]">
      <p className="absolute left-[96px] top-[126px]">米</p>
      <p className="absolute left-[108px] top-[125px]">果</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[47px] top-[125px]">
      <p className="absolute font-['HYZhangZiShanTiW:Regular',sans-serif] leading-[normal] left-[47px] not-italic text-[24px] text-black text-nowrap top-[126px] tracking-[2.88px]">{`红桃 `}</p>
      <Group1 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[27px] top-[7px]">
      <Group />
      <Group2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-white left-[303px] overflow-clip rounded-[100px] shadow-[0px_4px_32px_0px_white] size-[169px] top-[619px]">
      <Group4 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-0 top-[23px]">
      <div className="absolute h-[70px] left-[39px] top-[23px] w-[92px]" data-name="茶杯 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[363.83%] left-[-45.98%] max-w-none top-[-182.55%] w-[211.9%]" src={img2} />
        </div>
      </div>
      <div className="absolute h-[45px] left-0 top-[53px] w-[60px]" data-name="茶杯 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[363.83%] left-[-45.98%] max-w-none top-[-182.55%] w-[211.9%]" src={img2} />
        </div>
      </div>
      <div className="absolute h-[45px] left-[101px] top-[70px] w-[60px]" data-name="茶杯 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[363.83%] left-[-45.98%] max-w-none top-[-182.55%] w-[211.9%]" src={img2} />
        </div>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-0 top-[23px]">
      <Group3 />
      <p className="absolute font-['HYZhangZiShanTiW:Regular',sans-serif] leading-[normal] left-[68px] not-italic text-[36px] text-black text-nowrap top-[106px] tracking-[4.32px]">茶</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-white left-[635px] rounded-[100px] shadow-[0px_4px_32px_0px_white] size-[169px] top-[619px]">
      <Group5 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[47px] top-[17px]">
      <div className="absolute h-[88px] left-[47px] top-[17px] w-[75px]" data-name="苹果 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[156.28%] left-[-20%] max-w-none top-[-37.8%] w-[141.33%]" src={img3} />
        </div>
      </div>
      <p className="absolute font-['HYZhangZiShanTiW:Regular',sans-serif] leading-[normal] left-[51px] not-italic text-[36px] text-black text-nowrap top-[105px] tracking-[4.32px]">苹果</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-white left-[957px] overflow-clip rounded-[100px] shadow-[0px_4px_32px_0px_white] size-[169px] top-[619px]">
      <Group6 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute left-[calc(50%+0.5px)] rounded-[32px] top-[842px] translate-x-[-50%] w-[281px]">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[37px] py-[23px] relative rounded-[inherit] w-full">
        <p className="font-['HYXiaoBoMeiYanTiW:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-nowrap tracking-[7.68px]">摆好啦</p>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="relative size-full" data-name="Desktop - 5" style={{ backgroundImage: "linear-gradient(rgba(251, 196, 212, 0) 9.668%, rgb(251, 196, 212) 114.31%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div className="absolute h-[598px] left-[372px] top-0 w-[695px]" data-name="云 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[116.18%] left-0 max-w-none top-0 w-full" src={img4} />
        </div>
      </div>
      <p className="absolute font-['HYXueJunJ:Regular',sans-serif] leading-[normal] left-[86px] not-italic text-[256px] text-nowrap text-white top-[256px] tracking-[81.92px]">老爷保号</p>
      <div className="absolute left-1/2 size-[464px] top-[71px] translate-x-[-50%]" data-name="老爷像 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img5} />
      </div>
      <p className="absolute font-['HYXiaoBoMeiYanTiW:Regular',sans-serif] leading-[normal] left-[101px] not-italic text-[36px] text-black text-nowrap top-[52px] tracking-[4.32px]">老爷</p>
      <Frame3 />
      <Frame4 />
      <Frame />
      <Frame1 />
      <Frame2 />
      <Frame5 />
    </div>
  );
}