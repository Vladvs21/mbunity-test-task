import React from 'react'
import { ContactUsCon } from './ContactUs'

import { twitter, instagram, discord, phone, mail, location, send } from '../../assets/js'

const ContactUs = () => {

    const handleSubmit = e => {
        e.preventDefault()
        alert('Form was submited')
    }

    return (
        <ContactUsCon className='uk-container'>
            <div className="contactUs__title">Contact Us</div>
            <div className="contactUs__subtitle">Any question or remarks? Just write us a message!</div>

            <div className="contactUs__content">
                <div className="contactUs__content__contactInfo">
                    <div>
                        <div className="contactUs__content__contactInfo__title">Contact Information</div>
                        <div className="contactUs__content__contactInfo__subtitle">Say something to start a live chat!</div>
                    </div>

                    <div className="contactUs__content__contactInfo__iconText__container">
                        {
                            [
                                {
                                    icon: phone,
                                    text: '+1012 3456 789'
                                },
                                {
                                    icon: mail,
                                    text: 'demo@gmail.com'
                                },
                                {
                                    icon: location,
                                    text: '132 Dartmouth Street Boston, Massachusetts 02156 United States'
                                }
                            ].map((el, index) => 
                                <div className="iconText" key={`iconText_${index}`}>
                                    {el.icon}
                                    {el.text}
                                </div>    
                            )
                        }
                    </div>

                    <div className="contactUs__content__contactInfo__social">
                        <div className="contactUs__content__contactInfo__social__single">{twitter}</div>
                        <div className="contactUs__content__contactInfo__social__single">{instagram}</div>
                        <div className="contactUs__content__contactInfo__social__single">{discord}</div>
                    </div>

                    <div className="contactUs__content__contactInfo__circle__big" />
                    <div className="contactUs__content__contactInfo__circle__small" />
                </div>

                <form className="contactUs__content__form">
                    <div className="contactUs__content__form__row">
                        <div>
                            <label htmlFor="firstName">First Name</label>
                            <input id='firstName' type="text" placeholder='First name'/>
                        </div>

                        <div>
                            <label htmlFor="lastName">Last Name</label>
                            <input id='lastName' type="text" placeholder='Last name' />
                        </div>
                    </div>
                    
                    <div className="contactUs__content__form__row">
                        <div>
                            <label htmlFor="email">Email</label>
                            <input id='email' type="text" placeholder='Email' />
                        </div>
                        
                        <div>
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input id='phoneNumber' type="text" placeholder='Phone number' />
                        </div>
                    </div>

                    <div className="contactUs__content__form__select">
                        <div className="contactUs__content__form__select__title">Select Subject?</div>

                        <div className="contactUs__content__form__select__content">
                            <div>
                                <input type="radio" id="gi1" name="subject" value="gq" />
                                <label htmlFor="gi1">General Inquiry</label>
                            </div>

                            <div>
                                <input type="radio" id="gi2" name="subject" value="gq" />
                                <label htmlFor="gi2">General Inquiry</label>
                            </div>

                            <div>
                                <input type="radio" id="gi3" name="subject" value="gq" />
                                <label htmlFor="gi3">General Inquiry</label>
                            </div>

                            <div>
                                <input type="radio" id="gi4" name="subject" value="gq" />
                                <label htmlFor="gi4">General Inquiry</label>
                            </div>
                        </div>
                    </div>

                    <div className="contactUs__content__form__row">
                        <div>
                            <label htmlFor="phoneNumber">Message</label>
                            <input id='phoneNumber' type="text" placeholder='Write your message..'/>
                        </div>
                    </div>

                    <button className='contactUs__content__form__submit' onClick={handleSubmit}>Send Message</button>

                    <div className='contactUs__content__form__icon'>
                        {send}
                    </div>
                </form>
            </div>
        </ContactUsCon>
    )
}

export default ContactUs