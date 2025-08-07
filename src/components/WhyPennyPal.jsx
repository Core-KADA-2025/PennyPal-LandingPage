import { Receipt, MessagesSquare, Calculator } from "lucide-react";
import { useInView } from "react-intersection-observer";

export default function WhyPennyPal() {
  const {ref, inView} = useInView({
    triggerOnce: false,
    threshold: 0.2
  })

  return (
    <div ref={ref} className={`text-center w-full py-8 md:py-12 px-4 mx-auto flex flex-col items-center font-sans ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-500`}>
      <h2 className="text-3xl md:text-6xl font-bold mb-2">Why PennyPal</h2>
      <p className="text-gray-600 mb-6 md:mb-10 text-lg md:text-xl">Are you tired of:</p>
      
      {/* Cards Container - Responsive Grid */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-6 md:gap-10 justify-center">
        
        {/* Card 1 - Forgetting expenses */}
        <div className="w-full md:w-[500px] h-auto md:h-[300px] flex flex-col items-center py-4 md:py-2 px-4 md:px-0">
          <Receipt className="w-16 h-16 md:w-[30%] md:h-[50%] text-green-400 mb-4 md:mb-2" />
          <p className="text-lg md:text-2xl text-center leading-relaxed">Forgetting where your money went?</p>
        </div>
        
        {/* Card 2 - Sharing expenses */}
        <div className="w-full md:w-[500px] h-auto md:h-[300px] flex flex-col items-center py-4 md:py-2 px-4 md:px-0">
          <MessagesSquare className="w-16 h-16 md:w-[30%] md:h-[50%] text-green-400 mb-4 md:mb-2" />
          <p className="text-lg md:text-2xl text-center leading-relaxed">Sharing expenses via chat and losing receipts?</p>
        </div>
         
        {/* Card 3 - Complex budgeting tools */}
        <div className="w-full md:w-[500px] h-auto md:h-[300px] flex flex-col items-center py-4 md:py-2 px-4 md:px-0">
          <Calculator className="w-16 h-16 md:w-[30%] md:h-[50%] text-green-400 mb-4 md:mb-2" />
          <p className="text-lg md:text-2xl text-center leading-relaxed">Budgeting tools that feel like accounting software?</p>
        </div>
        
      </div>                   
    </div>
  );
}