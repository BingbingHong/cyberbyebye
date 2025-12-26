import { motion } from "motion/react";
import { useState, useEffect } from "react";
import imgFrame5 from "figma:asset/2edbb4b2d19fc6361b41e82bfd9990d7b801a39f.png";
import img1 from "figma:asset/60d7327f6669d5ae5d7287d52c1c76a53e78e4ed.png";
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

function LoadingMessage() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
      <p className="leading-[normal] not-italic relative text-[32px] text-black tracking-[9.6px] whitespace-nowrap">
        老爷在接收你的愿望...
      </p>
    </div>
  );
}

function ReplyCard({ reply }: { reply: string }) {
  // 显示 AI 生成的回复
  return (
    <div className="absolute bg-white min-h-[300px] max-h-[600px] left-1/2 rounded-[32px] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[753px] z-20 overflow-hidden">
      <div className="content-stretch flex items-start overflow-clip p-[28px] relative rounded-[inherit] w-full max-h-full">
        <div className="overflow-y-auto w-full max-h-[544px]">
          <p className="leading-relaxed not-italic relative text-[16px] text-black tracking-[0.32px] whitespace-pre-wrap break-words">{reply}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={onClick}
      className="absolute left-[50px] rounded-[24px] bottom-[50px] w-[180px] cursor-pointer hover:bg-black/5 transition-colors z-20"
    >
      <div className="content-stretch flex items-center justify-center overflow-clip px-[24px] py-[16px] relative rounded-[inherit] w-full">
        <p className="leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap tracking-[0.32px]">我还有愿望</p>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[24px]" />
    </motion.button>
  );
}

interface FinalStageProps {
  wish: string;
  onReset: () => void;
}

export default function FinalStage({ wish, onReset }: FinalStageProps) {
  const [reply, setReply] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // 临时使用测试文字，不调用 API（方便调试 UI）
    if (wish && wish.trim()) {
      setIsLoading(true);
      setReply(null);
      
      // 模拟 API 延迟
      setTimeout(() => {
        setReply(`后生仔，你的愿望"${wish}"我已经收到了！这是一个测试回复，用来调试界面。当你准备好使用真实的 AI 回复时，告诉我开启 API 调用即可。老爷会保佑你的，心诚则灵，来年一定心想事成！记得给个五星好评，么么哒！`);
        setIsLoading(false);
      }, 800); // 模拟 0.8 秒的加载时间
    } else {
      setReply('感谢你的诚心，老爷会保佑你的！');
      setIsLoading(false);
    }

    /* 
    // ===== 真实的 API 调用代码（已暂时禁用）=====
    // 如果需要启用，取消下面的注释，并删除上面的测试代码
    
    if (wish && wish.trim()) {
      setIsLoading(true);
      setReply(null);
      
      fetch('/api/generate-reply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ wish }),
      })
        .then(async res => {
          const responseText = await res.text();
          console.log('API Response Status:', res.status);
          console.log('API Response:', responseText);
          
          if (!res.ok) {
            let errorData;
            try {
              errorData = JSON.parse(responseText);
            } catch (e) {
              errorData = { error: responseText };
            }
            console.error('API Error:', errorData);
            throw new Error(`API returned ${res.status}: ${JSON.stringify(errorData)}`);
          }
          
          try {
            return JSON.parse(responseText);
          } catch (e) {
            console.error('Failed to parse JSON:', responseText);
            throw new Error('Invalid JSON response');
          }
        })
        .then(data => {
          console.log('Parsed data:', data);
          if (data.reply) {
            setReply(data.reply);
          } else {
            console.error('No reply in response:', data);
            setReply('老爷已经收到你的愿望了，一定会保佑你的！');
          }
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error generating reply:', error);
          console.error('Error details:', error.message);
          if (error.message.includes('Insufficient Balance')) {
            setReply('老爷暂时无法回复（账户余额不足），但已经听到你的愿望了，心诚则灵，来年一定心想事成！');
          } else {
            setReply('老爷已经听到你的愿望了，心诚则灵，来年一定心想事成！');
          }
          setIsLoading(false);
        });
    } else {
      setReply('感谢你的诚心，老爷会保佑你的！');
      setIsLoading(false);
    }
    */
  }, [wish]);

  return (
    <>
      {/* 背景层 - 使用 fixed 定位填满整个视口 */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ 
          backgroundImage: "linear-gradient(rgba(251, 196, 212, 0) 9.668%, rgb(251, 196, 212) 114.31%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* 云朵背景图片 - 填满整个视口 */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${img1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.8,
          }}
        />
      </div>

      {/* 前景内容 - 保持原始大小和位置 */}
      <div className="relative w-[1440px] h-[1024px] overflow-hidden z-10" data-name="Desktop - 8">
        <div className="absolute h-[882px] left-[207px] top-[20px] w-[1025px] opacity-0 pointer-events-none" data-name="云 1">
          {/* 这个元素隐藏，因为已经在背景层显示了 */}
        </div>
        <motion.div 
          className="absolute left-1/2 size-[684px] top-[125px] translate-x-[-50%]" 
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

        {/* 高斯模糊背景层 */}
        <div 
          className="absolute inset-0 backdrop-blur-md bg-white/60 z-10"
          style={{
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        />

        {/* 前景内容（在模糊层之上） */}
        {isLoading ? (
          <LoadingMessage />
        ) : reply ? (
          <ReplyCard reply={reply} />
        ) : null}
        <BackButton onClick={onReset} />
      </div>
    </>
  );
}
