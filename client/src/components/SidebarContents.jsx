import { Box, Button, styled, List, ListItem } from "@mui/material";
import { CreateOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { SIDEBAR_DATA } from "../config/SIdeBar.config";

import ComposeMail from "./ComposeMail";

const ComposeButton = styled(Button)({
  background: "#c2e7ff",
  color: "#001d35",
  fontSize: 18,
  padding: 15,
  borderRadius: 16,
  minWidth: 140,
  textTransform: "none",
});

const Container = styled(Box)({
  padding: 10,
  "& > ul": {
    padding: "10px 0 0 5px",
    fontSize: 18,
    fontWeight: 500,
    cursor: "pointer",
  },
  "& > ul > li": {
    marginBottom: 10,
  },
  "& > ul > li > svg": {
    marginRight: 20,
  },
});

const SidebarContents = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const onComposeClick = () => {
    setOpenDialog(true);
  };
  return (
    <Container>
      <ComposeButton onClick={() => onComposeClick()}>
        <CreateOutlined />
        Compose
      </ComposeButton>
      <List>
        {SIDEBAR_DATA.map((data) => (
          <ListItem key={data.name}>
            <data.icon fontSize="medium" />
            {data.title}
          </ListItem>
        ))}
      </List>
      <ComposeMail openDialog={openDialog} setOpenDialog={setOpenDialog} />
    </Container>
  );
};

export default SidebarContents;
