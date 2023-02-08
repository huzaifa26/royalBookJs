import { GoogleMap, DirectionsRenderer, Marker } from "@react-google-maps/api";
import { useCallback, useState, useEffect, useRef } from "react";


const GoogleMaps = (props) => {
    const [map, setMap] = useState(null)
    const mapRef = useRef();

    const center = {
        lat: props.lat,
        lng: props.lng
    };

    const mapStyles = {
        maxWidth: "100%",
        height: "100%",
    };

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const options = {
        mapTypeId: 'satellite',
        disableDefaultUI: true
    };

    return (
            <GoogleMap
                center={center}
                zoom={18}
                mapContainerStyle={mapStyles}
                onLoad={onMapLoad}
                onUnmount={onUnmount}
                options={options}
            >
                <Marker
                    onLoad={onMapLoad}
                    position={center}
                />
            </GoogleMap>
    )
}

export default GoogleMaps;