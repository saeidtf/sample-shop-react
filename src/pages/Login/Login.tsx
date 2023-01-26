import { TabContext, TabList } from "@mui/lab";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Card, Tab } from "@mui/material";
import React, { useState } from "react";
import LoginTab from "./components/LoginTab";
import RegisterTab from "./components/RegisterTab";

export default function Login() {
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {    
    setValue(newValue);
  };

  return (
    <Box
      height="100%"
      display="flex"
      justifyContent={"center"}
      alignItems="center"
    >
      <Card sx={{ width: 500, maxWidth: "100%", minHeight: 400 }}>
        <TabContext value={value}>
          <TabList
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Login" value={"1"} />
            <Tab label="Register" value={"2"} />
          </TabList>
          <TabPanel value={"1"}>
            <LoginTab />
          </TabPanel>
          <TabPanel value={"2"}>
            <RegisterTab />
          </TabPanel>
        </TabContext>
      </Card>
    </Box>
  );
}
