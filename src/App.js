import Main from './App/Main';
import CustomThemeProvider from './CustomThemeProvider';

function App() {
  return (
    <CustomThemeProvider>
      <Main />
    </CustomThemeProvider>
  );
}

export default App;
