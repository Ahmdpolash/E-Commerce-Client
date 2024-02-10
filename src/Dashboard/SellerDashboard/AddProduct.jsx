import React, { useState } from "react";
import DashHeaders from "../../Components/DashHeaders";
import { BsImage } from "react-icons/bs";

const AddProduct = () => {
  const [cateShow, setCateShow] = useState(false);
  return (
    <div className="px-2 md:px-4 lg:px-5">
      <DashHeaders />

      <div className="bg-white rounded-md mt-3">
        <form className="p-4">
          <div className="flex flex-col  mb-3 md:flex-row gap-4 w-full text-slate-700">
            <div className="flex flex-col w-full gap-1">
              <label htmlFor="name">Product name</label>
              <input
                className="px-4 py-2 focus:border-indigo-500 outline-none bg-white border border-slate-700 rounded-md text-slate-700"
                type="text"
                placeholder="Product name"
                name="name"
                id="name"
              />
            </div>
            <div className="flex flex-col w-full gap-1">
              <label htmlFor="brand">Product brand</label>
              <input
                className="px-4 py-2 focus:border-indigo-500 outline-none bg-white border border-slate-700 rounded-md text-slate-700"
                type="text"
                placeholder="Product brand"
                name="brand"
                id="brand"
              />
            </div>
          </div>


          <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-slate-700">
            <div className="flex flex-col w-full gap-1 relative">
              <label htmlFor="category">Category</label>
              <input
                readOnly
                onClick={() => setCateShow(!cateShow)}
                className="px-4 py-2 focus:border-indigo-500 outline-none bg-white border border-slate-700 rounded-md text-slate-700"
                type="text"
                placeholder="Select Category"
                id="category"
              />
              <div
                className={`absolute top-[101%] bg-slate-200  border mt-2 rounded-md w-full transition-all ${
                  cateShow ? "scale-100" : "scale-0"
                }`}
              >
                <div className="w-full px-4 py-2 fixed">
                  <input
                    className="px-3 py-1 mt-1 w-full focus:border-indigo-500 outline-none bg-transparent border border-slate-700 rounded-md text-slate-700 overflow-hidden"
                    type="text"
                    placeholder="search"
                  />
                </div>
                <div className="pt-14"></div>
              </div>
            </div>
            <div className="flex flex-col w-full gap-1">
              <label htmlFor="stock">Stock</label>
              <input
                className="px-4 py-2 focus:border-indigo-500 outline-none bg-white border border-slate-700 rounded-md text-slate-700"
                type="number"
                min="0"
                placeholder="Product Stock"
                name="stock"
                id="stock"
              />
            </div>
          </div>

          <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-slate-700">
            <div className="flex flex-col w-full gap-1">
              <label htmlFor="price">Price</label>
              <input
                className="px-4 py-2 focus:border-indigo-500 outline-none bg-white border border-slate-700 rounded-md text-slate-700"
                type="number"
                placeholder="Price"
                name="price"
                id="price"
              />
            </div>
            <div className="flex flex-col w-full gap-1">
              <label htmlFor="discount">Discount</label>
              <input
                min="0"
                className="px-4 py-2 focus:border-indigo-500 outline-none bg-white border border-slate-700 rounded-md text-slate-700"
                type="number"
                placeholder="Discount Percentage"
                name="discount"
                id="discount"
              />
            </div>
          </div>


          <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-slate-700">
            <div className="flex flex-col w-full gap-1">
              <label htmlFor="price">Color (optional)</label>
              <input
                className="px-4 py-2 focus:border-indigo-500 outline-none bg-white border border-slate-700 rounded-md text-slate-700"
                type="text"
                placeholder="Color (optional)"
                name="color"
                id="color"
              />
            </div>
            <div className="flex flex-col w-full gap-1">
              <label htmlFor="discount">Discount</label>
              <input
                min="0"
                className="px-4 py-2 focus:border-indigo-500 outline-none bg-white border border-slate-700 rounded-md text-slate-700"
                type="number"
                placeholder="Discount Percentage"
                name="discount"
                id="discount"
              />
            </div>
          </div>




          <div className="flex flex-col w-full gap-1 text-slate-700 mb-3">
            <label htmlFor="description">Short Description</label>
            <textarea
              rows={1}
              className="px-4 py-2 focus:border-indigo-500 outline-none bg-white border border-slate-700 rounded-md text-slate-700"
              placeholder="Short_Description"
              name="short_description"
              id=""
            ></textarea>
          </div>
          <div className="flex flex-col w-full gap-1 text-slate-700 mb-5">
            <label htmlFor="description">Description</label>
            <textarea
              rows={4}
              className="px-4 py-2 focus:border-indigo-500 outline-none bg-white border border-slate-700 rounded-md text-slate-700"
              placeholder="Description"
              name="description"
              id="description"
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

// <div>
// <label
//   className="flex justify-center items-center flex-col h-[238px] cursor-pointer border border-dashed hover:border-indigo-500 w-full border-[#d0d2d6]"
//   htmlFor="image"
// >
//   {/* {imageShow ? (
//     <img className="w-full h-full" src={imageShow} />
//   ) : ( */}
//   <>
//     <span>
//       <BsImage />
//     </span>
//     <span>select Image</span>
//   </>
//   {/* )} */}
// </label>
// </div>
// <input className="hidden" type="file" name="image" id="image" required />
