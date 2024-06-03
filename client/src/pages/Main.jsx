import React, { useState } from "react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Mails from "../components/Mails";

const Main = () => {
  const [openDrawer, setopenDrawer] = useState(true);

  const toggleDrawer = () => {
    setopenDrawer((prevState) => !prevState);
  };

  return (
    <div>
      <Header toggleDrawer={toggleDrawer} />
      <Mails></Mails>
      <Sidebar openDrawer={openDrawer} />
    </div>
  );
};

export default Main;
