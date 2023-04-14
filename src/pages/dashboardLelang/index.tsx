import React, { useState } from "react";
import FooterNavigation from "../../components/navigation";
import HeaderComponent from "../../components/header";
import { lelangStyles } from "../../styles/lelangStyles";
import DashboardBtnLelang from "../../components/dashboardLelang/DashboardBtnLelang";
import DashboardActionLelang from "../../components/dashboardLelang/DashboardActionLelang";
import { useParams } from "react-router-dom";
import CategoryLelang from "../../components/category";

type Props = {};

const DashboardLelang = (props: Props) => {
  const [title, setTitle] = useState<string>("Pilih Kategori Lelang");
  const { classes } = lelangStyles();
  const { isCreate } = useParams();
  return (
    <div>
      <HeaderComponent type="lelang" isCreate={isCreate} title={title} />
      <main id="dashboard-lelang-page" className={classes.home}>
        {isCreate === "create" ? (
          <div className={classes.create}>
            <CategoryLelang />
          </div>
        ) : (
          <>
            <DashboardBtnLelang />
            <DashboardActionLelang />
            <FooterNavigation navigation="lelang" />
          </>
        )}
      </main>
    </div>
  );
};

export default DashboardLelang;
