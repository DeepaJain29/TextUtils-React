import React from "react";
import PropTypes from 'prop-types';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link } from 'react-router-dom'
// import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';

// import NavDropdown from 'react-bootstrap/NavDropdown';
// "#f7786b"
// backgroundColor:"#f7786b"
// #622569

// function NavScroll(props) {
//     return (
//       <>
//       <Navbar className = {`backgroundColor:${props.mode}`} style={{disply:'flex', justifyContent:'right', backgroundColor : "#622569", color:"#f7cac9"}}>
//       <Container fluid style={{text: "white"}}>
//         <Navbar.Brand to="/">{props.title}</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//             <Nav.Link to="#action1">Home</Nav.Link>
//             <Nav.Link to="#action2">{props.abouttext}</Nav.Link>
//             <NavDropdown title="Link" id="navbarScrollingDropdown">
//               <NavDropdown.Item to="#action3">Action</NavDropdown.Item>
//               <NavDropdown.Item to="#action4">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item to="#action5">
//                 Something else here
//               </NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link to="/" disabled>
//               Link
//             </Nav.Link>
//           </Nav>
//           <Form className="d-flex">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//             />
//             <Button variant="outline-light">Search</Button>{' '}
//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
      /* <Navbar variant="dark" className = {`backgroundColor:${props.mode}`} style={{disply:'flex', justifyContent:'right',  }}>
        <Container>
          <Navbar.Brand to="#home">{props.title}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="#home">{props.abouttext}</Nav.Link>
            <Nav.Link to="#features">Features</Nav.Link>
            <Nav.Link to="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form className="d-flex" style={{disply:'flex', justifyContent:'left'}}>
            <Form.Control
              type="search"
              placeholder="Search Here"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger" style = {{backgroundColor: "#eea29a"}}>Search</Button>
          </Form>
        </Container>
      </Navbar> */
  //     </>
  //   );
  // }
  
export default function NavScroll(props) {




  return(
    <>
    <div style={{disply:'flex', justifyContent:'right'}}>
      <nav className={`navbar navbar-expand navbar-${props.Mode} bg-${props.Mode} `}> 
      {/* <nav className={`navbar navbar-expand navbar-${props.Mode} bg-${props.Mode} `}> */}

      {/* <nav ClassName= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> */}
        <Link  className="navbar-brand">{props.title}</Link >
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">{props.abouttext}</Link>
              </li>
              {/* <li className="nav-item">
                <Link  className="nav-link" to="/">Pricing</Link >
              </li>
              <li className="nav-item">
                <Link  className="nav-link disabled" to="/">Disabled</Link >
              </li> */}

              {/* <li className="nav-item dropdown">
                <Link  className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                colored background
                </Link >
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link  className="dropdown-item" onClick={props.handleRed} to="/">Red</Link >
                  <Link  className="dropdown-item" onClick={props.handleGreen} to="/">green</Link >
                  <Link  className="dropdown-item" onClick={props.handleYellow} to="/">yellow</Link >

                  <div className="dropdown-divider"></div>
                  <Link  className="dropdown-item" onClick={props.handleBlue} to="/">blue</Link >
                </div>
              </li>

              <div className="dropdown show">
               
                  
                <button className="btn btn-danger btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  colored background
                </button>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link  className="dropdown-item" onClick={props.handleRed} to="/">Red</Link >
                  <Link  className="dropdown-item" onClick={props.handleGreen} to="/">green</Link >
                  <Link  className="dropdown-item" onClick={props.handleYellow} to="/">yellow</Link >
                  <div className="dropdown-divider"></div>
                  <Link  className="dropdown-item" onClick={props.handleBlue} to="/">blue</Link >

                </div>
                
              </div> */}
              <div className="d-flex">
                <div className = "bg-primary rounded mx-2 my-2" onClick = {() => {props.toggleMode('primary')}} style={{height:"20px", width:"20px", cursor:'pointer'}}></div>
                <div className = "bg-danger rounded mx-2 my-2" onClick = {() => {props.toggleMode('danger')}} style={{height:"20px", width:"20px", cursor:'pointer'}}></div>
                  <button type="button" onClick={props.handleBlue} className="btn btn-outline-primary">blue</button>
                  <button type="button"  onClick={props.handleGreen} className="btn btn-outline-success">Green</button>
                  {/* <button type="button" onClick={props.handleRed} className="btn btn-outline-danger">Red</button>
                  <button type="button" onClick={props.handleYellow} className="btn btn-outline-warning">Yellow</button> */}
              </div>
            </ul>
          </div>
        <form className="form-inline">
          <input className="form-control mr-sm-2"  type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
        </form>
        <div className={`form-check form-switch mx-1 text-${props.Mode==='light'?'dark':'light'}`}>
          <input className="form-check-input" onClick={() => {props.toggleMode(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
        </div>
      </nav>
      </div>
    </>
  );
}



// function CustomNavbar(props) {
//   return (
//     <Navbar style={{ backgroundColor: props.color }} expand="lg">
//       <Navbar.Brand to="#home">My App</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="ml-auto">
//           <Nav.Link to="#about">About</Nav.Link>
//           <Nav.Link to="#contact">Contact</Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }


Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    abouttext : PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title : 'Text Util',
    abouttext : 'About us'
}

