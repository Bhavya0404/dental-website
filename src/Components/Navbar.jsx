import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const navItems = [
  {
    id: 1,
    name: "Find Us",
    value:
      "https://www.google.com/maps/place/Civil+Hospital+(Bahadurgarh,+Haryana)/@28.696091234738354, 76.92406766125453,17z/data=!3m1!4b1!4m6!3m5!1s0x390d0957257d3b69:0xd0564ce5a6c7ff1e!8m2!3d28.6964506!4d76.9237593!16s%2Fg%2F11bxg9t6sh?entry=ttu",
  },
  {
    id: 2,
    name: "Book Now",
    value: "https://wa.me/918745948789",
  },
];

// const navItems = ['Find Us', 'Book Now'];
function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link to={"/"}>
        <Typography variant="h6" sx={{ my: 2 }}>
          ZUMAXAA
        </Typography>
      </Link>

      <Divider />
      <List>
        {navItems.map((item) => (
          <a
            target="_blank"
            href={item.value}
            rel="noreferrer"
            style={{
              textDecoration: "none",
            }}
          >
            <Button
              key={item.id}
              sx={{
                color: "black",
                mr: "2px",
                display: "flex",
                flexDirection: "column",
                mx: "auto",
              }}
            >
              {item.name}
            </Button>
          </a>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "#2563EB",
          height: "5.5rem",
          px: "1.5rem",
        }}
      >
        <Toolbar
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box>
            <Link
              to={"/"}
              style={{
                textDecoration: "none",
                color: "#fff",
              }}
            >
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                ZUMAXAA
              </Typography>
            </Link>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <a target="_blank" href={item.value} rel="noreferrer">
                <Button key={item.id} sx={{ color: "#fff", mr: "2px" }}>
                  {item.name}
                </Button>
              </a>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
