import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CreateUserForm extends Component {
    render() {
        return (
            <div>
                <h1>Create New User</h1>
                <form>
                    <input type="text" placeholder="Your Name" />
                    <input type="text" placeholder="Password" />
                    <input type="text" placeholder="Password" />
                    <button><Link to="/userpage" /></button>
                </form>
            </div>
        )
    }
}

export default CreateUserForm