import React from 'react'
import Menu from '../Menu/Menu.jsx'
import { HeaderCon } from './Header'

const Header = () => {
    return (
        <HeaderCon className='uk-container'>
            <div className="logo">Logo here</div>
            <Menu />
        </HeaderCon>
    )
}

export default Header