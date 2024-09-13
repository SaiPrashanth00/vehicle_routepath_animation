import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const MapComponent = ({ path }) => {
  const [position, setPosition] = useState(path[0]);
  const mapRef = useRef();
  const vehicleIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/55/55283.png', // Use a proper icon URL or path
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16],
  });

  useEffect(() => {
    if (path.length > 0) {
      const interval = setInterval(() => {
        setPosition((prevPosition) => {
          const index = path.indexOf(prevPosition);
          if (index < path.length - 1) {
            return path[index + 1];
          }
          clearInterval(interval);
          return prevPosition;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [path]);

  return (
    <MapContainer
      center={path[0]}
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
      whenCreated={(map) => { mapRef.current = map; }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Polyline positions={path} color="blue" />
      <Marker position={position}icon={vehicleIcon}>

      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
