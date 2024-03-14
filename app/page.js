import { Nav } from "@/componentes/Nav";
import styles from "./page.module.css";
import Galery from "@/componentes/Galery/galery";
import Stack from "@/componentes/stack/stack";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}></div>
      <Nav />
      <Stack />
      <Galery />
    </main>
  );
}
