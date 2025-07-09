import React from "react";
import {
  Container,
  Grid,
  Typography,
} from "@mui/material";
import ProductCard from "./ProductCard";
import productsData from "../../data/products.json";

function ProductGridSection() {
  const products = productsData;
  // console.log(products);
  // console.log(products[0].id);

  return (
    <Container sx={{ paddingY: 4 }}>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom
      >
        Popular products
      </Typography>
      <Grid
        container
        spacing={4}
        justifyContent="center"
      >
        {products.map((product) => (
          <Grid key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ProductGridSection;
