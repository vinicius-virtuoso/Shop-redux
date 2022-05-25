import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";

const variants = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0 },
};

const Header = () => {
  const { cart } = useSelector((state) => state);

  return (
    <Flex
      as="header"
      w="100%"
      h={[20, 20, 24]}
      bg="gray.800"
      shadow="base"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        w="100%"
        maxW="1220px"
        justifyContent="space-between"
        alignItems="center"
        px={[6, 6, 8, 8, 0]}
        fontWeight="normal"
        color="gray.200"
      >
        <Heading as={Link} to="/" fontSize={[20, 22, 32]} letterSpacing="1px">
          ShopRedux
        </Heading>

        <Flex alignItems="center" gap={2} as={Link} to="/cart">
          <Flex
            alignItems="center"
            justifyContent="center"
            flexDir="column"
            position="relative"
            cursor="pointer"
          >
            {cart.length > 0 ? (
              <Flex
                initial="hidden"
                animate="visible"
                variants={variants}
                position="absolute"
                rounded="full"
                bg="teal.300"
                w={["20px", "22px", "22px"]}
                h={["20px", "22px", "22px"]}
                alignItems="center"
                justifyContent="center"
                top="-15px"
                fontSize="1rem"
                color="gray.100"
              >
                {cart.length}
              </Flex>
            ) : null}
            <Box fontSize={["22px", "26px", "26px", "28px"]}>
              <BsCart />
            </Box>
          </Flex>
          <Text
            letterSpacing="1px"
            fontWeight="bold"
            d={["none", "none", "block"]}
            color="gray.300"
          >
            Carrinho
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
