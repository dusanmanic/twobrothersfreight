import React, {useState, useEffect, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {ShowHideContext} from '../../context/show-hide.context'


import './greeting.styles.css'

export default function GreetingPage() {

    const history = useHistory()

    const [redirectTime, setRedirectTime] = useState(8)

    const scrollTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    const {applicant, emailStatus} = useContext(ShowHideContext)

    const [applicantGreeting, setApllicantGreeting] = applicant
    const [mailStatus, setMailStatus] = emailStatus

    // console.log(applicantGreeting)

    let redirectCounter = setTimeout(() => setRedirectTime(redirectTime - 1), 1000);
    
    useEffect(() => {
        
        if(redirectTime === 0) {
            clearTimeout(redirectCounter)
            scrollTop()
            history.push('/')
        }        
    });

    return(
        <div className="greeting-page">
            {( () => {
                if(mailStatus.includes('yes')) {
                    return (
                        <div className="greeting">
                            Hello {applicantGreeting}, <br/>
                            thank you for applying for our company! <br/>
                            You will receive verification email shortley. . . 
                            <br/><br/><br/><br/><br/><br/>
                            You will be redirected to Home page in {redirectTime} . . .
                        </div>
                    )
                } else if(mailStatus.includes('no')) {
                    return (
                        <div className="greeting">
                            Hello {applicantGreeting}, <br/>
                            we have some issues according to email service <br/>
                            thank you for your patience, please try later. . .
                            <br/><br/><br/><br/><br/><br/>
                            You will be redirected to Home page in {redirectTime} . . .
                        </div>
                    )
                }
            }) ()}
        </div>
    )
}