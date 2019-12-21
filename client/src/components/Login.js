import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ClosedMenuStyle } from '../Styles/ContainerStyle'
import { Form } from '../Styles/FormStyles'
import { Title } from '../Styles/TextStyles'
import { ButtonStyle } from '../Styles/ButtonStyles'

class Login extends Component {
    render() {
        return (
            <ClosedMenuStyle>
                <div>
                    <Title>
                        <h2>Login</h2>
                    </Title>
                    <Form>
                        <p>Email<span className="required">* required</span></p>
                        <input
                            type="email"
                            placeholder="Email"
                            name="userEmail"
                            required
                        />
                        <p>Password<span className="required">* required</span></p>
                        <input
                            type="password"
                            placeholder="Password"
                            name="userPassword"
                            required
                        />
                        <ButtonStyle>
                            <button className="button"><Link to="/userpage" className="button">Let's Go!!</Link></button>
                        </ButtonStyle>
                    </Form>
                </div>
                <div>
                    <Title>
                        <h2>Create New User</h2>
                    </Title>
                    <Form>
                        <p>Full Name<span className="required">* required</span></p>
                        <input
                            type="text"
                            placeholder="Full Name"
                            name="name"
                            required
                        />
                        <p>Email<span className="required">* required</span></p>
                        <input
                            type="email"
                            placeholder="Email Address"
                            name="email"
                            required
                        />
                        <p>Enter Password<span className="required">* required</span></p>
                        <input
                            type="text"
                            placeholder="Enter Password"
                            name="password"
                            required
                        />
                        <ButtonStyle>
                            <button className="button"><Link to="/userpage" className="button">Let's Go!!</Link></button>
                        </ButtonStyle>
                    </Form>
                </div>
            </ClosedMenuStyle>
        )
    }
}

export default Login