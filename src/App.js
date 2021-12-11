import './App.css';
import { Box, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <CssBaseline />
        <NavBar />
      </ThemeProvider>
    </div>
  );
}

export default App;
