import React from "react";
import Image from "next/image";

const Highlights = () => {
    const highlightCards=[{
        src:"/Rectangle 1604",
        title:"ENS Linked",
        caption:"ENS Linked",
        textColor:"#4BDFFF",
        userName:"dingaling.eth",
        points:"1.82",
        duration:"2 months ago",
        XP:"200",
        shadowColor:"#25B5D5"
    },
    {
        src:"/Rectangle 1605",
        title:"Best Flip",
        caption:"Sold",
        textColor:"#FFC148",
        userName:"CryptoPunk #2131",
        points:"98.5",
        duration:"10 days ago",
        XP:"150",
        shadowColor:"#F8A910"
    },
    {
        src:"/Rectangle 1606",
        title:"Should have sold",
        caption:"Mint",
        textColor:"#44FFC8",
        userName:"Rare Apepe #6974",
        points:"98.5",
        duration:"10 days ago",
        XP:"200",
        shadowColor:"#0BF1AD"
    },
    {
        src:"/Rectangle 1607",
        title:"First NFT bought",
        caption:"Bought",
        textColor:"#4BDFFF",
        userName:"dingaling.eth",
        points:"98.5",
        duration:"10 days ago",
        XP:"10",
        shadowColor:"#25B5D5"
    },
    {
        src:"/Rectangle 1608",
        title:"Paper Handed",
        caption:"Sold",
        textColor:"#44FFC8",
        userName:"Moonbird #7866",
        points:"98.5",
        duration:"10 days ago",
        XP:"200",
        shadowColor:"#0BF1AD"
    }
]
  return (
    <div className="flex flex-col space-y-4">
      <span className="text-primaryText font-medium">Highlights</span>
      <div className="flex space-x-2 flex-wrap ">
        {highlightCards?.map((item,index)=>(
             <div key={index} className="rounded-xl   bg-black-100 px-4  pb-3 flex flex-col space-y-6 relative">
             <div className={`absolute top-0 left-0 w-28 h-32 bg-[${item.shadowColor}] bg-opacity-10 blur-xl`} style={{backgroundColor:item.shadowColor,opacity:"10%"}}>
            </div>
             <div className="flex space-x-4 ">
               <Image src={`${item.src}.png`} alt="Ens" height="60" width="60" />
               <div className="flex flex-col justify-between">
                 <span className="text-secondaryText font-semibold">
                   {item.title.length>12 ? item.title.slice(0,12) + "..." : item.title}
                 </span>
                 <span className={`text-[${item.textColor}] font-medium text-sm`} style={{color:item.textColor}}>
                 {item.caption}
                 </span>
               </div>
             </div>
   
             <div className="flex flex-col space-y-3">
             <div className="flex justify-between items-center ">
               <span className="text-primaryText text-xs font-semibold">
                 {item.userName}
               </span>
               <span className="text-secondaryText font-medium inline-flex items-center gap-x-1 text-xs">
                 {item.points}
                 <svg
                   width="12"
                   height="12"
                   viewBox="0 0 12 12"
                   fill="none"
                   xmlns="http://www.w3.org/2000/svg"
                 >
                   <path
                     fillRule="evenodd"
                     clipRule="evenodd"
                     d="M2.30469 6.11131L6.0019 0V0.00266638L6.00269 0L9.69981 6.11131L6.00269 8.28842L6.0019 8.28764V8.28842L2.30469 6.11131Z"
                     fill="#FAFAFA"
                   />
                   <path
                     fillRule="evenodd"
                     clipRule="evenodd"
                     d="M6.00028 8.98363L2.30469 6.8086L5.99566 11.99L5.99867 11.9988L6.00029 11.9965L6.0019 11.9988V11.9943L9.69806 6.80859L6.00028 8.98363Z"
                     fill="#FAFAFA"
                   />
                   <path
                     fillRule="evenodd"
                     clipRule="evenodd"
                     d="M6 8.28568L2.30469 6.10969L6 4.43641V4.43555L6.00095 4.43598L6.0019 4.43555V4.43641L9.69712 6.10969L6.0019 8.28568V8.2868L6.00095 8.28624L6 8.2868V8.28568Z"
                     fill="black"
                     fill-opacity="0.15"
                   />
                 </svg>
               </span>
             </div>
             
             <div className="flex justify-between items-center ">
               <span className="text-primaryText text-xs font-semibold">
                 {item.duration}
               </span>
               <span className="font-medium text-xs text-[#19ED7B]">
                 +{item.XP}XP
               </span>
             </div>
             </div>
           </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
