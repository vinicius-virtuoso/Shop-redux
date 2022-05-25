import { Grid } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

import ProductCard from "../ProductCard";

const ListProducts = () => {
  const { products } = useSelector((state) => state);

  return (
    <Grid
      as="ul"
      w="100%"
      maxW="1220px"
      gridTemplateColumns={["1fr", "repeat(4,1fr)", "repeat(4,1fr)"]}
      gap={[4, 6, 8]}
      m="0 auto"
      py={[4, 4, 6, 8]}
      px={[6, 6, 6, 0]}
    >
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </Grid>
  );
};

export default ListProducts;
