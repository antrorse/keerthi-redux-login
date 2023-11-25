import React,{useState} from 'react' ;
import "./components/style1.css"

const Login=(props)=>
{ 
   
   let [email, setEmail] = useState("");
   let [pass, setPassword] = useState("");
   const [errorMessage, setErrorMessage] = useState("");
   const[auth,setAuth]=useState(false)
   const [loggedIn, setLoggedIn] = useState(false);

   const handleLogin = () => {
     if (email && pass) { 
       setLoggedIn(true);
     } else {
       alert('Please enter both email and password.');
     }
   };

   const handleEmailData=(event)=>
   {
   
   email = event.target.value;
  setEmail(email);
   }

         
    const handlePswData=(event)=>
    {
       pass = event.target.value;
      setPassword(pass);
     var lowerCase = /[a-z]/g;
      var upperCase = /[A-Z]/g;
      var numbers = /[0-9]/g;
      var specialchars=/[^A-Za-z0-9]/g;
	    

      // regular expressions to validate password
      
      if (!pass.match(lowerCase)) {
         setErrorMessage("Password should contains lowercase letters!");
      } else if (!pass.match(upperCase)) {
         setErrorMessage("Password should contain uppercase letters!");
      } else if (!pass.match(numbers)) {
         setErrorMessage("Password should contains numbers also!");
      } 
      else if (!pass.match(specialchars)) {
          setErrorMessage("Password should contain special characters!");
       } else if (pass.length < 10) {
            setErrorMessage("Password length should be more than 10.");
      } else {
         setErrorMessage("Password is strong!"); 
       
         }
   }
   const display = e => {
      
     setAuth(true);
       }
  
   return (
      <div className='main'>
         {auth? "login successful":
         
         <form className='form1' >
        
         <h2 >
            
            Login Form
         </h2>
         < div className='fbody'>
         <div className='flex-container'>
        
         <input type = "email"  onChange = {handleEmailData} placeholder="enter email" className='email-inpt'  required/>
		 </div>
		 <div className='flex-container'>

         <input type = "password"  onChange = {handlePswData} placeholder="enter password"  className='pass-inpt'/>
		 </div>
       
         <div style = {{ color: "red" }} className='errorsec'> {errorMessage} </div>
         
		 
         <br />
              <button type="button" className='buttonsec' onClick={event=>{handleLogin();display();}}>
                Login
              </button>&nbsp;&nbsp;&nbsp;&nbsp;<span className='spansec'>Don't have an account?
              <button className='button1' onClick={() => props.onFormSwitch('Signup')}> Signup</button></span>
            

       
   </div>
		 </form>
}
      
   </div>
      
   );
   }
export default Login 