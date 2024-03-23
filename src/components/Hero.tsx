"use client"
import Image from "next/image";
import CustomButton from './CustomButton';
const Hero = () => {
    const handleScroll = ()=>{

    }
  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">
            Your Premier Destination for Hassle-Free Car Rentals
            </h1>
            <p className="hero__subtitle">
                Streamline your car rental experience with our effortless booking process.
            </p>
            <CustomButton title="Explore Cars"
            containerStyles="rounded-full bg-primary-yellow text-black rounded-full mt-10 "
            handleClick={handleScroll}
            />
        </div>
        <div
        className="hero__image-container">
            <div className="hero__image">
                <Image src={"/hero.png"} alt="Hero" fill className="object-contain"></Image> 
                </div>
                <div className="hero__image-overlay"></div>
             
            </div>
        </div>
   
  )
}

export default Hero