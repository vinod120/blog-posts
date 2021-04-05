import React, { useState } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import logo from '../../assests/logo.png';
import { Divider } from '@material-ui/core';
import './styles.css';
import { Link } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = ()=>{
        const obj = {
            email: email,
            password: password
        }
        console.log("login credentials", obj)
    }

    return (
        <div>
            {/* <h1>login page</h1> */}
            <CssBaseline />
            <Box className="login_container">
                <Box className="login_logo">
                    <div>
                        <img src={logo} alt="logo" width="200px" height="60px"/>
                    </div>
                    <Divider />
                    <div>
                        <Box fontWeight="fontWeightBold" m={1} style={{marginTop:'15px', marginBottom:'25px'}}>
                            Login
                        </Box>
                        <p>Welcome back to SalesBlink <br/>
                        Please login below to access your account.</p>
                    </div>
                </Box>
                <Divider />
                <Box className="login_form">
                        <div>
                            <label htmlFor="email">Enter your username</label>
                            <input type="text" placeholder="username" name="username" onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder="****" name="password" onChange={(e)=>setPassword(e.target.value)} />
                        </div>
                        <div className="login_button">
                           <button onClick={handleSubmit}>Sign in</button>
                        </div>
                        <div className="login_footer">
                            <div>
                                <Link to='/register'>
                                    Don’t have an account yet? Get Started
                                </Link>
                            </div>
                            <div>
                                <Link to='/forgotPassword'>
                                    Forgot Password?
                                </Link>
                            </div>
                        </div>
                </Box>
            </Box>

        </div>
    )
}

export default Login
