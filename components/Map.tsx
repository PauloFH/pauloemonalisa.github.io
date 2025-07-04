import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


const icon = L.icon({
    iconUrl: "/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

interface MapProps {
    position1: [number, number];
    position2: [number, number];
}

const Map: React.FC<MapProps> = ({ position1, position2 }) => {
    const [route, setRoute] = useState<[number, number][]>([]);

    useEffect(() => {
        const fetchRoute = async () => {
            const response = await fetch(`http://router.project-osrm.org/route/v1/driving/${position1[1]},${position1[0]};${position2[1]},${position2[0]}?overview=full&geometries=geojson`);
            const data = await response.json();
            const routeCoordinates = data.routes[0].geometry.coordinates.map((coord: [number, number]) => [coord[1], coord[0]]);
            setRoute(routeCoordinates);
        };

        fetchRoute();
    }, [position1, position2]);

    return (
        <MapContainer center={position1} zoom={7} style={{ height: '100%', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position1} icon={icon} />
            <Marker position={position2} icon={icon} />
            {route.length > 0 && <Polyline positions={route} color="blue" />}
        </MapContainer>
    );
};

export default Map;