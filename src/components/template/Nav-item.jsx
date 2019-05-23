import './Nav.css'
import React from 'react'
import {Link} from 'react-router-dom'

export default props => {
    return (
        <Link to={`/${props.hash}`}>
            <i className={`fa fa-${props.icon}`}></i> {`${props.name}`}
        </Link>
    )
}