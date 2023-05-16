'use client';
import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%'
};

const center = {
    lat: 6.673175,
    lng: -1.565423
};

const MapComponent = (props:any) => {

    const {
        zoom,
    } = props;

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: (process.env.NEXT_PUBLIC_MAP_KEY)!.toString(),
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map: React.SetStateAction<any>) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        // const bounds = new window.google.maps.LatLngBounds(center);
        // map.fitBounds(bounds);

        // setMap(map);
    }, [])

    const onUnmount = React.useCallback(function callback(map: React.SetStateAction<any>) {
        // setMap(null)
    }, []);

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={zoom ?? 13.0}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
        </GoogleMap>
    ) : <></>
    }

export default React.memo(MapComponent)