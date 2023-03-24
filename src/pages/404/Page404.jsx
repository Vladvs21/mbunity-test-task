import React from 'react'
import { Link } from 'react-router-dom'
import { Page404Con } from './Page404'

const Page404 = () => {
    return (
        <Page404Con className='uk-container'>
            <div className="page404__text">
                <p>Oops.</p>
                <p>Unfortunately, the page you were looking for doesn't exist.<br />Contact us so we can help you.<br /></p>

                <div className='page404__btn'>
                    <Link to={'/contact'}>Contact us</Link>
                </div>
            </div>

            <div className="page404__error">404</div>
        </Page404Con>
    )
}

export default Page404