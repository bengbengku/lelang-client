import React from "react";
import { Badge, Text } from "@mantine/core";
import { IconWorldQuestion } from "@tabler/icons-react";
import { lelangStyles } from "../../styles/lelangStyles";
import { Link, useNavigate } from "react-router-dom";

const DashboardBtnLelang = () => {
  const { classes } = lelangStyles();
  const navigate = useNavigate();

  function btnNavigate() {
    navigate("/dashboard/lelang/create");
  }

  return (
    <section className={classes.wrapCreateLelang}>
      <Badge radius="xs" color="yellow.3">
        Buat Lelang
      </Badge>
      <button className={classes.btnCreateLelang} onClick={btnNavigate}>
        Buat Lelang Baru +
      </button>
      <div className={classes.textPanduan}>
        <IconWorldQuestion size={16} />
        <Text c="dimmed" fz={11}>
          Ingin lelangmu lebih sukses?{" "}
          <Link to="/" style={{ fontWeight: 700, color: "#FFD52F" }}>
            Lihat panduan galelang
          </Link>
        </Text>
      </div>
    </section>
  );
};

export default DashboardBtnLelang;
