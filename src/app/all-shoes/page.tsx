import Image from "next/image";
import Link from "next/link";

export default function Home() {

    const shoeNames = [
        "Nike Air Force 1", "Nike Air Max 97", "Nike Air Zoom Pegasus", "Nike Air Max 90", "Nike Air Jordan 1", 
        "Nike Air VaporMax", "Nike Dunk Low", "Nike Blazer Mid", "Nike React Element 55", "Nike Free RN", 
        "Nike ZoomX Vaporfly Next%", "Nike SB Dunk Low", "Nike Air Max 1", "Nike Air Huarache", "Nike Air Max 270", 
        "Nike Air Presto", "Nike Cortez", "Nike Zoom Freak 1", "Nike Flyknit Racer", "Nike Air Max 720", 
        "Nike Air Jordan 4", "Nike Air Zoom Structure", "Nike LunarEpic Flyknit", "Nike LeBron 18", "Nike Kyrie 6", 
        "Nike Air Max 200", "Nike Air Tailwind 79", "Nike Air Max Plus", "Nike Air Force 270", "Nike React Infinity Run", 
        "Nike Zoom Winflo 7", "Nike Air Zoom Alpha", "Nike Shox R4", "Nike Air Max 2090", "Nike Blazer Low", 
        "Nike Air Max 95", "Nike Air Jordan 3", "Nike Air Zoom Pegasus 37", "Nike Roshe One", "Nike Air Huarache Run", 
        "Nike SB Dunk High", "Nike React Element 87", "Nike Zoom Freak 2", "Nike Air Max Deluxe", "Nike Air Zoom 2K", 
        "Nike Air Zoom Fly 3", "Nike Air Zoom Freak 3", "Nike PG 5", "Nike Air VaporMax Plus", "Nike Zoom Freak 4", 
        "Nike Zoom Kobe 6 Protro", "Nike Air Max 98", "Nike Air Max 95 Ultra", "Nike SB Dunk High Pro", "Nike Air Zoom Freak 5", 
        "Nike LeBron 17", "Nike Air Zoom Terra Kiger 7", "Nike AlphaDunk", "Nike React Element 87", "Nike ZoomX Invincible Run"
    ];

    // Product data array for 90 products
   const products = Array.from({ length: 59 }, (_, index) => ({
        id: index + 1,
        image: `/Shoes/image ${index+1}.png`,
        name: shoeNames[index],
        description: "Men's Shoes",
        price: `₹${10795 + index * 100}`,
    }));

    return (
        <>
        <div className="min-h-screen">

        {/* Main Content */}
        <div className="flex">
            {/* Sidebar */}
            <div className="w-1/4 hidden md:block bg-gray-50 border-r py-8 px-4">
            <h2 className="font-bold text-gray-700 text-lg mb-4">New <span className="text-gray-600">(500)</span></h2>
                <ul className="space-y-2 text-gray-600">
                <Link href="/all-shoes">
                    <li>
                        Shoes
                    </li>
                </Link>
                <Link href={"/all-sportsBras"}>
                    <li>
                        Sports Bras
                        </li>
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
                    <li><input type="checkbox" id="men" /> <label htmlFor="men" className="cursor-pointer">Boys</label></li>
                    <li><input type="checkbox" id="women" /> <label htmlFor="women" className="cursor-pointer">Girls</label></li>
                </ul>
                <hr className="my-8" />
                <h3 className="font-semibold mt-8 mb-2">Shop By Price</h3>
                <ul className="space-y-2 text-gray-600">
                    <li>
                        <input type="checkbox" id="price" />{" "}
                        <label htmlFor="price" className="cursor-pointer">Under  ₹ 2 500.00 </label>
                    </li>
                    <li>
                        <input type="checkbox" id="price" />{" "}
                        <label htmlFor="price" className="cursor-pointer"> ₹ 2 501.00 -  ₹</label>
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
                        href={`/shoes-details/${product.id}`} // Dynamic link to product details
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
    </>
)};