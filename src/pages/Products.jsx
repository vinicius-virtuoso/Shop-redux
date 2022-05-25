import { Flex } from "@chakra-ui/react";
import React from "react";
import ListProducts from "./../components/ListProducts";

const Products = () => {
  return (
    <Flex flex="1" h="100%" w="100%">
      <ListProducts />
    </Flex>
  );
};

export default Products;
