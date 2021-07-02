import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

import './table.styles.css'

import {firestore} from '../../firebase/firebase.utils'
import Spiner from '../../assets/spiner/spiner.svg'


function TableUsers() {

    const history = useHistory()

    const randomToken = Math.random().toString(36).substr(2)+Math.random().toString(36).substr(2)+Math.random().toString(36).substr(2)+Math.random().toString(36).substr(2)

    const [candidate, setCandidate] = useState([])
    const [openDatapage, setOpenDatapage] = useState(false)

    const sendMessage = event => {
        console.log(event.nativeEvent.path[2].children[8].innerText)
    }

    const logOut = () => {
        let auth = firestore.collection('administrators').doc(localStorage.getItem("userLog"))
        auth.update({
            userLogged: false,
            strToken: randomToken
        }).then(() => {
            localStorage.removeItem("userLog")
            localStorage.removeItem("userToken")
            history.push('/')
        })
        
    }

    useEffect(() => {
        let candidates = firestore.collection("candidates").orderBy("appDate", "asc")
        candidates.get()
        .then((querySnapshot) => {
            querySnapshot.forEach(doc => {
                // console.log(doc.id, " ===> ", doc.data());
                let data = doc.data()
                setCandidate((prevState) => ([
                    ...prevState,
                    {
                        firstName: data.firstName,
                        lastName: data.lastName,
                        address_one: data.address_one,
                        address_two: data.address_two,
                        country: data.country,
                        city: data.city,
                        province: data.province,
                        tel: data.tel,
                        email: data.email,
                        driving: data.driving,
                        carriers: data.carriers,
                        accidents: data.accidents,
                        violations: data.violations
                    }
                ]))
            });
        })
        .then(() => {
            console.log("Ucitano sve")
            setOpenDatapage(true)
        })
    }, [])

    useEffect(() => {
        candidate.map( user => {
            console.log(Object.keys(user.address_two).length === 0)
        })
    }, [])

    return (
        <div className="table-page-wrapper">
            <div className="table-buttons">
                <button className="home-button" onClick={() => history.push('/')}>Home</button> 
                <button className="log-out-button" onClick={logOut}>Log out</button>
            </div>
            {( () => {
                if(openDatapage) {
                    return (                        
                        <table className="table-wrapper">
                            <tbody>
                                <tr>
                                    <th>Candidate</th>
                                    <th>Addresses</th>
                                    <th>Country</th>
                                    <th>City</th>
                                    <th>Province</th>
                                    <th>Telephone</th>
                                    <th>E-mail</th>
                                    <th>Driving</th>
                                    <th>Carr...</th>
                                    <th>Acci...</th>
                                    <th>Viol...</th>
                                </tr>
                                {candidate.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.firstName} {user.lastName}</td>
                                    <td>
                                        <div className="tr-addresses">
                                            *{user.address_one}
                                            <div className="address-two">
                                                {(() => {
                                                    if(Object.keys(user.address_two).length !== 0) {
                                                        return (
                                                            `**${user.address_two}`
                                                        )
                                                    }
                                                }) ()}
                                            </div>
                                        </div>
                                    </td>
                                    <td>{user.country}</td>
                                    <td>{user.city}</td>
                                    <td>{user.province}</td>
                                    <td>{user.tel}</td>
                                    <td>{user.email}</td>
                                    <td>{user.driving}</td>
                                    <td>{user.carriers}</td>
                                    <td>{user.accidents}</td>
                                    <td>{user.violations}</td>
                                    {/* <td><button onClick={sendMessage}>Send message</button></td> */}
                                </tr>
                                ))}
                            </tbody>
                        </table>                                            
                    )
                } else {
                    return (
                        <img src={Spiner} alt=""/>
                    )
                }
            }) ()}          
        </div>
    )

}

export default TableUsers