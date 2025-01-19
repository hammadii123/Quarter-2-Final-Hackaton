import React from 'react'
import SideBar from '../components/SideBar';

const page:React.FC  = () => {
    const hoodiesSweatshirtNames = [
        "Nike Sportswear Hoodie",
        "Adidas Essentials Sweatshirt",
        "Under Armour ColdGear Hoodie"
    ];
    
    const products = Array.from({ length: 3 }, (_, index) => ({
        id: index + 1,
        image: `/Hoodies-sweatShirts/image ${index+1}.png`,
        name: hoodiesSweatshirtNames[index],
        description: "Cozy, stylish, and perfect for every occasion.",
        price: `₹${10795 + index * 100}`,
    }));
    const linkPrefix = '/hoodiesSweatshirts-details';  // Dynamic link prefix for this page
  return (
    <SideBar products={products} linkPrefix={linkPrefix} />
    
  )
}

export default page