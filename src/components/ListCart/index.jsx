import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import ItemCart from "../ItemCart";

const ListCart = () => {
  const { cart } = useSelector((state) => state);

  return (
    <Flex w="100%" flexDir="column" overflow="hidden" gap="10px">
      <Flex
        color="gray.800"
        bg="teal.300"
        w="100%"
        p={4}
        fontSize="1xl"
        fontWeight="bold"
        justifyContent="space-between"
        shadow="lg"
        rounded="base"
      >
        <Text>Produto</Text>
        <Text d={["none", "none", "none", "block"]}>Preço</Text>
      </Flex>
      <Flex
        as="ul"
        w="100%"
        listStyleType="none"
        flexDir="column"
        gap="10px"
        pb={12}
      >
        {cart.length !== 0 ? (
          cart.map((product, index) => (
            <ItemCart key={product.id} product={product} index={index} />
          ))
        ) : (
          <Flex
            width="100%"
            height="100%"
            bg="gray.900"
            color="white"
            minH="300px"
            justifyContent="center"
            alignItems="center"
            fontWeight="light"
          >
            <Text fontSize="2xl" letterSpacing="1px">
              Sem itens no carrinho
            </Text>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default ListCart;
