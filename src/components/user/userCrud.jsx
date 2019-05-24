import React, { Component } from 'react'
import Main from '../template/Main'
import axios from 'axios'

const headerProps = {
    icon: 'users',
    title: 'Users',
    subtitle: 'Users register: Inserting, Listing, Update and Deletion'
}

const baseUrl = 'http://localhost:3001/users'
const initialState ={
    user:{
        name: '',
        email:''
    },
    list:[]
}

export default class UserCrud extends Component {
    state = {...initialState}

    clear(){
        this.setState({ user: initialState.user })
    }

    save(){
        //to include a new information I have to use HTTP Post method
        //to alter/update an existing information I ve to use HTTP Put/Patch method
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user)
            .then(resp =>{
                const list = this.getUpdatedList(resp.data)
                this.setState({ user: initialState, list})
            })
    }

    getUpdatedList(user){
        const list = this.state.list.filter(u => u.id !== user.id)
        list.unshift(user)
        return list
    }

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