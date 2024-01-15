import React, { useState } from "react";
import Ratings from "../../Components/Ratings";
import RatingTemp from "../../Components/RatingTemp";
import Pagination from "../../Components/Pagination";
import RatingReact from "react-rating";
import { CiStar } from "react-icons/ci";
import { AiFillStar } from "react-icons/ai";

const Review = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const [rat, setRat] = useState("");

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-16 md:justify-center lg:justify-start  lg:gap-20  lg:flex-row">
        {/* rating icons */}
        <div className="flex flex-col justify-center  gap-2 lg:justify-start items-start py-2  lg:py-4">
          <div className="mx-auto lg:mx-0">
            <span className="text-4xl md:text-5xl lg:text-6xl font-semibold ">4.5</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-semibold text-slate-600">/5</span>
          </div>
          <div className="flex  text-2xl md:text-3xl lg:text-4xl">
            <Ratings ratings={4.5} />
          </div>
          <p className="text-sm text-slate-600 mx-auto lg:mx-0">15 Reviews</p>
        </div>

        <div className="flex flex-col">
          <div className="flex gap-3 mt-2 md:lg-3 lg:mt-5">
            <div className="text-md flex gap-1 w-[93px]">
              <RatingTemp rating={5} />
            </div>
            <div className="w-[200px] h-[12px] md:h-[13px] lg:h-[14px] bg-slate-200 relative">
              <div className="h-full bg-[#FD8C00] w-[80%]"></div>
            </div>
            <p className="text-sm text-slate-600 w-[0%]">30</p>
          </div>

          <div className="flex gap-3 mt-2 md:mt-3 lg:mt-5">
            <div className="text-md flex gap-1 w-[93px]">
              <RatingTemp rating={4} />
            </div>
            <div className="w-[200px] h-[12px] md:h-[13px] lg:h-[14px] bg-slate-200 relative">
              <div className="h-full bg-[#FD8C00] w-[60%]"></div>
            </div>
            <p className="text-sm text-slate-600 w-[0%]">20</p>
          </div>

          <div className="flex gap-3 mt-2 md:mt-3 lg:mt-5">
            <div className="text-md flex gap-1 w-[93px]">
              <RatingTemp rating={3} />
            </div>
            <div className="w-[200px] h-[12px] md:h-[13px] lg:h-[14px] bg-slate-200 relative">
              <div className="h-full bg-[#FD8C00] w-[40%]"></div>
            </div>
            <p className="text-sm text-slate-600 w-[0%]">8</p>
          </div>

          <div className="flex gap-3 mt-2 md:mt-3 lg:mt-5">
            <div className="text-md flex gap-1 w-[93px]">
              <RatingTemp rating={2} />
            </div>
            <div className="w-[200px] h-[12px] md:h-[13px] lg:h-[14px] bg-slate-200 relative">
              <div className="h-full bg-[#FD8C00] w-[70%]"></div>
            </div>
            <p className="text-sm text-slate-600 w-[0%]">16</p>
          </div>

          <div className="flex gap-3 mt-2 md:mt-3 lg:mt-5">
            <div className="text-md flex gap-1 w-[93px]">
              <RatingTemp rating={1} />
            </div>
            <div className="w-[200px] h-[12px] md:h-[13px] lg:h-[14px] bg-slate-200 relative">
              <div className="h-full bg-[#FD8C00] w-[25%]"></div>
            </div>
            <p className="text-sm text-slate-600 w-[0%]">7</p>
          </div>

          <div className="flex gap-3 mt-2 md:mt-3 lg:mt-5">
            <div className="text-md flex gap-1 w-[93px]">
              <RatingTemp rating={0} />
            </div>
            <div className="w-[200px] h-[12px] md:h-[13px] lg:h-[14px] bg-slate-200 relative">
              <div className="h-full bg-[#FD8C00] w-[0%]"></div>
            </div>
            <p className="text-sm text-slate-600 w-[0%]">0</p>
          </div>
        </div>
      </div>

      {/* rating icons end */}

      {/* comment section */}
      <h2 className="text-slate-600 text-xl font-bold py-4 lg:py-5">
        Product Reviews (91)
      </h2>
      <div className=" w-full lg:w-[70%]">
        {[1, 2, 3].map((r, i) => (
          <div>
            <div className="flex items-center  justify-between">
              <div className="flex gap-1 items-center">
                <RatingTemp rating={4} />
              </div>

              <span className="text-slate-600">15 Jan 2023</span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://eshooop.netlify.app/assets/reviewImage2-bef34ef7.jpg"
                alt="author/image"
                class="w-[40px] h-[40px] border rounded-full object-cover"
              />
              <span className="text-slate-600 text-md">Polash Ahmed</span>
            </div>
            <p className="text-slate-600 text-sm mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
              sunt totam quae quibusdam praesentium cupiditate fugiat error
              culpa libero aut minima veniam hic inventore a earum dicta nobis
              blanditiis repellat, sequi unde sed. Molestiae a placeat quisquam
              ex soluta? Unde facere voluptate assumenda ut ullam! Ullam vitae,
              ducimus tempore voluptatum voluptatem odit facere soluta minus
              eius labore quae porro corporis.
            </p>
          </div>
        ))}
        <div className="mb-4 md:mb-2 lg:mb-0">
          <div className="flex justify-end">
            <Pagination
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              totalItem={20}
              perPage={perPage}
              showItem={Math.round(20 / 3)}
            />
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-1">
              <RatingReact
                onChange={(e) => setRat(e)}
                initialRating={rat}
                emptySymbol={
                  <span className="text-slate-600 text-4xl">
                    <CiStar />
                  </span>
                }
                fullSymbol={
                  <span className="text-[#FD8C00] text-4xl">
                    <AiFillStar />
                  </span>
                }
              />
            </div>
            <form>
              <textarea
                required
                className="border outline-0 p-3 w-full"
                name=""
                id=""
                placeholder="Write a review"
                cols="30"
                rows="5"
              ></textarea>
              <div className="mt-2">
                <button className="py-1 px-5 bg-indigo-500 text-white rounded-sm">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* comment section */}
    </div>
  );
};

export default Review;
