import { Footer } from "@/componentes/footer/footer";
import { Animacion } from "@/componentes/3D/animacion";
import Carousel from "@/componentes/Galery/carreousel";

export default function app() {
  return (
    <div>
      <Animacion />
      <Carousel />
      <Footer />
    </div>
  );
}
