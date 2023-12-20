
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { getData } from '../services/getData';

import bedIcon from '../../assets/bed-icon.svg'
import bathIcon from '../../assets/bath-icon.svg'
import garageIcon from '../../assets/garage-icon.svg'
import phoneIcon from '../../assets/footer-phone-icon.svg'

export const ListingPage = () => {
    const { propertyID } = useParams();
    const navigate = useNavigate(); //to use navigation
    const [property, setProperty] = useState(null);
    const [propertyImage, setPropertyImage] = useState(0)
    const [currentDate, setCurrentDate] = useState(new Date());
    const formattedCurrentDate = currentDate.toLocaleDateString('en-GB'); // Format to 'DD/MM/YYYY'

    //get users system date
  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  //get property entry to display
  useEffect(() => {
    const fetchPropertyData = async () => {
      try {
        const data = await getData();
        const currentListing = data.find(item => item.propertyID === propertyID);
        setProperty(currentListing);

      } catch (error) {
        console.error('Error fetching property data:', error);
      }
    };

    if (propertyID) {
      fetchPropertyData();
    }
  }, [propertyID]);

  const returnToResults = () => {
    navigate(`/search/`);
  }

  const onClickRight = (e) => {
    e.preventDefault()
    setPropertyImage((prevIndex) => (prevIndex + 1) % property.image.length);
  }
  const onClickLeft = (e) => {
    e.preventDefault()
    setPropertyImage((prevIndex) => (prevIndex - 1 + property.image.length) % property.image.length);
  }
  const handleBooking = () => {
    navigate(`/booking/${propertyID}`);
  }

    return(
        <div className="flex flex-col w-full h-full items-center pt-8 mb-8">
            <div className="flex w-2/3 items-left cursor-pointer" onClick={returnToResults}>
                <p className="flex flex-row gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#d70707" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5M12 19l-7-7 7-7"></path></svg>
                        Back to property listing</p>
            </div>
    {property && 
            <div className="flex flex-col w-full h-full mt-6 items-center">
                <div className="flex flex-row w-full h-full items-center  justify-center">
                <button className="bg-[#d70707] -mr-5 z-10 relative py-0 px-0 w-8 h-8 flex items-center justify-center text-white rounded-full" onClick={onClickLeft}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5M12 19l-7-7 7-7"></path></svg>
</button>

                    <div className="w-2/3 h-[32rem] items-center">
                        <img className="h-full w-full object-cover" src={`..${property.image[propertyImage]}`} alt="Property Image" /></div>
                    <button className="bg-[#d70707] -ml-5 z-10 relative py-0 px-0 w-8 h-8 flex items-center justify-center text-white rounded-full" onClick={onClickRight}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7"></path>
</svg>
</button>
                </div>

                <div className="flex flex-row w-2/3 justify-between mt-6 ">

                    <div className="flex flex-col w-[65%] ">
                        <div className="flex flex-row w-full">
                            <h5 className="my-2 w-1/2">{[property.address, property.suburb, property.city].filter(Boolean).join(', ')}</h5>
                            <p className="my-2 w-1/2 text-right">${property.price} per week</p>
                        </div>
                        <div className="flex flex-row w-full space-x-4">
                            <div className="flex flex-row h-full gap-x-2 -mt-[1px] items-center justify-center">
                                <img className="h-7" src={bedIcon} alt="bedroom icon"/><p>{property.bedrooms}</p>
                            </div>
                            <div className="flex flex-row h-full gap-x-2 items-center justify-center ">
                                <img className="h-6"  src={bathIcon} alt="bathroom icon"/><p>{property.bathrooms}</p>
                            </div>
                            <div className="flex flex-row h-full gap-x-2 items-center justify-center ">
                                <img className="h-6"  src={garageIcon} alt="garage icon"/><p>{property.garage}</p>
                            </div>
                            <div className="flex flex-grow justify-end">
                            <p className="text-right text-[#a6a6a6]">Property ID: {property.propertyID}</p>
                            </div>
                        </div>
                        
                        <div className="w-full border-b-2 my-4"></div>

                        <div className="flex flex-col w-2/3 space-y-4">
                            <div className="flex flex-row w-full text-left">
                                <p className="flex w-1/2 text-left">Accomodation</p> <p>{property.bedrooms} bedrooms, {property.bathrooms} bathrooms</p>
                            </div>
                            <div className="flex flex-row w-full text-left">
                                <p className="flex w-1/2 text-left">Rent</p> <p className="">${property.price} per week</p>
                            </div>
                            <div className="flex flex-row w-full text-left">
                                <p className="flex w-1/2 text-left">Date Available</p> <p className="">{property && property.available <= formattedCurrentDate ? 'Now' : property.available}</p>
                            </div>
                            <div className="flex flex-row w-full text-left" >
                                <p className="flex w-1/2 text-left">Pet Friendly</p> <p className="">{property.pets}</p>
                            </div>
                            <div className="flex flex-row w-full text-left">
                                <p className="flex w-1/2 text-left">Smoker Friendly</p> <p className="">{property.smokers}</p>
                            </div>
                            <div className="flex flex-row w-full text-left">
                                <p className="flex w-1/2 text-left">Street Parking</p> <p className="">{property.streetparking}</p>
                            </div>
                        
                        </div>

                        <div className="w-full border-b-2 my-4"></div>

                        <h2 className="text-xl md:text-2xl font-bold">Description</h2>
                        <p className="py-6">{property.description}</p>
                    </div>


                    <div className="flex flex-col flex-grow max-w-[30%]">

                        <div className="flex flex-col w-full bg-white drop-shadow-[0px_5px_10px_rgba(0,0,0,0.25)] mb-8">
                            <div className="flex flex-col w-full mx-4 my-2 gap-y-1 text-xs">
                                <div className="flex flex-row w-full text-lg">
                                    <p className="w-2/3">Cost to Move In</p> <p>${property.price * 5}</p>
                                </div>
                                <p className="w-2/3">This Includes:</p> 
                                <div className="flex flex-row w-full">
                                    <p className="w-2/3">Bond (4 weeks rent)</p> <p>(${property.price * 4})</p>
                                </div>
                                <div className="flex flex-row w-full">
                                    <p className="w-2/3">One week in advanced</p> <p>(${property.price})</p>
                                </div>
                            </div>
                        </div>

                        <button className="bg-[#d70707] w-full py-2 rounded-md text-white" onClick={handleBooking}>Book to view this property</button>

                        <div className="flex flex-col bg-white drop-shadow-[0px_5px_10px_rgba(0,0,0,0.25)] items-center justify-center mt-8">
                        <div className="flex flex-col w-full mx-4 my-2 gap-y-1 text-xs items-center justify-center text-center">
                            <p className="text-sm font-semibold">Still Not Sure If This Is The Right Property For You?</p>
                            <svg width="60" height="60" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.0667 35.9667C26.8667 45.4 34.6 53.1 44.0333 57.9333L51.3667 50.6C52.2667 49.7 53.6 49.4 54.7667 49.8C58.5 51.0333 62.5333 51.7 66.6667 51.7C68.5 51.7 70 53.2 70 55.0333V66.6667C70 68.5 68.5 70 66.6667 70C35.3667 70 10 44.6333 10 13.3333C10 11.5 11.5 10 13.3333 10H25C26.8333 10 28.3333 11.5 28.3333 13.3333C28.3333 17.5 29 21.5 30.2333 25.2333C30.6 26.4 30.3333 27.7 29.4 28.6333L22.0667 35.9667Z" fill="black"/>
                                </svg>
                                <p>Call us on 09 391 4642 and one of our agents will help you assess your needs before you make your decision</p>

                            </div>
                            </div>
                    </div>
                </div>
                    
            </div>

    }


            
        </div>

    )
}