// import React from 'react'
// import Image from "next/image";
// import Link from "next/link";

// const SideBar = () => {
//     const products = Array.from({ length: 59 }, (_, index) => ({
//         id: null,
//         image: ``,
//         name: "",
//         description: "Men's Shoes",
//         price: `₹${10795 + index * 100}`,
//     }));
//   return (
//     <>
//      <div className="min-h-screen">

// {/* Main Content */}
// <div className="flex">
//     {/* Sidebar */}
//     <div className="w-1/4 hidden md:block bg-gray-50 border-r py-8 px-4">
//         <h2 className="font-bold text-lg mb-4">New <span className="text-gray-400">(500)</span></h2>
//         <ul className="space-y-2 text-gray-600">
//         <Link href="/all-shoes">
//         <li>
// Shoes
// </li>
// </Link>
//             <li>Sports Bras</li>
//             <li>Tops & T-Shirts</li>
//             <li>Hoodies & Sweatshirts</li>
//             <li>Jackets</li>
//             <li>Trousers & Tights</li>
//             <li>Shorts</li>
//             <li>Tracksuits</li>
//             <li>Skirts & Dresses</li>
//             <li>Socks</li>
//             <li>Accessories</li>
//             <li>Equipment</li>
//         </ul>
//         <hr className="my-8" />
//         <h3 className="font-semibold mt-8 mb-2">Gender</h3>
//         <ul className="space-y-2 text-gray-600">
//             <li><input type="checkbox" id="men" /> <label htmlFor="men" className="cursor-pointer">Men</label></li>
//             <li><input type="checkbox" id="women" /> <label htmlFor="women" className="cursor-pointer">Women</label></li>
//             <li><input type="checkbox" id="unisex" /> <label htmlFor="unisex" className="cursor-pointer">Unisex</label></li>
//         </ul>
//         <hr className="my-8" />
//         <h3 className="font-semibold mt-8 mb-2">Kids</h3>
//         <ul className="space-y-2 text-gray-600">
//             <li><input type="checkbox" id="men" /> <label htmlFor="men" className="cursor-pointer">Boys</label></li>
//             <li><input type="checkbox" id="women" /> <label htmlFor="women" className="cursor-pointer">Girls</label></li>
//         </ul>
//         <hr className="my-8" />
//         <h3 className="font-semibold mt-8 mb-2">Shop By Price</h3>
//         <ul className="space-y-2 text-gray-600">
//             <li>
//                 <input type="checkbox" id="price" />{" "}
//                 <label htmlFor="price" className="cursor-pointer">Under  ₹ 2 500.00 </label>
//             </li>
//             <li>
//                 <input type="checkbox" id="price" />{" "}
//                 <label htmlFor="price" className="cursor-pointer"> ₹ 2 501.00 -  ₹</label>
//             </li>
//         </ul>
//     </div>

//     {/* Product Grid */}
//     <div className="w-full md:w-3/4 p-8">
//         <div className="flex items-center mb-6 border-b pb-4 justify-center">
//             <div className="flex space-x-4">
//                 <button className="text-gray-600 border px-4 py-1 rounded hover:bg-gray-100">Filter</button>
//                 <select 
//                     className="border px-4 py-1 rounded text-gray-600"
//                     aria-label="Sort products"
//                 >
//                     <option>Sort By</option>
//                     <option>Price: Low to High</option>
//                     <option>Price: High to Low</option>
//                     <option>Newest</option>
//                 </select>
//             </div>
//         </div>

      
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//         {products.map((product) => (
//             <Link
//                 key={product.id}
//                 href={`/shoes-details/${product.id}`} // Dynamic link to product details
//                 className="block bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition duration-300"
//             >
//                 <Image
//                     src={product.image}
//                     alt={product.name}
//                     width={300}
//                     height={300}
//                     className="w-full h-48 object-cover rounded-md"
//                 />
//                 <div className="mt-4 text-center">
//                     <h3 className="font-semibold text-gray-700">{product.name}</h3>
//                     <p className="text-sm text-gray-500">{product.description}</p>
//                     <p className="font-bold mt-2">{product.price}</p>
//                 </div>
//             </Link>
//         ))}
//     </div>
//     </div>
// </div>
// </div>
//     </>
//   )
// }

