import React, { useState } from 'react';


const Signup = (props) => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const[authr,setAuthr]=useState(false)
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setAuthr(true);
        
    };

    return (
        <center>
            {authr? "signup successful":
            <form className='form-signUp'>
                <center>
                    <h1>Signup</h1>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder='username' />
                    <br />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Email' />
                    <br />
                    <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder='Password' />
                    <br />
                    <span>
                    <button type="submit" className='buttonsec1' onClick={handleSubmit }>Sign Up</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Already have an account? 
                    <button className='button2' onClick={() => props.onFormSwitch('Login')}>Login</button></span>
                </center>
            </form>
}
        </center>
    );
};

export default Signup;