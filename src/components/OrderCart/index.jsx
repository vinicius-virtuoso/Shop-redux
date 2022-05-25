import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  BsFillArrowUpSquareFill,
  BsFillArrowDownSquareFill,
} from "react-icons/bs";

const OrderCart = () => {
  const [showCart, setShowCart] = useState(false);

  const { cart } = useSelector((state) => state);
  let priceTotal;
  if (cart.length !== 0) {
    priceTotal = cart
      .map(({ price }) =>
        Number(price.replace("R$", "").trim().replace(",", "."))
      )
      .reduce((acc, item) => acc + item)
      .toFixed(2);
  } else {
    priceTotal = 0;
  }

  return (
    <Box
      maxH="260px"
      rounded="base"
      bg="gray.900"
      position={["fixed", "fixed", "fixed", "initial"]}
      bottom="0"
      left="16px"
      w={[
        "calc(100% - 30px)",
        "calc(100% - 30px)",
        "calc(100% - 30px)",
        "100%",
      ]}
      transition="all .4s linear"
      height={showCart ? "100%" : "20px"}
    >
      <Flex
        d={["flex", "flex", "flex", "none"]}
        onClick={() => setShowCart(!showCart)}
        position="absolute"
        bg="gray.400"
        color="gray.800"
        top="-30px"
        right="0"
        alignItems="center"
        justifyContent="center"
        zIndex="999"
        p={2}
        rounded="2xl"
        shadow="dark-lg"
        fontWeight="bold"
      >
        {showCart ? (
          <Flex w="100%" alignItems="center" gap={4}>
            <Text fontSize="16px">Fechar resumo</Text>
            <BsFillArrowDownSquareFill fontSize="30px" />{" "}
          </Flex>
        ) : (
          <Flex w="100%" alignItems="center" gap={4}>
            <Text fontSize="16px">Abrir resumo</Text>
            <BsFillArrowUpSquareFill fontSize="30px" />{" "}
          </Flex>
        )}
      </Flex>
      <Text
        p={4}
        color="gray.800"
        bg="teal.300"
        fontSize="1xl"
        fontWeight="bold"
        textAlign="center"
        rounded="base"
      >
        Resumo do pedido
      </Text>
      <Flex bg="gray.900" p={4} flexDir="column" gap={8} fontSize="1.2rem">
        <Text color="gray.400" d="flex" justifyContent="space-between" w="100%">
          <Box as="span">{cart.length > 1 ? "Produtos" : "Quat. Produto"}</Box>
          <Box as="span">{cart.length || 0}</Box>
        </Text>
        <Text color="gray.400" d="flex" justifyContent="space-between" w="100%">
          <Box as="span">Preço Total</Box>
          <Box as="span">R$ {priceTotal}</Box>
        </Text>
        <Button colorScheme="teal">Finalizar o pedido</Button>
      </Flex>
    </Box>
  );
};

export default OrderCart;
