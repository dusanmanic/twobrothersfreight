import React, {useState, useEffect} from 'react'

import './database.styles.css'

import {firestore} from '../../firebase/firebase.utils'

import TableUsers from '../../components/table/table.component'
 
function DatabasePage () {

    const [userLog, setUserLog] = useState()
    const [logged, setLogged] = useState(false)

    useEffect( () => {
        let userLoggedInfo = firestore.collection("administrators")
        userLoggedInfo.get()
        .then( querySnapshot => {
            querySnapshot.forEach( doc => {
                let user = doc.data()
                if(user.strToken === localStorage.getItem("userToken")) {
                    setLogged(true)
                }
            })
        })
    })

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