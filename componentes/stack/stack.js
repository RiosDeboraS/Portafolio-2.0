"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import style from "./stack.module.css";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        typography: "body1",
        color: "#F1F6F9",
        margin: "100px 100px 100px",
        background: "#b5c0d0",
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 2, borderColor: "#F1F6F9" }}>
          <TabList onChange={handleChange}>
            <Tab
              sx={{
                color: "Azure",
                background: "#b5c0d0",
                fontFamily: "inherit",
                fontSize: "20px",
              }}
              label=" Open stack tech"
              value="2"
            />
          </TabList>
        </Box>
        <TabPanel value="2">
          <img className={style.img} src="/icons8-expresar-js-50.png"></img>
          <img className={style.img} src="/icons8-rápidamente-48.png"></img>
          <img className={style.img} src="/icons8-siguientejs-48.png"></img>
          <img className={style.img} src="/icons8-reaccionar-30.png"></img>
          <img
            className={style.img}
            src="/icons8-logotipo-de-bootstrap-30.png"
          ></img>
          <img
            className={style.img}
            src="/icons8-logotipo-de-primavera-48.png"
          ></img>
          <img className={style.img} src="/icons8-javascript-50.png"></img>
          <br></br>
          <br></br>
          <img className={style.img} src="/icons8-java-50.png"></img>
          <img className={style.img} src="/icons8-mecanografiado-50.png"></img>
          <img className={style.img} src="/icons8-mongo-db-64.png"></img>
          <img className={style.img} src="/icons8-mi-sql-48.png"></img>
          <img className={style.img} src="/icons8-estibador-50.png"></img>
          <img className={style.img} src="/icons8-postgresql-50.png"></img>
          <img className={style.img} src="/icons8-redux-50.png"></img>
          <img className={style.img} src="/icons8-prisma-orm-50.png"></img>
          <br></br>
          <br></br>
          <img
            className={style.icon}
            src="https://skillicons.dev/icons?i=git,aws,sequelize,vercel,vscode,visualstudio,"
          />
          <br></br>
          <br></br>
          <img
            className={style.icon}
            src="https://skillicons.dev/icons?i=windows,notion,nodejs,idea,css,html"
          />
        </TabPanel>
        <TabPanel value="1"></TabPanel>
      </TabContext>
    </Box>
  );
}
