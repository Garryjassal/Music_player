import React from 'react';
import NavBar from './Navbar';
import FooterContainer from './Footer';
import { ToastContainer } from 'react-toastify';
import Body from './mainbody_aside';
import "./App.css";

class App extends React.Component {
  render()
  {
    return (
      <div className="App" style={{background:'grey'}}>
       
      <NavBar/>
      <Body />
      <FooterContainer/>
      <ToastContainer
position="top-right"
autoClose={100}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
      </div>
    );
  }
 
}

export default App;
