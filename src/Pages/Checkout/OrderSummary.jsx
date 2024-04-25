import React from "react";

const OrderSummary = ({ states, products }) => {
  return (
    <div>
      <div className="flex flex-col gap-1">
        <h2 className="text-slate-600 font-semibold pb-2">
          Deliver to {states?.name}
        </h2>
        <p>
          <span className="bg-blue-200 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
            Home
          </span>
          <span className="text-slate-600 text-sm">
            {states.address} {states.province} {states.city} {states.area}
          </span>
          <span
            onClick={() => setRes(false)}
            className="text-indigo-500 cursor-pointer"
          >
            {" "}
            change
          </span>
        </p>
        <p className="text-slate-600 text-sm">Email to {states.emailc}</p>
      </div>

      <div className="mt-6">
        {products?.map((item, idx) => (
          <div key={item._id} className="w-full ">
            <div className="flex flex-wrap  gap-2 border-b border-slate-300 py-1 mb-2 justify-between items-center">
              <div className="flex gap-2 flex-wrap items-center">
                <img
                  className="w-[70px] h-[70px] rounded-md"
                  src={item?.images[0]}
                  alt="product image"
                />
                <div className="pr-4 text-slate-600">
                  <h2 className="text-md">
                    {item?.product_name.slice(0, 55)}..
                  </h2>
                  <span className="hidden lg:block text-sm">
                    Brand: {item?.brand ? item?.brand : "No Brand"}
                  </span>
                  <span className="hidden lg:block text-sm">
                    only {item?.stock} items (s) in stock
                  </span>
                </div>
              </div>

              <div>
                <div className="pl-4 sm:pl-0 mx-auto text-center">
                  <h2 className="text-lg text-orange-500">
                    $
                    {item.price -
                      ((item.price / 100) * item.discount).toFixed(2)}
                  </h2>
                  <p className="line-through">${item?.price}</p>
                  <p>{item?.discount ? `-${item?.discount}%` : ""}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderSummary;
