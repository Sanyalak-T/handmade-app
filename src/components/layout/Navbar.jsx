import * as React from "react";
import { Link } from "react-router-dom";
import {
  styled,
  alpha,
} from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MoreIcon from "@mui/icons-material/MoreVert";
import {
  Button,
  ButtonGroup,
  Container,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import theme from "../../theme";
import LogoImage from "../../assets/logo1.png";
import { useCart } from "../../context/CartContext";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(
    theme.palette.common.white,
    0.15
  ),
  "&:hover": {
    backgroundColor: alpha(
      theme.palette.common.white,
      0.25
    ),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(
  ({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  })
);

const StyledInputBase = styled(InputBase)(
  ({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(
        4
      )})`,
      transition:
        theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  })
);

export default function Navbar() {
  const theme = useTheme();
  const { getTotalItems } = useCart(); //ดึงจำนวนสินค้า

  const [anchorEl, setAnchorEl] =
    React.useState(null);
  const [
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl,
  ] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(
    mobileMoreAnchorEl
  );

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        Profile
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        My account
      </MenuItem>
    </Menu>
  );

  const mobileMenuId =
    "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show total items"
          color="inherit"
          component={Link}
          to={"/cart"}
        >
          <Badge
            badgeContent={getTotalItems()}
            color="error"
          >
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* logo */}
          <Link to="/">
            <img
              src={LogoImage}
              alt="Your Logo"
              style={{
                height: "40px",
                marginRight: "16px",
                borderRadius: "50%",
              }} // ปรับขนาดตามต้องการ
            />
          </Link>

          {/* website name */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
              mr: 2,
            }}
          >
            tam.fun_heartmade
          </Typography>

          {/* sarch button */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{
                "aria-label": "search",
              }}
            />
          </Search>

          {/* other link */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: { xs: "100%", md: "60%" },
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/items"
              sx={{
                textDecoration: "none",
                color: "inherit",
                display: {
                  xs: "none",
                  sm: "block",
                },
                padding: 1,
                textTransform: "uppercase",
                "&:hover": {
                  color:
                    theme.palette.text.primary,
                },
              }}
            >
              Products
            </Typography>

            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/wedding-gift"
              sx={{
                textDecoration: "none",
                color: "inherit",
                display: {
                  xs: "none",
                  sm: "block",
                },
                padding: 1,
                textTransform: "uppercase",
                "&:hover": {
                  color:
                    theme.palette.text.primary,
                },
              }}
            >
              Wedding Gift
            </Typography>

            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/events"
              sx={{
                textDecoration: "none",
                color: "inherit",
                display: {
                  xs: "none",
                  sm: "block",
                },
                padding: 1,
                textTransform: "uppercase",
                "&:hover": {
                  color:
                    theme.palette.text.primary,
                },
              }}
            >
              Events
            </Typography>

            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/workshops"
              sx={{
                textDecoration: "none",
                color: "inherit",
                display: {
                  xs: "none",
                  sm: "block",
                },
                padding: 1,
                textTransform: "uppercase",
                "&:hover": {
                  color:
                    theme.palette.text.primary,
                },
              }}
            >
              WorkShops
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/about"
              sx={{
                textDecoration: "none",
                color: "inherit",
                display: {
                  xs: "none",
                  sm: "block",
                },
                padding: 1,
                textTransform: "uppercase",
                "&:hover": {
                  color:
                    theme.palette.text.primary,
                },
              }}
            >
              About Us
            </Typography>
          </Box>

          {/* Icon => cart and user */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <IconButton
              size="large"
              aria-label="show total items"
              color="inherit"
              component={Link}
              to={"/cart"}
            >
              <Badge
                badgeContent={getTotalItems()}
                color="error"
              >
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
