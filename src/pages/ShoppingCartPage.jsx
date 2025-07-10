import React from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
  IconButton,
  Divider,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom"; // สำหรับปุ่ม Next to Checkout

function ShoppingCartPage() {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    getCartTotal,
  } = useCart();
  const navigate = useNavigate();

  // กำหนดค่าสมมติสำหรับส่วนลดและภาษี (คุณสามารถสร้าง logic จริงได้ในอนาคต)
  const discountRate = 0.05; // 5%
  const taxRate = 0.07; // 7%

  const subtotal = getCartTotal();
  const discountAmount = subtotal * discountRate;
  const taxableAmount = subtotal - discountAmount;
  const taxAmount = taxableAmount * taxRate;
  const totalAmount = taxableAmount + taxAmount;

  const handleNextToCheckout = () => {
    // Logic สำหรับไปยังหน้า Checkout
    navigate("/checkout");
    // console.log("Proceeding to checkout...");
  };

  if (cartItems.length === 0) {
    return (
      <Container
        sx={{ paddingY: 4, textAlign: "center" }}
      >
        <Typography
          variant="h5"
          color="text.secondary"
        >
          No items that you want
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 3 }}
          onClick={() => navigate("/")}
        >
          Back to all items
        </Button>
      </Container>
    );
  }

  return (
    <Container sx={{ paddingY: 4 }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        align="center"
      >
        Your Cart...
      </Typography>

      <Grid container spacing={3}>
        {/* รายการสินค้าในตะกร้า */}
        <Grid>
          {cartItems.map((item) => (
            <Card
              key={item.id}
              sx={{
                display: "flex",
                marginBottom: 2,
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: 120,
                  height: 120,
                  objectFit: "cover",
                }}
                // image={item.imageUrl}
                image={
                  item.imageUrls &&
                  item.imageUrls.length > 0
                    ? item.imageUrls[0]
                    : "placeholder_image_url"
                }
                alt={item.name}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                }}
              >
                <CardContent
                  sx={{ flex: "1 0 auto" }}
                >
                  <Typography
                    component="div"
                    variant="h6"
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                  >
                    Price:{" "}
                    {item.price.toLocaleString()}{" "}
                    Baht / Item
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent:
                      "space-between",
                    alignItems: "center",
                    p: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <IconButton
                      aria-label="reduce quantity"
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.quantity - 1
                        )
                      }
                    >
                      <RemoveCircleOutlineIcon />
                    </IconButton>
                    <Typography
                      variant="body1"
                      sx={{ mx: 1 }}
                    >
                      {item.quantity}
                    </Typography>
                    <IconButton
                      aria-label="increase quantity"
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.quantity + 1
                        )
                      }
                    >
                      <AddCircleOutlineIcon />
                    </IconButton>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{ mr: 2 }}
                    >
                      Prices:{" "}
                      {(
                        item.price * item.quantity
                      ).toLocaleString()}{" "}
                      Baht
                    </Typography>
                    <IconButton
                      aria-label="delete item"
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                      color="error"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </CardActions>
              </Box>
            </Card>
          ))}
        </Grid>

        {/* สรุปราคา */}
        <Grid>
          <Card
            variant="outlined"
            sx={{ p: 4, width: "120%" }}
          >
            <Typography variant="h6" gutterBottom>
              Order Summary
            </Typography>
            <Divider sx={{ my: 1 }} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: 1,
              }}
            >
              <Typography variant="body1">
                SubTotal:
              </Typography>
              <Typography variant="body1">
                {subtotal.toLocaleString()} Baht
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: 1,
              }}
            >
              <Typography variant="body1">
                Discount (5%):
              </Typography>
              <Typography variant="body1">
                -{" "}
                {discountAmount
                  .toFixed(2)
                  .toLocaleString()}{" "}
                Baht
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: 1,
              }}
            >
              <Typography variant="body1">
                Tax (7%):
              </Typography>
              <Typography variant="body1">
                +{" "}
                {taxAmount
                  .toFixed(2)
                  .toLocaleString()}{" "}
                Baht
              </Typography>
            </Box>
            <Divider sx={{ my: 1 }} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: 2,
              }}
            >
              <Typography variant="h6">
                Total :
              </Typography>
              <Typography variant="h6">
                {totalAmount.toLocaleString()}{" "}
                Baht
              </Typography>
            </Box>
            <Button
              variant="contained"
              color="success"
              fullWidth
              size="large"
              onClick={handleNextToCheckout}
            >
              Continues to checkout
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ShoppingCartPage;
