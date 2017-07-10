import Link from 'next/link'
import classNames from './classNames'

export default ({ children, active = false, disabled = false, ...rest }) => (
    <Link { ...rest }>
        <a className={ classNames(['nav-link nav-item', active && 'active', disabled && 'disabled']) }>{ children }</a>
    </Link>
)