/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
// import Image from "next/image";
"use client"

import Carousel from "./components/Carousel";
import "./globals.css"



import Navigation from "./components/Navigation";



export default function Home() {
  return (
    <>
    
    

      <div className="bg-white" >
        

      <div className="body1  flex justify-center items-center ">
        <div className="card md:h-[110vh] bg-white w-[90vw] shadow-xl">
          <figure>
            <img className="md:h-[100vh] w-[200vw]"
              src="/body1.png" alt="body1 " 
            />
          </figure>
          <div className="card-body text-center text-black">
            <h1 className="text-black">First Look</h1>
            <h2 className="card-title text-center justify-center">Nike Air Max Pulse</h2>
            <p className=" ">Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse</p>
            <p>—designed to push you past your limits and help you go to the max.</p>
            <div className="card-actions justify-center rounded ">
              <button className="bg-gray-900 text-white btn btn-dark ">Notify Me</button>
              <button className="bg-gray-900 text-white btn btn-dark">Shop Air Max</button>
            </div>
          </div>
        </div>
        </div>

       
     
       
<div className="mt-20">
<Carousel/>
</div>

<div className="body3  flex flex-col justify-center items-center mt-[300px] ">
  <div className="heading justify-start w-[90%]">
  <h4>Featured</h4>
  </div>
  
        <div className="card md:h-[100vh] bg-white w-[90vw] shadow-xl">
          <figure>
            <img className="m:h-[70vh] w-[200vw]"
              src="/body3.png" alt="body1 " 
            />
          </figure>
          <div className="card-body text-center text-black gap-[19px]">
            
            <h2 className="card-title text-center justify-center">STEP INTO WHAT FEELS GOOD</h2>
            <p className="">Cause everyone should know the feeling of running in that perfect pair.</p>
           
            <div className="card-actions justify-center rounded ">
              <button className="bg-gray-900 text-white btn btn-dark ">Find Your Shoe</button>
              
            </div>
          </div>
        </div>
        </div>





{/* Body4 */}
       {/* Cards  */}
       <div className="body4 flex flex-col mt-20">
        <div className="Heading w-[90%] text-slate-800 ml-5">
          <h3>
            Dont Miss
          </h3>
        </div>
       <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-4 items-center justify-center flex-col">
    <img
      className=" md:w-lg-5  mb-10 object-cover object-center rounded"
      alt="hero"
      src="/body4-image.png"
    />

    {/* Text */}
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      FLIGHT ESSENTIALS
      </h1>
      <p className="mb-8 leading-relaxed">
      Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex h-[40px] align-center text-white bg-slate-900  border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Shop
        </button>
        
      </div>
    </div>
   
  </div>
</section>



</div>

<div className="body5 flex flex-col ">
<div className="heading text-slate-700 ml-5 w-[90%]">
    The Essentials
  </div>

  <div className="flex mx-auto flex-wrap ">
<section className="text-gray-600 body-font">
 
  <div className="container mx-auto flex  py-5 items-center justify-center flex-col">
    
    <img
      className=" w- lg:w-96 mb-10 object-cover object-center rounded"
      alt="hero"
      src="/body5-image1.png"
    />
    
    
  </div>
</section>
{/* 2) */}
<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-5 items-center justify-center flex-col">
    
    <img
      className=" w- lg:w-96 mb-10 object-cover object-center rounded"
      alt="hero"
      src="/body5-image2.png"
    />
    
    
  </div>
</section>
{/* 3 */}
<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-5 items-center justify-center flex-col">
    
    <img
      className=" lg:w-96 mb-10 object-cover object-center rounded"
      alt="hero"
      src="/body5-image3.png"
    />
    
    
  </div>
</section>

</div>
</div>

<Navigation/>




</div>
        
     
    </>
  );
}
