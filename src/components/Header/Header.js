

import './Header.css'
import NavScroll from './NavScroll';

function Header(props) {
    return (
      <header>
        <NavScroll title = {props.title} abouttext = {props.abouttext} Mode ={props.Mode} toggleMode = {props.toggleMode} handleYellow = {props.handleYellow} handleRed = {props.handleRed} handleBlue = {props.handleBlue} handleGreen = {props.handleGreen}/>
        
        
      </header>
    );
  }
  
  export default Header;