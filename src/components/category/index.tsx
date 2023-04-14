import React, { useState } from "react";
import { Card, Text, SimpleGrid, UnstyledButton, Indicator, Group } from "@mantine/core";
import {
  IconDeviceMobileVibration,
  IconHanger,
  IconCar,
  IconBuildingEstate,
  IconSquareKey,
  IconRun,
  IconWorldHeart,
  IconPuzzle,
  IconTools,
} from "@tabler/icons-react";
import { categoryStyles } from "../../styles/categoryStyles";

type Props = {};

const mockdata = [
  { title: "Elektronik", icon: IconDeviceMobileVibration, color: "violet" },
  { title: "Fashion", icon: IconHanger, color: "indigo" },
  { title: "Kendaraan", icon: IconCar, color: "blue" },
  { title: "Properti", icon: IconBuildingEstate, color: "green" },
  { title: "Koleksi", icon: IconSquareKey, color: "teal" },
  { title: "Olahraga", icon: IconRun, color: "cyan" },
  { title: "Hobi", icon: IconWorldHeart, color: "pink" },
  { title: "Perlengkapan", icon: IconTools, color: "red" },
  { title: "Lainnya", icon: IconPuzzle, color: "orange" },
];

const CategoryLelang = (props: Props) => {
  const [category, setCategory] = useState<string>("");
  const { classes, theme } = categoryStyles();
  const items = mockdata.map((item) => (
    <UnstyledButton
      key={item.title}
      className={classes.item}
      onClick={() => setCategory(item.title)}
    >
      <item.icon color={theme.colors[item.color][6]} size="2rem" />
      <Text size="xs" mt={7}>
        <Indicator
          inline
          label="✅"
          size={12}
          color="transparent"
          disabled={category !== item.title}
          offset={-5}
        >
          {item.title}
        </Indicator>
      </Text>
    </UnstyledButton>
  ));
  console.log(category);
  return (
    <Card withBorder radius="md" className={classes.card}>
      <Group position="apart">
        <Text className={classes.title}>Kategori</Text>
        <Text size="xs" color="dimmed" sx={{ lineHeight: 1 }}>
          Pilih kategori lelang
        </Text>
      </Group>
      <SimpleGrid cols={3} mt="md">
        {items}
      </SimpleGrid>
    </Card>
  );
};

export default CategoryLelang;
