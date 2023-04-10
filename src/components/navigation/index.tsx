import React from "react";
import { SegmentedControl, Text } from "@mantine/core";
import { IconHome2, IconUserCircle, IconMail, IconHandStop, IconGavel } from "@tabler/icons-react";
import { footerNavStyles } from "../../styles/footerNavStyles";

type Props = {};

const FooterNavigation = (props: Props) => {
  const { classes } = footerNavStyles();
  return (
    <div className={classes.navigation}>
      <SegmentedControl
        data={[
          {
            value: "beranda",
            label: (
              <div className={classes.itemNav}>
                <IconHome2 size="1.2rem" />
                <Text>Beranda</Text>
              </div>
            ),
          },
          {
            value: "lelang",
            label: (
              <div className={classes.itemNav}>
                <IconGavel size="1.2rem" />
                <Text>Lelang</Text>
              </div>
            ),
          },
          {
            value: "bid",
            label: (
              <div className={classes.itemNav}>
                <IconHandStop size="1.2rem" />
                <Text>Bid</Text>
              </div>
            ),
          },
          {
            value: "inbox",
            label: (
              <div className={classes.itemNav}>
                <IconMail size="1.2rem" />
                <Text>Inbox</Text>
              </div>
            ),
          },
          {
            value: "akun",
            label: (
              <div className={classes.itemNav}>
                <IconUserCircle size="1.2rem" />
                <Text>Akun</Text>
              </div>
            ),
          },
        ]}
        fullWidth
        size="xs"
        color="yellow.6"
        transitionDuration={500}
        transitionTimingFunction="linear"
      />
    </div>
  );
};

export default FooterNavigation;
