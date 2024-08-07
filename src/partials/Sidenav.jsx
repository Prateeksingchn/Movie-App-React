import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="w-[20%] h-screen border-r-2 boder-zinc-400 p-10">
      <h1 className="text-2xl text-white font-bold">
        <i class="text-[#6556CD] ri-tv-fill mr-2"></i>
        <span className="">Movie App</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-xl gap-2">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5">
          New Feed
        </h1>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i class="mr-2 ri-fire-fill"></i>Trending
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i class="mr-2 ri-bard-fill"></i>Popular
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i class="mr-2 ri-movie-2-fill"></i>Movies
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i class="mr-2 ri-tv-2-fill"></i>Tv Shows
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i class="mr-2 ri-team-fill"></i>People
        </Link>
      </nav>

      <hr className="border-none h-[1px] bg-zinc-300" />

      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5">
          Website Information
        </h1>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3 ">
        <i class="mr-2 ri-information-fill"></i>
          About Movie App 
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3 ">
          <i class="mr-2 ri-phone-fill"></i>
          Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
