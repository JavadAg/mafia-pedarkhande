import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Restin from './assets/fonts/restin.ttf'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff4385',
      light: '#eaeaea',
      dark: '#313131'
    },
    secondary: {
      main: '#f50057'
    },
    background: {
      default: '#181818',
      paper: '#1e1e1e'
    }
  },
  typography: {
    fontFamily: ['Restin'].join(',')
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Restin';
          font-display: swap;
          src: local('Restin'), url(${Restin});
          format('ttf');
        }
      `
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Layout>
          <HomePage />
        </Layout>
      </CssBaseline>
    </ThemeProvider>
  )
}

export default App
