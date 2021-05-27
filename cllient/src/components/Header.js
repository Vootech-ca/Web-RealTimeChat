import React from 'react';
import './header.css';
import user from '../assets/icons/user.png';
import notification from '../assets/icons/notification.png';
import login from '../assets/icons/login.png';
import searchIcon from '../assets/icons/search.png';

function Header() {
  return (
    <>
      <svg class="Rectangle_108_l">
        <linearGradient id="Rectangle_108_l" spreadMethod="pad" x1="0.004" x2="1.025" y1="1.408" y2="-0.46">
          <stop offset="0" stop-color="#3fff7c" stop-opacity="1" />
          <stop offset="1" stop-color="#16c172" stop-opacity="1" />
        </linearGradient>
        <rect className="w-screen  h-32" id="Rectangle_108_l" rx="0" ry="0" x="0" y="0" />
      </svg>
      <div className=" z-10 h-28 ">
        <div className="h-full container p-2 mx-auto">
          <div className=" h-full grid-cols-6  gap-1    grid ">
            <h1 className="sm:text-2xl self-center col-span-1 ">Real time chat </h1>
            <div className="col-span-4 px-2  self-center relative">
              <input
                className="rounded-full w-full h-9  flex items-center border border-black p-5 outline-none bg-transparent placeholder-black"
                placeholder="Search User"
                type="text"
              />
              <button className="absolute top-3 transform  sm:right-10 right-5">
                <img src={searchIcon} alt="" />
              </button>
            </div>
            <div className="self-center col-span-1 items-center flex justify-around md:flex-row flex-col">
              <button>
                <img className="w-5 md:w-10 " src={user} alt="" />
              </button>
              <button>
                <img className="w-5 md:w-10 py-3" src={login} alt="" />
              </button>
              <button>
                <img className="w-5 md:w-10" src={notification} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