// export default SideBar





// components/SideBar.tsx
import React from 'react'
import Image from "next/image";
import Link from "next/link";

interface Product {
    id: number | null;
    image: string;
    name: string;
    description: string;
    price: string;
}

interface SideBarProps {
    products: Product[];
    linkPrefix: string;  // New prop to customize the link
}

const SideBar: React.FC<SideBarProps> = ({ products,linkPrefix }) => {
    return (
        <div className="min-h-screen">
            {/* Main Content */}
            <div className="flex">
                {/* Sidebar */}
                <div className="w-1/4 hidden md:block bg-gray-50 border-r py-8 px-4">
                <h2 className="font-bold text-gray-700 text-lg mb-4">New <span className="text-gray-600">(500)</span></h2>
                    <ul className="space-y-2 text-gray-600">
                        <Link href="/all-shoes">
                            <li>Shoes</li>
                        </Link>

                        <Link href={"/all-sportsBras"}>
                            <li>Sports Bras</li>
                        </Link>


                        <Link href={"/all-hoodiesSweatshirts"}>
                            <li>Hoodies & Sweatshirts</li>
                        </Link>
                        <li>Tops & T-Shirts</li>
                        <li>Jackets</li>
                        <li>Trousers & Tights</li>
                        <li>Shorts</li>
                        <li>Tracksuits</li>
                        <li>Skirts & Dresses</li>
                        <li>Socks</li>
                        <li>Accessories</li>
                        <li>Equipment</li>
                    </ul>
                    <hr className="my-8" />
                    <h3 className="font-semibold mt-8 mb-2">Gender</h3>
                    <ul className="space-y-2 text-gray-600">
                        <li><input type="checkbox" id="men" /> <label htmlFor="men" className="cursor-pointer">Men</label></li>
                        <li><input type="checkbox" id="women" /> <label htmlFor="women" className="cursor-pointer">Women</label></li>
                        <li><input type="checkbox" id="unisex" /> <label htmlFor="unisex" className="cursor-pointer">Unisex</label></li>
                    </ul>
                    <hr className="my-8" />
                    <h3 className="font-semibold mt-8 mb-2">Kids</h3>
                    <ul className="space-y-2 text-gray-600">
                        <li><input type="checkbox" id="boys" /> <label htmlFor="boys" className="cursor-pointer">Boys</label></li>
                        <li><input type="checkbox" id="girls" /> <label htmlFor="girls" className="cursor-pointer">Girls</label></li>
                    </ul>
                    <hr className="my-8" />
                    <h3 className="font-semibold mt-8 mb-2">Shop By Price</h3>
                    <ul className="space-y-2 text-gray-600">
                        <li>
                            <input type="checkbox" id="price1" />{" "}
                            <label htmlFor="price1" className="cursor-pointer">Under ₹ 2 500.00 </label>
                        </li>
                        <li>
                            <input type="checkbox" id="price2" />{" "}
                            <label htmlFor="price2" className="cursor-pointer"> ₹ 2 501.00 - ₹ 5 000.00</label>
                        </li>
                    </ul>
                </div>

                {/* Product Grid */}
                <div className="w-full md:w-3/4 p-8">
                    <div className="flex items-center mb-6 border-b pb-4 justify-center">
                        <div className="flex space-x-4">
                            <button className="text-gray-600 border px-4 py-1 rounded hover:bg-gray-100">Filter</button>
                            <select
                                className="border px-4 py-1 rounded text-gray-600"
                                aria-label="Sort products"
                            >
                                <option>Sort By</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Newest</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {products.map((product) => (
                            <Link
                                key={product.id}
                                href={`${linkPrefix}/${product.id}`} // Dynamic link using the linkPrefix prop
                                className="block bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition duration-300"
                            >
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={300}
                                    height={300}
                                    className="w-full h-48 object-cover rounded-md"
                                />
                                <div className="mt-4 text-center">
                                    <h3 className="font-semibold text-gray-700">{product.name}</h3>
                                    <p className="text-sm text-gray-500">{product.description}</p>
                                    <p className="font-bold mt-2">{product.price}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
