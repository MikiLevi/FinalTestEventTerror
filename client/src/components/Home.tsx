import ElevateAppBar from "./app/AppBr";
import { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";

export default function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true); // יראה את הכותרת לאחר 1 שניה
    }, 1000);
  }, []);

  return (
    <div>
      <ElevateAppBar />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh" // מאפשר למרכז את הכותרת באמצע המסך
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(-120px)", // מתחיל גבוה יותר
            transition: "opacity 1s ease, transform 1s ease",
            textAlign: "center",
            fontSize: "4rem", // הגדלת הגודל של הפונט
            color: "rgb(17, 230, 227)", // צבע טקסט סגול כהה
            textShadow:
              " 0 0 20px rgba(50, 206, 198, 0.8), 0 0 30px rgba(93, 166, 222, 0.6)", // אפקט זוהר סגול כהה
          }}
        >
           💣🧨ברוכים הבאים לניהול אירועי הטרור
        </Typography>
      </Box>
    </div>
  );
}
