import React from 'react';
import './card.css';
import user from '../../assets/users/active.png';
import message from '../../assets/icons/message.png';
import info from '../../assets/icons/info.png';
function UserCard({ status }) {
  return (
    <div className={` h-80 lg:h-96 card-container rounded-3xl ${status}  bg-secondary`}>
      {/* first part */}
      <div className={`user-card-image-container  h-3/4 flex justify-center  ${status} relative `}>
        <img src={user} alt="" />
        <div className="absolute w-full flex justify-center -bottom-3">
          <h1 className={`${status === 'active' ? 'bg-primary' : 'bg-orange'} px-2 rounded-full text-white text-sm`}>
            {status === 'active' ? 'Working' : 'Off'}
          </h1>
        </div>
        <div className="absolute w-full flex justify-center bottom-10">
          <h1 className=" rounded-full text-2xl">Hewr Srood </h1>
        </div>
      </div>
      {/* second part */}
      <div className="flex justify-between px-4  mt-5 items-center">
        <button className=" cursor-pointer flex items-center rounded-full overflow-hidden   border-2 border-blue w-24">
          <div className="w-10 bg-blue rounded-r-full flex  items-center justify-center">
            <img src={info} alt="" className="  h-10  p-1 " />
          </div>
          <p className="p-2">Info</p>
        </button>
        <button className=" cursor-pointer flex items-center  rounded-full overflow-hidden   border-2 border-primary w-24">
          <div className="bg-primary  w-10 h-10  flex  items-center justify-center  rounded-r-full">
            <img src={message} alt="" className=" h-8  p-1" />
          </div>
          <p className="p-2">Chat</p>
        </button>
      </div>
    </div>
  );
}

export default UserCard;
