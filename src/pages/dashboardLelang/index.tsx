import React from "react";
import FooterNavigation from "../../components/navigation";
import HeaderComponent from "../../components/header";
import { lelangStyles } from "../../styles/lelangStyles";
import DashboardBtnLelang from "../../components/dashboardLelang/DashboardBtnLelang";
import DashboardActionLelang from "../../components/dashboardLelang/DashboardActionLelang";

type Props = {};

const DashboardLelang = (props: Props) => {
  const { classes } = lelangStyles();
  return (
    <div>
      <HeaderComponent type="lelang" />
      <main id="dashboard-lelang-page" className={classes.home}>
        <DashboardBtnLelang />
        <DashboardActionLelang />
        <FooterNavigation navigation="lelang" />
      </main>
    </div>
  );
};

export default DashboardLelang;
