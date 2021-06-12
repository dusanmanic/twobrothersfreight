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

    console.log(candidate)

    return (
        <div className="table-page-wrapper">            
            {( () => {
                if(openDatapage) {
                    return (
                        <div>
                            <table className="table-wrapper">
                                <tbody>
                                    <tr>
                                        <th>Firstname</th>
                                        <th>Lastname</th>
                                        <th>Address one</th>
                                        <th>Address two</th>
                                        <th>Country</th>
                                        <th>City</th>
                                        <th>Province</th>
                                        <th>Telephone</th>
                                        <th>E-mail</th>
                                        <th>Driving</th>
                                        <th>Carriers</th>
                                        <th>Accidents</th>
                                        <th>Violations</th>
                                    </tr>
                                    {candidate.map((user, index) => (
                                    <tr key={index}>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.address_one}</td>
                                        <td>{user.address_two}</td>
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
                            <button className="log-out-button" onClick={logOut}>Log out</button>
                            <button className="home-button" onClick={() => history.push('/')}>Home</button>
                        </div>                                             
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