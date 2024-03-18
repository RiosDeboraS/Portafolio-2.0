"use client";

import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import style from "./boton.module.css";

export default function FloatingActionButtons() {
  return (
    <div className={style.div}>
      <a
        className={style.a}
        href="/Rios Debora Sabrina (14).pdf"
        download="Rios Debora Sabrina (14).pdf"
      >
        <button className={style.boton}>
          CV
          <FontAwesomeIcon icon={faDownload} />
        </button>
      </a>
    </div>
  );
}
