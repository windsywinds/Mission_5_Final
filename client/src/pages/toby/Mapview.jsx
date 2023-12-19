import { useState, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker, OverlayView } from "@react-google-maps/api";
import { all } from "axios";
import locationIcon from "../../assets/location-icon.svg";
import PropertyDisplayBox from "./PropertyDisplayBox";

// Function to calculate the Haversine distance between two points
function haversine(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth radius in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers

    return distance;
}

// Function to calculate the optimal Google Maps zoom level based on geolocations
function calculateZoomLevel(locations) {
    const MAX_ZOOM = 21;
    const MIN_ZOOM = 1;

    if (locations.length < 2) {
        return MIN_ZOOM;
    }

    let maxDistance = 0;

    for (let i = 0; i < locations.length; i++) {
        for (let j = i + 1; j < locations.length; j++) {
            const distance = haversine(locations[i].lat, locations[i].lng, locations[j].lat, locations[j].lng);

            maxDistance = Math.max(maxDistance, distance);
        }
    }

    // Adjust the following constants based on your preferences
    const ZOOM_FACTOR = 1.5;
    const MAP_WIDTH = 600; // Width of your map container in pixels

    const zoom = MAX_ZOOM - Math.log2(maxDistance * ZOOM_FACTOR * (MAP_WIDTH / 256));
    return zoom;
    return Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, Math.round(zoom)));
}

const centerDefault = {
    lat: -36.906578, // default latitude
    lng: 174.914451, // default longitude
};
const libraries = ["places"];
const mapContainerStyle = {
    width: "100%",
    height: "100%",
};
export default function Mapview({ geolocations }) {
    const [geo, setGeo] = useState([]);

    const [zoom, setZoom] = useState(20);

    // const map = useMap();
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        libraries,
    });
    useEffect(() => {
        if (geolocations.length > 0) {
            const allLocations = geolocations.map((location) => {
                return { lat: location?.geolocation.latitude, lng: location?.geolocation.longitude };
            });
            if (geolocations.length === 1) {
                setZoom(20);
            } else {
                setZoom(calculateZoomLevel(allLocations));
            }

            setGeo(allLocations);
        } else {
            setGeo([]);
        }
    }, [geolocations]);

    return (
        <div className="flex grow stretch h-[100%] bg-green-600 drop-shadow-lg border-4 border-gray-200">
            {isLoaded && (
                <GoogleMap mapContainerStyle={mapContainerStyle} zoom={zoom - 4} center={geo.length > 0 ? geo[0] : centerDefault}>
                    {geo.length > 0 &&
                        geolocations.map((property, index) => {
                            return (
                                // <Marker key={index} position={mark}>
                                //     test
                                // </Marker>
                                <>
                                    <OverlayView key={index} position={geo[index]} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
                                        <div className="group relative">
                                            <div className="hidden group-hover:block w-[20rem] h-[14rem] absolute bottom-2 ml-[-9rem] justify-center z-10">
                                                <PropertyDisplayBox
                                                    image={property.image[1]}
                                                    location={`${property.address}, ${property.suburb}, ${property.district}, ${property.city}`}
                                                    price={property.price}
                                                    bedrooms={property.bedrooms}
                                                    bathrooms={property.bathrooms}
                                                    garage={property.garage === "yes" ? 1 : 0}
                                                    availability={property.availabile}
                                                />
                                            </div>
                                            <img src={locationIcon} alt="location icon" className="w-10 h-10 bg-white rounded-full group-hover:cursor-pointer" />
                                        </div>
                                        {/* <div>test</div> */}
                                    </OverlayView>
                                </>
                            );
                        })}
                </GoogleMap>
            )}
        </div>
    );
}
