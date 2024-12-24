import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function ElevateAppBar() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        sx={{
          backgroundColor: "#000000", // שקיפות קלה
          position: "fixed", // הסרגל יישאר קבוע למעלה
          top: 0, // למנוע מהמיקום להתעדכן בעת גלילה
          left: 0,
          right: 0,
          zIndex: 1200, // לוודא שהסרגל תמיד יישאר מעל
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between", // יפזר את התוכן מצדדים
            alignItems: "center", // מרכז את התוכן אנכית
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
          
          {/* תוסף כאן כפתור או אלמנטים נוספים */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button color="inherit">Contact</Button>
            <Button color="inherit">About</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar /> {/* יוסיף ריווח מתחת לכותרת */}
    </React.Fragment>
  );
}
