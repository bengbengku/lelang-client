import React, { useEffect, useState } from "react";
import socket from "../../services/socket";
import HeaderComponent from "../../components/header";
import { homeStyles } from "../../styles/homeStyles";
import Intro from "../../components/intro";
import FooterNavigation from "../../components/navigation";

const HomePage = () => {
  const { classes } = homeStyles();
  return (
    <>
      <HeaderComponent />
      <main id="home-page" className={classes.home}>
        <Intro />
        <FooterNavigation />
      </main>
    </>
  );
};

export default HomePage;
