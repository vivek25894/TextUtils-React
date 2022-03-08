import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
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

  // const toggleMode = () => {
  //   if (mode === 'dark') {
  //     setMode('light');
  //     setTheme('');
  //     document.body.style.backgroundColor = 'white';
  //     showAlert("Light Mode has been enabled", "success");
  //   } else {
  //     setMode('dark');
  //     setTheme('');
  //     document.body.style.backgroundColor = '#2b2c2d';
  //     showAlert("Dark Mode has been enabled", "success");
  //   }
  // };

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-primary');
  }
  const toggleMode = (cls) => {
    removeBodyClasses();
    if (cls === null) {
      setTheme("primary");
      if (mode === 'dark') {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light Mode has been enabled", "success");
      } else {
        setMode('dark');
        document.body.style.backgroundColor = '#2b2c2d';
        showAlert("Dark Mode has been enabled", "success");
      }
    } else {
      document.body.classList.add('bg-' + cls);
      setTheme(cls);
      showAlert("Dark Mode has been enabled", "success");
    }
  };

   const [theme, setTheme] = useState('');

  // const setThemeBG = (color) => {
  //   if (color === 'red') {
  //     setTheme("rgb(39,5,14)");
  //     color = 'rgb(80,22,40)';
  //   } else if (color === 'green') {
  //     setTheme("rgb(3,31,7)");
  //     color = 'rgb(3,35,7)';
  //   } else if (color === 'blue') {
  //     setTheme("rgb(13 33 53)");
  //     color = '#122e4b';
  //   }
  //   document.body.style.backgroundColor = color;
  // };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={
              <TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove extra Spaces" mode={mode} showAlert={showAlert} theme={theme} />
            } />
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router >
    </>
  );
}

export default App;
