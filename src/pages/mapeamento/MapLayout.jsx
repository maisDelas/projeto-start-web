import MapProviders from "./context/MapProviders";
import Mapeamento from "./Mapa";

export default function MapLayout(){
  return(
    <MapProviders>
      <Mapeamento/>
    </MapProviders>
  )
}