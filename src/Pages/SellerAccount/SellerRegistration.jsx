import { FaAngleRight } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import Container from "../../Components/Container/Container";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const SellerRegistration = () => {
  const [loading, setLoading] = useState(false);
  const [divisions, setDivisions] = useState([]);
  const [district, setDistrict] = useState([]);
  const { createUser, update } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //divisions
  useEffect(() => {
    fetch("/json/division.json")
      .then((res) => res.json())
      .then((data) => setDivisions(data));
  }, []);

  //district
  useEffect(() => {
    fetch("/json/district.json")
      .then((res) => res.json())
      .then((data) => setDistrict(data));
  }, []);

  const [filter, setFilter] = useState("");
  console.log(filter);
  const handleDivisions = (e) => {
    setFilter(e.target.value);
  };

  const onSubmit = async (data) => {
    const toastId = toast.loading("Account creating...");
    setLoading(true);
    const imgFile = { image: data.shopLogo[0] };
    console.log(imgFile);

    const res = await axiosPublic.post(image_hosting_api, imgFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data);

    if (res.data.success) {
      setLoading(false);
      // If image upload is successful, proceed with user registration
      const info = {
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        shop_name: data.shopName,
        description: data.description,
        seller_number: data.number,
        role: "seller",
        shop_Logo: res.data.data.display_url,
        district: data.district,
        division: data.division,
      };

      // Perform user registration
      const result = await axiosPublic.post("/users", info);

      if (result.data.insertedId) {
        createUser(data.email, data.password)
          .then(() => {
            update(res.data.data.display_url, name)
              .then((res) => {
                navigate("/login");
                reset();
                toast.success("Registration Success !! Login Now", {
                  id: toastId,
                });
              })
              .catch((err) => {
                toast.error(
                  "Something went wrong !! Please Check your credentials",
                  { id: toastId }
                );
              });
          })
          .catch((err) => {
            toast.error(
              "Something went wrong !! Please Check your credentials"
            );
          });
      }
    }
  };

  return (
    <div className="bg-[#F6F6F5]">
      <Helmet>
        <title>Shop.my || Seller Registration</title>
      </Helmet>
      <div className='bg-[url("https://github.com/SheikhFarid99/multi-vendor-ecommerce/blob/main/client/public/images/banner/order.jpg?raw=true")] h-[140px] md:h-[180px] lg:h-[200px]  mt-1 bg-cover bg-no-repeat relative bg-left'>
        <div className="absolute left-0 top-0 w-full h-full bg-[#2422228a]">
          <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
            <div className="flex flex-col justify-center gap-1 items-center h-full w-full text-white">
              <h2 className="text-3xl font-bold">Shop.my</h2>
              <div className="flex justify-center items-center gap-2 text-2xl w-full">
                <Link to="/">Home</Link>
                <span className="pt-1">
                  <FaAngleRight />
                </span>
                <span>Seller Registration</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="bg-[#F1F5F6] flex justify-center items-center mt-">
          <div className="w-full justify-center items-center p-5 lg:p-10">
            <div className=" relative lg:w-[70%] mx-auto border shadow-md bg-white rounded-md">
              <h2 className="text-center w-full pt-3 text-2xl text-slate-600 font-bold">
                Seller Registration{" "}
              </h2>
              <span className="text-orange-500 text-center mx-auto block font-bold ">
                Shopp.My
              </span>
              <div className="px-8 py-4 ">
                <div className="relative">
                  <form
                    className="text-slate-600"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="flex flex-col md:flex-row lg:flex-row gap-1 md:gap-2 lg:gap-3">
                      <div className="flex flex-col w-full gap-1 mb-2">
                        <label htmlFor="firstName">First Name</label>
                        <input
                          type="text"
                          className="w-full bg-slate-100 px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                          id="firstName"
                          name="firstName"
                          placeholder="ex : John"
                          {...register("firstName", { required: true })}
                        />
                      </div>
                      <div className="flex flex-col w-full gap-1 mb-2">
                        <label htmlFor="firstName">Last Name</label>
                        <input
                          type="text"
                          className="w-full bg-slate-100 px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                          id="lastName"
                          name="lastName"
                          placeholder="ex : Doe"
                          {...register("lastName", { required: true })}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row lg:flex-row gap-1 md:gap-2 lg:gap-3">
                      <div className="flex flex-col w-full gap-1 mb-2">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          className="w-full bg-slate-100 px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                          id="email"
                          name="email"
                          placeholder="ex : example@gmail.com"
                          {...register("email", { required: true })}
                        />
                      </div>
                      <div className="flex relative w-full flex-col gap-1 mb-2">
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          className="w-full bg-slate-100 px-3 py-2 text-sm border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                          id="password"
                          name="password"
                          placeholder="****"
                          {...register("password", {
                            required: true,
                            minLength: 6,
                            maxLength: 10,
                            pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                            message:
                              "Password must be at least 6 characters with one uppercase letter and one lowercase letter.",
                          })}
                        />
                        {errors.password?.type === "minLength" && (
                          <p className="text-red-600">
                            Pass must be 6 character
                          </p>
                        )}
                        {errors.password?.type === "pattern" && (
                          <p className="text-red-600">
                            Minimum six characters, at least one uppercase
                            letter, one lowercase letter.
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row lg:flex-row gap-1 md:gap-2 lg:gap-3">
                      <div className="flex flex-col w-full gap-1 mb-2">
                        <label htmlFor="shopName">Shop Name</label>
                        <input
                          type="text"
                          className="w-full bg-slate-100 px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                          id="shopName"
                          name="shopName"
                          placeholder="ex : Prism Fashion"
                          {...register("shopName", { required: true })}
                        />
                      </div>
                      <div className="flex relative w-full flex-col gap-1 mb-2">
                        <label htmlFor="shopLogo">Shop Logo</label>
                        <input
                          type="file"
                          className="w-full bg-slate-100 px-3 py-2 text-sm border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                          name="shopLogo"
                          {...register("shopLogo", { required: true })}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row lg:flex-row gap-1 md:gap-2 lg:gap-3">
                      <div className="flex flex-col w-full gap-1 mb-2">
                        <label htmlFor="division">Division</label>
                        <select
                          className="w-full bg-slate-100 px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                          name="division"
                          {...register("division", { required: true })}
                          onChange={handleDivisions}
                        >
                          <option selected>Select Your Division</option>
                          {divisions.divisions?.map((d, i) => (
                            <option key={i} value={d.name}>
                              {d?.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="flex relative w-full flex-col gap-1 mb-2">
                        <label htmlFor="district">District</label>

                        <select
                          className="w-full bg-slate-100 px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                          name="District"
                          {...register("district", { required: true })}
                        >
                          <option value="" selected>
                            Select Your District
                          </option>
                          {district.districts?.map((distr) => (
                            <option key={distr.id} value={distr.name}>
                              {distr?.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row lg:flex-row gap-1 md:gap-2 lg:gap-3">
                      <div className="flex flex-col w-full gap-1 mb-2">
                        <label htmlFor="shopName">Shop Name</label>
                        <input
                          type="text"
                          className="w-full bg-slate-100 px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                          id="shopName"
                          name="shopName"
                          placeholder="ex : Prism Fashion"
                          {...register("shopName", { required: true })}
                        />
                      </div>
                      <div className="flex relative w-full flex-col gap-1 mb-2">
                        <label htmlFor="number">Number</label>
                        <input
                          type="number"
                          className="w-full bg-slate-100 px-3 py-2 text-sm border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                          id="number"
                          name="number"
                          placeholder="+8801XXXXXXXXX"
                          {...register("number", { required: true })}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex relative w-full flex-col gap-1 mb-2">
                        <label htmlFor="description">Description</label>
                        <textarea
                          cols="7"
                          rows="7"
                          placeholder="Description"
                          className="w-full bg-slate-100 px-3 py-2 text-sm border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                          id="description"
                          name="description"
                          {...register("description")}
                        />
                      </div>
                    </div>

                    <button className="px-8 w-full py-2 bg-purple-500 shadow-lg hover:shadow-indigo-500/30 text-white rounded-md">
                      Registration
                    </button>

                    {loading && "loading"}
                  </form>
                </div>
                <div className="text-center text-slate-600 pt-1">
                  <p>
                    Already have an Account ?{" "}
                    <Link className="text-blue-500" to="/login">
                      Login
                    </Link>
                  </p>
                </div>
                <div className="absolute  lg:block bottom-0 right-0">
                  <img
                    src="https://i.ibb.co/bmC91P9/Screenshot-62-removebg-preview.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SellerRegistration;
