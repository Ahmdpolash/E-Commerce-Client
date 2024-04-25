import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { AiFillShopping, AiFillHeart } from "react-icons/ai";

import logo from "../../../public/logo2.png";
import Container from "../../Components/Container/Container";

import "../../Responsive/Responsive.css";

const Footer = () => {
  return (
    <div className="x">
      <div className="bg-[#F3F6Fa] svg mt-5">
        <Container>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto border-b py-6 lg:py-8 lg:pb-8">
            <div className="lg:pl-8 mb-2 lg:mb-0">
              <div className="flex flex-col gap-3">
                <img className="w-[190px] h-[70x]" src={logo} alt="logo" />
                <ul className="flex flex-col gap-2 text-slate-600">
                  <li>Address : Kuigram, Bangladesh</li>
                  <li>Phone : +8801756213028</li>
                  <li>Email : ahmedpolash732@gmail.com</li>
                </ul>
              </div>
            </div>
            <div className=" mb-2 lg:mb-0">
              <div className="flex lg:justify-cener sm:justify-start sm:mt-6 w-full">
                <div>
                  <h2 className="font-bold text-lg mb-2">Useful links</h2>
                  <div className="flex justify-between gap-[80px] lg:gap-[40px]">
                    <ul className="flex flex-col gap-2 text-slate-600 text-sm">
                      <li>
                        <Link>About Us</Link>
                      </li>
                      <li>
                        <Link to='/faq'>FAQ</Link>
                      </li>
                      <li>
                        <Link>Delivery Information</Link>
                      </li>
                      <li>
                        <Link>Privacy Policy</Link>
                      </li>
                      <li>
                        <Link>Blogs</Link>
                      </li>
                    </ul>
                    <ul className="flex lg:justify-center flex-col gap-2 text-slate-600 text-sm">
                      <li>
                        <Link to="/seller-registration">Become a Seller</Link>
                      </li>
                      <li>
                        <Link>Who we Are</Link>
                      </li>
                      <li>
                        <Link>Innovation</Link>
                      </li>
                      <li>
                        <Link>Testimonials</Link>
                      </li>
                      <li>
                        <Link>Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="w-full flex flex-col justify-start gap-5">
                <h2 className="font-bold text-lg mb-">
                  Join Our Newsletter Now
                </h2>
                <span>
                  Get Email updates about our latest and shop specials offers
                </span>
                <div className="h-[50px] w-full bg-white border relative">
                  <input
                    placeholder="Enter your mail"
                    className="h-full bg-transparent w-full px-3 outline-0"
                    type="text"
                  />
                  <button className="h-full absolute right-0 bg-indigo-500 text-white uppercase px-4 font-bold text-sm">
                    Subscribe
                  </button>
                </div>
                <ul className="flex justify-start items-center gap-3">
                  <li>
                    <a
                      className="w-[38px] h-[38px] hover:bg-[#7fad39] hover:text-white flex justify-center items-center bg-white rounded-full"
                      href="https://www.facebook.com/profile.php?id=61555489764134"
                      target="_blank"
                    >
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a
                      className="w-[38px] h-[38px] hover:bg-[#7fad39] hover:text-white flex justify-center items-center bg-white rounded-full"
                      href="https://twitter.com/PolashAhme2270"
                      target="_blank"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li>
                  <li>
                    <a
                      className="w-[38px] h-[38px] hover:bg-[#7fad39] hover:text-white flex justify-center items-center bg-white rounded-full"
                      href="https://linkedin.com/in/polashahmed"
                      target="_blank"
                    >
                      <FaLinkedin />
                    </a>
                  </li>
                  <li>
                    <a
                      className="w-[38px] h-[38px] hover:bg-[#7fad39] hover:text-white flex justify-center items-center bg-white rounded-full"
                      href="https://github.com/Ahmdpolash"
                      target="_blank"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-[85%] flex flex-wrap justify-center items-center text-slate-600 mx-auto py-5 text-center">
            <span>
              ©2024 All rights reserved | Developed by{" "}
              <a
                className="text-blue-500 underline"
                href="https://linkedin.com/in/polashahmed"
              >
                Polash Ahmed
              </a>
            </span>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
