import { Nav } from "@/componentes/nav/Nav";
import styles from "./page.module.css";
import Galery from "@/componentes/Galery/galery";

import SizeAvatars from "@/componentes/contacto/contacto";
import Divider from "@/componentes/division";
import { Footer } from "@/componentes/footer/footer";

export default function app() {
  return (
    <main className={styles.main}>
      <div className={styles.description}></div>

      <Nav />
      <Divider />
      <Galery />
      <Divider />
      <SizeAvatars />
      <Divider />
      <Footer />
    </main>
  );
}
