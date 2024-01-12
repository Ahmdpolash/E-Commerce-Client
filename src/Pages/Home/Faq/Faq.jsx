import React from "react";
import Container from "../../../Components/Container/Container";

const Faq = () => {
  return (
    <Container>
      <section className="flex items-center bg-white  font-poppins">
        <div className="p-4 mx-auto">
          <div className="text-center mb-14">
            <h1 className="mb-4 text-3xl font-bold dark:text-white">
              {" "}
              Frequently Asked Questions{" "}
            </h1>
            <p className="max-w-xl mx-auto text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quae
              quam nostrum harum non in at eaque quibusdam eum ratione.
            </p>
          </div>
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4 mb-6 md:w-1/3 lg:w-1/5 lg:mb-0">
                <button className="w-full py-6 bg-blue-400 dark:bg-blue-400 rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="w-8 h-8 mx-auto mb-5 text-gray-50 bi bi-file-earmark-image-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707v5.586l-2.73-2.73a1 1 0 0 0-1.52.127l-1.889 2.644-1.769-1.062a1 1 0 0 0-1.222.15L2 12.292V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3zm-1.498 4a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
                    <path d="M10.564 8.27 14 11.708V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-.293l3.578-3.577 2.56 1.536 2.426-3.395z" />
                  </svg>
                  <p className="text-lg font-semibold text-white ">General</p>
                </button>
              </div>
              <div className="w-full px-3 mb-6 md:w-1/3 lg:mb-0 lg:w-1/5">
                <button className="w-full py-6 bg-gray-100 rounded-xl dark:bg-gray-700 dark:hover:bg-gray-900 hover:bg-blue-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="w-8 h-8 mx-auto mb-5 text-gray-600 dark:text-gray-400 bi bi-truck"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                  </svg>
                  <p className="text-lg font-semibold text-gray-500 dark:text-gray-400 ">
                    Shipping
                  </p>
                </button>
              </div>
              <div className="w-full px-4 mb-6 md:w-1/3 lg:w-1/5 lg:mb-0">
                <button className="w-full py-6 bg-gray-100 rounded-xl dark:bg-gray-700 dark:hover:bg-gray-900 hover:bg-blue-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="w-8 h-8 mx-auto mb-5 text-gray-600 dark:text-gray-400 bi bi-gear"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                  </svg>
                  <p className="text-lg font-semibold text-gray-500 dark:text-gray-400 ">
                    Tool
                  </p>
                </button>
              </div>
              <div className="w-full px-4 mb-6 md:w-1/3 lg:w-1/5 lg:mb-0">
                <button className="w-full py-6 bg-gray-100 rounded-xl hover:bg-blue-100 dark:bg-gray-700 dark:hover:bg-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="w-8 h-8 mx-auto mb-5 text-gray-600 dark:text-gray-400 bi bi-credit-card-2-back"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                    <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                  </svg>
                  <p className="text-lg font-semibold text-gray-500 dark:text-gray-400">
                    Payments
                  </p>
                </button>
              </div>
              <div className="w-full px-4 mb-6 md:w-1/3 lg:w-1/5 md:mb-0">
                <button className="w-full py-6 bg-gray-100 rounded-xl dark:bg-gray-700 dark:hover:bg-gray-900 hover:bg-blue-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="w-8 h-8 mx-auto mb-5 text-gray-600 dark:text-gray-400 bi bi-arrow-down-up"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
                    />
                  </svg>
                  <p className="text-lg font-semibold text-gray-500 dark:text-gray-400 ">
                    Returns
                  </p>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  fill="currentColor"
                  className="mr-4 text-blue-500 dark:text-blue-400 bi bi-plus-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                </svg>
                <div className="flex-1">
                  <span className="font-bold dark:text-white">
                  How can I place an order on your website?
                  </span>
                  <div className="mt-3 text-sm text-gray-500 dark:text-gray-400 answer">
                  To place an order, simply browse our product catalog, select the items you wish to purchase, and add them to your cart. Proceed to checkout, where you can enter your shipping details and payment information. Once confirmed, your order will be processed.
                  </div>
                </div>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  fill="currentColor"
                  className="mr-4 text-blue-500 dark:text-blue-400 bi bi-plus-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                </svg>
                <div className="flex-1">
                  <span className="font-bold dark:text-white">
                  What payment methods do you accept?
                  </span>
                  <div className="mt-3 text-sm text-gray-500 dark:text-gray-400 answer">
                  We accept various payment methods, including credit/debit cards, PayPal, and other secure payment gateways. Choose the option that suits you best during the checkout process.
                  </div>
                </div>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  fill="currentColor"
                  className="mr-4 text-blue-500 dark:text-blue-400 bi bi-plus-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                </svg>
                <div className="flex-1">
                  <span className="font-bold dark:text-white">
                  How can I track my order status?
                  </span>
                  <div className="mt-3 text-sm text-gray-500 dark:text-gray-400 answer">
                  Once your order is shipped, you will receive a confirmation email with a tracking number. You can use this tracking number on our website to monitor the status of your shipment and get real-time updates on its location.
                  </div>
                </div>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  fill="currentColor"
                  className="mr-4 text-blue-500 dark:text-blue-400 bi bi-plus-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                </svg>
                <div className="flex-1">
                  <span className="font-bold dark:text-white">
                  What is your return policy?

                  </span>
                  <div className="mt-3 text-sm text-gray-500 dark:text-gray-400 answer">
                  We have a hassle-free return policy. If you are not satisfied with your purchase, you can return the item(s) within [X] days of receiving your order. Please visit our "Returns and Exchanges" page for detailed instructions on initiating a return.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Faq;
