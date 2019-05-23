import React, { Component } from 'react'
import Main from '../template/Main'

const headerProps = {
    icon: 'users',
    title: 'Users',
    subtitle: 'Users register: Inserting, Listing, Update and Deletion'
}

export default class UserCrud extends Component {
    render() {
        return (
            <Main {...headerProps}>
                <div>
                    User register
                </div>
            </Main>
        )
    }
}