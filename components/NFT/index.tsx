import React from 'react'
import Image from 'next/image'

const NFTList = () => {
   const list=[{
    src:"/NFT/1.png",
    title:"Azuki #9839",
   },
   {
    src:"/NFT/2.png",
    title:"MAYC #9839",
   },
   {
    src:"/NFT/3.png",
    title:"MoonBirds #9839",
   },
   {
    src:"/NFT/4.png",
    title:"Otherdeed #9839",
   },
   {
    src:"/NFT/5.png",
    title:"Cryptoz #9839",
   }
]
  return (
    <div className='flex space-x-2'>
        {list?.map((item,index)=>(
           <div key={index} className='flex flex-col space-y-4 bg-black-100 p-1 rounded-xl'>
            <div className='relative'>
           <Image src={item.src} alt="NFT" height={300} width={200}/>
           <div className='absolute bottom-1 right-1'>
            <div className='bg-[#000000] bg-opacity-50 rounded-xl py-1 px-2'>
                <p className='text-secondaryText font-semibold text-sm'>3 months</p>
                </div>
            </div>
           </div>
           <div className='p-2'>
             <span className='text-secondaryText font-semibold text-md'>{item.title}</span>
             <div className="flex flex-col space-y-3 mt-2">
               <div className="flex justify-between items-center ">
                 <span className="text-primaryText text-xs font-semibold">
                  Bought
                 </span>
                 <span className="text-secondaryText font-medium inline-flex items-center gap-x-1 text-xs">
                 02.82
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
                 Floor
                 </span>
                 <div className='flex space-x-2'>
                 <span className="text-secondaryText font-medium inline-flex items-center gap-x-1 text-xs">
                 02.82
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
                 <span className="font-medium text-xs text-[#19ED7B]">
                   +21.6%
                 </span>
  
                 </div>
               </div>
               </div>
           </div>
          </div>
        ))}
      
    </div>
  )
}

export default NFTList