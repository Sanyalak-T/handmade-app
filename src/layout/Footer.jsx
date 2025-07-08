import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text
    .secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 5, lg: 4 }}>
          <Item>tam.fun_heartmade</Item>
          <Item>
            106/165 Phubpla Wangtonglang Bangkok
          </Item>
          <Item>Call - 097-111-1111</Item>
          <Item>Mail - tam.fun@gmail.com</Item>
          <Item>LineID - tamfun</Item>
        </Grid>
        <Grid size={{ xs: 12, md: 5, lg: 4 }}>
          <Item>Items</Item>
          <Item>Wedding Gift</Item>
          <Item>Events</Item>
          <Item>Workshops</Item>
          <Item>About</Item>
        </Grid>
        <Grid size={{ xs: 12, md: 5, lg: 4 }}>
          <Item
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: { md: "column" },
              width: { md: "100%" },
            }}
          >
            <Box sx={{ padding: 0.5 }}>
              <InstagramIcon />
            </Box>
            <Box sx={{ padding: 1 }}>
              <YouTubeIcon />
            </Box>
            <Box sx={{ padding: 1 }}>
              <FacebookIcon />
            </Box>
            <Box sx={{ padding: 0.5 }}>
              <PinterestIcon />
            </Box>
          </Item>
        </Grid>

        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{
            xs: "column",
            sm: "row",
          }}
          sx={{ fontSize: "12px" }}
          size={12}
        >
          <Grid
            sx={{
              order: { xs: 2, sm: 1 },
              width: { md: "100%" },
            }}
          >
            <Item>© 2025 tam.fun_heartmade</Item>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
