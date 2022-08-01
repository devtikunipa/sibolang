import { createTheme, ThemeProvider } from '@mui/material/styles';
import Rutes from '../configs/rutes';

const theme = createTheme({
  palette: {
    primary: {
      main: '#607d8b',
      light: '#eceff1',
      dark: '#37474f',
    },
    blue: {
      main: '#2196f3',
      contrastText: 'white'
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Rutes />
    </ThemeProvider>
  );
}

export default App;