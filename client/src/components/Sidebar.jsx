import React from "react";
import SidebarContents from "./SidebarContents";

import { Drawer, styled } from "@mui/material";
const Sidebar = ({ openDrawer }) => {
  return (
    <Drawer
      anchor="left"
      open={openDrawer}
      hideBackdrop={true}
      ModalProps={{
        keepMounted: true,
      }}
      variant="persistent"
      sx={{
        "& .MuiDrawer-paper": {
          marginTop: "64px",
          width: 250,
          backgroundColor: "#F5F5F5",
          border: "none",
          height: "calc(100vh- 64px)",
        },
      }}
    >
      <SidebarContents />
    </Drawer>
  );
};

export default Sidebar;
