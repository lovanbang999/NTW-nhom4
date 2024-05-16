import { createTheme } from '@mui/material/styles'

// Define your custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2' // Change this to your desired primary color
    },
    secondary: {
      main: '#dc004e' // Change this to your desired secondary color
    }
  },
  typography: {
    // Define your typography styles here
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 500
    }
    // Add more typography styles as needed
  }
  // Other theme options like spacing, breakpoints, etc. can be added here
})

export default theme
