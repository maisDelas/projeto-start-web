import { ContainerMap } from "./Mapa.styles";
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


function Map () {


  const position = [51.505, -0.09];

  return (
    <MapContainer
      center={position}
      zoom={20}
      scrollWheelZoom={false}
      // className="map-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default Map;