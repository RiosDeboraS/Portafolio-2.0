import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import style from "./nav.module.css";
import FloatingActionButtons from "../boton.cv/boton-cv";
import VerticalLinearStepper from "../about/about";

export const Nav = () => {
  return (
    <div>
      <h2 className={style.h2}>Debora Sabrina Rios</h2>
      <p className={style.p}>
        Desarrolladora Full-Stack especilizada en Back-end
      </p>
      <br />

      <FloatingActionButtons />
    </div>
  );
};
