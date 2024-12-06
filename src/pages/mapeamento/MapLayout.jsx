import MapProviders from "./context/MapProviders";
import Mapeamento from "./Mapa";
import Footer from "Components/footer/Footer";
import NavU from "Components/navbar/Nav.usuario";

export default function MapLayout(){
  return(
    <MapProviders>
      <NavU/>
      <Mapeamento/>
      <Footer />
    </MapProviders>
  )
}