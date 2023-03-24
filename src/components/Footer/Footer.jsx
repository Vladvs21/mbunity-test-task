import React from 'react'
import { FooterCon } from './Footer'

import { phone, mail, location } from '../../assets/js'

const Footer = () => {
    return (
        <FooterCon>
            <div className="footer__logo">Logo Here</div>

            <div className="footer__content uk-container">
                <div className="footer__content__list">
                    <div className="footer__content__list__title">Reach us</div>

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
                            <div className="iconText" key={`iconText_footer_${index}`}>
                                {el.icon}
                                <span>{el.text}</span>
                            </div>    
                        )
                    }
                </div>

                {
                    [
                        {
                            title: 'Company',
                            items: ['About', 'Contact', 'Blogs']
                        },
                        {
                            title: 'Legal',
                            items: ['Privacy Policy', 'Terms & Services', 'Terms of Use', 'Refund Policy']
                        },
                        {
                            title: 'Quick Links',
                            items: ['Techlabz Keybox', 'Downloads', 'Forum']
                        }
                    ].map((el, index) => 
                        <div className="footer__content__list" key={`footer__content__list_${index}`}>
                            <div className="footer__content__list__title">{el.title}</div>

                            {el.items.map((e, i) => <div className="footer__content__list__item" key={`footer__content__list__item_${i}`}>{e}</div>)}
                        </div>
                    )
                }

                <div className="footer__content__joinNewsletter">
                    <div className="footer__content__joinNewsletter__title">
                        Join Our Newsletter
                    </div>

                    <div className="footer__content__joinNewsletter__input">
                        <input type="text" placeholder='Your email address' />
                        <button>Subscribe</button>
                    </div>

                    <div className="footer__content__joinNewsletter__annotation">
                        *  Will send you weekly updates for your better tool management.
                    </div>
                </div>
            </div>
        </FooterCon>
    )
}

export default Footer