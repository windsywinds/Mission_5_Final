
//imports the users variables they set on the homepage search
import { useState } from 'react';
import {UserSearchTerms} from './Homepage/searchContext'

import { useNavigate } from 'react-router-dom';

export const Results = () => {
    const [filters, setFilters] = useState([])
    const [address, setAddress] = useState("")
    const { search } = UserSearchTerms(); //allow use of search variables
    const navigate = useNavigate(); //to use navigation



    
    const onAddressChange = (e) => {
        //handle the user typing an input addres to search
      };

    const onFiltersChange = (e) => {
        //handle updating the filter selection as the user adds this
      };
    const handleSearch = (e) => {
        e.preventDefault()
        //when the user clicks the search button
      };

    //send user to the page of the listing they choose
    const handleListingSelection = (property) => {
      //you can use useParams on the listing page to get the propertyID and route like this
        navigate(`/listing/${property.propertyID}`); 
      };
    
    return(
        <div>
            <h1>Listing Results Page</h1>
            <p>{search && search[0].city}</p>
            <p>{search && search[0].district}</p>
            <p>{search && search[0].suburb}</p>
        </div>
    )
}