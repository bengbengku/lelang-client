import React from "react";
import { Title, Button, Text } from "@mantine/core";
import { introStyles } from "../../styles/introStyles";
import { IconMessage2Question } from "@tabler/icons-react";
import { Link } from "react-router-dom";

type Props = {};

const Intro = (props: Props) => {
  const { classes } = introStyles();
  return (
    <div className={classes.intro}>
      <Title order={3} mt="1.25rem" size="18px">
        Lakukan Lelang Secara Langsung!
      </Title>
      <div className={classes.button}>
        <Link to="/dashboard/lelang">
          <Button radius="xl" fullWidth color="yellow.6">
            <Text fz={16} fw={700}>
              Lelang Sekarang
            </Text>
          </Button>
        </Link>
        <Button
          leftIcon={<IconMessage2Question />}
          variant="outline"
          radius="xl"
          fullWidth
          color="yellow.5"
          mt="0.5rem"
        >
          <Text fz={16} fw={700}>
            Tanya Tentang Galelang
          </Text>
        </Button>
      </div>
    </div>
  );
};

export default Intro;
