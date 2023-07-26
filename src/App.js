import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './components/Footer/Footer';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
// import About from './components/About';
import { BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';

function App() {
  const[Mode, setMode] = useState('light');

  const[alert, setAlert] = useState(null);

  // const[backColor, setbackColor] = useState("#e3dceb");

  // const backColorMode = () => {
  //   if (backColor === "#e3dceb"){
  //     setbackColor("red");
  //     document.body.style.backgroundColor = '#e3dceb';
  //     showAlert("red Mode Enabled", "danger" ); 
  //   }
  //   else {
  //     setMode('light');
  //     document.body.style.backgroundColor = '#e3dceb';
  //     showAlert("Light Mode Enabled", "success" );
  //   }
    
  // }

  const showAlert = (message, type) => {
    setAlert({
      msg : message, 
      type : type
      });
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-sucess');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-warning');
   }

  const toggleMode = (cls) => { 
    removeBodyClasses(); 
    document.body.classList.add('bg-' + cls);
    if (Mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = '#201234';
      showAlert("Dark Mode Enabled", "danger" ); 
      document.title = "TextUtils - Dark"
      // setInterval(() => {
      //   document.title = "TextUtils - installation"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "TextUtils - installed"
      // }, 2500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#e3dceb';
      showAlert("Light Mode Enabled", "success" );
      document.title = "TextUtils - Light"
    }
  } 

  const handleRed = () => {
    document.body.style.backgroundColor = ' #c94c4c';

    
  }

  const handleGreen = () => {
    document.body.style.backgroundColor = '#b1cbbb'
    
  }

  const handleBlue = () => {
    document.body.style.backgroundColor = '#034f84'
    
  }   

  const handleYellow = () => {
    document.body.style.backgroundColor = '#ffef96'
    
  }


  return (
    <>
    <div>
      <Router>
        <Header title = "Text Utils" abouttext = "About" Mode ={Mode} toggleMode = {toggleMode} handleBlue = {handleBlue} handleYellow={handleYellow} handleRed ={handleRed} handleGreen = {handleGreen}/> 
        {/* <Header title = "Text Utils" abouttext = "About" Mode ={Mode} toggleMode = {toggleMode} /> */}
        <Alert alert ={alert} />
        <div className = "container my-3">
          <Routes>
            <Route exact path= "/About" element={<About Mode ={Mode} />} />
            {/* <Route path="/" element={<Home />} /> */}
            <Route exact path= "/" element = {<TextForm heading = "Enter the text" Mode={Mode} showAlert = {showAlert}/>}/>
            
          </Routes>
          
        </div> 
        
        
        <Footer/>
      </Router>
    </div>
    </>
  );
}

export default App;
