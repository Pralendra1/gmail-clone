import {
  Dialog,
  Box,
  Typography,
  styled,
  InputBase,
  TextField,
  Button,
} from "@mui/material";
import { DeleteOutline, Close } from "@mui/icons-material";
import React, { useState } from "react";

const dialogStyle = {
  maxHeight: "100%",
  maxWidth: "100%",
  height: "90%",
  width: "80%",
  boxShadow: "none",
  borderRadius: "10px 10px 0 0",
};

const Header = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 15px",
  background: "#f2f6fc",
  "& > p": {
    fontSize: 16,
    fontWeight: 500,
  },
});

const ReceipentsWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "0 15px",
  "& > div": {
    fontSize: 16,
    borderBottom: "1px solid #f5f5f5",
    marginTop: 10,
  },
});

const Footer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 15px",
  alignItems: "center",
});

const SendButton = styled(Button)({
  background: "#0B57D0",
  color: "#fff",
  fontWeight: 500,
  fontSize: 16,
  textTransform: "none",
  borderRadius: "18px",
  width: 100,
});

const ComposeMail = ({ openDialog, setOpenDialog }) => {
  const closeComposeMail = (e) => {
    e.preventDefault();
    setOpenDialog(false);
  };

  const config = {
    Host: "smtp.elasticemail.com",
    Username: "maxdog@yopmail.com",
    Password: "41EF12D58C8CA63FF321E5264DA127C1ABA7",
    Port: 2525,
  };

  const sendMail = (e) => {
    e.preventDefault();
    if (window.Email) {
      window.Email.send({
        ...config,
        To: data.to,
        From: "maxmyspacedog@gmail.com",
        Subject: data.subject,
        Body: data.body,
      })
        .then((message) => {
          alert(message);
          setOpenDialog(false);
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          alert("Failed to send email. Please try again.");
        });
    } else {
      console.error("Email library not initialized");
      alert("Email sending library not initialized. Please try again.");
    }
  };

  const [data, setData] = useState("");

  const onValueChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  return (
    <Dialog open={openDialog} PaperProps={{ sx: dialogStyle }}>
      <Header>
        <Typography>New Message</Typography>
        <Close fontSize="small" onClick={(e) => closeComposeMail(e)} />
      </Header>
      <ReceipentsWrapper>
        <InputBase
          placeholder="Recipients"
          name="to"
          onChange={(e) => onValueChange(e)}
        />
        <InputBase
          placeholder="Subject"
          name="subject"
          onChange={(e) => onValueChange(e)}
        />
      </ReceipentsWrapper>
      <TextField
        multiline
        rows={25}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": { border: "none" },
        }}
        name="body"
        onChange={(e) => onValueChange(e)}
      />
      <Footer>
        <SendButton onClick={(e) => sendMail(e)}>Send</SendButton>
        <DeleteOutline onClick={() => setOpenDialog(false)} />
      </Footer>
    </Dialog>
  );
};

export default ComposeMail;
