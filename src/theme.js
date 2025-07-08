// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    // โทนสีหลักและสีรอง
    primary: {
      main: "#CDB4DB", // สีม่วงลาเวนเดอร์อ่อนๆ (Soft Earth Tones) สำหรับเน้น
      light: "#E0BBE4",
      dark: "#B18ACC",
      contrastText: "#fff", // สีตัวอักษรบนสี primary
    },
    secondary: {
      main: "#FFC8DD", // สีชมพูอ่อนอมพีช (Soft Earth Tones) สำหรับเน้นอีกสี
      light: "#FFD9EB",
      dark: "#E0B3C8",
      contrastText: "#fff",
    },
    background: {
      default: "#FBF8F1", // Off-white/ครีม เป็นสีพื้นหลังหลัก
      paper: "#FFFFFF", // สีพื้นหลังของ Card หรือ Paper Component
    },
    text: {
      primary: "#7F7F7F", // Warm Grey สำหรับข้อความหลัก
      secondary: "#A8A8A8", // Warm Grey ที่อ่อนลงเล็กน้อยสำหรับข้อความรอง
    },
    // คุณสามารถเพิ่มสีอื่นๆ ที่ใช้บ่อยได้ที่นี่ เช่น error, warning, info, success
  },
  typography: {
    // การตั้งค่าสำหรับหัวข้อ
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontSize: "3.5rem", // ขนาดตัวอักษรสำหรับ h1
      fontWeight: 700,
      color: "#7F7F7F", // ใช้ Warm Grey เป็นสีเริ่มต้นสำหรับหัวข้อ
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontSize: "2.5rem",
      fontWeight: 600,
      color: "#7F7F7F",
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontSize: "2rem",
      fontWeight: 500,
      color: "#7F7F7F",
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
      fontSize: "1.5rem",
      fontWeight: 500,
      color: "#7F7F7F",
    },
    h5: {
      fontFamily: '"Playfair Display", serif',
      fontSize: "1.25rem",
      fontWeight: 500,
      color: "#7F7F7F",
    },
    h6: {
      fontFamily: '"Playfair Display", serif',
      fontSize: "1rem",
      fontWeight: 500,
      color: "#7F7F7F",
    },
    // การตั้งค่าสำหรับเนื้อหา
    body1: {
      fontFamily: '"Noto Sans Thai", sans-serif', // หรือ 'Lato', 'Open Sans'
      fontSize: "1rem",
      lineHeight: 1.6,
      color: "#7F7F7F",
    },
    body2: {
      fontFamily: '"Noto Sans Thai", sans-serif',
      fontSize: "0.875rem",
      lineHeight: 1.5,
      color: "#A8A8A8",
    },
    button: {
      fontFamily: '"Noto Sans Thai", sans-serif',
      fontSize: "1rem",
      textTransform: "none", // ไม่เปลี่ยนตัวอักษรเป็นตัวใหญ่ทั้งหมด
      fontWeight: 600,
    },
    // สามารถเพิ่ม variants อื่นๆ เช่น subtitle1, caption, overline ได้ตามต้องการ
  },
  // หากต้องการเพิ่มการปรับแต่งอื่นๆ เช่น spacing, breakpoints, components
  // คุณสามารถเพิ่มได้ที่นี่
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // เพิ่มความโค้งมนให้ปุ่ม
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12, // เพิ่มความโค้งมนให้ Card/Paper
          boxShadow:
            "0px 4px 10px rgba(0, 0, 0, 0.05)", // เพิ่มเงาอ่อนๆ
        },
      },
    },
    // ตัวอย่างการปรับแต่ง TextField ให้เข้ากับธีม
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          "& fieldset": {
            borderColor: "#E0E0E0", // สีขอบเริ่มต้น
          },
          "&:hover fieldset": {
            borderColor: "#CDB4DB", // สีขอบเมื่อ hover
          },
          "&.Mui-focused fieldset": {
            borderColor: "#CDB4DB", // สีขอบเมื่อ focus
            borderWidth: "1px", // เพื่อไม่ให้เส้นหนาขึ้นเมื่อ focus
          },
        },
      },
    },
  },
});

export default theme;
