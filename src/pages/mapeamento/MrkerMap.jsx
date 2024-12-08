import { Marker, Popup } from "react-leaflet";

function MarkerComponent({ position, description }) {
  return (
    <Marker position={position}>
      <Popup>{description || "Localização"}</Popup>
    </Marker>
  );
}

export default MarkerComponent;