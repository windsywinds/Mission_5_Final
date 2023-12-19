import React from "react";
import Icon from "../../components/Icon";

export default function PropertyDisplayBox({ image, location, price, bedrooms, bathrooms, garage, availability }) {
    return (
        <div
            className="flex flex-col md:flex-row m-auto w-[90%] sm:w-[70%] md:w-[90%] aspect-card md:aspect-video bg-white my-5 hover:cursor-pointer"
            style={{ filter: "drop-shadow(-1px 7px 6px #787373)", transitionDuration: "0.3s" }}
        >
            <div className="flex basis-[50%] md:basis-[40%] bg-gray-300 " style={{ backgroundImage: `url(${image})`, backgroundPosition: "center", backgroundSize: "cover" }}></div>
            <div className="w-full md:w-[60%] ">
                <p className=" px-2 md:px-1 pt-2 font-medium text-xs lg:text-sm">{location}</p>
                <p className="px-2 md:py-2 font-semibold text-sm lg:text-base">${price} per week</p>
                <p className="px-2 font-semibold text-sm lg:text-base">
                    <Icon icon="bed" size="6" style=" mr-1" />
                    {bedrooms}
                    <Icon icon="bath" size="5" style="ml-2 mr-1" />
                    {bathrooms} <Icon icon="garage" size="5" style="ml-2 mr-1" /> {garage}
                </p>

                <p className="absolute bottom-0 p-2 text-gray-500 text-xs">Availability: {availability}</p>
            </div>
        </div>
    );
}
