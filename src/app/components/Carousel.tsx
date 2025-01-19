
// import "../../app/globas.css"
// /* eslint-disable @next/next/no-img-element */
// import React, { useState } from "react";


// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const images = [
//     "/carousel1-img1.png",
//     "/carousel1-img2.png",
//     "/carousel1-img1.png",
//     "/carousel1-img2.png",
//     "/carousel1-img3.png",
//     "/carousel1-img1.png",
//   ];

//   const products = [
//     { name: "Nike Air Max Pulse", price: "$120" },
//     { name: "Nike Air Max Pulse", price: "$150" },
//     { name: "PNike Air Max Pulse", price: "$130" },
//     { name: "Nike Air Max Pulse", price: "$100" },
//     { name: "Nike Air Max Pulse", price: "$110" },
//     { name: "Nike Air Max Pulse", price: "$90" },
//   ];

//   const visibleItemsCount = 3;

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex + 1 >= images.length - visibleItemsCount + 1
//         ? prevIndex
//         : prevIndex + 1
//     );
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex <= 0 ? prevIndex : prevIndex - 1));
//   };

//   return (
//     <>
//       {/* Navigation Buttons */}
//       <div className="flex mb-10 mr-5 gap-4 sm:gap-6">
//         <div className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 sm:hidden">
//           <button
//             onClick={handlePrev}
//             className="btn btn-circle bg-gray-700 text-white text-sm"
//           >
//             ❮
//           </button>
//         </div>
//         <div className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 sm:hidden">
//           <button
//             onClick={handleNext}
//             className="btn btn-circle bg-gray-700 text-white text-sm"
//           >
//             ❯
//           </button>
//         </div>
//       </div>

//       {/* Carousel Section */}
//       <div className="relative mt-20 flex">
//         <div className="w-[90%] mx-auto overflow-hidden relative sm:w-[80%] md:w-[70%] lg:w-[60%]">
//           <div className="flex transition-transform duration-500 ease-in-out overflow-hidden  gap-[50px] sm:ml-[28px] carousel-section">
          
//             {images
//               .slice(currentIndex, currentIndex + visibleItemsCount)
//               .map((img, index) => (
//                 <div
//                   key={index}
//                   className="flex-shrink-0"
//                   style={{ flex: "0 0 60%", maxWidth: "100%" }}
//                 >
//                   <div className="relative w-full h-[300px] md:h-[400px]">
//                     {/* Product Image */}
//                     <img
//                       src={img}
//                       alt={`carousel ${index}`}
//                       className="w-full h-full object-cover"
//                     />

//                     {/* Overlay with name & price for responsiveness */}
//                     <div className="absolute bottom-0 left-0 right-0  bg-black bg-opacity-60 text-white py-2 px-3 md:py-3 md:px-4 flex flex-wrap justify-between items-center">
//                       <span className="text-xs md:text-sm text-black">{products[index]?.name}</span>
//                       <span className="text-xs md:text-sm font-bold text-black">{products[index]?.price}</span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Carousel;







/* eslint-disable @next/next/no-img-element */
import React from 'react'
import "../globals.css"

const Carousel = () => {
  return (
    <div className="carousel carousel-end rounded-box flex overflow-hidden gap-[25px]">
  <div className="carousel-item">
  <div className="card bg-white w-96 shadow-xl">
  <figure>
    <img
      src="/carousel1-img1.png"
      alt="Shoes" />
  </figure>
  <div className="card-body text-black">
    <h2 className="card-title">
      Nike Air Max Pulse
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">$19</div>
      
    </div>
  </div>
</div>
  </div>


  <div className="carousel-item">
  <div className="card bg-white w-96 shadow-xl">
  <figure>
    <img
      src="/carousel1-img1.png"
      alt="Shoes" />
  </figure>
  <div className="card-body text-black">
    <h2 className="card-title">
      Nike Air Max Pulse
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">$19</div>
      
    </div>
  </div>
</div>
  </div>

{/* 3 */}
<div className="carousel-item">
  <div className="card bg-white w-96 shadow-xl">
  <figure>
    <img
      src="/carousel1-img1.png"
      alt="Shoes" />
  </figure>
  <div className="card-body text-black">
    <h2 className="card-title">
      Nike Air Max Pulse
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">$19</div>
      
    </div>
  </div>
</div>
  </div>

{/* 4
 */}
 <div className="carousel-item">
  <div className="card bg-white w-96 shadow-xl">
  <figure>
    <img
      src="/carousel1-img1.png"
      alt="Shoes" />
  </figure>
  <div className="card-body text-black">
    <h2 className="card-title">
      Nike Air Max Pulse
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">$19</div>
      
    </div>
  </div>
</div>
  </div>




  
  <div className="carousel-item">
    <img
      src="/carousel1-img2.png"
      alt="Drink" />
  </div>
  

</div>
  )
}

export default Carousel