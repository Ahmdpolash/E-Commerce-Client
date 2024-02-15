import React from "react";

const UserDashChangePass = () => {
  return (
    <div>
      <div className="p-4 h-[69.5vh] rounded-md bg-white">
        <h2 className="text-xl text-slate-600 pb-5 mt-2 text-center font-semibold">
          Change Password
        </h2>
        <form className="flex mx-auto justify-center items-center flex-col lg:w-[550px]">
          <div className="flex-col w-full gap-1 mb-3">
            <label className="" htmlFor="old_password">Old Password</label>
            <input
              type="password"
              id="old_password"
              name="old_password"
              placeholder="old password"
              className="outline-none bg-slate-50 w-full mt-2 px-3 py-2 border border-slate-300 rounded-md text-slate-600"
            />
          </div>
          <div className="flex-col w-full gap-1 mb-2">
            <label htmlFor="new_password">New Password</label>
            <input
              type="password"
              id="new_password"
              name="new_password"
              placeholder="new password"
              className="outline-none bg-slate-50 px-3 mt-2 w-full py-2 border border-slate-300 rounded-md text-slate-600"
            />
          </div>
          <div className="w-full mt-2">
            <button className="px-8 w-full inline-block py-2 bg-[#F85606] shadow-lg hover:shadow-[#e0946e] text-white rounded-md">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserDashChangePass;
