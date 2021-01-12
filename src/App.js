import Main from './App/Main';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import ToransProvider from './Context.js/ToransProvider';



const App = () => {

  const theme = createMuiTheme({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    typography: {
      fontFamily: "Alef"
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <ToransProvider>
        <Main />
      </ToransProvider>
    </ThemeProvider>
  );
}

export default App;
