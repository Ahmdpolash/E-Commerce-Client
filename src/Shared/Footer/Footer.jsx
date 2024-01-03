import React from "react";

const Footer = () => {
  return (
    <div>
      <section className="flex flex-col lg:justify-end font-poppins">
        <div className="w-full bg-white text-black pt-11 dark:bg-gray-900 ">
          <div className="justify-center flex-1 px-4 lg:px-16 py-4 mx-auto lg:py-0">
            <div className="flex flex-wrap items-center justify-between pb-4 border-b border-gray-500 dark:border-gray-700 lg:justify-between">
              <h2 className="mb-4 text-2xl font-semibold tracking-wider text-black lg:mb-0 dark:text-gray-400">
                Subscribe to the latest Newsletters
              </h2>
              <div className="flex flex-wrap">
                <div className="w-full py-1 mb-2 lg:flex-1 lg:py-0 lg:mr-3 lg:mb-0">
                  <input
                    type="email "
                    className="inline-block w-full h-12 px-3 text-gray-700 placeholder-gray-500 border rounded-md dark:placeholder-gray-400 dark:text-gray-400 dark:border-gray-700 dark:bg-gray-700"
                    placeholder="Your email"
                  />
                </div>
                <div className="w-full py-1 lg:w-auto lg:py-0">
                  <a
                    href="#"
                    className="inline-block w-full px-5 py-4 font-medium leading-4 text-center bg-blue-200 rounded-md dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-blue-300"
                  >
                    Subscribe
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap py-10 -mx-3">
              <div className="w-full px-4 mb-11 md:w-1/2 lg:w-4/12 lg:mb-0">
                <a
                  href="#"
                  className="inline-block mb-4 text-xl font-bold text-black dark:text-gray-400"
                >
                  About Company
                </a>
                <p className="text-base font-normal leading-6 text-black lg:w-64 dark:text-gray-400">
                  Lorem ipsum dor amet Lorem ipsum dor amet Lorem ipsum dor amet
                  Lorem ipsum dor amet
                </p>
                <div className="flex justify-start mt-4 ">
                  <a
                    href="#"
                    type="button"
                    className="m-1 leading-normal text-black uppercase transition duration-150 ease-in-out border-2 border-gray-300 rounded-full dark:border-gray-400 dark:hover:bg-gray-800 hover:border-blue-700 hover:bg-blue-700 w-9 h-9"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="w-4 h-full mx-auto text-black dark:text-gray-400 bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    type="button"
                    className="m-1 leading-normal text-black uppercase transition duration-150 ease-in-out border-2 border-gray-300 rounded-full dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-800 hover:border-blue-500 hover:bg-blue-500 w-9 h-9"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="w-4 h-full mx-auto text-black dark:text-gray-400 bi bi-twitter"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    type="button"
                    className="m-1 leading-normal text-black uppercase transition duration-150 ease-in-out border-2 border-gray-300 rounded-full dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-800 hover:border-red-700 text-text-gray-50 hover:bg-red-700 w-9 h-9"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="w-4 h-full mx-auto text-gray-100 dark:text-gray-400 bi bi-google"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    type="button"
                    className="m-1 leading-normal text-gray-400 uppercase transition duration-150 ease-in-out border-2 border-gray-300 rounded-full dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-800 hover:border-blue-600 hover:bg-blue-600 w-9 h-9"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="w-4 h-full mx-auto text-black dark:text-gray-400 bi bi-linkedin"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/4 lg:w-2/12 mb-11 lg:mb-0">
                <h2 className="mb-4 text-xl font-bold text-black dark:text-gray-400">
                  Services{" "}
                </h2>
                <ul>
                  <li className="flex items-center mb-4 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="w-3 h-3 mr-1 text-white dark:text-gray-400 bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                    <a
                      href="#"
                      className="inline-block text-base font-normal text-black dark:text-gray-400"
                    >
                      Home
                    </a>
                  </li>
                  <li className="flex items-center mb-4 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="w-3 h-3 mr-1 text-white dark:text-gray-400 bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                    <a
                      href="#"
                      className="inline-block text-base font-normal text-black dark:text-gray-400"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="flex items-center mb-4 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="w-3 h-3 mr-1 text-white dark:text-gray-400 bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                    <a
                      href="#"
                      className="inline-block text-base font-normal text-black dark:text-gray-400"
                    >
                      Services
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full px-4 md:w-1/4 lg:w-2/12 mb-11 lg:mb-0">
                <h2 className="mb-4 text-xl font-bold text-black dark:text-gray-400">
                  Quick Links
                </h2>
                <ul>
                  <li className="flex items-center mb-4 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="w-3 h-3 mr-1 text-white dark:text-gray-400 bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                    <a
                      href="#"
                      className="inline-block text-base font-normal text-black dark:text-gray-400"
                    >
                      Home
                    </a>
                  </li>
                  <li className="flex items-center mb-4 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="w-3 h-3 mr-1 text-white dark:text-gray-400 bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                    <a
                      href="#"
                      className="inline-block text-base font-normal text-black dark:text-gray-400"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="flex items-center mb-4 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="w-3 h-3 mr-1 text-white dark:text-gray-400 bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                    <a
                      href="#"
                      className="inline-block text-base font-normal text-black dark:text-gray-400"
                    >
                      Services
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full px-4 mb-2 lg:mb-0 md:w-1/3 lg:w-4/12">
                <h2 className="mb-4 text-lg font-bold text-black dark:text-gray-400">
                  Contact Info
                </h2>
                <p className="flex items-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="w-4 h-4 mr-1 text-black dark:text-gray-400 bi bi-geo-alt "
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                  <span className="text-black dark:text-gray-400">
                    Kathmandu, Nepal
                  </span>
                </p>
                <p className="flex items-center mb-4 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="w-4 h-4 mr-2 text-black dark:text-gray-400 bi bi-envelope"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                  </svg>
                  <span className="text-black dark:text-gray-400">
                    info@gmail.com
                  </span>
                </p>
                <p className="flex items-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="w-4 h-4 mr-2 text-black dark:text-gray-400 bi bi-telephone"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                  </svg>
                  <span className="text-black dark:text-gray-400">
                    +977-9836736352
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="py-5 text-center text-white bg-blue-800 dark:bg-gray-800 dark:text-gray-400">
            <span>© Copyright 2022 . All Rights Reserved</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
