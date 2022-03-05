import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      setTheme('');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    } else {
      setMode('dark');
      setTheme('');
      document.body.style.backgroundColor = '#2b2c2d';
      showAlert("Dark Mode has been enabled", "success");
    }
  };

  const [theme, setTheme] = useState('');

  const setThemeBG = (color) => {
    if (color === 'red') {
      setTheme("rgb(39,5,14)");
      color = 'rgb(80,22,40)';
    } else if (color === 'green') {
      setTheme("rgb(3,31,7)");
      color = 'rgb(3,35,7)';
    } else if (color === 'blue') {
      setTheme("rgb(13 33 53)");
      color = '#122e4b';
    }
    document.body.style.backgroundColor = color;
  };

  return (
    <Router>
      <Navbar title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode} setThemeBG={setThemeBG} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/" element={
            <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} theme={theme} />
          } />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </Router >
  );
}

export default App;
