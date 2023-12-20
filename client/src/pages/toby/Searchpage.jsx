import { useState, useEffect } from "react";
import Mapview from "./Mapview";
import PropertyDisplayBox from "./PropertyDisplayBox";
import axios from "axios";
import Icon from "../../components/Icon";
import FilterBox from "./FilterBox";

const API_ENDPOINT = import.meta.env.VITE_SERVER_URI;

export default function Searchpage() {
    //All the search input data stored here along with suggestions from the server
    const [isMapview, setMapView] = useState(false);
    const [searchAddress, setSearchAddress] = useState("");
    const [keyWords, setKeyWords] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    //data responses of properties stored here
    const [properties, setProperties] = useState([]);
    const [responseError, setResponseError] = useState(false);

    //stores the sort value
    const [sort, setSort] = useState("featured first");

    const [filterBox, setFilterBox] = useState("");
    const [filterValues, setFilterValues] = useState({});

    const setFilters = (key, amount) => {
        setFilterValues({ ...filterValues, [key]: amount });
    };

    useEffect(() => {
        setFilterBox("");
        const requestBody = { address: searchAddress, keywords: keyWords, ...filterValues };
        searchBackendDatabase(requestBody);
    }, [filterValues]);

    const handleFilterOnBlur = (e, name) => {
        if (e.relatedTarget === null) {
            setFilterBox("");
            return;
        }
        if (e.relatedTarget.id !== name) {
            setFilterBox("");
        }
        console.log(e.relatedTarget);
    };

    const countKeywords = (text, keywords) => {
        const regexPattern = keywords.map((keyword) => `\\b${keyword}\\b`).join("|");
        const regex = new RegExp(regexPattern, "gi");
        const matches = text.match(regex);
        return matches ? matches.length : 0;
    };

    const handleSort = (listings, sortFunc) => {
        if (!Array.isArray(listings)) return;
        const sortingFunctions = {
            "featured first": (a, b) => {
                if (a.address === searchAddress) {
                    return -1;
                } else if (b.address === searchAddress) {
                    return 1;
                }

                const keywordCountA = countKeywords(a.description, keyWords);
                const keywordCountB = countKeywords(b.description, keyWords);

                return keywordCountB - keywordCountA;
            },
            "lowest price": (a, b) => {
                return a.price - b.price;
            },
            "highest price": (a, b) => {
                return b.price - a.price;
            },
            "latest listings": (a, b) => {
                return new Date(b.listed) - new Date(a.listed);
            },
        };
        const newOrder = listings.sort(sortingFunctions[sortFunc]);
        return newOrder;
    };

    const searchBackendDatabase = (requestBody) => {
        axios
            .post(`${API_ENDPOINT}search-properties`, requestBody)
            .then((res) => {
                console.log(res.data);
                setResponseError(false);
                setProperties(handleSort(res.data, sort));
            })
            .catch((err) => {
                console.log(err);
                setResponseError(true);
            });
    };

    const handleSearch = () => {
        // if (searchAddress === "" && keyWords === "") return;
        const requestBody = { address: searchAddress, keywords: keyWords };
        setShowSuggestions(false);
        searchBackendDatabase(requestBody);
    };

    const handleInputChange = (e, isAddress) => {
        if (isAddress) {
            setSearchAddress(e.target.value);
            setShowSuggestions(true);
            console.log("address");
        } else {
            let temp = e.target.value.split(",");
            temp = temp.filter((word) => word !== "" && word.trim());
            setKeyWords(temp);
        }
    };

    const handleSortChange = (e) => {
        setSort(e.target.value);
        setProperties(handleSort(properties, e.target.value));
    };

    useEffect(() => {
        if (searchAddress !== "" || (searchAddress === undefined && showSuggestions)) {
            axios
                .post(`${API_ENDPOINT}search`, { searchTerm: searchAddress })
                .then((res) => {
                    if (res.data.length > 0) {
                        setSuggestions(res.data);
                    } else {
                        setSuggestions([]);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            setSuggestions([]);
        }
    }, [searchAddress]);

    return (
        <div className="flex flex-col w-full items-center" style={{ width: "100%", height: "200vh" }}>
            <div className="flex flex-col w-full items-center justify-center" style={{ backgroundColor: "white" }}>
                <h2 className="text-2xl md:text-3xl font-bold text-black text-center mt-12 sm:py-6">Our Latest Rental Property Listings</h2>
                <div className="flex flex-col w-[95%] lg:w-[80%] h-auto items-center justify-center relative">
                    <div className="flex w-full justify-center md:justify-start">
                        <input
                            type="text"
                            id="default-input"
                            placeholder="Search Property Address"
                            className="w-11/12 h-8 md:w-9/12 md:h-14  p-2 m-2 border border-gray-400 bg-white text-black"
                            value={searchAddress}
                            onChange={(e) => handleInputChange(e, true)}
                            onBlur={(e) => {
                                if (e.relatedTarget === null) {
                                    console.log("blur");
                                    setSuggestions([]);
                                    setShowSuggestions(false);
                                    return;
                                }
                                if (e.relatedTarget.value === "sug") {
                                    return;
                                }
                                if (suggestions.length > 0) {
                                    console.log("blur");
                                    setSuggestions([]);
                                    setShowSuggestions(false);
                                }
                            }}
                        />
                        {suggestions.length > 0 && showSuggestions && (
                            <div className="w-11/12 md:w-9/12 h-auto z-10 bg-white absolute m-2 mt-10 md:mt-16 border-2 border-gray-400">
                                {suggestions.map((suggestion) => {
                                    return (
                                        <button
                                            key={suggestion}
                                            value="sug"
                                            className="w-full border-b-2 border-gray-400 text-left p-6 hover:bg-gray-100 text-gray-500 font-medium"
                                            onClick={() => {
                                                console.log(suggestion);

                                                setSearchAddress(suggestion);
                                                setSuggestions([]);
                                                setShowSuggestions(false);
                                            }}
                                        >
                                            {suggestion}
                                        </button>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col w-full items-center justify-center md:justify-start md:flex-row">
                        <input
                            type="text"
                            id="default-input"
                            placeholder="Add Keywords e.g: parking, supermarket, gym"
                            className="w-11/12 h-8  md:w-9/12 md:h-14 p-2  m-2  border border-gray-400 bg-white text-black"
                            onChange={(e) => handleInputChange(e, false)}
                        />
                        <button class="w-11/12 md:w-2/12 md:grow bg-red-600 h-8 md:h-14 m-2 text-white text-md md:text-sm" onClick={handleSearch}>
                            Search Property
                        </button>
                    </div>
                    <div className="grid grid-cols-3 md:flex w-[95%] p-2 pb-2 md:w-[100%] float-left relative">
                        <button value="filter-button" class="border-2 border-red-600 text-white bg-red-600 rounded-lg px-2 m-1 md:px-4  text-xs md:text-sm">
                            Refine
                        </button>
                        <button value="filter-button" class="border-2 border-red-600 text-red-600 rounded-lg px-2 py-0.5 m-1 md:px-4 text-xs md:text-sm">
                            Blockhouse bay <Icon icon="downRed" size="2" style="pb-1 pl-1" />
                        </button>
                        <button
                            onClick={() => {
                                setFilterBox("rent");
                            }}
                            onBlur={(e) => handleFilterOnBlur(e, "rent")}
                            value="filter-button"
                            id="rent"
                            class="border-2 border-red-600 text-red-600 rounded-lg px-0.5 py-0.5 m-1 md:px-4  text-xs md:text-sm relative"
                        >
                            $X - $X per week <Icon icon="downRed" size="2" style="pb-1 pl-1" />
                            {filterBox === "rent" && (
                                <FilterBox
                                    id="filter"
                                    value="Rent per week"
                                    rangeValues={["Any", 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300]}
                                    dir="left"
                                    _id="rent"
                                    setRange={setFilters}
                                    currValues={filterValues?.rent || [0, 0]}
                                />
                            )}
                        </button>
                        <button
                            onClick={() => {
                                setFilterBox("bedroom");
                            }}
                            onBlur={(e) => handleFilterOnBlur(e, "bedroom")}
                            value="filter-button"
                            id="bedroom"
                            class="border-2 border-red-600 text-red-600 rounded-lg px-2 py-0.5 m-1 md:px-4  text-xs md:text-sm relative"
                        >
                            Bedroom <Icon icon="downRed" size="2" style="pb-1 pl-1" />
                            {filterBox === "bedroom" && (
                                <FilterBox
                                    id="filter"
                                    value="Bedroom"
                                    rangeValues={["Any", 1, 2, 3, 4, 5, 6]}
                                    dir="right"
                                    _id="bedroom"
                                    setRange={setFilters}
                                    currValues={filterValues?.bedroom || [0, 0]}
                                />
                            )}
                        </button>

                        <button
                            onClick={() => {
                                setFilterBox("bathroom");
                            }}
                            onBlur={(e) => handleFilterOnBlur(e, "bathroom")}
                            value="filter-button"
                            id="bathroom"
                            class="border-2 border-red-600 text-red-600 rounded-lg px-2 py-0.5 m-1 md:px-4  text-xs md:text-sm relative"
                        >
                            Bathroom <Icon icon="downRed" size="2" style="pb-1 pl-1" />
                            {filterBox === "bathroom" && (
                                <FilterBox
                                    id="filter"
                                    value="Bathroom"
                                    rangeValues={["Any", 1, 2, 3, 4]}
                                    dir="right"
                                    _id="bathroom"
                                    setRange={setFilters}
                                    currValues={filterValues?.bathroom || [0, 0]}
                                />
                            )}
                        </button>

                        <button value="filter-button" class="border-2 border-red-600 text-red-600 rounded-lg px-2 py-0.5 m-1 md:px-4  text-xs md:text-sm">
                            Pets Ok <Icon icon="downRed" size="2" style="pb-1 pl-1" />
                        </button>
                    </div>
                </div>
            </div>
            {/* Second container */}
            <div className="flex w-11/12 lg:w-[80%] h-auto justify-center pt-6 pb-12 px-2">
                {/* The search results side */}
                <div className={`w-[95%] h-auto md:w-[60%] lg:w-[50%] xl:w-[40%]`}>
                    <div className="flex">
                        <select
                            id="sort"
                            name="sortMenu"
                            value={sort}
                            className="flex-none w-[70%] md:w-[90%] mb-4  p-2 border-2 border-gray-400 text-gray-400"
                            onChange={handleSortChange}
                        >
                            <option value="featured first">Featured First</option>
                            <option value="lowest price">Lowest Price</option>
                            <option value="highest price">Highest Price</option>
                            <option value="latest listings">Latest Listings</option>
                        </select>
                        <button
                            onClick={() => setMapView(!isMapview)}
                            className="flex md:hidden grow border-2 border-gray-400 mx-2 mb-4 justify-center items-center font-semibold text-sm"
                        >
                            {!isMapview ? "Map View" : "List View"}
                        </button>
                    </div>
                    <>
                        <div className={`${isMapview && "hidden"} md:w-[90%]  md:block flex-col items-center  max-h-[75vh] overflow-y-scroll `}>
                            {/* <img src="images\2SBD\1.jpg" /> */}
                            {properties.length > 0 && (
                                <p className="text-black font-bold w-[90%] m-auto text-left text-lg md:text-2xl">
                                    We found {properties.length} properties for rent that match your criteria
                                </p>
                            )}
                            {!responseError &&
                                properties.length > 0 &&
                                properties.map((property) => {
                                    return (
                                        <PropertyDisplayBox
                                            image={property.image[1]}
                                            location={`${property.address}, ${property.suburb}, ${property.district}, ${property.city}`}
                                            price={property.price}
                                            bedrooms={property.bedrooms}
                                            bathrooms={property.bathrooms}
                                            garage={property.garage === "yes" ? 1 : 0}
                                            availability={property.available}
                                        />
                                    );
                                })}
                            {!responseError && properties.length === 0 && <p className="text-black font-semibold text-center">Could not find any listings...</p>}
                            {responseError && <p className="text-red-600 text-center">An unexpected error occured</p>}
                        </div>
                    </>
                    <>
                        <div className={`${!isMapview && "hidden"} md:hidden w-full h-[80vh] p-6`}>
                            <Mapview geolocations={properties} />
                        </div>
                    </>
                </div>
                {/* The map side - only visible from medium screens and above */}
                <div className={`hidden md:flex w-[60%] h-[80vh] bg-red-300`}>
                    <Mapview geolocations={properties} />
                </div>
            </div>
        </div>
    );
}
