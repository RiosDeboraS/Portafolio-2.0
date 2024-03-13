"use client";

import styles from "./page.module.css";

import { NextUIProvider } from "@nextui-org/react"; // Install and correct path

export default function Home({ children }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        {children}
        <main className={styles.main}>
          <div className={styles.description}></div>
        </main>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
