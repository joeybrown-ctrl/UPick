import { useEffect, useState } from 'react';

const useGeoLocation = () => {
    const [location, setLocation] = useState({
        loaded: false,
        coordinates: {
            latitude: 0,
            longitude: 0,
        },
    });

    const onSuccess = location => {
        setLocation({
            loaded: true,
            coordinates: {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            },
        });
    };

    const onError = error => {
        setLocation({
            loaded: true,
            error,
        });
    };

    useEffect(()=> {
        if(!('geolocation' in navigator)) {
            onError({
                code: 0,
                message: 'Geolocation not available',
            });
        }
        navigator.geolocation.getCurrentPosition(onSuccess, onError);

    }, []);

    return location;

};

export default useGeoLocation;