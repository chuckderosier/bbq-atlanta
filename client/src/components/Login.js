import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Form } from '../Styles/FormStyles'

class Login extends Component {
    render() {
        return (
            <div>
                <h1>Login</h1>
                <Form>
                    <p>Email<span className="required">* required</span></p>
                    <input type="email" placeholder="Email" name="userEmail" required />
                    <p>Password<span className="required">* required</span></p>
                    <input type="password" placeholder="Password" name="userPassword" required />
                    <button><Link to="/userpage">Let's Go!!</Link></button>
                </Form>
            </div>
        )
    }
}

export default Login