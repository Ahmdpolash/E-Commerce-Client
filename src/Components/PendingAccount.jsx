import React from "react";
import { Link } from "react-router-dom";

const PendingAccount = () => {
  return (
    <div className="lg:h-[200px] w-full p-4 bg-white rounded-md mt-5 space-y-2">
      <h1 className="text-2xl font-semibold text-slate-700">Pending Account</h1>
      <p className="text-[18px] font-normal text-slate-500">
        Your seller account is currently pending approval by the admin. Once
        approved, you will have access to additional features and
        functionalities. Thank you for your patience.
      </p>
      <div className="pt-3">
        <Link to="/dashboard/support-chat">
          {" "}
          <button className="bg-violet-600 px-5 py-[10px] rounded-md text-white hover:duration-700 font-medium delay-1000">
            Chat With Support
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PendingAccount;
