import React, { useState } from "react";
import DashHeaders from "../../Components/DashHeaders";
import { BsImage } from "react-icons/bs";
import loader from "../../../public/loader/scan.json";
import Select from "react-select";
import { FaPlus } from "react-icons/fa";
import "./darkmood/AddBtn.css";
import { Link, useNavigate } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import Lottie from "lottie-react";
import useCategory from "../../Hooks/useCategory";
import useAuth from "../../Hooks/useAuth";
import useSeller from "../../Hooks/useSeller";
const options = [
  { value: "#mobile", label: "#mobile" },
  { value: "#fashion", label: "#fashion" },
  { value: "#electronics", label: "#electronics" },
  { value: "#TShirt", label: "#TShirt" },
  { value: "#accessories", label: "#accessories" },
  { value: "#laptop", label: "#laptop" },
  { value: "#smart_watch", label: "#smart_watch" },
];

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProduct = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showImage, setShowImage] = useState([]);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const [categories, setCategories] = useState();
  const { data } = useCategory();

  const [value, setValue] = useState([]);
  const [tag, setTags] = useState([]);

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
    { value: "gray", label: "gray" },
    { value: "white", label: "white" },
    { value: "yellow", label: "yellow" },
    { value: "purple", label: "purple" },
    { value: "silver", label: "silver" },
  ];

  const handleCol = (e) => {
    setValue(e.map((col) => col.value));
  };

  //seller finding
  const { user } = useAuth();
  const { data: sellers } = useSeller();

  const findingSeller = sellers?.find((seller) => seller.email === user?.email);

  // add product on database
  const handleAddProduct = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;

    const product_name = form.productName.value;
    const brand = form.brand.value;
    const category = categories;
    const stock = form.stock.value;
    const price = form.price.value;
    const discount = form.discount.value;
    const color = value;
    const tags = tag;
    const description = form.description.value;
    const short_description = form.short_description.value;
    const date = new Date().toJSON().slice(0, 10);
    const review = 0;
    const images = form.photo.files;

    // image uploading process for multiple images
    const uploadPromises = Array.from(images).map(async (image) => {
      const formData = new FormData();
      formData.append("image", image);

      try {
        const res = await axiosPublic.post(image_hosting_api, formData, {
          headers: {
            "content-type": "multipart/form-data",
          },
        });

        if (res.data.success) {
          return res.data.data.display_url;
        } else {
          throw new Error("Failed to upload image");
        }
      } catch (err) {
        toast.error("Failed to upload image");
        return null; // Return null for failed uploads
      }
    });

    try {
      const urls = await Promise.all(uploadPromises);
      console.log(urls);

      // Check if any upload failed
      if (urls.includes(null)) {
        toast.error("Some images failed to upload. Please try again.");
        setLoading(false); // Reset loading state
        return; // Don't proceed with database insertion
      }

      const products = {
        product_name,
        brand,
        category,
        stock,
        price,
        discount,
        color,
        review,
        tags,
        short_description,
        description,
        images: urls.filter((url) => url), // filter out any null URLs
        date,
        email: findingSeller.email,
        shopName: findingSeller.shop_name,
        shopLogo: findingSeller.shop_Logo,
      };

      const productRes = await axiosPublic.post("/products", products);
      if (productRes.data.insertedId) {
        toast.success("Product added successfully");
        form.reset();
        navigate("/dashboard/all-products");
      }
    } catch (err) {
      toast.error("Something went Wrong !! Product added failed");
    }

    setLoading(false); // Reset loading state
  };

  return (
    <div>
      {/* {loading && (
        <div className="absolute top-0 left-0 z-50 w-full h-[100vh] flex justify-center items-center bg-black bg-opacity-75">
          <div className="text-white text-2xl">Loading...</div>
        </div>
      )} */}
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
                <select
                  onChange={(e) => setCategories(e.target.value)}
                  className="px-4 py-2 focus:border-indigo-500 outline-none bg-white border border-slate-700 rounded-md text-slate-700"
                >
                  <option>Select Category</option>
                  {data?.map((c, i) => (
                    <option value={c.category} key={i}>
                      {c?.category}
                    </option>
                  ))}
                </select>
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
                  className="flex flex-col justify-center items-center h-[130px] md:h-[160px] lg:h-[170px] cursor-pointer border-2 border-dashed border-slate-500 w-full hover:border-indigo-500"
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

            <div className="flex items-center mt-5 gap-8">
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
                    Add Product
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

export default AddProduct;
