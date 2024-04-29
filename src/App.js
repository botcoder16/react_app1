//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './components/Home';


function App() {
  const[theme,setTheme]=useState({
    theme: "light",
    text:"Dark Mode",
    //navStyle:{"background-color": "black"} // method to add style
    TextFormStyle:{"background-color":"white","color":"black","background":"white"}
  });
  const[alert,setAlert]=useState(null);
  const createAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  
  const toggleTheme = () => {
    if (theme.theme === 'light') {
      setTheme({ theme: 'dark', text:'Light Mode',TextFormStyle:{"background-color":"silver","color":"white","background":"silver"}});
      document.body.style.backgroundColor="silver";
      createAlert("Switched To Dark Mode!","primary");
    } else {
      setTheme({ theme: 'light', text:'Dark Mode',TextFormStyle:{"background-color":"white","color":"black","background":"white"}})
      document.body.style.backgroundColor="white";
      createAlert("Switched To Light Mode!","primary");
    }
  }
  const router=createBrowserRouter([
    {
      path:"/",
      element:<><Navbar title="Supriy" mode={theme.theme} text={theme.text} toggleTheme={toggleTheme}/>
      <Alert alert={alert}/>
      <Home />
      </> 
    },
    {
      path:'/add_comment',
      element:<>
      <Navbar title="Supriy" mode={theme.theme} text={theme.text} toggleTheme={toggleTheme}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <TextForm createAlert={createAlert} heading="Comments" Style={theme.TextFormStyle}/>
      </div>
      </>
    }
  ])
  return (
    // starting html code with <>
    <>
      <RouterProvider router={router}/>
    </>
    // end html code with </> tag
  );
}

export default App;
