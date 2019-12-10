import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Form } from '../Styles/FormStyles'
import { Title } from '../Styles/TextStyles'

class CreateUserForm extends Component {
    render() {
        return (
            <div>
                <Title>
                    <h1>Create New User</h1>
                </Title>
                <Form>
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                    <input type="text" placeholder="Password" />
                    <input type="text" placeholder="Password" />
                    <div></div>
                    <button><Link to="/userpage">Submit</Link></button>
                </Form>
            </div>
        )
    }
}

export default CreateUserForm