import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

function ProductCard({ product }) {
  return (
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
        image={product.imageUrl}
        alt={product.name}
        sx={{ objectFit: "cover" }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        {" "}
        {/* เพิ่ม flexGrow: 1 ตรงนี้ */}
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
          Price: {product.price.toLocaleString()}{" "}
          Baht
        </Typography>
      </CardContent>
      <CardActions sx={{ marginTop: "auto" }}>
        {" "}
        {/* เพิ่ม marginTop: 'auto' ตรงนี้ */}
        <Button
          size="small"
          variant="contained"
          color="primary"
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
