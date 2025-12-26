function Group() {
  return (
    <div className="absolute h-[120px] left-[41px] top-0 w-0">
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

function Group1() {
  return (
    <div className="h-[120px] relative w-[27px]">
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

function Group2() {
  return (
    <div className="absolute h-[120px] left-[55px] top-0 w-[27px]">
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

export default function Group3() {
  return (
    <div className="relative size-full">
      <Group />
      <div className="absolute flex h-[120px] items-center justify-center left-0 top-0 w-[27px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Group1 />
        </div>
      </div>
      <Group2 />
    </div>
  );
}