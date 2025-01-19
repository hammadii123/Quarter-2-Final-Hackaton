import React from 'react'
import SideBar from '../components/SideBar';

const page:React.FC  = () => {
    const sportsBraNames = [
        "Nike Pro Sports Top", 
        "Adidas Ultimate Top", 
        "Under Armour Rush Top", 
        "Reebok Hero Racer Top", 
        "Puma Epic Sports Top"
    ];
    
    const products = Array.from({ length: 5 }, (_, index) => ({
        id: index + 1,
        image: `/sportsBras/image ${index+1}.png`,
        name: sportsBraNames[index],
        description: "Stylish support for every workout.",
        price: `₹${10795 + index * 100}`,
    }));
    const linkPrefix = '/sportsTop-details';  // Dynamic link prefix for this page
  return (
    <SideBar products={products} linkPrefix={linkPrefix} />
    
  )
}

export default page