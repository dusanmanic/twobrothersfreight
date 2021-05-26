import React from 'react'
import './database.styles.css'

import {firestore} from '../../firebase/firebase.utils'

function DatabasePage () {

    let test = firestore.collection("test").doc("testID")
    test.get()
    .then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            let data = doc.data()
            console.log(data.firstName)
            console.log(data.lastName)
            console.log(data.firstName)
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });   

    return (
        <div>
            neki tekst
        </div>
    )
}

export default DatabasePage