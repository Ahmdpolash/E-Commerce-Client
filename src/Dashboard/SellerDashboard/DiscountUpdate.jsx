import React, { useState } from "react";
import DashHeaders from "../../Components/DashHeaders";
import Select from "react-select";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import useCategory from "../../Hooks/useCategory";

const options = [
  { value: "#mobile", label: "#mobile" },
  { value: "#fashion", label: "#fashion" },
  { value: "#electronics", label: "#electronics" },
  { value: "#TShirt", label: "#TShirt" },
  { value: "#accessories", label: "#accessories" },
  { value: "#laptop", label: "#laptop" },
  { value: "#smart_watch", label: "#smart_watch" },
];

const DiscountUpdate = () => {
  const [loading, setLoading] = useState(false);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const [categories, setCategories] = useState();
  const { data } = useCategory();

  const [value, setValue] = useState([]);
  const [tag, setTags] = useState([]);

  const colors = [
    { value: "red", label: "red" },
    { value: "blue", label: "blue" },
    { value: "black", label: "black" },
    { value: "gray", label: "gray" },
    { value: "white", label: "white" },
    { value: "yellow", label: "yellow" },
    { value: "purple", label: "purple" },
    { value: "silver", label: "silver" },
  ];

  const handleCol = (e) => {
    setValue(e.map((col) => col.value));
  };

  const product = useLoaderData();
  console.log("ppp", product);

  // add product on database
  const handleAddProduct = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;

    const discount = form.discount.value;

    try {
      const products = {
        discount,
      };

      const productRes = await axiosPublic.patch(
        `/product/discount/update/${product._id}`,
        products
      );
      if (productRes.data.modifiedCount > 0) {
        toast.success("Discount Added successfully");
        form.reset();
        navigate("/dashboard/all-products");
      }
    } catch (err) {
      toast.error("Something went Wrong !! Discount Update failed");
    }

    setLoading(false); // Reset loading state
  };

  return (
    <div>
      <div className="px-2 md:px-4 lg:px-5">
        <DashHeaders />

        <div className="bg-white rounded-md mt-4 mb-6">
          <div className="flex px-4 pt-2 font-semibold text-xl justify-between">
            <h2 className="text-slate-600 font-semibold">
              Add Discount {product?.product_name?.slice(0, 30)}..
            </h2>
            <Link to="/dashboard/all-products">
              <button className="cssbuttons-io">
                <span>All Products</span>
              </button>
            </Link>
          </div>
          <form onSubmit={handleAddProduct} className="px-4 pb-6">
            <div className="flex flex-col  mb-3 md:flex-row gap-4 w-full text-slate-700">
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="productName">Product name</label>
                <input
                  className="px-4 py-2 pointer-events-none cursor-not-allowed focus:border-indigo-500 outline-none bg-white border border-slate-700 rounded-md text-slate-700"
                  type="text"
                  placeholder="Product name"
                  name="productName"
                  id="productName"
                  defaultValue={product?.product_name}
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="brand">Product brand</label>
                <input
                  className="px-4 pointer-events-none cursor-not-allowed py-2 focus:border-indigo-500 outline-none bg-white border border-slate-700 rounded-md text-slate-700"
                  type="text"
                  placeholder="Product brand"
                  name="brand"
                  disabled
                  defaultValue={product?.brand}
                  id="brand"
                />
              </div>
            </div>

            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-slate-700">
              <div className="flex flex-col w-full gap-1 relative">
                <label htmlFor="category">Category</label>
                <select
                  onChange={(e) => setCategories(e.target.value)}
                  disabled
                  className="px-4 py-2 pointer-events-none cursor-not-allowed focus:border-indigo-500 outline-none bg-white border border-slate-700 rounded-md text-slate-700"
                >
                  <option defaultValue={product.category}>
                    {product?.category}
                  </option>
                </select>
              </div>
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="stock">Availability</label>
                <input
                  className="px-4 pointer-events-none cursor-not-allowed py-2 focus:border-indigo-500 outline-none bg-white border border-slate-700 rounded-md text-slate-700"
                  type="number"
                  min="0"
                  disabled
                  placeholder="Product Stock"
                  name="stock"
                  defaultValue={product?.stock}
                  id="stock"
                />
              </div>
            </div>

            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-slate-700">
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="price">Price</label>
                <input
                  className="px-4 pointer-events-none cursor-not-allowed py-2 focus:border-indigo-500 outline-none bg-white border border-slate-700 rounded-md text-slate-700"
                  type="number"
                  placeholder="Price"
                  name="price"
                  disabled
                  defaultValue={product.price}
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
                  defaultValue={product.discount}
                  id="discount"
                />
              </div>
            </div>

            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-slate-700">
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="price">Color (optional)</label>
                <Select
                  className="focus:border-indigo-500 pointer-events-none cursor-not-allowed outline-none bg-white border border-slate-700 rounded-md text-slate-700 "
                  closeMenuOnSelect={false}
                  isMulti
                  name="color"
                  disabled
                  defaultValue={product?.color?.map((color) => ({
                    value: color,
                    label: color,
                  }))}
                  options={colors}
                  onChange={handleCol}
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <label className="" htmlFor="discount">
                  Tags
                </label>
                <Select
                  className="focus:border-indigo-500 pointer-events-none cursor-not-allowed outline-none bg-white border border-slate-700 rounded-md text-slate-700 "
                  closeMenuOnSelect={false}
                  isMulti
                  name="tags"
                  options={options}
                  disabled
                  defaultValue={product?.tags?.map((tag) => ({
                    value: tag,
                    label: tag,
                  }))}
                  onChange={(e) => setTags(e.map((tags) => tags.label))}
                />
              </div>
            </div>

            <div className="flex flex-col w-full gap-1 text-slate-700 mb-3">
              <label htmlFor="description">Short Description</label>
              <textarea
                rows={1}
                className="px-4 py-2 focus:border-indigo-500 pointer-events-none cursor-not-allowed outline-none bg-white border border-slate-700 rounded-md text-slate-700"
                placeholder="Short_Description"
                name="short_description"
                disabled
                defaultValue={product.short_description}
                id=""
              ></textarea>
            </div>
            <div className="flex flex-col w-full gap-1 text-slate-700 mb-5">
              <label htmlFor="description">Description</label>
              <textarea
                rows={4}
                className="px-4 py-2 focus:border-indigo-500 pointer-events-none cursor-not-allowed outline-none bg-white border border-slate-700 rounded-md text-slate-700"
                placeholder="Description"
                defaultValue={product.description}
                name="description"
                disabled
                id="description"
              ></textarea>
            </div>

            <div className="flex items-center gap-8">
              <div>
                {loading ? (
                  <button
                    type="button"
                    className="flex items-center rounded-lg bg-blue-700 px-4 py-2 text-white"
                    disabled
                  >
                    <svg
                      className="mr-3 h-5 w-5 animate-spin text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span className="font-medium"> Processing... </span>
                  </button>
                ) : (
                  <button
                    className="py-2 px-5 bg-blue-700 text-white rounded-md"
                    type="submit"
                  >
                    Add Discount
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DiscountUpdate;
