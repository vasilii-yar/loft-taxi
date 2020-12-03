import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './MapBox.css';

mapboxgl.accessToken =
    'pk.eyJ1IjoidmFzaWxpaXlhciIsImEiOiJja2kzcDYwbWUwaTF5MnlzeTN4eDN0YnY4In0.kx6yb2E59PIPNUOqt5WeIw';

const MapBox = () => {
    const mapContainerRef = useRef(null);

    const [lng, setLng] = useState(5);
    const [lat, setLat] = useState(34);
    const [zoom, setZoom] = useState(1.5);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/vasiliiyar/cki3pbwfg4q9e19lrfky1u3qs',
            center: [lng, lat],
            zoom: zoom
        });

        map.addControl(new mapboxgl.NavigationControl(), 'top-right');

        map.on('move', () => {
            setLng(map.getCenter().lng.toFixed(4));
            setLat(map.getCenter().lat.toFixed(4));
            setZoom(map.getZoom().toFixed(2));
        });

        return () => map.remove();
    }, []);

    return (
        <div>
            <div className='map-container' ref={mapContainerRef} />
        </div>
    );
};

export default MapBox;