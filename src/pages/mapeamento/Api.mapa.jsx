import { MapContainer, TileLayer, useMap, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.js";
import React, { useState } from "react";
import markerIcon from "assets/Pin-mapa.svg";

const customIcon = L.icon({
  iconUrl: markerIcon,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40], 
});

// Função para buscar coordenadas via API Nominatim
async function fetchCoordinatesByCEP(cep) {
  const formattedCep = cep.replace(/\D/g, ""); // Remove tudo que não é número 
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?postalcode=${formattedCep}&country=Brazil&format=json`
  );
  const data = await response.json();
  if (data && data.length > 0) {
    return {
      lat: parseFloat(data[0].lat),
      lon: parseFloat(data[0].lon),
    };
  }
  throw new Error("CEP não encontrado");
}

function ChangeView({ center }) {
  const map = useMap();
  map.setView(center, map.getZoom());
  return null;
}

function Map() {
  const [position, setPosition] = useState([-8.050433095454059, -34.8884111530504]); 
  const [cep, setCep] = useState("");

  const handleSearch = async () => {
    console.log("anne")
    try {
      const coords = await fetchCoordinatesByCEP(cep);
      console.log(coords)
      setPosition([coords.lat, coords.lon]);
    } catch (error) {
      alert(error.message || "Erro ao buscar CEP.");
    }
  };

  return (
    <div>
      {/* Input para o CEP */}
      <input
        type="text"
        value={cep}
        placeholder="Digite o CEP"
        onChange={(e) => setCep(e.target.value)}
        style={{ marginBottom: "10px" }}
      />
      <button onClick={handleSearch}>Buscar</button>

      {/* Mapa */}
      <MapContainer
        center={position}
        zoom={20}
        scrollWheelZoom={true}
        className="map-container"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ChangeView center={position} />
        <Marker position={position} icon={customIcon}/> 
      </MapContainer>
    </div>
  );
}

export default Map;