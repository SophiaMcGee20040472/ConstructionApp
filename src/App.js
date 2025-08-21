import React from "react";
import { Box } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomepageGrid from "./components/HomepageGrid";
import garden from "./assets/garden.jpg";

function App() {
  return (
    <Box display="flex" flexDirection="column" minH="100vh" w="100%">
      <Box
        flex={1}
        bgImage={`url(${garden})`}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        position="relative"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          bg="rgba(0, 0, 0, 0.4)"
          zIndex={1}
        />
        <Header />
        <Box
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          mt="60px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          zIndex={2}
        >
          <HomepageGrid />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
