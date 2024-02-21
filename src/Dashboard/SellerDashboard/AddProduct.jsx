import React, { useState } from "react";
import DashHeaders from "../../Components/DashHeaders";
import { BsImage } from "react-icons/bs";

import Select from "react-select";
import { FaPlus } from "react-icons/fa";
import "./darkmood/AddBtn.css";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
const options = [
  { value: "#mobile", label: "#mobile" },
  { value: "#fashion", label: "#fashion" },
  { value: "#electronics", label: "#electronics" },
  { value: "#accessories", label: "#accessories" },
];

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProduct = () => {
  const [cateShow, setCateShow] = useState(false);
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showImage, setShowImage] = useState([]);
  const axiosPublic = useAxiosPublic();
  const [categories, setCategories] = useState([
    {
      id: 1,
      category: "mobile",
    },
    {
      id: 2,
      category: "laptop",
    },
    {
      id: 3,
      category: "fashions",
    },
    {
      id: 4,
      category: "tablet",
    },
  ]);

  const [value, setValue] = useState([]);
  const [tag, setTags] = useState([]);

  const [filterData, setFilterData] = useState(categories);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value) {
      const searchValue = categories.filter((c) =>
        c.category.toLowerCase().includes(search.toLowerCase())
      );
      setFilterData(searchValue);
      console.log(searchValue);
    } else {
      setFilterData(categories);
    }
  };

  const handleImage = (e) => {
    const files = e.target.files;
    const length = files.length;

    if (length > 0) {
      setImages([...images, ...files]);
      let imgURL = [];

      for (let i = 0; i < length; i++) {
        imgURL.push({ url: URL.createObjectURL(files[i]) });
      }
      setShowImage([...showImage, ...imgURL]);
    }
  };

  const removeImage = (i) => {
    const image = images.filter((img, index) => index !== i);
    const filterImgURL = showImage.filter((img, index) => index !== i);
    setImages(image);
    setShowImage(filterImgURL);
  };

  const colors = [
    { value: "red", label: "red" },
    { value: "blue", label: "blue" },
    { value: "black", label: "black" },
    { value: "white", label: "white" },
    { value: "silver", label: "silver" },
  ];

  const handleCol = (e) => {
    setValue(e.map((col) => col.value));
  };

  // add product on database
  const handleAddProduct = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;

    // const product_name = form.productName.value;
    // const brand = form.brand.value;
    // const stock = form.stock.value;
    // const price = form.price.value;
    // const discount = form.discount.value;
    // const color = value;
    // const tags = tag;
    // const description = form.description.value;
    // const short_description = form.short_description.value;
    // const date = new Date().toJSON().slice(0, 10);
    const images = form.photo.files;

    // image uploading process for multiple images
    const url = [];
    for (let i = 0; i < images.length; i++) {
      const formData = new FormData();
      formData.append("image", images[i]);

      try {
        const res = await axiosPublic.post(image_hosting_api, formData, {
          headers: {
            "content-type": "multipart/form-data",
          },
        });
        console.log(res.data);

        if (res.data.success) {
          url.push(res.data.data.display_url);
        }
      } catch (err) {
        toast.error("Failed to upload image");
      }

      setLoading(false);
    }

    console.log(url);

    // try {
    //   const res = await fetch(image_hosting_api, {
    //     method: "POST",
    //     body: formData,
    //   });
    //   const result = await res.json();

    //   if (result.success) {
    //     console.log(result.data);
    //     const products = {
    //       product_name,
    //       brand,
    //       stock,
    //       price,
    //       discount,
    //       color,
    //       tags,
    //       short_description,
    //       description,
    //       images: result.data.data.displayURL,
    //       date,
    //     };

    //     const productRes = await axiosPublic.post("/products", products);
    //     if (productRes.data.insertedId) {
    //       toast.success("Product added successfully");
    //       form.reset();
    //     }
    //   } else {
    //     toast.error("Failed to upload images");
    //   }
    // } catch (err) {
    //   console.error("Error uploading images:", err);
    //   toast.error("Failed to upload images");
    // }
  };

  return (
    <div className="px-2 md:px-4 lg:px-5">
      <DashHeaders />

      <div className="bg-white rounded-md mt-4 mb-6">
        <div className="flex px-4 pt-2 font-semibold text-xl justify-between">
          <h2 className="text-slate-600 font-semibold">Add New Product</h2>
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
                className="px-4 py-2 focus:border-indigo-500 outline-none bg-white border border-slate-700 rounded-md text-slate-700"
                type="text"
                placeholder="Product name"
                name="productName"
                id="productName"
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
                value={search}
                onClick={() => setCateShow(!cateShow)}
                className="px-4 py-2 focus:border-indigo-500 outline-none bg-white border border-slate-700 rounded-md text-slate-700"
                type="text"
                placeholder="Select Category"
                id="category"
              />
              <div
                className={`absolute top-[101%] z-40 bg-slate-200  border mt-2 rounded-md w-full transition-all ${
                  cateShow ? "scale-100" : "scale-0"
                }`}
              >
                <div className="w-full px-4 py-2 fixed">
                  <input
                    onChange={handleSearch}
                    className="px-3 py-1 mt-1 w-full focus:border-indigo-500 outline-none bg-transparent border border-slate-700 rounded-md text-slate-700 overflow-hidden"
                    type="text"
                    placeholder="search"
                  />
                </div>
                <div className="pt-14">
                  <ul className="px-4 cursor-pointer mb-2">
                    {filterData?.map((c, i) => (
                      <li
                        onClick={() => setSearch(c.category)}
                        className="py-2 hover:bg-slate-300 rounded-md p-2 hover:text-slate-700"
                        key={i}
                      >
                        {c.category}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full gap-1">
              <label htmlFor="stock">Availability</label>
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
              <Select
                className="focus:border-indigo-500 outline-none bg-white border border-slate-700 rounded-md text-slate-700 "
                closeMenuOnSelect={false}
                isMulti
                name="color"
                options={colors}
                onChange={handleCol}
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
                onChange={(e) => setTags(e.map((tags) => tags.label))}
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

          {/* upload images */}
          <section>
            <div className="grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 md:gap-4 xs:gap-4 gap-3 w-full text-[#d0d2d6] mb-4">
              {showImage.map((image, i) => (
                <div key={i} className="lg:h-[120px] relative">
                  <label htmlFor={i}>
                    <img
                      className="border h-[120px] w-full shadow-md rounded-md border-slate-500"
                      src={image.url}
                      alt=""
                    />
                  </label>
                  <span
                    onClick={() => removeImage(i)}
                    className="p-2 z-10 cursor-pointer bg-red-600 hover:shadow-lg hover:shadow-red-600/50 text-white absolute top-1 right-1 rounded-full"
                  >
                    <IoCloseSharp />
                  </span>
                </div>
              ))}
            </div>

            <div>
              <label
                className="flex flex-col justify-center items-center h-[130px] md:h-[160px] lg:h-[170px] cursor-pointer border-2 border-dashed border-slate-500 w-[200px] hover:border-indigo-500"
                htmlFor="image"
              >
                <span>
                  <BsImage />
                </span>
                <span className="font-medium">Select Image</span>
              </label>
            </div>
          </section>
          <input
            type="file"
            multiple
            id="image"
            name="photo"
            onChange={handleImage}
            className="hidden"
          />
          {/* <button type="submit" className="px-4 md:px-6 lg:px-7 py-2 my-4 text-white bg-red-500">Add Product</button> */}

          <button type="submit" class="button">
            <span className="button__text">Add Product </span>
            <span className="button__icon">
              <FaPlus className="text-white" />
            </span>
          </button>

          {loading && "loading.."}
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
