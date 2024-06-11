import React from "react";
import DashHeaders from "../../Components/DashHeaders";
import "../../Responsive/Responsive.css";
import cat from "../../../public/download.png";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import useUsers from "../../Hooks/useUsers";

const AdminDashUsers = () => {
  const { data } = useUsers();
  console.log("data", data);

  return (
    <div className="py- px-2 md:px-4 lg:px-5">
      <DashHeaders />

      <div className="mt-4">
        <div className="rounded-md lg:h-[83.8vh] pb-8 bg-white dark:bg-[#253145] w-full p-4">
          <div className="flex items-center justify-between">
            <select
              className="border outline-none border-slate-300 dark:bg-[#121212] px-3 py-[5px] bg-slate-100 rounded-md"
              name=""
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>

            <input
              id="hiddenSelect"
              className="outline-none border dark:bg-[#121212]  border-slate-300 py-[7px] px-4 rounded-md bg-slate-50"
              type="text"
              placeholder="Search.."
            />
          </div>

          <div
            id="allSellers"
            className="lg:w-full md:w-[700px] w-[365px] overflow-x-auto"
          >
            <table className="lg:w-full mt-2  overflow-x-auto">
              <thead className="border-b  overflow-x-auto text-slate-700 dark:text-white border-slate-600 py-2 h-8 rounded-md">
                <tr className="">
                  <th className="py-2 lg:px-2 px-4 font-semibold text-[15px] lg:text-[16px]">
                    No
                  </th>
                  <th className="py-2 lg:px-4 px-8 font-semibold text-[15px] lg:text-[16px]">
                    Image
                  </th>
                  <th className="py-2 lg:px-2 px-8  font-semibold text-[15px] lg:text-[16px]">
                    Name
                  </th>
                  <th
                    className="py-2 lg:px-2 px-
                   lg:pl-0 pl-10 font-semibold text-[15px] lg:text-[16px]"
                  >
                    Email
                  </th>
                  <th className="py-2 whitespace-nowrap lg:px-0 px-10 font-semibold text-[15px] lg:text-[16px]">
                    Payment Status
                  </th>
                  <th className="py-2 lg:px-2 px-5 font-semibold text-[15px] lg:text-[16px]">
                    Division
                  </th>
                  <th className="py-2 font-semibold lg:px-2 px-10 text-[16px]">
                    District{" "}
                  </th>
                  <th className="py-2 lg:px-2 px-10 font-semibold text-[16px]">
                    Action{" "}
                  </th>
                </tr>
              </thead>

              <tbody className="text-center ">
                {data?.map((user, i) => (
                  <tr key={user?._id} className=" border-slate-300 border-b">
                    <td className="py-1">{i + 1}</td>
                    <td className="py-1">
                      <img
                        className="w-[50px] mx-auto rounded-full border h-[50px]"
                        src={
                          user?.image
                            ? user?.image
                            : "https://img.freepik.com/premium-photo/man-with-glasses-shirt-that-says-i-m-happy-man_745528-2521.jpg?w=740"
                        }
                        alt=""
                      />
                    </td>
                    <td className="whitespace-nowrap py-1 dark:text-white  text-slate-700">
                      {user?.first_name + " " + user?.last_name}
                    </td>
                    <td className="whitespace-nowrap py-1  dark:text-white pl-10 lg:pl-0 text-slate-700">
                      {user?.email}
                    </td>
                    <td className="whitespace-nowrap py-1 dark:text-white  text-slate-700">
                      Pending
                    </td>
                    <td className="whitespace-nowrap py-1 dark:text-white  text-slate-700">
                      {user?.division ? user?.division : "N/A"}
                    </td>
                    <td className="whitespace-nowrap py-1 dark:text-white  text-slate-700">
                      {user?.district ? user?.district : "N/A"}
                    </td>
                    <td className="">
                      <div className="h-[27px] w-[27px] text-center mx-auto text-white rounded-sm bg-green-500">
                        <Link>
                          <FaEye className="text-[17px] mx-auto relative top-1  mt-2 ml-[6px]" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashUsers;
