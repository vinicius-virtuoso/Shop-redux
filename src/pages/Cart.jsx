import { Flex } from "@chakra-ui/react";
import React from "react";
import GridCart from "../components/GridCart";

const Cart = () => {
  return (
    <Flex flex="1" h="100%" w="100%">
      <GridCart />
    </Flex>
  );
};

export default Cart;
