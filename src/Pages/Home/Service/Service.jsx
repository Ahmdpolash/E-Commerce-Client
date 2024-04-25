import React from "react";
import Container from "../../../Components/Container/Container";

const Service = () => {
  return (
    <div>
      <Container>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-10">Our Services</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Seller Dashboard</h2>
                <p className="text-gray-700 mb-4">
                  Manage your products, orders, and inventory with our intuitive
                  seller dashboard.
                </p>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  Learn More
                </a>
              </div>
            </div>

            {/* Service Card */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">
                  Multi-Vendor Marketplace
                </h2>
                <p className="text-gray-700 mb-4">
                  Offer your products on our platform alongside other vendors
                  and reach a wider audience.
                </p>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  Learn More
                </a>
              </div>
            </div>

            {/* Service Card */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Secure Payments</h2>
                <p className="text-gray-700 mb-4">
                  We offer secure payment gateways to ensure safe transactions
                  for both buyers and sellers.
                </p>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Service;
