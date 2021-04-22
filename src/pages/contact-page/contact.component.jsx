import React from 'react'

import './contact.styles.css'

export default function Contact() {

    return (
        <div className='contact'>
            <div className='header-background' />
            <div className='contact-page'>
                <div className="contact-text">
                    <span className='contact-text-first'>NEKI TEKST</span>
                    <span className='contact-text-second'>NEKI TEKST</span>
                </div>
                <div className="contact-map">
                        <iframe title='Company Location' width="600" height="500" src="https://maps.google.com/maps?q=nis%20centar&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" />
                </div>
            </div>
        </div>
    )
}