import React, {useState, useEffect} from 'react'

import './database.styles.css'

import {firestore} from '../../firebase/firebase.utils'

import TableUsers from '../../components/table/table.component'
 
function DatabasePage () {

    const [logged, setLogged] = useState(false)

    useEffect( () => {
        let currentDate = new Date()

        let userLoggedInfo = firestore.collection("administrators")
        userLoggedInfo.get().then( querySnapshot => {
            querySnapshot.forEach( doc => {
                let user = doc.data()

                let compareDate = new Date(user.loggedDate.toDate())
                compareDate.setMinutes(new Date().getMinutes() + 30)

                // console.log(currentDate < compareDate)
                
                if(user.username === localStorage.getItem("userLog") && user.strToken === localStorage.getItem("userToken") && currentDate < compareDate ) {
                    setLogged(true)
                } else if(user.username === localStorage.getItem("userLog") && user.strToken !== localStorage.getItem("userToken") && currentDate < compareDate) {
                    localStorage.clear()
                    window.location.href = "/sign-in"
                } else if(user.username === localStorage.getItem("userLog") && user.strToken === localStorage.getItem("userToken") && currentDate > compareDate ) {
                    localStorage.clear()
                    window.location.href = "/sign-in"
                }
            })
        })
    }, [])

    return (
        <div className="database-page-wrapper">
            {( () => {
                if(logged) {
                    return <TableUsers />
                }
            }) ()}
        </div>
    )

}

export default DatabasePage