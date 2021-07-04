import React, {useEffect, useState} from 'react'

import { firestore } from '../../firebase/firebase.utils'

import { useHistory } from 'react-router-dom'

import Spiner from '../../assets/spiner/spiner.svg'

import './verification.styles.css'

export default function Verification({someUrl}) {

    const history = useHistory()

    const [rollSite, setRollSite] = useState(false)
    const [verified, setVerified] = useState(false)
    const [candidate, setCandidate] = useState([])

    useEffect(() => {

        let candidateArray = []

        firestore.collection("candidates").get()
        .then(querySnapshot => {
            querySnapshot.forEach( doc => {
                let user = doc.data()
                if(user.verificationURL === someUrl.substring(8)) {
                    setRollSite(true)
                    setVerified(true)
                    candidateArray.push(user)
                    firestore.collection("candidates").doc(`${user.userName}`).update({
                        isVerified: true
                    })
                }
            })
        }).then(() => {
            setCandidate(candidateArray)
        })

    }, [])

    const redirectToHomePage = () => {
        history.push('/')
    }

    return (
        <div className={'verification-wrapper'}>
            {(() => {
                if(!verified && rollSite) {
                    return <img className={"verification-spiner"} src={Spiner} alt=""/>
                } else if(candidate.length !== 0) {
                    return (
                        <div className="greeting">
                            Hello {candidate[0].firstName} {candidate[0].lastName}, <br/>
                            thank you for applying for our company. <br/>
                            Your account is now verified. . .
                            <br/><br/>
                            <button className={`submit-button`} onClick={redirectToHomePage}> Home Page </button>                  
                        </div>                        
                    )
                }
            }) ()}
        </div>
    )
}