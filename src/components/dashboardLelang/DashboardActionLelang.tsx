import React from "react";
import { lelangStyles } from "../../styles/lelangStyles";
import SegmentControl from "./SegmentControl";

type Props = {};

const DashboardActionLelang = (props: Props) => {
  const { classes } = lelangStyles();
  return (
    <section className={classes.wrapLelangAction}>
      <SegmentControl />
    </section>
  );
};

export default DashboardActionLelang;
