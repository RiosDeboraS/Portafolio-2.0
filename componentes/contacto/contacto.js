import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import style from "./contacto.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InboxIcon from "@mui/icons-material/Inbox";

export default function SizeAvatars() {
  return (
    <div>
      <Stack className={style.div} direction="row" spacing={2}>
        <Avatar
          alt="Debora Sabrina Rios"
          src="/Captura-de-pantalla-_89_.ico"
          sx={{ width: 70, height: 70 }}
        />
      </Stack>
      <div className={style.contacto}> Contacto:</div>
      <a href="https://www.linkedin.com/in/debora-sabrina-rios-fullstack/">
        <button className={style.botones}>
          <LinkedInIcon></LinkedInIcon>
        </button>
      </a>
      <a href="https://github.com/RiosDeboraS">
        <button className={style.botones}>
          <GitHubIcon></GitHubIcon>
        </button>
      </a>

      <a href="mailto:Riosdeborasabrina@gmail.com">
        <button className={style.botones}>
          <InboxIcon></InboxIcon>
        </button>
      </a>
    </div>
  );
}
