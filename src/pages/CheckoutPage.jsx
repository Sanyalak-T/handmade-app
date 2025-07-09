import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  TextField,
  MenuItem,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Divider,
  Alert,
  Snackbar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  useForm,
  Controller,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCart } from "../context/CartContext"; // ดึงข้อมูลตะกร้าสินค้า
import qrCode from "../assets/qrcode-sanyalak.jpg";

// --- 1. กำหนด Schema สำหรับ Form Validation ---
const schema = yup.object().shape({
  // ข้อมูลการจัดส่ง
  fullName: yup
    .string()
    .required("FirstName-LastName"),
  address: yup.string().required("Address"),
  city: yup.string().required("Province"),
  zipCode: yup
    .string()
    .required("Zip Code")
    .matches(/^\d{5}$/, "Zip code must 5 digits"),
  phoneNumber: yup
    .string()
    .required("Phone Numbers")
    .matches(
      /^\d{10}$/,
      "Phone Numbers must 10 digits"
    ),

  // วิธีการชำระเงิน (ซ่อน/แสดงตาม paymentMethod)
  paymentMethod: yup
    .string()
    .required("Please select a payment method."),
  cardNumber: yup.string().when("paymentMethod", {
    is: "creditCard",
    then: (schema) =>
      schema
        .required("Credit card number")
        .matches(
          /^\d{16}$/,
          "Credit card number must 16 digits"
        ),
    otherwise: (schema) => schema.notRequired(),
  }),
  cardName: yup.string().when("paymentMethod", {
    is: "creditCard",
    then: (schema) =>
      schema.required(
        "Fill the name on the card."
      ),
    otherwise: (schema) => schema.notRequired(),
  }),
  expiryDate: yup.string().when("paymentMethod", {
    is: "creditCard",
    then: (schema) =>
      schema
        .required(
          "Enter expiration date. (MM/YY)"
        )
        .matches(
          /^(0[1-9]|1[0-2])\/\d{2}$/,
          "Expiration date format is invalid. (MM/YY)"
        ),
    otherwise: (schema) => schema.notRequired(),
  }),
  cvv: yup.string().when("paymentMethod", {
    is: "creditCard",
    then: (schema) =>
      schema
        .required("Enter CVV")
        .matches(/^\d{3,4}$/, "CVV incorrect"),
    otherwise: (schema) => schema.notRequired(),
  }),
});

