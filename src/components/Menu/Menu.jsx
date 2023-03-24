import React, { useEffect, useState } from 'react'
import { MenuCon } from './Menu'

import { user, cart, menu, userWhite } from '../../assets/js'

import { Link, useLocation } from 'react-router-dom'

const Menu = () => {

    const [active, setActive] = useState('/')

    const location = useLocation()

    useEffect(() => {
        setActive(location.pathname)
    }, [location])

    const pages = [
        {
            pathname: '/home',
            name: 'Home'
        },
        {
            pathname: '/features',
            name: 'Features',
            subpages: [
                {
                    pathname: '/features/feature-1',
                    name: 'Feature 1'
                },
                {
                    pathname: '/features/feature-2',
                    name: 'Feature 2'
                }
            ]
        },
        {
            pathname: '/blog',
            name: 'Blog'
        },
        {
            pathname: '/shop',
            name: 'Shop'
        },
        {
            pathname: '/about',
            name: 'About'
        },
        {
            pathname: '/contact',
            name: 'Contact'
        },
    ]

    const MenuContent = ({mobile = false}) => {
        return (
            <>
                <div className="menu__pages">
                    {
                        pages.map((page, index) => 
                            'subpages' in page ? 
                                mobile ?
                                <>
                                    {
                                        [
                                            page.subpages.map((subpage, i) =>
                                                <Link key={`page_${index}${i}`} className={`menu__pages__item${active === subpage.pathname ? ' active' : ''}`} to={subpage.pathname}>{subpage.name}</Link>
                                            )
                                        ]
                                    }
                                </>
                                :
                                <>
                                    <button key={`page_${index}`} className={`menu__pages__item dropdown${active.includes(page.pathname) ? ' active' : ''}`} type="button">{page.name}</button>
                                    <div key={`pageb_${index}`} uk-dropdown={`mode: hover; pos: ${mobile ? 'right-top' : 'bottom-left'}; delay-hide: 0`}>
                                        <div className='menu__pages__item__dropdown'>
                                            {
                                                [
                                                    page.subpages.map((subpage, i) =>
                                                        <Link key={`page_${index}${i}`} className={`menu__pages__item${active === subpage.pathname ? ' active' : ''}`} to={subpage.pathname}>{subpage.name}</Link>
                                                    )
                                                ]
                                            }
                                        </div>
                                    </div>
                                </>
                            :
                            <Link key={`page_${index}`} className={`menu__pages__item${page.pathname === active ? ' active' : ''}`} to={page.pathname}>{page.name}</Link>
                        )
                    }
                </div>

                <div className="menu__actions">
                    <Link className={`menu__actions__icon${active === '/user' ? ' active' : ''}`} to={'/user'}>{mobile ? userWhite : user}</Link>
                    <Link className={`menu__actions__icon${active === '/cart' ? ' active' : ''}`} to={'/cart'}>{cart}</Link>
                </div>
            </>
        )
    }

    return (
        <MenuCon>
            <button className="menu__toggleIcon" uk-toggle="target: #menu-modal" type="button">{menu}</button>

            <div className='menu__modal' id="menu-modal" uk-modal="bg-close: true">
                <div className="uk-modal-dialog uk-modal-body">
                    <div className='menu__modal__header'>
                        Logo Here
                        <button className="uk-modal-close-default" type="button" uk-close=""></button>
                    </div>

                    <MenuContent mobile={true} />
                </div>
            </div>

            <MenuContent />
        </MenuCon>
    )
}

export default Menu