import React, { useState } from "react";
import { SegmentedControl, Text } from "@mantine/core";
import { IconHome2, IconUserCircle, IconMail, IconHandStop, IconGavel } from "@tabler/icons-react";
import { footerNavStyles } from "../../styles/footerNavStyles";
import { Link } from "react-router-dom";

type Props = {
  navigation: string;
};

const FooterNavigation = ({ navigation }: Props) => {
  const { classes } = footerNavStyles();
  const [value, setValue] = useState<string>(navigation);
  return (
    <div className={classes.navigation}>
      <SegmentedControl
        value={value}
        onChange={setValue}
        data={[
          {
            value: "beranda",
            label: (
              <Link to="/" className={classes.itemNav}>
                <IconHome2 size="1.2rem" />
                <Text>Beranda</Text>
              </Link>
            ),
          },
          {
            value: "lelang",
            label: (
              <Link to="/dashboard/lelang" className={classes.itemNav}>
                <IconGavel size="1.2rem" />
                <Text>Lelang</Text>
              </Link>
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
