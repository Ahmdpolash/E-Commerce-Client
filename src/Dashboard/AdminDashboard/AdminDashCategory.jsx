import React, { useEffect, useState } from "react";
import DashHeaders from "../../Components/DashHeaders";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import cat from "../../../public/download.png";
import { MdDeleteOutline } from "react-icons/md";
import { BsImage } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";

const AdminDashCategory = () => {
  const [showImageURl, setShowImageURl] = useState("");

  const handleImage = (e) => {
    const files = e.target.files[0];

    if (files) {
      setShowImageURl(URL.createObjectURL(files));
    } else {
      setShowImageURl("");
    }
  };

  const handleRemove = () => {
    URL.revokeObjectURL(showImageURl);
    setShowImageURl("");
  };

  useEffect(() => {
    // Clean up object URL on unmount
    return () => URL.revokeObjectURL(showImageURl);
  }, [showImageURl]);

  console.log(showImageURl);

  return (
    <div className="px-2 md:px-3 lg:px-4">
      <DashHeaders />

      <div className="mt-5">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
          <div className="col-span-3 rounded-md h-[83.8vh] bg-white w-full p-4">
            <div className="flex items-center justify-between">
              <select
                className="border outline-none border-slate-300 px-3 py-[5px] bg-slate-100 rounded-md"
                name=""
                id=""
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
              </select>

              <input
                className="outline-none border border-slate-300 py-[7px] px-4 rounded-md bg-slate-50"
                type="text"
                placeholder="Search.."
              />
            </div>

            <div className="py-1 mt-4">
              <table className="overflow-x-auto w-full">
                <thead className="w-full text-[15px] font-normal h-8 text-slate-800 rounded-md bg-[#F3F4F6]">
                  <tr>
                    <th>No</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="w-full text-center">
                  {[1, 2, 3, 4].map((p, i) => (
                    <tr
                      className="border-b text-slate-600 border-slate-200 "
                      key={i}
                    >
                      <td className="py-2">{i + 1}</td>
                      <td className="py-2">
                        <img
                          className="w-[60px] mx-auto rounded-md h-[55px]"
                          src={cat}
                          alt=""
                        />
                      </td>
                      <td className="">
                        <span className=" rounded-full font-semibold text-sm px-2">
                          Fashion
                        </span>
                      </td>
                      <td className="py-2">
                        <div className="flex justify-center gap-3 items-center">
                          {" "}
                          <span className="h-[27px] w-[27px] text-white rounded-sm bg-yellow-500">
                            <Link>
                              <FaEdit className="text-[17px] mx-auto mt-1 ml-[6px]" />
                            </Link>
                          </span>
                          <span className="h-[27px] w-[27px] text-white bg-red-500 rounded-sm">
                            <button>
                              <MdDeleteOutline className="text-[20px] mx-auto mt-[3px] ml-[1px]" />
                            </button>
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-span-2 rounded-md h-[83.8vh] bg-white p-4 w-full">
            <h1 className="text-center text-slate-700 font-semibold text-xl">
              Add New Category
            </h1>

            <div className="flex flex-col mt-2 ">
              <label
                className="py-2 font-medium text-slate-600"
                htmlFor="category"
              >
                Category Name
              </label>
              <input
                className="outline-none border rounded-md border-slate-300 bg-slate-50 py-2 px-4"
                type="text"
                placeholder="Category name.."
                id="category"
              />
            </div>

            <div className="my-3 relative">
              {showImageURl && (
                <div className="w-[100px] h-20 my-4 ">
                  <img className="w-full " src={showImageURl} alt="" />
                  <span
                    onClick={handleRemove}
                    className="p-1 z-10 cursor-pointer bg-red-600 hover:shadow-lg hover:shadow-red-600/50 absolute text-white  top-0 left-16 rounded-full"
                  >
                    <IoCloseSharp />
                  </span>
                </div>
              )}
              <label
                className="flex flex-col  justify-center items-center w-full h-[130px] md:h-[160px] lg:h-[240px] cursor-pointer border-2 border-dashed border-slate-500  hover:border-indigo-500"
                htmlFor="image"
              >
                <span>
                  <BsImage />
                </span>
                <span className="font-medium">Select Image</span>
              </label>
            </div>
            <input
              onChange={handleImage}
              className="hidden"
              type="file"
              name="image"
              id="image"
            />

            <button className="bg-red-500 text-white w-full py-2 rounded-md mt-2">
              Add Category
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashCategory;
