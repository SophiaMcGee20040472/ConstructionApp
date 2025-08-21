import React, { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  Link as ChakraLink,
  VStack,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Logo4 from "../assets/Logo4.png";
import { GiHammerNails } from "react-icons/gi";
import { FaHammer } from "react-icons/fa";

const MotionBox = motion(Box);

const MenuLink = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      position="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      ml="20px"
      mr="50px"
    >
      <Flex alignItems="center" cursor="pointer">
        <ChakraLink
          href="#"
          fontWeight="medium"
          fontSize="sm"
          color="white"
          ml="60px"
          _hover={{ textDecoration: "none" }}
        >
          {title}
        </ChakraLink>
        <Box as="span" ml={1} color="#DFC911">
          {isOpen ? <GiHammerNails /> : <FaHammer />}
        </Box>
      </Flex>
      {isOpen && (
        <MotionBox
          position="absolute"
          top="100%"
          left="50%"
          transform="translateX(-50%)"
          mt={2}
          bg="white"
          minW="200px"
          zIndex="200"
          boxShadow="lg"
          borderRadius="md"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <VStack spacing={0} alignItems="stretch">
            {options.map((option, index) => (
              <ChakraLink
                key={option.title}
                p={4}
                href={option.href}
                _hover={{ bg: "gray.50" }}
                borderBottom={index < options.length - 1 ? "1px solid" : "none"}
                borderColor="gray.100"
              >
                {option.title}
              </ChakraLink>
            ))}
          </VStack>
        </MotionBox>
      )}
    </Box>
  );
};

const Header = () => {
  const navLinks = [
    {
      title: "HOME",
      options: [
        { title: "Dashboard", href: "#" },
        { title: "Profile", href: "#" },
      ],
    },
    {
      title: "TESTIMONIALS",
      options: [{ title: "Case Studies", href: "#" }],
    },
    {
      title: "PRICING",
      options: [
        { title: "Plans", href: "#" },
        { title: "Features", href: "#" },
      ],
    },
    {
      title: "SERVICES",
      options: [
        { title: "Support", href: "#" },
        { title: "Sales", href: "#" },
      ],
    },
    {
      title: "CONTACT",
      options: [
        { title: "Contact us", href: "#" },
      ],
    },
  ];

  return (
    <Box
      bg="#000000"
      p={4}
      color="white"
      position="fixed"
      top="0"
      left="0"
      opacity="90%"
      width="100%"
      zIndex="100"
      boxShadow="md"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        maxWidth="1400px"
        mx="auto"
      >
        <HStack>
          <Image
            src={Logo4}
            alt="Groundworks Limited Logo"
            height="100px"
            maxW="200px"
            marginLeft="40px"
            objectFit="contain"
          />
        </HStack>
        <HStack as="nav" spacing={{ base: 4, md: 10 }}>
          {navLinks.map((link, index) => (
            <MenuLink key={index} title={link.title} options={link.options} />
          ))}
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
