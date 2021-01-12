import Main from './App/Main';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';



const App = () => {

  const theme = createMuiTheme({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    typography: {
      fontFamily: "Alef"
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
