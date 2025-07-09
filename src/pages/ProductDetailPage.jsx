import React, {
  useEffect,
  useState,
} from "react";
import { useParams } from "react-router-dom"; // Import useParams
import {
  Container,
  Typography,
  CircularProgress,
  Box,
  CardMedia,
  Button,
} from "@mui/material";

import productsData from "../data/products.json";

function ProductDetailPage() {
  const { id } = useParams(); // ดึงค่า id จาก URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // ในโปรเจกต์จริง คุณจะทำการ fetch ข้อมูลสินค้าจาก API โดยใช้ productId
    // เช่น fetch(`/api/products/${productId}`).then(...)
    const foundProduct = productsData.find(
      (p) => p.id === parseInt(id)
    ); // แปลง productId เป็น int
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      setError("Product not found.");
    }
    setLoading(false);
  }, [id]); // ให้ useEffect ทำงานใหม่เมื่อ productId เปลี่ยน

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container>
        <Typography
          variant="h5"
          color="error"
          align="center"
          sx={{ mt: 4 }}
        >
          {error}
        </Typography>
      </Container>
    );
  }

  if (!product) {
    return null; // หรือแสดงข้อความ/component ว่างเปล่า
  }

  return (
    <Container sx={{ paddingY: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          gap: 4,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <CardMedia
            component="img"
            image={product.imageUrl}
            alt={product.name}
            sx={{
              width: "100%",
              height: "auto",
              maxHeight: 500,
              objectFit: "contain",
            }}
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
          >
            {product.name}
          </Typography>
          <Typography
            variant="h5"
            color="primary"
            gutterBottom
          >
            ราคา: {product.price.toLocaleString()}{" "}
            บาท
          </Typography>
          <Typography variant="body1">
            {product.description}
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{ mt: 2 }}
          >
            เพิ่มลงตะกร้า
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default ProductDetailPage;
