import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'

function Dashboard() {
    
    const isAuth = useSelector(state=>state.login.isAuth)
    console.log(isAuth)
    
    return (
        <>
            {
                !isAuth ? 
                <div>
                    <Redirect to='/login' />
                </div>
                :
                <div>
                    <h1>Dashboard Page</h1>
                </div>
            }
        </>
    )
}

export default Dashboard
