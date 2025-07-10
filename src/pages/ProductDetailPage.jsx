import React, {
  useEffect,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  CircularProgress,
  Box,
  CardMedia,
  CardActions,
  Button,
  IconButton,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import productsData from "../data/products.json";
import { useCart } from "../context/CartContext";

function ProductDetailPage() {
  const { id } = useParams(); // ดึงค่า id จาก URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart(); // ใช้ useCart Hook

  // State สำหรับรูปภาพหลักที่แสดงอยู่ และ index ของรูปภาพนั้น
  const [
    currentImageIndex,
    setCurrentImageIndex,
  ] = useState(0);

  useEffect(() => {
    const foundProduct = productsData.find(
      (p) => p.id === parseInt(id)
    ); // แปลง productId เป็น int
    if (foundProduct) {
      setProduct(foundProduct);
      setCurrentImageIndex(0); // เมื่อโหลดสินค้าใหม่ ให้แสดงรูปแรกเสมอ
    } else {
      setError("Product not found.");
    }
    setLoading(false);
  }, [id]); // ให้ useEffect ทำงานใหม่เมื่อ productId เปลี่ยน

  // ฟังก์ชันสำหรับเปลี่ยนรูปภาพหลักไปรูปถัดไป
  const goToNextImage = () => {
    if (product && product.imageUrls) {
      setCurrentImageIndex(
        (prevIndex) =>
          (prevIndex + 1) %
          product.imageUrls.length
      );
    }
  };

  // ฟังก์ชันสำหรับเปลี่ยนรูปภาพหลักไปรูปก่อนหน้า
  const goToPreviousImage = () => {
    if (product && product.imageUrls) {
      setCurrentImageIndex(
        (prevIndex) =>
          (prevIndex -
            1 +
            product.imageUrls.length) %
          product.imageUrls.length
      );
    }
  };

  // ฟังก์ชันสำหรับเปลี่ยนรูปภาพหลักเมื่อคลิกที่ Thumbnail
  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

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

  if (
    !product ||
    !product.imageUrls ||
    product.imageUrls.length === 0
  ) {
    return (
      <Container
        sx={{ paddingY: 4, textAlign: "center" }}
      >
        <Typography
          variant="h5"
          color="text.secondary"
        >
          No images found for this product.
        </Typography>
      </Container>
    );
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
        {/* --- ส่วนซ้าย: รูปภาพสินค้า --- */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* รูปภาพหลัก */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: 500,
            }}
          >
            <CardMedia
              component="img"
              image={
                product.imageUrls[
                  currentImageIndex
                ]
              } // ใช้รูปภาพจาก currentImageIndex
              alt={product.name}
              sx={{
                width: "100%",
                height: "auto",
                maxHeight: 500,
                objectFit: "contain",
                borderRadius: 2, // เพิ่มขอบมน
              }}
            />
            {/* ปุ่มลูกศรซ้าย-ขวา */}
            {product.imageUrls.length > 1 && ( // แสดงปุ่มเมื่อมีรูปมากกว่า 1 รูป
              <>
                <IconButton
                  onClick={goToPreviousImage}
                  sx={{
                    position: "absolute",
                    left: 8,
                    top: "50%",
                    transform: "translateY(-50%)",
                    backgroundColor:
                      "rgba(255, 255, 255, 0.7)",
                    "&:hover": {
                      backgroundColor:
                        "rgba(255, 255, 255, 0.9)",
                    },
                  }}
                >
                  <ArrowBackIosIcon />
                </IconButton>
                <IconButton
                  onClick={goToNextImage}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: "50%",
                    transform: "translateY(-50%)",
                    backgroundColor:
                      "rgba(255, 255, 255, 0.7)",
                    "&:hover": {
                      backgroundColor:
                        "rgba(255, 255, 255, 0.9)",
                    },
                  }}
                >
                  <ArrowForwardIosIcon />
                </IconButton>
              </>
            )}
          </Box>

          {/* Thumbnail Gallery */}
          {product.imageUrls.length > 1 && ( // แสดง thumbnails เมื่อมีรูปมากกว่า 1 รูป
            <Box
              sx={{
                display: "flex",
                gap: 1,
                mt: 2,
                justifyContent: "center",
                flexWrap: "wrap", // ให้ขึ้นบรรทัดใหม่เมื่อจอเล็ก
                maxWidth: "100%",
                overflowX: "auto", // เพิ่ม scrollbar ถ้า thumbnails เยอะ
                p: 1,
              }}
            >
              {product.imageUrls.map(
                (imgUrl, index) => (
                  <CardMedia
                    key={index}
                    component="img"
                    image={imgUrl}
                    alt={`Thumbnail ${index + 1}`}
                    sx={{
                      width: 80, // ขนาด thumbnail
                      height: 80,
                      objectFit: "cover",
                      borderRadius: 1,
                      cursor: "pointer",
                      border:
                        index ===
                        currentImageIndex
                          ? "2px solid"
                          : "1px solid", // เน้นรูปที่เลือกอยู่
                      borderColor:
                        index ===
                        currentImageIndex
                          ? "primary.main"
                          : "grey.300",
                      transition:
                        "border-color 0.2s",
                      "&:hover": {
                        borderColor:
                          "primary.dark",
                      },
                    }}
                    onClick={() =>
                      handleThumbnailClick(index)
                    }
                  />
                )
              )}
            </Box>
          )}
        </Box>

        {/* --- ส่วนขวา: รายละเอียดสินค้า --- */}
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
            price:{" "}
            {product.price.toLocaleString()} Baht
          </Typography>
          <Typography variant="body1">
            {" "}
            {/* ใช้ paragraph เพื่อให้มี margin-bottom */}
            {product.description}
          </Typography>
          <CardActions sx={{ p: 0 }}>
            {" "}
            {/* Reset padding ของ CardActions */}
            <Button
              variant="contained"
              size="large"
              sx={{ mt: 2 }}
              onClick={(e) => {
                e.preventDefault(); // ป้องกันการทำงานเริ่มต้นของ Link
                e.stopPropagation(); // หยุดการแพร่กระจายของ event
                addToCart(product);
              }}
            >
              Add to Cart
            </Button>
          </CardActions>
        </Box>
      </Box>
    </Container>
  );
}

export default ProductDetailPage;
