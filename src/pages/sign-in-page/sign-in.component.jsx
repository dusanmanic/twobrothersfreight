import React from 'react'

import './sign-in.styles.css'

export default function SignIn() {

    return(
        <div className='sign-in-wrapper'>
            <div className='header-background' />
            <div className="sign-in-page">
                <form className="signin-form"> 
                    <div className="signin-wrapper">
                        <input className="signin-input" type="username" name="username" required="required"/>
                        <label className="signin-label">Username</label>
                    </div>
                    <div className="signin-wrapper">
                        <input className="signin-input" type="password" name="password" required="required"/>
                        <label className="signin-label">Password</label>
                    </div>
                    <div className="signin-button-wrapper">
                        <button className='submit-button' type="submit" value="Submit"> Submit </button> 
                    </div>        
                </form>
            </div>
        </div>
    )
}