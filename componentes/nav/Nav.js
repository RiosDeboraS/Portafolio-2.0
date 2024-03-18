import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import style from "./nav.module.css";
import FloatingActionButtons from "../boton.cv/boton-cv";
import VerticalLinearStepper from "../about/about";

export const Nav = () => {
  return (
    <div>
      <Avatar
        className={style.avatar}
        alt="Debora Sabrina Rios"
        src="/Captura-de-pantalla-_89_.ico"
      />

      <h2 className={style.h2}>Debora Sabrina Rios</h2>
      <VerticalLinearStepper />
      <FloatingActionButtons />
    </div>
  );
};
