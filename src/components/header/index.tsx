import React from "react";
import { headerStyles } from "../../styles/headerStyles";
import { ActionIcon, Text, Title } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import img from "../../assets/galelang.png";

type Props = {
  type: string;
};

const HeaderComponent = ({ type }: Props) => {
  const { classes } = headerStyles();
  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        {type === "home" && (
          <>
            <img src={img} alt="galelang-logo" className={classes.img} />
            <div className={classes.search}>
              <Text c="white" fz={12} fw={600}>
                Mencari sesuatu?
              </Text>
              <ActionIcon variant="transparent" style={{ cursor: "default", color: "#fff" }}>
                <IconSearch size="1rem" />
              </ActionIcon>
            </div>
          </>
        )}
        {type === "lelang" && (
          <Title order={4} color="#fff" className={classes.titleLelangSaya}>
            Lelang Saya
          </Title>
        )}
      </div>
    </header>
  );
};

export default HeaderComponent;
