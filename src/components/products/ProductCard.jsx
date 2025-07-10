import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

import { useCart } from "../../context/CartContext";

function ProductCard({ product }) {
  const id = product.id;
  const { addToCart } = useCart(); //ใช้ useCart Hook จาก CartContext
  return (
    <Link
      to={`/products/${id}`}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <Card
        sx={{
          Width: 345,
          margin: "auto",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {" "}
        {/* เพิ่ม display และ flexDirection */}
        <CardMedia
          component="img"
          height="200"
          // image={product.imageUrl}
          image={
            product.imageUrls &&
            product.imageUrls.length > 0
              ? product.imageUrls[0]
              : "placeholder_image_url"
          }
          alt={product.name}
          sx={{ objectFit: "cover" }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          {" "}
          <Typography
            gutterBottom
            variant="h6"
            component="div"
          >
            {product.name}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
          >
            Price:{" "}
            {product.price.toLocaleString()} Baht
          </Typography>
        </CardContent>
        <CardActions sx={{ marginTop: "auto" }}>
          {" "}
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              // เพิ่ม logic สำหรับ Add to Cart ตรงนี้
              addToCart(product);
              console.log(
                `Added ${product.name} to cart!`
              );
            }}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Link>
  );
}

export default ProductCard;
