import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './MapBox.css';
import {connect} from "react-redux";

mapboxgl.accessToken =
    'pk.eyJ1IjoidmFzaWxpaXlhciIsImEiOiJja2kzcDYwbWUwaTF5MnlzeTN4eDN0YnY4In0.kx6yb2E59PIPNUOqt5WeIw';

const MapBox = (props) => {
    const mapContainerRef = useRef(null);

    const [lng, setLng] = useState(5);
    const [lat, setLat] = useState(34);
    const [zoom, setZoom] = useState(1.5);
    const [mapRef, setMapRef] = useState();

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

        setMapRef(map);

        return () => map.remove();
    }, []);

    useEffect(() => {
        if (mapRef != null) {
            drawRoute(mapRef, props.coord)
        }
    }, [props.coord])

    return (
        <div>
            <div className='map-container' ref={mapContainerRef} />
        </div>
    );
};

export const drawRoute = (map, coordinates) => {
    if (coordinates.length === 0) {
        map.removeLayer("route");
        map.removeSource("route");
        return;
    }

    map.flyTo({
        center: coordinates[0],
        zoom: 15
    });

    map.addLayer({
        id: "route",
        type: "line",
        source: {
            type: "geojson",
            data: {
                type: "Feature",
                properties: {},
                geometry: {
                    type: "LineString",
                    coordinates
                }
            }
        },
        layout: {
            "line-join": "round",
            "line-cap": "round"
        },
        paint: {
            "line-color": "#ffc617",
            "line-width": 8
        }
    });
};

const mapStateToProps = (state) => {
    return {
        coord: state.route.coordinates
    }
}

export default connect(mapStateToProps)(MapBox);