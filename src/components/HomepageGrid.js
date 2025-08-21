import React from "react";
import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionGridItem = motion(GridItem);

const HomepageGrid = () => {
  const flipVariants = {
    hidden: { rotateY: 180, opacity: 0 },
    visible: {
      rotateY: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const services = [
    {
      title: "Groundworks Slabbing",
      description:
        "Groundworks slabbing is the process of preparing and laying a concrete slab foundation. It involves clearing and leveling the site, adding a layer of hardcore for stability, setting up formwork, placing reinforcement, and pouring concrete to create a sturdy base for structures like buildings and patios.",
    },
    {
      title: "Garden Walls",
      description:
        "Garden walls serve both functional and aesthetic purposes in landscaping. Constructed from materials like brick, stone, or timber, they provide privacy, reduce noise, and act as windbreakers. They can also support climbing plants, adding greenery and enhancing the garden's visual appeal.",
    },
    {
      title: "Slating, Tiling of Roofs, Drains and Turfing",
      description:
        "Slate and tile roofs are durable and aesthetically pleasing roofing options. They require proper drainage systems, such as gutters and downspouts, to prevent water damage. Turfing, or green roofing, can be integrated to improve insulation, reduce runoff, and create an eco-friendly roof that blends with the natural environment.",
    },
  ];

  return (
    <Box p={5} mt="150px">
      <Text color="white" fontSize="80px" ml="10%" mt="-100px" mb="20px">
        Highlander Construction Ltd.
      </Text>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {services.map((service, index) => (
          <MotionGridItem
            key={index}
            bg="rgba(0, 0, 0, 0.7)"
            color="white"
            borderRadius="lg"
            boxShadow="lg"
            border="1px solid"
            borderColor="gray.200"
            p={6}
            textAlign="center"
            initial="hidden"
            animate="visible"
            variants={flipVariants}
            transition="transform 0.2s, box-shadow 0.2s"
            _hover={{
              transform: "translateY(-5px)",
              boxShadow: "xl",
            }}
          >
            <Heading as="h3" size="lg" mb={4} color="#ECE9E9">
              {service.title}
            </Heading>
            <Text fontSize="14px">{service.description}</Text>
          </MotionGridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default HomepageGrid;
