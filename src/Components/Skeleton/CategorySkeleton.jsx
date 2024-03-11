import React from "react";

const CategorySkeleton = ({ isLoading }) => {
  return (
    <div>
      {isLoading && (
        <div className="grid grid-cols-3 gap-4  lg:mt-10 md:grid-cols-4 lg:grid-cols-7">
          {[1, 2, 3, 4, 5, 6, 7].map((skeleton, idx) => (
            <div key={idx} className="animate-pulse  animation: pulse 2s infinite  mb-2 delay-1000">
              <div className="p-4 bg-slate-200 rounded-md h-[120px] w-full">
                <div className="bg-slate-100 w-full rounded-md h-full"></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategorySkeleton;
