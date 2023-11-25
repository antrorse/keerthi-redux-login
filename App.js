import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./crudapp/Home.js"
import Create from "./crudapp/Create.js"
import Update from "./crudapp/Update.js"
import Read from "./crudapp/Read.js"
import "./crudapp/crudstyle.css"
function App(){
  return(
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/Create" element={<Create/>}></Route>
        <Route path="/Update/:id" element={<Update/>}></Route>
        <Route path="/Read/:id" element={<Read/>}></Route>
       </Routes>
    </BrowserRouter>
  )
}
export default App;


/* import React, { useState } from "react";
import Login from './Login';
import Signup from "./Signup";


function App(){
  const [currentForm, setCurrentForm]=useState('Login');
  const[auth,setAuth]=useState(false)
  const toggleform=(formName)=>{
    setCurrentForm(formName);
  }
  return(
    <div>
      { currentForm ==='Login' ? <Login onFormSwitch={toggleform}/> : <Signup onFormSwitch={toggleform}
      />}
    </div>

  )

}
export default App; */

/* import React, { Component } from "react";
import Postform from "./Postform";
import AllPost from "./AllPost";


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 style={{color:"maroon"}}>Welcome!!!</h1>
        <Postform />
        <AllPost/>
        
      </div>
    );
  }
}
export default App; */
