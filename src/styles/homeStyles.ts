import { createStyles, rem } from "@mantine/core";

export const homeStyles = createStyles((theme) => ({
  home: {
    width: "100%",
    position: "relative",
    boxSizing: "border-box",
    margin: "0 auto",
    padding: "0 16px 80px",
    minHeight: "calc(100vh - 60px)",
    top: "60px",
  },
}));
