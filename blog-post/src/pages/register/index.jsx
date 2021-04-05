import React, { useState } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import logo from '../../assests/logo.png';
import { Checkbox, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import '../login/styles.css';

function Register() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [company, setCompany] = useState('')
    const [phone, setPhone] = useState('')
    
    const handleSubmit = ()=>{
        const obj = {
            email: email,
            password: password,
            company_name: company,
            phone: phone
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
                            Get 1000 Free Leads.
                        </Box>
                        <p>Create your account with SalesBlink <br/>
                        Millions of email leads in one subscription.</p>
                    </div>
                </Box>
                <Divider />
                <Box className="login_form">
                        <div>
                            <label htmlFor="email">Enter your username</label>
                            <input type="text" placeholder="username" name="username" onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="password">Choose your password</label>
                            <input type="password" placeholder="****" name="password" onChange={(e)=>setPassword(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="company name">Your company name</label>
                            <input type="text" placeholder="company name" name="company_name" onChange={(e)=>setCompany(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="phone_no">Your phone number</label>
                            <input type="text" placeholder="phone no" name="phone_no" onChange={(e)=>setPhone(e.target.value)} />
                        </div>
                        <div>
                            <p><span><Checkbox checked/></span>By registering you accept our Terms of Use and our Privacy Policy.</p>
                        </div>
                        <div className="login_button">
                           <button onClick={handleSubmit}>Create account</button>
                        </div>
                        <div className="login_footer">
                            <div>
                                <Link to='/login'>
                                    Already have an account? Login here.
                                </Link>
                            </div>
                        </div>
                </Box>
            </Box>

        </div>
    )
}

export default Register
