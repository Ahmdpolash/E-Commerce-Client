import React from "react";

const GridSlideSkeleton = ({ isLoading }) => {
  return (
    <div>
      {isLoading && (
        <>
          {[1, 2, 3, 4].map((skeleton, idx) => (
            <div key={idx} className="animate-pulse mb-2 delay-1000">
              <div className="flex gap-3 ">
                <div className="bg-slate-300 w-[120px] h-[80px] rounded-md"></div>
                <div className="space-y-2 w-full">
                  <div className="bg-slate-300 w-full h-3 rounded-md"></div>
                  <div className="bg-slate-300 w-[120px] h-3 rounded-md"></div>
                  <div className="bg-slate-300 w-[80px] h-3 rounded-md"></div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default GridSlideSkeleton;
