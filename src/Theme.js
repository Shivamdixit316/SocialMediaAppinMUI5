import { createTheme } from "@mui/material/styles";
import { green, purple, blue, grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[700],
    },
    secondary: {
      main: green[500],
    },
    otherColor: {
      main: grey[500],
    },
  },
});

export default theme;
