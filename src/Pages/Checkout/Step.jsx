import React from "react";

const Step = ({ step, title, activeStep, handleStepClick }) => {
  const isActive = step === activeStep;
  const handleClick = () => {
    handleStepClick(step);
  };

  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-center">
      <div
        className={`rounded-full py-[7px] tracking-wide font-medium text-[16px] lg:w-28 ${
          isActive
            ? "bg-[#F85606] text-white border-2 border-[#F85606]"
            : "bg-white text-[#F85606] border-2 border-[#F85606]"
        } flex items-center justify-center cursor-pointer transition duration-500 ease-in-out`}
        onClick={handleClick}
      >
        {title}
      </div>
      {step !== 4 && (
        <div className="hidden lg:block h-full w-[150px] right-0 border-t-2 border-[#F85606]"></div>
      )}
    </div>
  );
};

export default Step;
