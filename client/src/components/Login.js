import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ClosedMenuStyle, InvisibleBox } from '../Styles/ContainerStyle'
import { FormStyle } from '../Styles/FormStyles'
import { Title } from '../Styles/TextStyles'
import { ButtonStyle } from '../Styles/ButtonStyles'
import { FormContainerStyle } from '../Styles/ContainerStyle'

class Login extends Component {
    render() {
        return (
            <InvisibleBox>
                <ClosedMenuStyle>
                    <FormContainerStyle>
                        <FormStyle>
                            <Title>
                                <h2>Login</h2>
                            </Title>
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
                        </FormStyle>
                    </FormContainerStyle>
                    <FormContainerStyle>
                        <Title>
                            <h2>Create New User</h2>
                        </Title>
                        <FormStyle>
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
                        </FormStyle>
                    </FormContainerStyle>
                </ClosedMenuStyle>
            </InvisibleBox>
        )
    }
}

export default Login