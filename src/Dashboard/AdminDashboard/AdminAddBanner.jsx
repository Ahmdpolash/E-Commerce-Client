import React, { useState } from "react";
import DashHeaders from "../../Components/DashHeaders";
import { FaImage } from "react-icons/fa";
import { BsImage } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AdminAddBanner = () => {
  const [showImage, setShowImage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  const axiosPublic = useAxiosPublic();

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

  const handleRemove = (i) => {
    const image = images.filter((img, index) => index !== i);
    const filterImgURL = showImage.filter((img, index) => index !== i);
    setImages(image);
    setShowImage(filterImgURL);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const images = form.image.files;
    setLoading(true);

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
        setLoading(false);
      }
      setLoading(false);
    }
    setLoading(false);

    console.log(url);

    const banner = {
      images: url,
    };

    try {
      const bannerRes = await axiosPublic.post("/banners", banner);
      if (bannerRes.data.insertedId) {
        toast.success("Banner Image added successfully");
      }
    } catch (err) {
      toast.error("Something went Wrong !! Banner added failed");
    }
  };

  return (
    <div className="py- px-2 md:px-4 lg:px-5">
      <DashHeaders />

      <div className="mt-4">
        <div className="rounded-md lg:h-[83.8vh] pb-8 bg-white w-full p-4">
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
                  onClick={() => handleRemove(i)}
                  className="p-2 z-10 cursor-pointer bg-red-600 hover:shadow-lg hover:shadow-red-600/50 text-white absolute top-1 right-1 rounded-full"
                >
                  <IoCloseSharp />
                </span>
              </div>
            ))}
          </div>
          <div className="max-w-2xl mt-32 lg:mt-10  mx-auto">
            <div>
              <form onSubmit={handleSubmit}>
                <label
                  className="flex flex-col  justify-center items-center w-full h-[130px] md:h-[160px] lg:h-[240px] cursor-pointer border-2 border-dashed border-slate-500  hover:border-indigo-500"
                  htmlFor="image"
                >
                  <span>
                    <BsImage />
                  </span>
                  <span className="font-medium">Select Image</span>
                </label>

                <input
                  onChange={handleImage}
                  className="hidden"
                  type="file"
                  multiple
                  name="image"
                  id="image"
                />

                {loading ? (
                  <button className="mt-2 text-[18px] w-full py-2 rounded-md bg-[#f65231] text-white">
                    Processing...
                  </button>
                ) : (
                  <button className="mt-2 text-[18px] w-full py-2 rounded-md bg-[#f65231] text-white">
                    Submit
                  </button>
                )}
              </form>
            </div>
          </div>

          <div />
        </div>
      </div>
    </div>
  );
};

export default AdminAddBanner;
