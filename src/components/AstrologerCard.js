import React from 'react';
import { MdVerified } from 'react-icons/md';
import { IoIosStar } from 'react-icons/io';

const AstrologerCard = ({ astrologer }) => {
  return (
    <div className="p-4 w-full max-w-[485px] h-auto bg-white shadow-boxShadow rounded-2xl flex items-center space-x-4 text-blackFont">
      {/* Section one image Start */}
      <img
        src={astrologer.img}
        alt={astrologer.name}
        className="w-[6.4rem] h-[6.4rem] object-fit-cover rounded-full border-[1.5px] border-green mb-9"
      />
      {/* Section one image END */}

      {/* Section Two Name Start */}
      <div style={{ flex: '0.6' }}>
        <div className="flex flex-col">
          <div className="flex items-center">
            <h3 className="text-lg font-medium max-w-[70%] truncate">
              {astrologer.name}
            </h3>
            <IoIosStar className="text-yellow text-xl ml-4 mt-1 " />
            <span className="ml-2 mt-1 text-sm font-light ">
              {astrologer.rating}
            </span>
          </div>

          <p className="text-[16px] mt-[9px] font-light text-grey">
            {astrologer.skills}
          </p>
          <p className="text-[16px] mt-[3px] font-light text-grey">
            {astrologer.languages.length > 20
              ? astrologer.languages.substring(0, 20) + '...'
              : astrologer.languages}
          </p>
          <p className="text-[16px] mt-[3px] font-light text-grey">
            Exp: {astrologer.experience}
          </p>

          <div className=" space-x-2 mt-2 flex">
            {astrologer.originalPrice && (
              <span className="text-gray-400 line-through ">
                {astrologer.originalPrice}
              </span>
            )}
            <span
              className={`font-550 text-[1.110rem] ${
                astrologer.isFree
                  ? 'text-getApp-red text-2xl'
                  : 'text-blackFont text-sm font-extra-extralight'
              }`}
            >
              {astrologer.price}
            </span>
          </div>
        </div>

        {/* Section Two Name End */}
      </div>
      {/* Section Three Icon Start */}
      <div
        className="flex flex-col h-full ml-0 md:ml-[9.5rem] justify-between w-full"
        style={{ flex: '0.4', marginLeft: '0px' }}
      >
        <div style={{ alignSelf: 'end' }}>
          <MdVerified className="text-green-chat text-[1.6rem] mt-[0.55rem] mr-2" />
        </div>

        <div className="flex flex-col mb-2" style={{ alignSelf: 'end' }}>
          {astrologer.waitTime ? (
            <>
              <button className="text-getApp-red border-getApp-red border px-4 py-1 text-lg rounded-lg w-[115px] sm:w-[80px] md:w-[80px]">
                Chat
              </button>
              <span className="text-getApp-red text-[0.65rem] sm:text-[0.75rem] ml-5 mt-1">
                Wait - {astrologer.waitTime}
              </span>
            </>
          ) : (
            <button className="text-green-chat border-green-chat border px-4 py-1 rounded-lg text-lg w-[115px] sm:w-[100px] md:w-[115px] mb-2 mr-2">
              Chat
            </button>
          )}
        </div>
      </div>

      {/* Section Three Icon End */}
    </div>
  );
};

export default AstrologerCard;
