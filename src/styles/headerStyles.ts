import { createStyles, rem } from "@mantine/core";

export const headerStyles = createStyles((theme) => ({
  header: {
    position: "fixed",
    right: 0,
    left: 0,
    top: 0,
    width: "100%",
    background: theme.colors.yellow[6],
    zIndex: 11,
  },
  wrapper: {
    maxWidth: "480px",
    display: "flex",
    margin: "0 auto",
    WebkitBoxPack: "justify",
    justifyContent: "space-between",
    WebkitBoxAlign: "center",
    alignItems: "center",
    width: "100%",
    height: "60px",
  },
  img: {
    width: "140px",
    objectFit: "contain",
    transform: "translateY(8px)",
    marginLeft: "0.625rem",
  },
  search: {
    width: "100%",
    display: "flex",
    background: theme.colors.yellow[5],
    paddingLeft: "20px",
    paddingRight: "10px",
    justifyContent: "space-between",
    WebkitBoxPack: "justify",
    WebkitBoxAlign: "center",
    alignItems: "center",
    borderStyle: "none",
    borderRadius: "20px",
    marginRight: "15px",
  },
  titleLelangSaya: {
    marginLeft: "0.835rem",
  },
}));
