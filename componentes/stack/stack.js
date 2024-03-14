"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

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
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 2, borderColor: "#F1F6F9" }}>
          <TabList onChange={handleChange}>
            <Tab sx={{ color: "#F1F6F9" }} label="Frameworks" value="1" />
            <Tab
              sx={{ color: "#F1F6F9" }}
              label="Programming languages"
              value="2"
            />
          </TabList>
        </Box>
        <TabPanel value="1">Next.js, React.js</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
      </TabContext>
    </Box>
  );
}
