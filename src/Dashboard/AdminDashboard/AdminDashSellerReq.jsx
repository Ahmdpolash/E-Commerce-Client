import React, { useState } from "react";
import DashHeaders from "../../Components/DashHeaders";
import "../../Responsive/Responsive.css";
import cat from "../../../public/download.png";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const AdminDashSellerReq = () => {
  const axiosPublic = useAxiosPublic();
  const [pendingSeller, setPendingSeller] = useState([]);

  const { data, isLoading, refetch } = useQuery({
    queryKey: "[pending-seller]",
    queryFn: async () => {
      const res = await axiosPublic.get(`/sellers/pending/${"Pending"}`);
      setPendingSeller(res.data);

      return res.data;
    },
  });

  const [action, setAction] = useState();

  const handleAction = async (id, e) => {
    let status = e.target.value; // Update status variable instead of st
    const result = await axiosPublic
      .put(`/seller/status/${id}`, { status }) // Send status directly
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          toast.success("Seller Approved");
          console.log(res.data);
        }
      });
  };

  return (
    <div className="py- px-2 md:px-4 lg:px-5">
      <DashHeaders />

      <div className="mt-4">
        <div className="rounded-md lg:h-[83.8vh] pb-8 bg-white w-full p-4">
          {pendingSeller?.length === 0 ? (
            <div className="flex h-[90%] items-center justify-center">
              <h1 className="text-2xl lg:text-4xl text-slate-600">
                {" "}
                No Seller Request Yet ☝️!!
              </h1>{" "}
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between">
                <select
                  className="border outline-none border-slate-300 px-3 py-[5px] bg-slate-100 rounded-md"
                  name=""
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                </select>

                <input
                  id="hiddenSelect"
                  className="outline-none border border-slate-300 py-[7px] px-4 rounded-md bg-slate-50"
                  type="text"
                  placeholder="Search.."
                />
              </div>

              <div
                id="allSellers"
                className="lg:w-full md:w-[700px] w-[365px] overflow-x-auto"
              >
                <table className="lg:w-full mt-2  overflow-x-auto">
                  <thead className="border-b  overflow-x-auto text-slate-700  border-slate-600 py-2 h-8 rounded-md">
                    <tr className="">
                      <th className="py-2 lg:px-2 px-4 font-semibold text-[15px] lg:text-[16px]">
                        No
                      </th>
                      <th className="py-2 lg:px-16 px-4 font-semibold text-[15px] lg:text-[16px]">
                        Image
                      </th>

                      <th className="py-2 lg:px-2 px-8  font-semibold text-[15px] lg:text-[16px]">
                        Name
                      </th>
                      <th className="py-2 lg:px-2 lg:pl-0 lg:pr-16 pl-10 font-semibold text-[15px] lg:text-[16px]">
                        Email
                      </th>

                      <th className="py-2 lg:px-2 lg:pr-24 px-5 font-semibold text-[15px] lg:text-[16px]">
                        Status
                      </th>

                      <th className="py-2 lg:px-2 lg:pr-2 px-10 font-semibold text-[16px]">
                        Action{" "}
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-center ">
                    {pendingSeller?.map((p, i) => (
                      <tr key={p._id} className=" border-slate-300 border-b">
                        <td className="py-1">{i + 1}</td>
                        <td className="py-1">
                          <img
                            className="w-[50px] mx-auto rounded-full border h-[50px]"
                            src={p?.shop_Logo}
                            alt=""
                          />
                        </td>

                        <td className="whitespace-nowrap py-1  text-slate-700">
                          {p?.first_name + " " + p.last_name}
                        </td>

                        <td className="whitespace-nowrap py-1 pl-10 lg:pr-20 text-slate-700">
                          {p?.email}
                        </td>

                        <td className="whitespace-nowrap py-1 lg:pr-20  text-slate-700">
                          {p?.status}
                        </td>

                        <td className="whitespace-nowrap py-1 lg:pr-2  text-slate-700">
                          <select
                            className="outline-none focus:border-blue-600 border rounded-md border-slate-300 bg-slate-50 py-2 px-4"
                            name="approvalStatus"
                            onChange={(e) => handleAction(p._id, e)}
                            id=""
                          >
                            <option value="" selected>
                              Select Action
                            </option>
                            <option value="Active">Active</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashSellerReq;