// --- คอมโพเนนต์ CheckoutPage ---
function CheckoutPage() {
  const navigate = useNavigate();
  const { cartItems, getCartTotal, clearCart } =
    useCart(); // เพิ่ม clearCart ใน CartContext ด้วย
  const [snackbarOpen, setSnackbarOpen] =
    useState(false);
  const [snackbarMessage, setSnackbarMessage] =
    useState("");
  const [snackbarSeverity, setSnackbarSeverity] =
    useState("success");

  const {
    control,
    handleSubmit,
    watch, // ใช้ watch เพื่อดูค่าในฟอร์มแบบเรียลไทม์
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: "",
      address: "",
      city: "",
      zipCode: "",
      phoneNumber: "",
      paymentMethod: "", // Default value for payment method
      cardNumber: "",
      cardName: "",
      expiryDate: "",
      cvv: "",
    },
  });

  const paymentMethod = watch("paymentMethod"); // ดูค่า paymentMethod ปัจจุบัน

  // กำหนดค่าสมมติสำหรับส่วนลดและภาษี (ต้องเหมือนกับหน้า ShoppingCartPage)
  const discountRate = 0.05; // 5%
  const taxRate = 0.07; // 7%

  const subtotal = getCartTotal();
  const discountAmount = subtotal * discountRate;
  const taxableAmount = subtotal - discountAmount;
  const taxAmount = taxableAmount * taxRate;
  const totalAmount = taxableAmount + taxAmount;

  // ตรวจสอบว่าตะกร้าว่างเปล่าหรือไม่
  if (cartItems.length === 0) {
    return (
      <Container
        sx={{ paddingY: 4, textAlign: "center" }}
      >
        <Typography
          variant="h5"
          color="text.secondary"
        >
          The shopping cart is empty. Cannot
          proceed Checkout.
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 3 }}
          onClick={() => navigate("/")}
        >
          Go to home page
        </Button>
      </Container>
    );
  }

  // --- ฟังก์ชันเมื่อกด Confirm Order ---
  const onSubmit = (data) => {
    console.log("Order Confirmed:", data);
    // alert("Order Confirmed");
    // ในโปรเจกต์จริง คุณจะส่งข้อมูลนี้ไปยัง Backend เพื่อประมวลผลการสั่งซื้อ
    // เช่น axios.post('/api/orders', data);

    // แสดงข้อความสำเร็จ
    setSnackbarMessage(
      "Order Confirmed Completely, Returning to home page..."
    );
    setSnackbarSeverity("success");
    setSnackbarOpen(true);
    console.log("Snackbar should open now");

    // หน่วงเวลา 5 วินาทีก่อนกลับไปหน้า Home
    setTimeout(() => {
      // ล้างตะกร้าสินค้าหลังจากสั่งซื้อสำเร็จ
      clearCart(); // ต้องเพิ่ม clearCart ใน CartContext ด้วย
      navigate("/");
    }, 3000);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <Container sx={{ paddingY: 4 }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        align="center"
      >
        Proceed with payment
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>
          {/* --- ส่วนซ้าย: ข้อมูลการจัดส่งและวิธีการชำระเงิน --- */}
          <Grid sx={{ width: "50%" }}>
            {/* --- ข้อมูลการจัดส่ง --- */}
            <Typography
              variant="h5"
              gutterBottom
              sx={{ mb: 2 }}
            >
              1. Shipping Address
            </Typography>
            <Box component="div" sx={{ mb: 4 }}>
              <Controller
                name="fullName"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Name and Surname"
                    fullWidth
                    margin="normal"
                    error={!!errors.fullName}
                    helperText={
                      errors.fullName
                        ? errors.fullName.message
                        : ""
                    }
                  />
                )}
              />
              <Controller
                name="address"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Address"
                    fullWidth
                    margin="normal"
                    error={!!errors.address}
                    helperText={
                      errors.address
                        ? errors.address.message
                        : ""
                    }
                  />
                )}
              />
              <Grid container spacing={2}>
                <Grid>
                  <Controller
                    name="city"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Province"
                        fullWidth
                        margin="normal"
                        error={!!errors.city}
                        helperText={
                          errors.city
                            ? errors.city.message
                            : ""
                        }
                      />
                    )}
                  />
                </Grid>
                <Grid>
                  <Controller
                    name="zipCode"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Zip Code"
                        fullWidth
                        margin="normal"
                        error={!!errors.zipCode}
                        helperText={
                          errors.zipCode
                            ? errors.zipCode
                                .message
                            : ""
                        }
                      />
                    )}
                  />
                </Grid>
              </Grid>
              <Controller
                name="phoneNumber"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Phone Numbers"
                    fullWidth
                    margin="normal"
                    error={!!errors.phoneNumber}
                    helperText={
                      errors.phoneNumber
                        ? errors.phoneNumber
                            .message
                        : ""
                    }
                  />
                )}
              />
            </Box>

            {/* --- วิธีการชำระเงิน --- */}
            <Typography
              variant="h5"
              gutterBottom
              sx={{ mb: 2 }}
            >
              2. Payment Method
            </Typography>
            <Box component="div" sx={{ mb: 4 }}>
              <Controller
                name="paymentMethod"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    select
                    label="Select payment method"
                    fullWidth
                    margin="normal"
                    error={!!errors.paymentMethod}
                    helperText={
                      errors.paymentMethod
                        ? errors.paymentMethod
                            .message
                        : ""
                    }
                  >
                    <MenuItem value="">
                      <em>
                        Select payment method
                      </em>
                    </MenuItem>
                    <MenuItem value="creditCard">
                      Credit/Debit Card
                    </MenuItem>
                    <MenuItem value="qrCode">
                      QR Code
                    </MenuItem>
                  </TextField>
                )}
              />

              {paymentMethod === "creditCard" && (
                <Box sx={{ mt: 2 }}>
                  <Controller
                    name="cardNumber"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Credit card number"
                        fullWidth
                        margin="normal"
                        error={
                          !!errors.cardNumber
                        }
                        helperText={
                          errors.cardNumber
                            ? errors.cardNumber
                                .message
                            : ""
                        }
                      />
                    )}
                  />
                  <Controller
                    name="cardName"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Name on card"
                        fullWidth
                        margin="normal"
                        error={!!errors.cardName}
                        helperText={
                          errors.cardName
                            ? errors.cardName
                                .message
                            : ""
                        }
                      />
                    )}
                  />
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Controller
                        name="expiryDate"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            label="Expiry Date (MM/YY)"
                            fullWidth
                            margin="normal"
                            error={
                              !!errors.expiryDate
                            }
                            helperText={
                              errors.expiryDate
                                ? errors
                                    .expiryDate
                                    .message
                                : ""
                            }
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Controller
                        name="cvv"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            label="CVV"
                            fullWidth
                            margin="normal"
                            error={!!errors.cvv}
                            helperText={
                              errors.cvv
                                ? errors.cvv
                                    .message
                                : ""
                            }
                          />
                        )}
                      />
                    </Grid>
                  </Grid>
                </Box>
              )}

              {paymentMethod === "qrCode" && (
                <Box
                  sx={{
                    mt: 2,
                    p: 3,
                    border: "1px dashed grey",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="body1"
                    gutterBottom
                  >
                    Please scan QR Code Below to
                    pay
                  </Typography>
                  {/* แทนที่ด้วยรูป QR Code จริงๆ */}
                  <img
                    src={qrCode}
                    alt="QR Code"
                    style={{
                      maxWidth: "35%",
                      height: "auto",
                    }}
                  />
                  <Typography
                    variant="caption"
                    display="block"
                    sx={{ mt: 1 }}
                  >
                    Please pay within 15 minutes.
                  </Typography>
                </Box>
              )}
            </Box>

            {/* ปุ่ม Cancel */}
            <Button
              variant="outlined"
              color="error"
              onClick={() => navigate("/cart")}
              sx={{ mr: 2 }}
            >
              Cancel
            </Button>
          </Grid>

          {/* --- ส่วนขวา: สรุปคำสั่งซื้อ --- */}
          <Grid>
            <Card
              variant="outlined"
              sx={{ p: 2, width: "120%" }}
            >
              <Typography
                variant="h6"
                gutterBottom
              >
                Order Summary
              </Typography>
              <Divider sx={{ my: 1 }} />

              {cartItems.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 1.5,
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      width: 60,
                      height: 60,
                      objectFit: "cover",
                      mr: 1.5,
                    }}
                    image={item.imageUrl}
                    alt={item.name}
                  />
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="body2"
                      noWrap
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                    >
                      Amount: {item.quantity} x{" "}
                      {item.price.toLocaleString()}{" "}
                      Baht
                    </Typography>
                  </Box>
                  <Typography variant="body1">
                    {(
                      item.price * item.quantity
                    ).toLocaleString()}{" "}
                    Baht
                  </Typography>
                </Box>
              ))}

              <Divider sx={{ my: 2 }} />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 1,
                }}
              >
                <Typography variant="body1">
                  Subtotol:
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
                    .toFixed()
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
                  Total (Total):
                </Typography>
                <Typography variant="h6">
                  {totalAmount.toLocaleString()}{" "}
                  Baht
                </Typography>
              </Box>

              {/* ปุ่ม Confirm your Order */}
              <Button
                type="submit" // กำหนด type เป็น submit เพื่อให้ form ทำงาน
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                sx={{ mt: 2 }}
              >
                Confirm order
              </Button>
            </Card>
          </Grid>
        </Grid>
      </form>

      {/* Snackbar สำหรับแจ้งเตือนการทำรายการสำเร็จ */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default CheckoutPage;
