import React from "react";
import Image from "next/image";

const ProfileView = () => {
  const Rectangles = [
    {
      src: "/Rectangle 1599",
    },
    {
      src: "/Rectangle 1600",
    },
    {
      src: "/Rectangle 1601",
    },
    {
      src: "/Rectangle 1602",
    },
  ];
  return (
    <aside className="w-min">
      <div className="h-full px-6 py-6 bg-black-100 rounded-xl ">
        <div className="flex flex-col  space-y-7">
          {/* Name and Avatar profile */}
          <div className="flex space-x-4 ">
            <div className="flex flex-col space-y-2 items-center">
              <Image src="/avatar.png" alt="avatar" width="80" height="80" />
              <span className="text-[#FFC148] font-semibold">LVL 2</span>
            </div>
            <div className="pt-4">
              <h2 className="text-white font-semibold text-xl tracking-wider">
                dingaling.eth
              </h2>
              <span className="text-primaryText text-xs">0xadgf....jkld</span>
            </div>
          </div>

          {/* Twitter Account */}
          <div className="flex space-x-4 items-center">
            <div className="flex space-x-2 bg-black-200 rounded-2xl py-1.5 px-2 items-center">
              <Image
                src="/logo/Vector.png"
                alt="twitter"
                width="25"
                height="25"
              />
              <span className="text-xs text-primaryText">@dingalingts</span>
            </div>

            <div>
              <Image src="/logo/globe.png" alt="globe" width="25" height="25" />
            </div>
          </div>

          {/* description */}
          <div>
            <span className="text-primaryText text-md">
              An Investor / Collector of #NFTs and OG enthusiast. Co-Founder and
              owner of 📦 @nftboxes
            </span>
          </div>

          {/* Communities */}
          <div>
            <span className="text-primaryText text-sm ">
              Common communties (3)
            </span>
            <div className="flex space-x-2 mt-2">
              {Rectangles?.map((item, index) => (
                <Image
                  key={index}
                  src={`${item.src}.png`}
                  alt="rectangle"
                  width="55"
                  height="50"
                />
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-col space-y-3">
            <div className="flex space-x-2">
              <div className="flex justify-between space-x-2 py-1 px-2 border-2 border-yellow rounded-full text-yellow text-md">
                <span>Art </span>
                <span>12%</span>
              </div>

              <div className="flex  justify-between space-x-2 py-1 px-2 border-2 border-yellow rounded-full text-yellow text-md">
                <span>Utility </span>
                <span>12%</span>
              </div>

              <div className="flex  justify-between space-x-2 py-1 px-2 border-2 border-black-200 rounded-full text-primaryText text-md">
                <span>PFP</span>
                <span>12%</span>
              </div>
            </div>

            <div className="flex space-x-2">
              <div className="flex justify-between space-x-2 py-1 px-2 border-2 border-black-200 rounded-full text-primaryText text-md">
                <span>Metaverse </span>
                <span>12%</span>
              </div>

              <div className="flex  justify-between space-x-2 py-1 px-2 border-2 border-black-200 rounded-full text-primaryText text-md">
                <span>Gaming </span>
                <span>12%</span>
              </div>
            </div>

            <div className="flex space-x-2">
              <div className="flex  justify-between space-x-2 py-1 px-2 border-2 border-black-200 rounded-full text-primaryText text-md">
                <span>PFP</span>
                <span>12%</span>
              </div>

              <div className="flex  justify-between space-x-2 py-1 px-2 border-2 border-black-200 rounded-full text-primaryText text-md">
                <span>ens</span>
                <span>12%</span>
              </div>
            </div>
          </div>

          {/* Button */}
          <button
            type="button"
            className="border-2 border-primaryText text-secondaryText py-2.5 px-6 rounded-full inline-flex items-center justify-center space-x-1"
          >
            <span>Subscribe</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 4L7 8L3 12"
                stroke="#FAFAFA"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 4L12 8L8 12"
                stroke="#FAFAFA"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default ProfileView;
