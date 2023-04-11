import { createStyles, SegmentedControl, rem } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    boxShadow: theme.shadows.md,
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[1]
    }`,
  },

  indicator: {
    backgroundImage: theme.fn.gradient({ from: "yellow.8", to: "yellow.5" }),
  },

  control: {
    border: "0 !important",
  },

  label: {
    "&, &:hover": {
      "&[data-active]": {
        color: theme.white,
      },
    },
  },
}));

type Props = {};

const SegmentControl = (props: Props) => {
  const { classes } = useStyles();
  return (
    <SegmentedControl
      radius="xl"
      size="sm"
      data={["Semua", "Aktif", "Berakhir", "Dalam Review"]}
      classNames={classes}
    />
  );
};

export default SegmentControl;
