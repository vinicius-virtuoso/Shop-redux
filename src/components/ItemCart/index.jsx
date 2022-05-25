import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { IoIosRemoveCircle } from "react-icons/io";
import { useDispatch } from "react-redux";
import { remove_a_product_thunk } from "../../store/modules/cart/thunk";

const ItemCart = ({ product, index }) => {
  const dispatch = useDispatch();

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
    <Grid
      as={motion.li}
      variants={container}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, scale: 0 }}
      key={product.id}
      id={product.id}
      bg="gray.900"
      height={["auto", "auto", "auto", "200px"]}
      w="100%"
      rounded="base"
      shadow="base"
      gridTemplateColumns={["1fr", "1fr", "1fr", "25% 50% auto"]}
      color="gray.200"
    >
      <Box overflow="hidden" variants={item} rounded="base">
        <Box
          as="img"
          src={product.img}
          h="100%"
          width="100%"
          objectFit="cover"
          objectPosition="top"
          maxW="100%"
        />
      </Box>
      <Box p={4} d="flex" flexDir="column" gap="10px" variants={item}>
        <Text as="h4" fontSize="1xl" fontWeight="bold">
          {product.name}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {product.description}
        </Text>
      </Box>
      <Flex
        variants={item}
        p={4}
        textAlign="right"
        flexDir="column"
        justifyContent="space-between"
        gap={8}
      >
        <Text as="h4" fontSize="2xl" fontWeight="bold">
          {product.price}
        </Text>
        <Button
          colorScheme="red"
          variant="outline"
          size="md"
          rightIcon={<IoIosRemoveCircle fontSize="20px" />}
          onClick={() => dispatch(remove_a_product_thunk(product.id))}
        >
          Remover
        </Button>
      </Flex>
    </Grid>
  );
};

export default ItemCart;
