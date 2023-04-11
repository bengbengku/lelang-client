import { createStyles, rem } from "@mantine/core";

export const footerNavStyles = createStyles((theme) => ({
  navigation: {
    width: "100%",
    maxWidth: "480px",
    display: "inline-block",
    listStyleType: "none",
    position: "fixed",
    bottom: "0px",
    left: "50%",
    verticalAlign: "middle",
    textAlign: "center",
    lineHeight: "13px",
    margin: "0px",
    transform: "translate(-50%)",
    zIndex: 2,
  },
  itemNav: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    color: "#fff",
  },
}));
