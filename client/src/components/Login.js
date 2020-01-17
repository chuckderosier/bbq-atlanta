import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ClosedMenuStyle, InvisibleBox, CheckBoxStyle } from '../Styles/ContainerStyle'
import { FormStyle } from '../Styles/FormStyles'
import { Title } from '../Styles/TextStyles'
import { ButtonStyle } from '../Styles/ButtonStyles'
import { FormContainerStyle } from '../Styles/ContainerStyle'
import { QuestionMark } from '../Styles/QuestionMarkStyle'

const LogInStyle = styled.div`
    margin: 0 auto;
    width: 90%;
    /* height: 25%; */
`

class Login extends Component {
    render() {
        return (
            <InvisibleBox>
                <ClosedMenuStyle>
                    <LogInStyle>
                        <FormStyle>
                            <Title>
                                <h2>Login</h2>
                            </Title>
                            <p>Email<span className="required">* required</span></p>
                            <input
                                type="email"
                                placeholder="Email"
                                name="userEmail"
                                className="input"
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
                                <button className="button"><Link to="/user" className="button">Let's Go!!</Link></button>
                            </ButtonStyle>
                        </FormStyle>
                    </LogInStyle>
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
                            <CheckBoxStyle>
                                <div className="checkbox-container">
                                    <div className="each-checkbox">
                                        <QuestionMark>
                                            <div className="to-show">?
                                                <p className="item-description">butt munching boob</p>
                                            </div>
                                        </QuestionMark>
                                        <p>Traditional</p>
                                        <input type="checkbox" name="Sauce1" id="generic" value="Generic" />

                                    </div>
                                    <div className="each-checkbox">
                                        <QuestionMark>
                                            <div className="to-show">?
                                                <p className="item-description">butt munching boob</p>
                                            </div>
                                        </QuestionMark>
                                        <p>Hot</p>
                                        <input type="checkbox" name="allSauce" id="allStyles" value="All Styles" />
                                    </div>
                                    <div className="each-checkbox">
                                        <QuestionMark>
                                            <div className="to-show">?
                                                <p className="item-description">butt munching boob</p>
                                            </div>
                                        </QuestionMark>
                                        <p>Mild</p>
                                        <input type="checkbox" name="allSauce" id="allStyles" value="All Styles" />
                                    </div>
                                </div>
                                <div className="checkbox-container">
                                    <div className="each-checkbox">
                                        <QuestionMark>
                                            <div className="to-show">?
                                                <p className="item-description">butt munching boob</p>
                                            </div>
                                        </QuestionMark>
                                        <p>Traditional</p>
                                        <input type="checkbox" name="Sauce2" id="sc" value="South Carolina" />
                                    </div>
                                    <div className="each-checkbox">
                                        <QuestionMark>
                                            <div className="to-show">?
                                                <p className="item-description">butt munching boob</p>
                                            </div>
                                        </QuestionMark>
                                        <p>Traditional</p>
                                        <input type="checkbox" name="Sauce3" id="enc" value="East North Carolina" />
                                    </div>
                                    <div className="each-checkbox">
                                        <QuestionMark>
                                            <div className="to-show">?
                                                <p className="item-description">butt munching boob</p>
                                            </div>
                                        </QuestionMark>
                                        <p>Traditional</p>
                                        <input type="checkbox" name="Sauce3" id="wnc" value="West North Carolina" />
                                    </div>
                                </div>
                            </CheckBoxStyle>
                            <ButtonStyle>
                                <button className="button"><Link to="/user" className="button">Let's Go!!</Link></button>
                            </ButtonStyle>
                        </FormStyle>
                    </FormContainerStyle>
                </ClosedMenuStyle>
            </InvisibleBox>
        )
    }
}

export default Login