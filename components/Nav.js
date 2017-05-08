import { Component } from 'react'
import Link from 'next/link'
import classNames from './classNames'

const navClassName = ({
    center,
    column,
    fill,
    justified,
    tabs,
    pills,
}) => classNames([
    'nav',
    center && 'justify-content-center',
    column && 'flex-column',
    fill ? 'nav-fill' : justified ? 'nav-justified' : null,
    tabs ? 'nav-tabs' : pills ? 'nav-pills' : null
])

const Nav = ({
    children,
    center = false,
    column = false,
    fill = false,
    justified = false,
    tabs = false,
    pills = false
}) => (
    <nav
        className={ navClassName({ center, column, fill, justified, tabs, pills }) }
        children={ children }
    />
)
Nav.Link = ({ children, active = false, disabled = false, ...rest }) => (
    <Link { ...rest }>
        <a className={ classNames(['nav-link nav-item', active && 'active', disabled && 'disabled']) }>{ children }</a>
    </Link>
)

export default Nav