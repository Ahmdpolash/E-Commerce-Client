import React from "react";
import useCategory from "../Hooks/useCategory";
import { BsDatabaseAdd } from "react-icons/bs";

const CategoryMap = () => {
  const { data } = useCategory();

  return (
    <div>
      <ul className="text-slate-600 py-2 font-medium">
        {data?.map((c, i) => {
          return (
            <li
              key={i}
              className="flex hover:bg-gray-200 transition ease-linear  duration-500 cursor-pointer  justify-start items-center gap-2 px-[24px] py-2"
            >
              <img className="w-[25px]" src={c?.image} alt="" />
              {c?.category}
            </li>
          );
        })}
      </ul>
    </div>
  );a
};

export default CategoryMap;
