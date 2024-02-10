import React, { useState } from "react";
import DashHeaders from "../../Components/DashHeaders";
import { BsImage } from "react-icons/bs";

import Select from "react-select";
import { FaPlus } from "react-icons/fa";
import "./darkmood/AddBtn.css";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const [cateShow, setCateShow] = useState(false);
  const options = [
    { value: "#mobile", label: "#mobile" },
    { value: "#fashion", label: "#fashion" },
    { value: "#electronics", label: "#electronics" },
    { value: "#accessories", label: "#accessories" },
  ];
  return (
    <div className="px-2 md:px-4 lg:px-5">
      <DashHeaders />

      <div className="bg-white rounded-md mt-4 mb-6">
        <div className="flex px-4 pt-2 font-semibold text-xl justify-between">
          <h2 className="text-slate-600 font-semibold">Add New Product</h2>
          <Link to='/dashboard/all-products'>
            <button className="cssbuttons-io">
              <span>All Products</span>
            </button>
          </Link>
        </div>
        <form className="px-4 pb-6">
          <div className="flex flex-col  mb-3 md:flex-row gap-4 w-full text-slate-700">
            <div className="flex flex-col w-full gap-1">
              <label htmlFor="name">Product name</label>
              <input
                required
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
                required
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
                required
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
                    required
                    className="px-3 py-1 mt-1 w-full focus:border-indigo-500 outline-none bg-transparent border border-slate-700 rounded-md text-slate-700 overflow-hidden"
                    type="text"
                    placeholder="search"
                  />
                </div>
                <div className="pt-14"></div>
              </div>
            </div>
            <div className="flex flex-col w-full gap-1">
              <label htmlFor="stock">Availability</label>
              <input
                required
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
                required
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
                required
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
                required
                className="px-4 py-2 focus:border-indigo-500 outline-none bg-white border border-slate-700 rounded-md text-slate-700"
                type="text"
                placeholder="Color (optional)"
                name="color"
                id="color"
              />
            </div>
            <div className="flex flex-col w-full gap-1">
              <label className="" htmlFor="discount">
                Tags
              </label>
              <Select
                className="focus:border-indigo-500 outline-none bg-white border border-slate-700 rounded-md text-slate-700 "
                closeMenuOnSelect={false}
                isMulti
                name="tags"
                options={options}
              />
            </div>
          </div>

          <div className="flex flex-col w-full gap-1 text-slate-700 mb-3">
            <label htmlFor="description">Short Description</label>
            <textarea
              required
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
              required
              rows={4}
              className="px-4 py-2 focus:border-indigo-500 outline-none bg-white border border-slate-700 rounded-md text-slate-700"
              placeholder="Description"
              name="description"
              id="description"
            ></textarea>
          </div>

          <div>
            <label
              className="flex flex-col justify-center items-center h-[170px] cursor-pointer border-2 border-dashed border-slate-500 w-[200px] hover:border-indigo-500"
              htmlFor="image"
            >
              <span>
                <BsImage />
              </span>
              <span className="font-medium">Select Image</span>
            </label>
          </div>
          <input
            required
            type="file"
            name="image"
            id="image"
            className="hidden"
          />
          {/* <button type="submit" className="px-4 md:px-6 lg:px-7 py-2 my-4 text-white bg-red-500">Add Product</button> */}

          <button type="button" class="button">
            <span className="button__text">Add Product</span>
            <span className="button__icon">
              <FaPlus className="text-white" />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
