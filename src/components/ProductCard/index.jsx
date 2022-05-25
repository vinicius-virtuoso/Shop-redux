import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";
import { add_a_product_thunk } from "../../store/modules/cart/thunk";

const ProductCard = ({ product, index }) => {
  const dispatch = useDispatch();
  const { id, name, description, price, img } = product;

  const container = {
    hidden: { opacity: 0, transform: { translateY: -30, scale: 1 } },
    show: {
      opacity: 1,
      transform: { scale: 1, transform: "initial" },
      transition: {
        delay: index / 10,

        delayChildren: 0.5,
      },
    },
  };
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <Flex
      as={motion.li}
      variants={container}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, scale: 0 }}
      flexDir="column"
      color="gray.100"
      listStyleType="none"
      key={id}
      id={id}
      w="100%"
      minH="300px"
      maxH="370px"
      rounded="base"
      overflow="hidden"
      shadow="lg"
      bg="gray.900"
      border="1px"
      borderColor="gray.700"
      transition="all .2s ease"
      _hover={{ borderColor: "teal.300" }}
    >
      <Box w="100%" h="55%" overflow="hidden" variants={item}>
        <Box
          as="img"
          src={img}
          maxW="100%"
          w="100%"
          h="100%"
          objectFit="cover"
          objectPosition="top"
        />
      </Box>

      <Flex zIndex="999" py={[4]} flexDir="column" gap={3} variants={item}>
        <Text
          as="h2"
          fontSize={["18px"]}
          letterSpacing="1px"
          px={4}
          title={name}
        >
          {name.length > 22 ? name.substring(0, 22).concat("...") : name}
        </Text>
        <Text
          as="p"
          fontSize={["14px"]}
          px={4}
          opacity="0.5"
          fontWeight="300"
          fontFamily="Roboto"
          title={description}
        >
          {description.length > 70
            ? description.substring(0, 70).concat("...")
            : description}
        </Text>
        <Flex alignItems="baseline" justifyContent="space-between" px={4}>
          <Text
            as="h2"
            fontSize={["18px"]}
            letterSpacing="1px"
            color="teal.300"
          >
            {price}
          </Text>
          <Button
            colorScheme="teal"
            rightIcon={<FaShoppingCart />}
            onClick={() => dispatch(add_a_product_thunk(id))}
          >
            Adiciona
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProductCard;
