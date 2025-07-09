import React from "react";
import {
  Container,
  Grid,
  Typography,
} from "@mui/material";
import ProductCard from "./ProductCard"; // ตรวจสอบ path ให้ถูกต้อง
import image1 from "../../assets/products/image1.jpg";
import image2 from "../../assets/products/image2.jpg";
import image3 from "../../assets/products/image3.jpg";
import image4 from "../../assets/products/image4.jpg";
import image5 from "../../assets/products/image5.jpg";
import image6 from "../../assets/products/image6.jpg";

function ProductGridSection() {
  // สมมติข้อมูลสินค้า (คุณสามารถดึงมาจาก API หรือ state จัดการเองได้)
  const products = [
    {
      id: 1,
      name: "Hand knitted bag",
      price: 850,
      imageUrl: image1,
    },
    {
      id: 2,
      name: "Lucky stone necklace",
      price: 490,
      imageUrl: image2,
    },
    {
      id: 3,
      name: "Crochet doll",
      price: 320,
      imageUrl: image3,
    },
    {
      id: 4,
      name: "Handmade coasters",
      price: 150,
      imageUrl: image4,
    },
    {
      id: 5,
      name: "Resin keychain",
      price: 99,
      imageUrl: image5,
    },
    {
      id: 6,
      name: "Handmade notebook",
      price: 280,
      imageUrl: image6,
    },
    // สามารถเพิ่มสินค้าได้ตามต้องการ
  ];

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
