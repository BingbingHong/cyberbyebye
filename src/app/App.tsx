import { useState } from "react";
import OfferingStage from "./components/OfferingStage";
import WishingStage from "./components/WishingStage";
import IncenseStage from "./components/IncenseStage";
import BurningStage from "./components/BurningStage";
import FinalStage from "./components/FinalStage";
import { FitScreen } from "./components/ui/FitScreen";
import { BackgroundLayer } from "./components/BackgroundLayer";
import { Toaster, toast } from "sonner";
import cloudImg1 from "figma:asset/60d7327f6669d5ae5d7287d52c1c76a53e78e4ed.png";

type Stage = 'offering' | 'wishing' | 'incense' | 'burning' | 'final';

export default function App() {
  const [stage, setStage] = useState<Stage>('offering');
  const [wish, setWish] = useState<string>('');

  const handleOfferingComplete = () => {
    setStage('wishing');
  };

  const handleWishSend = (wishText: string) => {
    if (!wishText.trim()) {
      toast.error("许个愿吧！");
      return;
    }
    
    setWish(wishText);
    toast.success("老爷听到你的愿望了！", {
      position: "bottom-center",
    });
    
    setTimeout(() => {
        setStage('incense');
    }, 1000);
  };

  const handleIncenseComplete = () => {
    setStage('burning');
  };

  const handleBurningComplete = () => {
    setStage('final');
  };

  const handleReset = () => {
    setStage('offering');
    setWish('');
  };

  // 第一页（offering）显示云朵背景
  const shouldShowCloud = stage === 'offering';

  return (
    <div className="w-full h-screen overflow-hidden">
      {/* 响应式背景层 - 填充整个窗口，显示粉白渐变 */}
      <BackgroundLayer cloudImage={shouldShowCloud ? cloudImg1 : undefined} />
      
      <FitScreen width={1440} height={1024}>
        {stage === 'offering' && <OfferingStage onComplete={handleOfferingComplete} />}
        {stage === 'wishing' && <WishingStage onSend={handleWishSend} />}
        {stage === 'incense' && <IncenseStage onComplete={handleIncenseComplete} />}
        {stage === 'burning' && <BurningStage onComplete={handleBurningComplete} />}
        {stage === 'final' && <FinalStage wish={wish} onReset={handleReset} />}
      </FitScreen>
      <Toaster position="bottom-center" />
    </div>
  );
}
