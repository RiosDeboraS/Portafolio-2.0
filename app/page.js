import Galery from "@/componentes/Galery/galery";

import { Footer } from "@/componentes/footer/footer";
import { Animacion } from "@/componentes/3D/animacion";
import Divider from "@/componentes/division";

export default function app() {
  return (
    <div>
      <Animacion />
      <Divider />
      <Galery />
      <Footer />
    </div>
  );
}
