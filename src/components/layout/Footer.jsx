// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import PinterestIcon from "@mui/icons-material/Pinterest";

// import theme from "../../theme";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: (theme.vars ?? theme).palette.text
//     .secondary,
//   ...theme.applyStyles("dark", {
//     backgroundColor: "#1A2027",
//   }),
// }));

// export default function Footer() {
//   return (
//     <Box
//       sx={{
//         flexGrow: 1,
//       }}
//     >
//       <Grid container spacing={2}>
//         <Grid size={{ xs: 12, md: 5, lg: 4 }}>
//           <Item>tam.fun_heartmade</Item>
//           <Item>
//             106/165 Phubpla Wangtonglang Bangkok
//           </Item>
//           <Item>Call - 097-111-1111</Item>
//           <Item>Mail - tam.fun@gmail.com</Item>
//           <Item>LineID - tamfun</Item>
//         </Grid>
//         <Grid size={{ xs: 12, md: 5, lg: 4 }}>
//           <Item>Items</Item>
//           <Item>Wedding Gift</Item>
//           <Item>Events</Item>
//           <Item>Workshops</Item>
//           <Item>About</Item>
//         </Grid>
//         <Grid size={{ xs: 12, md: 5, lg: 4 }}>
//           <Item
//             sx={{
//               display: "flex",
//               justifyContent: "space-around",
//               alignItems: "center",
//               flexDirection: { md: "column" },
//               width: { md: "100%" },
//             }}
//           >
//             <Box sx={{ padding: 0.5 }}>
//               <InstagramIcon />
//             </Box>
//             <Box sx={{ padding: 1 }}>
//               <YouTubeIcon />
//             </Box>
//             <Box sx={{ padding: 1 }}>
//               <FacebookIcon />
//             </Box>
//             <Box sx={{ padding: 0.5 }}>
//               <PinterestIcon />
//             </Box>
//           </Item>
//         </Grid>

//         <Grid
//           container
//           justifyContent="space-between"
//           alignItems="center"
//           flexDirection={{
//             xs: "column",
//             sm: "row",
//           }}
//           sx={{ fontSize: "12px" }}
//           size={12}
//         >
//           <Grid
//             sx={{
//               order: { xs: 2, sm: 1 },
//               width: { md: "100%" },
//             }}
//           >
//             <Item>© 2025 tam.fun_heartmade</Item>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";

import theme from "../../theme.js";
import logo from "../../assets/logo.png";

const FooterItem = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent", // Make background transparent for cleaner look
  boxShadow: "none", // Remove shadow
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left", // Align text left for better readability in columns
  color: (theme.vars ?? theme).palette.text
    .secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "transparent",
  }),
}));

const SocialIconBox = styled(Box)(
  ({ theme }) => ({
    padding: theme.spacing(0.5),
    display: "inline-flex", // Keep icons in a row for larger screens
    "& svg": {
      fontSize: "1.5rem", // Adjust icon size as needed
      color: (theme.vars ?? theme).palette.text
        .secondary,
      "&:hover": {
        color: theme.palette.primary.main, // Example hover effect
      },
    },
  })
);

