import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Divider,
} from "@mui/material";
// Import Icons for "Our Values" section
import FavoriteIcon from "@mui/icons-material/Favorite";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import HandshakeIcon from "@mui/icons-material/Handshake";
import NatureIcon from "@mui/icons-material/Nature";

function AboutPage() {
  return (
    <Container sx={{ paddingY: 4 }}>
      {/* Header Section */}
      <Typography
        variant="h3"
        component="h1"
        align="center"
        gutterBottom
        sx={{ mb: 4 }}
      >
        About us
      </Typography>

      {/* Introduction Section */}
      <Box sx={{ mb: 6, textAlign: "center" }}>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
        >
          tam.fun_heartmade is a creative space
          filled with joy, love, and the beauty of
          handmade art.
        </Typography>
        <Typography
          variant="body1"
          sx={{ maxWidth: 800, margin: "0 auto" }}
        >
          We offer hands-on workshops in jewelry
          and terrazzo crafts, where every piece
          is 100% handmade with care and
          creativity.
        </Typography>
        <Typography
          variant="body1"
          sx={{ maxWidth: 800, margin: "0 auto" }}
        >
          Our mission is simple: to bring
          happiness into your life through
          meaningful creations. Each item is
          carefully crafted with love, turning
          everyday moments into something truly
          special.
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{ mt: 3, fontStyle: "italic" }}
        >
          Let your heart have fun — one handmade
          piece at a time.
        </Typography>
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* Our Values Section */}
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom
        sx={{ mb: 4 }}
      >
        Our Values
      </Typography>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ mb: 6 }}
      >
        <Grid sx={{ textAlign: "center" }}>
          <FavoriteIcon
            color="primary"
            sx={{ fontSize: 60, mb: 1 }}
          />
          <Typography variant="h6" gutterBottom>
            Made with Love
          </Typography>
          <Typography variant="body2">
            Every piece we make carries the warmth
            and intention of the hands that
            created it.
          </Typography>
        </Grid>
        <Grid sx={{ textAlign: "center" }}>
          <EmojiObjectsIcon
            color="secondary"
            sx={{ fontSize: 60, mb: 1 }}
          />
          <Typography variant="h6" gutterBottom>
            Joy in the Details
          </Typography>
          <Typography variant="body2">
            We believe happiness is found in the
            small things — every curve, color, and
            texture tells a story.
          </Typography>
        </Grid>
        <Grid sx={{ textAlign: "center" }}>
          <HandshakeIcon
            color="success"
            sx={{ fontSize: 60, mb: 1 }}
          />
          <Typography variant="h6" gutterBottom>
            Authentic & Honest Craft
          </Typography>
          <Typography variant="body2">
            Nothing mass-produced. Everything
            uniquely made, celebrating
            imperfections and individuality.
          </Typography>
        </Grid>
        <Grid sx={{ textAlign: "center" }}>
          <NatureIcon
            color="info"
            sx={{ fontSize: 60, mb: 1 }}
          />
          <Typography variant="h6" gutterBottom>
            Sustainable & Slow
          </Typography>
          <Typography variant="body2">
            We value thoughtful, mindful creation
            that respects the environment and
            honors the process.
          </Typography>
        </Grid>
      </Grid>

      <Divider sx={{ my: 6 }} />

      {/* Vision & Mission Section */}
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom
        sx={{ mb: 4 }}
      >
        Vision and Mission
      </Typography>
      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid>
          <Typography variant="h5" gutterBottom>
            Our Vision
          </Typography>
          <Typography variant="body1">
            To inspire people to embrace the
            beauty of handmade art and connect
            with the joy of creating.
          </Typography>
        </Grid>
        <Grid>
          <Typography variant="h5" gutterBottom>
            Our Mission
          </Typography>
          <Box
            component="ul"
            sx={{ pl: 2, "& li": { mb: 1 } }}
          >
            <Typography
              component="li"
              variant="body1"
            >
              To host engaging, welcoming
              workshops where anyone can explore
              their creativity.
            </Typography>
            <Typography
              component="li"
              variant="body1"
            >
              To craft and offer unique handmade
              products that carry meaning and
              heart.
            </Typography>
            <Typography
              component="li"
              variant="body1"
            >
              To promote sustainability and
              mindfulness in every part of our
              process.
            </Typography>
            <Typography
              component="li"
              variant="body1"
            >
              To build a brand that spreads
              happiness — one handmade moment at a
              time.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 6 }} />

      {/* Our Community Section */}
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom
        sx={{ mb: 4 }}
      >
        Our community
      </Typography>
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="body1"
          sx={{ maxWidth: 800, margin: "0 auto" }}
        >
          At tam.fun_heartmade, we’re more than
          just a brand — we’re a community of
          makers, dreamers, and joy-seekers.
        </Typography>
        <Typography
          variant="body1"
          sx={{ maxWidth: 800, margin: "0 auto" }}
        >
          Whether you're joining a workshop or
          supporting handmade art, you're becoming
          part of a creative family that
          celebrates uniqueness and
          self-expression.
        </Typography>
        <Typography
          variant="body1"
          sx={{ maxWidth: 800, margin: "0 auto" }}
        >
          We believe everyone has the power to
          create something beautiful.
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{ mt: 3, fontStyle: "italic" }}
        >
          Join us, share your journey, and let’s
          make from the heart — together.
        </Typography>
      </Box>
    </Container>
  );
}

export default AboutPage;
