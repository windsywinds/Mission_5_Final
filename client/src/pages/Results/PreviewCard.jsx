import { useState, useEffect } from 'react'

import bedIcon from '../../../assets/bed-icon.svg'
import bathIcon from '../../../assets/bath-icon.svg'
import garageIcon from '../../../assets/garage-icon.svg'

export const PreviewCard = ({ property }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const formattedCurrentDate = currentDate.toLocaleDateString('en-GB'); // Format to 'DD/MM/YYYY'

    //get users system date
  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  if (!property) {
    // Handle the case where property or propertyID is not available
    return null;
  }

    return(
        <div className="">
            {property && 
                <div className="max-w-[350px] flex flex-row bg-white drop-shadow-lg">
                <div className="flex flex-col flex-shrink-0 w-[35%] h-[180px]">
              <img className="h-full w-full object-cover" src={`.${property.image[0]}`} alt="Property Image" />
            </div>

                <div className="flex flex-col ml-4 mt-3">
                    <div className="space-y-2 text-xs">
                    <h5>{[property.address, property.suburb].filter(Boolean).join(', ')}</h5>
                    <h5>{property.city} city</h5>

                        <p className="font-semibold">${property.price} per week</p>
                        <div className="flex flex-row space-x-4">
                            <div className="flex flex-row h-full gap-x-2 -mt-[1px] items-center justify-center">
                                <img className="h-7" src={bedIcon} alt="bedroom icon"/><p>{property.bedrooms}</p>
                            </div>
                            <div className="flex flex-row h-full gap-x-2 items-center justify-center ">
                                <img className="h-6"  src={bathIcon} alt="bathroom icon"/><p>{property.bathrooms}</p>
                            </div>
                            <div className="flex flex-row h-full gap-x-2 items-center justify-center ">
                                <img className="h-6"  src={garageIcon} alt="garage icon"/><p>{property.garage}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex h-full items-end mb-2">
                    <p className="flex text-[#a6a6a6] text-xs">
                            Available: {property && property.available <= formattedCurrentDate ? 'Now' : property.available}
                    </p>

                    </div>
                </div>
            </div>
            }
        </div>
    )
}