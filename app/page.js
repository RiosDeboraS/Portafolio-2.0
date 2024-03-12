import { Nav } from "@/Components/nav";
import styles from "./page.module.css";
import { Contact } from "@/Components/contact";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Portafolio</p>
        <Nav></Nav>
        <Contact></Contact>
      </div>
    </main>
  );
}
