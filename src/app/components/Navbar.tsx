"use client"
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from "next/link";

import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";


import "../../app/globals.css"


const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
   


    // Flowbite NavBar
    <>
<div className="bg-white shadow-md fixed w-full z-10 mb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <a href="#" className="text-2xl font-bold text-gray-800">
                  <Link href={"/"}><img src="/logo/favicon.svg" alt="" width={40}/></Link>
                </a>
              </div>
  
              {/* Links (Hidden on small screens) */}
              <div className="hidden md:flex space-x-6 items-center">
                <Link href="/location" className="text-gray-700 hover:text-gray-900">
                  Find Store
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-gray-900">
                  Help
                </Link>
                <Link href="/join-us" className="text-gray-700 hover:text-gray-900">
                  Join Us
                </Link>
                <Link
                  href="/sign-in"
                  className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-900"
                >
                  Sign In
                </Link>
              </div>
  
              {/* Hamburger Menu (Visible on small screens) */}
              <div className="flex md:hidden mr-3">
                <button
                  onClick={() => setIsSidebarOpen(true)}
                  className="text-gray-800 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
  
        {/* Sidebar */}
        {isSidebarOpen && (
          <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out md:hidden z-20">
            <div className="flex justify-between items-center p-4 border-b">
              <span className="text-lg font-bold text-gray-800">Menu</span>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="text-gray-800 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col space-y-4 p-4">
              <Link href="/location" className="text-gray-700 hover:text-gray-900">
                Find Store
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-gray-900">
                Help
              </Link>
              <Link href="/join-us" className="text-gray-700 hover:text-gray-900">
                Join Us
              </Link>

              <Link  href={"/all-products"} className=" text-gray-700  hover:text-gray-900">New $ featured</Link>
              <ol className="ml-3 py-2 text-gray-500 ">
              
                    <li className='hover:text-gray-800 space-y-2'>
                    <Link href="/all-shoes">
                        Shoes
                        </Link>
                    </li>
                
                
                    <li className='hover:text-gray-800 space-y-2'>
                    <Link href={"/all-sportsBras"}>
                        Sports Bras
                        </Link>
                        
                        </li>
               

                
                    <li className='hover:text-gray-800 space-y-2'>
                    <Link href={"/all-hoodiesSweatshirts"}>
                    Hoodies & Sweatshirts
                </Link>
                </li>
                    <li>Tops & T-Shirts</li>
                    <li>Jackets</li>
                    <li>Trousers & Tights</li>
                    <li>Shorts</li>
                    <li>Tracksuits</li>
                    <li>Skirts & Dresses</li>
                    <li>Socks</li>
                    <li>Accessories</li>
                    <li>Equipment</li>
              </ol>
              <Link  href={"/all-products"} className=" text-gray-700 hover:text-gray-900">Men</Link>
              <Link  href={"/all-products"} className=" text-gray-700 hover:text-gray-900">Women</Link>
              <Link  href={"/all-products"} className=" text-gray-700 hover:text-gray-900">Kids</Link>
              <Link  href={"/all-products"} className=" text-gray-700 hover:text-gray-900">Sale</Link>
              <Link href={"/all-products"}  className=" text-gray-700 hover:text-gray-900">SNKRS</Link>
              <Link
                href="/sign-in"
                className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-900 w-[100px]"
              >
                Sign In
              </Link>
            </div>
          </div>

          
        )}


 
{/* // portion2 */}
          <div className="text-gray-600 body-font hidden md:flex md:pt-16 pt-20">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link href={"/"}  className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <img src={"/logo.png"} alt={"Logo"} />
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />

             
            </Link>
            <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
              <Link  href={"/all-products"} className="mr-5 hover:text-gray-900">New $ featured</Link>
            
              <Link  href={"/all-products"} className="mr-5 hover:text-gray-900">Men</Link>
              <Link  href={"/all-products"} className="mr-5 hover:text-gray-900">Women</Link>
              <Link  href={"/all-products"} className="mr-5 hover:text-gray-900">Kids</Link>
              <Link  href={"/all-products"} className="mr-5 hover:text-gray-900">Sale</Link>
              <Link href={"/all-products"}  className="mr-5 hover:text-gray-900">SNKRS</Link>
            </div>
            <div className="flex gap-x-4">
            <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search"
            className="border bg-white border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none"
          />
          <FaSearch className="absolute right-3 top-2.5 text-gray-500 " />
        </div>
              
                <CiHeart className="md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px]  cursor-pointer hover:text-black" />
              
             
                <IoBagOutline className=" md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] cursor-pointer hover:text-black" />
              
            </div>
          </div>
        </div>

        <div className="pt-20 md:pt-16">
  {/* All other body content goes here */}
</div>

    </>
     
  );
  
}

export default Navbar;

