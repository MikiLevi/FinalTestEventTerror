import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";

export default function ElevateAppBar() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        sx={{
          backgroundColor: "rgba(85, 194, 221, 0.9)", // שקיפות קלה
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
            justifyContent: "center", // מרכז את התוכן אופקית
            alignItems: "center", // מרכז את התוכן אנכית
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              color: "black",
              fontSize: "2.50vh",
            }}
          >
            Managing Terrorist Incidents🕊️
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar /> {/* יוסיף ריווח מתחת לכותרת */}
    </React.Fragment>
  );
}
