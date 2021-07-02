import React, {useState, useContext} from 'react'
import {useHistory} from 'react-router-dom'

import {ShowHideContext} from '../../context/show-hide.context'
import Spiner from '../../assets/spiner/spiner.svg'

import './join-us.styles.css'

import {countryListAllIsoData, stateNames} from '../../js-files/countries'
import {emailProviders} from '../../js-files/email-providers'

import {firebase, firestore} from '../../firebase/firebase.utils'

import InputComponent from '../../components/input-component/input.component'
import SectionComponent from '../../components/section-component/section.component'

export default function JoinUs() {    

    const history = useHistory()

    const {applicant, emailStatus} = useContext(ShowHideContext)
    const [applicantGreeting, setApllicantGreeting] = applicant
    const [mailStatus, setMailStatus] = emailStatus
    
    const numbersOptionsArray = ["0", "1", "2", "3", "4", "5+"]
    const questionsOptionsArray = ["None", "Less then 6 months", "Between 6 months and 1 year", "Between 1 and 3 years", "More then 3 years"]

    const [submitDisable, setSubmitDisable] = useState('')
    const [spinerEnable, setSpinerEnable] = useState('submit-spiner-disable')
    const [countryName, setCountryName] = useState("Select country")
    const [mailerState, setMailerState] = useState({
        firstName: "",
        lastName: "",
        address_one: "",
        address_two: "",
        country: "",
        city: "",
        province: "",
        tel: "",
        email: "",
        driving: "",
        carriers: "",
        accidents: "",
        violations: "",
    });

    const handleStateChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setMailerState((prevState) => ({
          ...prevState,
          [event.target.name]: event.target.value,
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const [emailName, emailProvider] = event.target.email.value.split("@")
        
        if(event.target.country.value.includes("Select country")) {
            alert('Select Country')
        } else if(event.target.country.value.includes("United States of America (the)") && event.target.province.value.includes("Select USA state/province")) {
            alert('Choose State/Province')
        } else if(!emailProviders.includes(emailProvider)) {
            // console.log(emailName)
            // console.log(emailProvider)
            // console.log(event.target.email.value)
            // console.log(emailProviders.includes(emailProvider))
            alert('Please type correct email address')
        } else if(event.target.driving.value.includes('notselected')) {
            alert('Answer "How much driving experience have you had?"')
        } else if(event.target.carriers.value.includes('notselected')) {
            alert('Answer "How many carriers have you worked for in the last 3 years?"')
        } else if (event.target.accidents.value.includes('notselected')) {
            alert('Answer "How many accidents have you been in during the last 12 months?"')
        } else if(event.target.violations.value.includes('notselected')) {
            alert('Answer "How many violations have you been cited for in the last 12 months?"')
        } else {
            // console.log(mailerState)
            let date = new Date()
            // console.log(date.getDate())
            let firebaseEntry = firestore.collection("candidates").doc(`${mailerState.firstName}${mailerState.lastName}${date.getHours()}${date.getMinutes()}`)
            let errorRedirect = setTimeout( () => {
                setApllicantGreeting(`${mailerState.firstName} ${mailerState.lastName}`);
                setMailStatus('no');
                history.push('/welcome-to-our-company')
            }, 5000)
            setSubmitDisable('submit-button-disable')
            setSpinerEnable('submit-spiner-enable')
            fetch("http://89.34.2.196:3002/send", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ mailerState }),
            })
            .then(res => res.json()
            .then(data => {
                console.log(data)
                if (data.status.includes('Email sent')) {
                    // alert("Message Sent")
                    firebaseEntry.set({
                        firstName: mailerState.firstName,
                        lastName: mailerState.lastName,
                        address_one: mailerState.address_one,
                        address_two: mailerState.address_two,
                        country: mailerState.country,
                        city: mailerState.city,
                        province: mailerState.province,
                        tel: mailerState.tel,
                        email: mailerState.email,
                        driving: mailerState.driving,
                        carriers: mailerState.carriers,
                        accidents: mailerState.accidents,
                        violations: mailerState.violations,
                        appDate: date
                    })
                    setMailStatus('yes')
                    setApllicantGreeting(`${mailerState.firstName} ${mailerState.lastName}`)
                    setMailerState({
                        firstName: "",
                        lastName: "",
                        address_one: "",
                        address_two: "",
                        country: "",
                        city: "",
                        province: "",
                        tel: "",
                        email: "",
                        driving: "",
                        carriers: "",
                        accidents: "",
                        violations: "",
                    })
                    setSubmitDisable('submit-spiner-disable')
                    setSpinerEnable('')
                    clearTimeout(errorRedirect)
                    history.push('/welcome-to-our-company')
                }
            }))      
        }
    };

    const handleCountryChange = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        setMailerState((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
          }));
        if(event.target.value.includes("United States of America (the)")) {
            setCountryName("USA")
        } else {
            setCountryName("Select country")
        }
    }
     
    return(
        <div className='joinus-wrapper'>
            <div className="joinus-page">
                <form className="joinus-form" onSubmit={handleSubmit}>
                    <InputComponent label={"First Name"} type={"text"} name={"firstName"} required={"required"} handleChange={handleStateChange} />
                    <InputComponent label={"Last Name"} type={"text"} name={"lastName"} required={"required"} handleChange={handleStateChange} />
                    <InputComponent label={"Current Street Address (line 1)"} type={"text"} name={"address_one"} required={"required"} handleChange={handleStateChange} />
                    <InputComponent label={"Current Street Address (line 2)"} type={"text"} name={"address_two"} handleChange={handleStateChange} />
                    <div className="select-input-wrapper">
                        <label className="joinus-label">Country:</label>
                        <select className="joinus-select" name="country" onChange={handleCountryChange} >
                            {
                                countryListAllIsoData.map( (country, index) => 
                                    <option key={index} className="joinus-option" value={country.name}>{country.name}</option>
                                )
                            }
                        </select>
                    </div>
                    <InputComponent label={"City"} type={"text"} name={"city"} required={"required"} handleChange={handleStateChange} />
                    <div className="select-input-wrapper">
                        <label className="joinus-label">State/Province:</label>
                        <select className="joinus-select" name="province" onChange={handleStateChange} >
                            {( () => {
                                if(countryName.includes("Select country")) {
                                    return(
                                        <option className="joinus-option" value="Choose country first">Only available for USA</option>
                                    )
                                }
                                if (countryName.includes("USA")) {
                                    console.log(stateNames)
                                    return (
                                        stateNames.map( (stateName, index) => 
                                            <option key={index} className="joinus-option" value={stateName}>{stateName}</option>
                                        )
                                    )
                                }
                            } ) ()}
                        </select>
                    </div>
                    <InputComponent label={"Phone number"} type={"tel"} name={"tel"} required={"required"} handleChange={handleStateChange} />
                    <InputComponent label={"E-mail address"} type={"email"} name={"email"} required={"required"} handleChange={handleStateChange} />
                    <SectionComponent label={"How much driving experience have you had?"} name={"driving"} options={questionsOptionsArray} handleChange={handleStateChange} />
                    <SectionComponent label={"How many carriers have you worked for in the last 3 years?"} name={"carriers"} options={numbersOptionsArray} handleChange={handleStateChange} />
                    <SectionComponent label={"How many accidents have you been in during the last 12 months?"} name={"accidents"} options={numbersOptionsArray} handleChange={handleStateChange} />
                    <SectionComponent label={"How many violations have you been cited for in the last 12 months?"} name={"violations"} options={numbersOptionsArray} handleChange={handleStateChange} />
                    <div className="signin-button-wrapper">
                        <img className={`${spinerEnable}`} src={Spiner} alt=""/>
                        <button className={`submit-button ${submitDisable}`} type="submit" value="Submit"> Submit </button>                        
                    </div>
                </form>
            </div>
        </div>
    )
}


// console.log(event.target.firstName.value)
// console.log(event.target.lastName.value)
// console.log(event.target.address_one.value)
// console.log(event.target.country.value)
// console.log(event.target.city.value)
// console.log(event.target.province.value)
// console.log(event.target.tel.value)
// console.log(event.target.email.value)
// console.log(event.target.driving.value)
// console.log(event.target.carriers.value)
// console.log(event.target.accidents.value)
// console.log(event.target.violations.value)