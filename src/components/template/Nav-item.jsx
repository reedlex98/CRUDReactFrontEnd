import './Nav.css'
import React from 'react'

export default props => {
    return (
        <a href={`#/${props.hash}`}>
            <i className={`fa fa-${props.icon}`}></i> {`${props.name}`}
        </a>
    )
}