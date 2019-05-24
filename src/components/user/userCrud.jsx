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

    updateField(event){
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({user})
    }

    renderForm(){ // change this part into separated components
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="name
                            ">Name</label>
                            <input type="text" className="form-control" name="name"
                            value={this.state.user.name}
                            onChange={e => this.updateField(e)}
                            placeholder="Type your name..."/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" className="form-control" name="email"
                            value={this.state.user.email}
                            onChange={e => this.updateField(e)}
                            placeholder="Type your e-mail address..."/>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary" onClick={e=> this.save(e)}>
                            Save
                        </button>
                        <button className="btn btn-secondary ml-2" onClick={e => this.clear(e)}>
                            Calcel
                        </button>
                    </div>
                </div>
            </div>
        )
    }   

    render() {
        return (
            <Main {...headerProps}>
                <div>
                    {this.renderForm()}
                </div>
            </Main>
        )
    }
}