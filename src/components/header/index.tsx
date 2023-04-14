import React from "react";
import { headerStyles } from "../../styles/headerStyles";
import { ActionIcon, Text, Title } from "@mantine/core";
import { IconSearch, IconChevronLeft } from "@tabler/icons-react";
import img from "../../assets/galelang.png";
import { useNavigate } from "react-router-dom";

type Props = {
  type: string;
  title: string;
  isCreate: string | undefined;
};

const HeaderComponent = ({ type, isCreate, title }: Props) => {
  const { classes } = headerStyles();
  const navigate = useNavigate();

  function navigateHome() {
    navigate("/dashboard/lelang");
  }
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
        {type === "lelang" && isCreate !== "create" && (
          <Title order={4} color="#fff" className={classes.titleLelangSaya}>
            Lelang Saya
          </Title>
        )}
        {type === "lelang" && isCreate === "create" && (
          <div className={classes.titleLelangSaya}>
            <ActionIcon radius="xl" variant="transparent" onClick={navigateHome}>
              <IconChevronLeft size="5rem" />
            </ActionIcon>
            <Text fz={18} fw={700} c="white">
              {title}
            </Text>
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderComponent;
