'use client'

import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
const Map = () => {
    const markerIcon = new Icon({
        iconUrl: "/images/marker.png",
        iconSize: [23, 33],
    });

    return (
        <MapContainer
            attributionControl={false}
            center={[37.940343, 58.393846]}
            zoom={15}
            style={{ width: "100%", height: "100%", borderRadius: "10px" }}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker icon={markerIcon} position={[37.940343, 58.393846]}></Marker>
        </MapContainer>
    );
};

export default Map;
