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
                                    <div className="each-checkbox">Generic
                                        {/* <label for="generic" className="label"> */}
                                            <input type="checkbox" name="Sauce1" id="generic" value="Generic" />
                                            <QuestionMark>
                                                <div className="to-show">?
                                                    <p class="item-description">butt munching boob</p>
                                                </div>
                                            </QuestionMark>
                                        {/* </label> */}
                                    </div>
                                    <div className="each-checkbox">
                                        <label for="allStyles" className="label">
                                            <input type="checkbox" name="allSauce" id="allStyles" value="All Styles" />All kinds
                                        </label>
                                        <div className="question-mark">?

                                        </div>
                                    </div>
                                </div>
                                <div className="checkbox-container">
                                    <div className="each-checkbox">
                                        <label for="sc">South Carolina
                                            <input type="checkbox" name="Sauce2" id="sc" value="South Carolina" />
                                        </label>
                                        <div className="question-mark">?</div>
                                    </div>
                                    <div className="each-checkbox">
                                        <label for="enc">East North Carolina
                                            <input type="checkbox" name="Sauce3" id="enc" value="East North Carolina" />
                                        </label>
                                        <div className="question-mark">?</div>
                                    </div>
                                    <div className="each-checkbox">
                                        <label for="wnc">West North Carolina
                                            <input type="checkbox" name="Sauce3" id="wnc" value="West North Carolina" />
                                        </label>
                                        <div className="question-mark">?</div>
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