export default function Footer() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        // Add padding to the footer section to separate it from the content above
        pt: 4,
        pb: 2,
        backgroundColor: theme.palette.grey[100], // Example background color for footer
        // Use theme for dark mode if available
        ...theme.applyStyles("dark", {
          backgroundColor:
            theme.palette.grey[900],
        }),
      }}
    >
      <Grid
        container
        spacing={4} // Increased spacing between columns for better separation
        justifyContent="center" // Center the grid items if total width is less than 12
        sx={{
          maxWidth: 1200, // Max width for content, similar to hero/item grid
          margin: "0 auto", // Center the content
          px: { xs: 2, md: 4 }, // Horizontal padding
        }}
      >
        {/* Column 1: Logo */}
        <Grid>
          <FooterItem>
            {/* Replace with your actual logo image or component */}
            <Box
              component="img"
              src={logo} // **Update this path to your logo image**
              alt="tam.fun_heartmade logo"
              sx={{
                width: 100, // Adjust logo width as needed
                height: "auto",
                mb: 1,
                display: "block", // Ensure image behaves like a block element
                mx: { xs: "auto", md: "0" }, // Center on mobile, left align on desktop
                borderRadius: "50%",
              }}
            />
            {/* Optional: Tagline or brief description */}
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mt: 1 }}
            >
              Handcrafted with love for every
              special moment.
            </Typography>
          </FooterItem>
        </Grid>

        {/* Column 2: Company Info & Legal */}
        <Grid>
          <FooterItem>
            <Typography variant="h6" gutterBottom>
              Tum.fun_heartmade
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 1 }}
            >
              Tam Fun Heartmade Co., Ltd.
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 1 }}
            >
              106/165 Phubpla Wangtonglang Bangkok
            </Typography>
            {/* Example links, ensure they point to actual pages */}
            <Link
              href="/terms"
              color="inherit"
              underline="hover"
              display="block"
              sx={{ mb: 0.5 }}
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              color="inherit"
              underline="hover"
              display="block"
            >
              Privacy Policy
            </Link>
          </FooterItem>
        </Grid>

        {/* Column 3: Navigation */}
        <Grid>
          <FooterItem>
            <Typography variant="h6" gutterBottom>
              Explore
            </Typography>
            {/* Navigation Links */}
            <Link
              href="/items"
              color="inherit"
              underline="hover"
              display="block"
              sx={{ mb: 0.5 }}
            >
              Items
            </Link>
            <Link
              href="/wedding-gift"
              color="inherit"
              underline="hover"
              display="block"
              sx={{ mb: 0.5 }}
            >
              Wedding Gift
            </Link>
            <Link
              href="/events"
              color="inherit"
              underline="hover"
              display="block"
              sx={{ mb: 0.5 }}
            >
              Events
            </Link>
            <Link
              href="/workshops"
              color="inherit"
              underline="hover"
              display="block"
              sx={{ mb: 0.5 }}
            >
              Workshops
            </Link>
            <Link
              href="/about"
              color="inherit"
              underline="hover"
              display="block"
            >
              About Us
            </Link>
          </FooterItem>
        </Grid>

        {/* Column 4: Social Media Icons */}
        <Grid>
          <FooterItem>
            <Typography variant="h6" gutterBottom>
              Social Media
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "row",
                  md: "row",
                }, // Row on mobile, column on desktop for better spacing
                justifyContent: {
                  xs: "center",
                  md: "flex-start",
                }, // Center on mobile, left align on desktop
                flexWrap: "wrap", // Allow icons to wrap if space is limited on small screens
              }}
            >
              <SocialIconBox
                component={Link}
                href="https://www.instagram.com/tam.fun_heartmade"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </SocialIconBox>
              <SocialIconBox
                component={Link}
                href="https://www.youtube.com/tam.fun_heartmade"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <YouTubeIcon />
              </SocialIconBox>
              <SocialIconBox
                component={Link}
                href="https://discord.gg/yourdiscordlink"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
              >
                <PinterestIcon />
              </SocialIconBox>
              <SocialIconBox
                component={Link}
                href="https://www.facebook.com/tam.fun_heartmade"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </SocialIconBox>
            </Box>
          </FooterItem>
        </Grid>
      </Grid>

      {/* --- */}

      {/* Copyright Section (Full Width) */}
      <Box
        sx={{
          borderTop: 1, // A subtle line above the copyright
          borderColor: theme.palette.divider,
          mt: 4, // Margin top to separate from columns
          pt: 2, // Padding top for the text
          textAlign: "center",
          color: theme.palette.text.secondary,
          fontSize: "0.8rem",
          maxWidth: 1200,
          margin: "0 auto",
          px: { xs: 2, md: 4 },
        }}
      >
        <Typography
          variant="body2"
          color="inherit"
        >
          &copy; 2025 tam.fun_heartmade
        </Typography>
      </Box>
    </Box>
  );
}
