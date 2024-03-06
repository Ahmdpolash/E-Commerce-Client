import React, { useEffect } from "react";
import DashHeaders from "../../Components/DashHeaders";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../Responsive/Responsive.css";
import useSellerProduct from "../../Hooks/useSellerProduct";

const SellerDashAllProduct = () => {
  const { data } = useSellerProduct();
  console.log(data);
  useEffect(() => {
    // Fetch data when component mounts
  }, []);

  return (
    <div className="px-2 md:px-4 lg:px-5">
      <div>
        <DashHeaders />
      </div>

      {/* table */}
      <section className="">
        <div className="bg-white  h-[83vh] mt-3 allProducts  w-[407px] px-3 lg:px-0 md:w-[733px] lg:w-full rounded-md">
          {data?.length === 0 ? (
            <div className="flex items-center justify-center h-[calc(100%-10px)]">
              <span className="font-semibold text-2xl">No Product Upload Yet..! <Link to='/dashboard/add-products' className="text-blue-600 font-bold underline">Upload Now</Link> </span>
            </div>
          ) : (
            <>
              <div className="flex justify-between p-3">
                <select
                  className="border border-slate-500 px-4 outline-none rounded-md"
                  name=""
                  id=""
                >
                  <option value="5">5</option>
                  <option value="15">15</option>
                  <option value="25">25</option>
                </select>

                <input
                  type="text"
                  placeholder="Search.."
                  className="border border-slate-500 px-3 outline-none py-2 rounded-md"
                />
              </div>
              <div className="px-3 overflow-x-auto w-full">
                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left  text-gray-500">
                    <thead className="text-sm text-slate-700 uppercase border-b border-slate-700">
                      <tr>
                        <th scope="col" className="py-3 px-4">
                          No
                        </th>
                        <th scope="col" className="py-3 px-4">
                          Image
                        </th>
                        <th scope="col" className="py-3 px-8">
                          Name
                        </th>
                        <th scope="col" className="py-3 px-4">
                          Category
                        </th>
                        <th scope="col" className="py-3 px-4">
                          Brand
                        </th>
                        <th scope="col" className="py-3 px-4">
                          Price
                        </th>
                        <th scope="col" className="py-3 px-4">
                          Discount
                        </th>
                        <th scope="col" className="py-3 px-4">
                          Stock
                        </th>
                        <th scope="col" className="py-3 px-10">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data?.map((item, i) => (
                        <tr className=" border-b" key={i}>
                          <td
                            scope="row"
                            className="py-1 px-4 font-medium whitespace-nowrap"
                          >
                            {i + 1}
                          </td>
                          <td
                            scope="row"
                            className="py-1 px-4 font-medium whitespace-nowrap"
                          >
                            <img
                              className="w-[45px] h-[45px] rounded-md"
                              src={item?.images[0]}
                              alt={item?.product_name.slice(0, 30)}
                            />
                          </td>
                          <td
                            scope="row"
                            className="py-1 px-4 font-medium whitespace-nowrap"
                          >
                            <span>{item?.product_name.slice(0, 30)}...</span>
                          </td>
                          <td
                            scope="row"
                            className="py-1 px-6 font-medium whitespace-nowrap"
                          >
                            <span>{item?.category}</span>
                          </td>
                          <td
                            scope="row"
                            className="py-1 px-6 font-medium whitespace-nowrap"
                          >
                            <span>{item?.brand ? item?.brand : 'No Brand'}</span>
                          </td>
                          <td
                            scope="row"
                            className="py-1 px-4 font-medium whitespace-nowrap"
                          >
                            <span>${item?.price}</span>
                          </td>
                          <td
                            scope="row"
                            className="py-1 px-8 font-medium whitespace-nowrap"
                          >
                            {/* {d.discount === 0 ? (
                    <span>no discount</span>
                  ) : (
                    <span>${d.discount}%</span>
                  )} */}
                            <span>
                              %{item?.discount ? item?.discount : "0"}
                            </span>
                          </td>
                          <td
                            scope="row"
                            className="py-1 px-8 font-medium whitespace-nowrap"
                          >
                            <span>
                              {item?.stock ? item?.stock : "Stocked Out"}
                            </span>
                          </td>
                          <td
                            scope="row"
                            className="py-1 px-4 font-medium whitespace-nowrap"
                          >
                            <div className="flex justify-start items-center gap-4">
                              <Link className="p-[6px] bg-yellow-300 rounded hover:shadow-lg hover:shadow-yellow-300/50">
                                <FaEdit />
                              </Link>
                              <Link className="p-[6px] bg-green-400  rounded hover:shadow-lg hover:shadow-green-400/50">
                                <FaEye />
                              </Link>
                              <button className="p-[6px] bg-red-500 text-white rounded hover:shadow-lg hover:shadow-red-500/50">
                                <FaTrash />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* table */}
    </div>
  );
};

export default SellerDashAllProduct;
