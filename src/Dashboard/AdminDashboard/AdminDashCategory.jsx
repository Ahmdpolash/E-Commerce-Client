import React, { useEffect, useState } from "react";
import DashHeaders from "../../Components/DashHeaders";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import cat from "../../../public/download.png";
import { MdDeleteOutline } from "react-icons/md";
import { BsImage } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import useCategories from "../../Hooks/useCategories";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import useCategory from "../../Hooks/useCategory";

//img hosting api
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AdminDashCategory = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [showImageURl, setShowImageURl] = useState("");
  const [loading, setLoading] = useState(false);
  const axiosPublic = useAxiosPublic();
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

  // post category on database
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const category = form.category.value;
    const image = form.image.files[0];

    try {
      const imageData = { image: image };
      const res = await axiosPublic.post(image_hosting_api, imageData, {
        headers: { "content-type": "multipart/form-data" },
      });

      console.log(res.data);

      if (res.data.success) {
        setLoading(false);

        const info = {
          category: category,
          image: res.data.data.display_url,
        };

        axiosPublic.post("/categories", info).then(() => {
          toast.success("Category added successfully");
          form.reset();
        });
      }
    } catch (err) {
      toast.error("Something went wrong");
      console.log(err.message);
    }
  };

  // get data from hook

  // const { data, refetch } = useCategories();
  const { data, refetch } = useCategory();

  //delete categories
  const handleDelete = (id) => {
    axiosPublic.delete(`/categories/delete/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        toast.success("Category deleted successfully");
        refetch();
      } else {
        toast.error("Failed to delete category ");
      }
    });
  };

  //update categories

  const handleEdit = (e) => {
    e.preventDefault();
    const form = e.target;
    const category = form.category.value;
    const data = { category };

    axiosPublic
      .put(`/categories/update/${singleCategory._id}`, data)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          toast.success("Category Updated successfully");
        }
      });
    console.log(data);
  };

  const [singleCategory, setSingleCategory] = useState([]);
  const handleUpdate = async (id) => {
    onOpen();
    const result = await axiosPublic.get(`/category/single/${id}`);
    setSingleCategory(result.data);
    console.log(result.data);
  };

  //modal

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
                  {data?.slice(0, 7)?.map((category, i) => (
                    <tr
                      className="border-b text-slate-600 border-slate-200 "
                      key={category._id}
                    >
                      <td className="py-2">{i + 1}</td>
                      <td className="py-2">
                        <img
                          className="w-[45px] hover:duration-700 hover:border border-orange-500 mx-auto rounded-md h-[50px]"
                          src={category?.image}
                          alt=""
                        />
                      </td>
                      <td className="">
                        <span className=" rounded-full font-semibold text-sm px-2">
                          {category.category}
                        </span>
                      </td>
                      <td className="py-2">
                        <div className="flex justify-center gap-3 items-center">
                          {" "}
                          <span
                            onClick={() => handleUpdate(category._id)}
                            className="h-[27px] w-[27px] text-white rounded-sm bg-yellow-500"
                          >
                            <button>
                              <FaEdit className="text-[17px] mx-auto mt-1 ml-[6px]" />
                            </button>
                          </span>
                          <span
                            onClick={() => handleDelete(category._id)}
                            className="h-[27px] w-[27px] text-white bg-red-500 rounded-sm"
                          >
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
          <div className="col-span-2  rounded-md h-[83.8vh] bg-white p-4 w-full">
            <h1 className="text-center text-slate-700 font-semibold text-xl">
              Add New Category
            </h1>

            <form onSubmit={handleSubmit}>
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
                  name="category"
                  placeholder="Category name.."
                  id="category"
                />
              </div>

              <div className="my-3 relative">
                {showImageURl && (
                  <div className="w-[100px] h-20 my-4 ">
                    <img className="w-full h-full" src={showImageURl} alt="" />
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

              {loading ? (
                <button
                  type="submit"
                  className="bg-red-500 text-white w-full py-2 rounded-md mt-2"
                >
                  Uploading...
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-red-500 text-white w-full py-2 rounded-md mt-2"
                >
                  Add Category
                </button>
              )}
            </form>
          </div>
        </div>
      </div>

      {/*================= modal======================= */}

      <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Update Category
              </ModalHeader>
              <ModalBody>
                <form onSubmit={handleEdit}>
                  <div className="flex flex-col mb-">
                    <label
                      className="py-2 font-medium text-slate-600"
                      htmlFor="category"
                    >
                      Category Name
                    </label>
                    <input
                      className="outline-none border rounded-md border-slate-300 bg-slate-50 py-2  px-4"
                      type="text"
                      defaultValue={singleCategory.category}
                      name="category"
                      placeholder="Category name.."
                      id="category"
                    />
                  </div>

                  <div className="flex flex-col mb-2">
                    <label
                      className="py-2 font-medium text-slate-600"
                      htmlFor="image"
                    >
                      Image
                    </label>
                    <input
                      className="outline-none hover:cursor-not-allowed border rounded-md border-slate-300 bg-slate-50 py-2  px-4"
                      type="file"
                      name="image"
                      id="image"
                      disabled
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-red-500 text-white w-full py-2 rounded-md mt-2"
                  >
                    Update
                  </button>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="bg-slate-200 font-semibold"
                  color="danger"
                  variant="light"
                  onPress={onClose}
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      {/*================= modal======================= */}
    </div>
  );
};

export default AdminDashCategory;
