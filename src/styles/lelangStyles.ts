import { createStyles, rem } from "@mantine/core";

export const lelangStyles = createStyles((theme) => ({
  home: {
    width: "100%",
    position: "relative",
    boxSizing: "border-box",
    margin: "0 auto",
    padding: "0 16px 80px",
    minHeight: "calc(100vh - 60px)",
    top: "60px",
  },
  wrapCreateLelang: {
    paddingTop: "20px !important",
  },
  btnCreateLelang: {
    width: "100%",
    padding: "1rem",
    marginTop: "1em",
    cursor: "pointer",
    background: "transparent",
    outline: "2px solid transparent",
    outlineOffset: "2px",
    borderWidth: "1px",
    borderStyle: "dashed",
    borderColor: "#fff",
    borderRadius: "0.25rem",
    color: "#FFD53D",
    fontWeight: 700,
  },
  textPanduan: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    padding: "0.5rem 0.5rem",
  },
  wrapLelangAction: {
    paddingTop: "2rem",
  },
}));
