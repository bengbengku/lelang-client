import React, { useEffect, useState } from "react";
import socket from "../../services/socket";
import HeaderComponent from "../../components/header";
import { homeStyles } from "../../styles/homeStyles";
import Intro from "../../components/intro";

const HomePage = () => {
  const { classes } = homeStyles();
  return (
    <>
      <HeaderComponent />
      <main id="home-page" className={classes.home}>
        <Intro />
      </main>
    </>
  );
};

export default HomePage;
