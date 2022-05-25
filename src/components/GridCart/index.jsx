import { Grid } from "@chakra-ui/react";
import React from "react";
import ListCart from "../ListCart";
import OrderCart from "../OrderCart";

const GridCart = () => {
  return (
    <Grid
      maxW="1220px"
      w="100%"
      gridTemplateColumns={["1f", "1fr", "1fr", "1fr 35%"]}
      m="0 auto"
      py={[4]}
      px={[4, 4, 6, 0]}
      gap={4}
    >
      <ListCart />
      <OrderCart />
    </Grid>
  );
};

export default GridCart;
