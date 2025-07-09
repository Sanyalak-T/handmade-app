import React, {
  useState,
  useEffect,
  useRef,
} from "react";
import {
  Box,
  Button,
  Typography,
  useTheme,
  Paper,
  Card,
  CardMedia,
  CardContent,
  Container,
} from "@mui/material";
import theme from "../theme";
import mainImage from "../assets/main-img.webp";

import ProductGridSection from "../components/products/ProductGridSection";

const Home = () => {
  return (
    <>
      {/* hero section  */}
      <Box
        sx={{
          backgroundColor:
            theme.palette.background.default,
        }}
      >
        <Container maxWidth="xl" disableGutters>
          {" "}
          {/* Added disableGutters for full-width image */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              aspectRatio: {
                xs: "16 / 9", // Example aspect ratio for smaller screens
                md: "21 / 9", // Example aspect ratio for larger screens
              },
              minHeight: {
                xs: "250px",
                md: "50vh",
              }, // Ensure minimum height
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden", // Hide overflow for image
            }}
          >
            <Box
              component="img"
              src={mainImage}
              alt="Hero background" // Add alt text for accessibility
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 0, // Ensure image is behind overlay
              }}
              loading="lazy"
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: `linear-gradient(to bottom, rgba(103, 78, 167, 0.7), rgba(50, 30, 80, 0.9))`, // Deeper gradient
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center", // Center text
                p: 3, // Add padding
              }}
            >
              <Typography
                variant="h1" // Changed to h1 for semantic importance
                component="h1"
                sx={{
                  color:
                    theme.palette.primary
                      .contrastText,
                  fontSize: {
                    xs: "2rem",
                    sm: "3rem",
                    md: "4.5rem",
                  },
                  fontWeight: "700", // Bolder font weight
                  textShadow:
                    "2px 2px 4px rgba(0,0,0,0.5)", // Add subtle shadow
                  mb: 2, // Margin bottom for spacing
                }}
              >
                Enjoy with tam.fun_heartmade
              </Typography>
              <Typography
                variant="h6"
                component="p"
                sx={{
                  color:
                    theme.palette.primary
                      .contrastText,
                  fontSize: {
                    xs: "1rem",
                    sm: "1.2rem",
                    md: "1.5rem",
                  },
                  maxWidth: "700px", // Limit width for readability
                  mb: 3,
                }}
              >
                Discover unique handmade creations
                that bring joy to your life.
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor:
                    theme.palette.secondary.main,
                  "&:hover": {
                    backgroundColor:
                      theme.palette.secondary
                        .dark,
                  },
                  color:
                    theme.palette.secondary
                      .contrastText,
                  fontSize: {
                    xs: "0.9rem",
                    sm: "1rem",
                    md: "1.1rem",
                  },
                  px: { xs: 3, md: 5 },
                  py: { xs: 1.5, md: 2 },
                }}
              >
                Shop Now!
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
      {/* // All items */}
      <ProductGridSection />
    </>
  );
};

export default Home;
