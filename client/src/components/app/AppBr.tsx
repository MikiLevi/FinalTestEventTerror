import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { AddEvent } from "../AddNew";

export default function ElevateAppBar() {
  const navigate = useNavigate();
  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <AppBar
          sx={{
            backgroundColor: "#000000",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1200,
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                color: "white",
                fontSize: "2.50vh",
              }}
            >
              Managing Terrorist Incidents🕊️
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Button onClick={() => navigate("/")} color="inherit">
              <AddEvent />
                Home
              </Button>
              <Button onClick={() => navigate("/attack")} color="inherit">
                Attack
              </Button>
              <Button onClick={() => navigate("/map")} color="inherit">
                Map
              </Button>
              <Button onClick={() => navigate("/time")} color="inherit">
                Time
              </Button>
              <Button onClick={() => navigate("/org")} color="inherit">
                Organization
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </React.Fragment>
    </>
  );
}
