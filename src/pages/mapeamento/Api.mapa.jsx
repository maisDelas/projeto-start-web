import { ContainerMap } from "./Mapa.styles";
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


function Map () {

  function onMapClick (e) {
      alert(e.latlng)
  }

  const position = [-8.050433095454059, -34.8884111530504];

  return (
    <MapContainer
      center={position}
      zoom={20}
      scrollWheelZoom={true}
      // className="map-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
       // onClick={onMapClick}
      />
    </MapContainer>
  );
}

export default Map;