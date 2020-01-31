import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { ClosedMenuStyle, InvisibleBox, CheckBoxStyle } from '../Styles/ContainerStyle'
import { FormStyle } from '../Styles/FormStyles'
import { Title } from '../Styles/TextStyles'
import { ButtonStyle } from '../Styles/ButtonStyles'
import { FormContainerStyle } from '../Styles/ContainerStyle'
import { QuestionMark } from '../Styles/QuestionMarkStyle'

class UpdateUserForm extends Component {

    state = {
        user: {}
    }

    componentDidMount() {
        axios.get(`/api/users/${this.props.match.params.userId}`).then((res) => {
            this.setState({ user: res.data })
        })
    }

    handleChange = (event) => {
        const updatedChangeUser = { ...this.state.user }
        updatedChangeUser[event.target.name] = event.target.value
        this.setState({ user: updatedChangeUser })
    }

    handleUpdate = (event) => {
        event.preventDefault()
        axios.patch(`/api/users/${this.props.match.params.userId}`, this.state.user).then(res => {
            this.props.history.push(`/users/${res.data._id}`)
        })
    }

    render() {
        return (
            <InvisibleBox>
                <ClosedMenuStyle>
                    <FormContainerStyle onSubmit={this.handleUpdate}>
                        <Title>
                            <h2>Edit Your Profile</h2>
                        </Title>
                        <FormStyle>
                            <p>Full Name<span className="required">* required</span></p>
                            <input
                                onChange={this.handleChange}
                                value={this.state.user.username}
                                type="text"
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
                                                <p className="item-description">
                                                    AKA Kansas City Style Sauce:<br />
                                                    Tomato / Ketchup base<br />
                                                    Brown Sugar / Molasses<br />
                                                    Cider Vinegar<br />
                                                    Various Spices
                                                </p>
                                            </div>
                                        </QuestionMark>
                                        <p>Traditional</p>
                                        <input
                                            type="checkbox"
                                            name="traditional"
                                            id="traditional"
                                            className="input"
                                            value="Traditional"
                                        />
                                    </div>
                                    <div className="each-checkbox">
                                        <QuestionMark>
                                            <div className="to-show">?
                                                <p className="item-description">
                                                    Spices in various amounts<br />
                                                    depending on which style:<br />
                                                    Cayenne Pepper<br />
                                                    Black Pepper / Salt<br />
                                                    Paprika<br />
                                                    Garlic / Onion Powder<br />
                                                </p>
                                            </div>
                                        </QuestionMark>
                                        <p>Dry Rub</p>
                                        <input
                                            type="checkbox"
                                            name="dryRob"
                                            id="dryRub"
                                            className="input"
                                            value="Dry Rub"
                                        />
                                    </div>
                                    <div className="each-checkbox">
                                        <QuestionMark>
                                            <div className="to-show">?
                                                <p className="item-description">Spicy</p>
                                            </div>
                                        </QuestionMark>
                                        <p>Hot Sauces</p>
                                        <input
                                            type="checkbox"
                                            name="hot"
                                            id="hot"
                                            className="input"
                                            value="Hot Sauces"
                                        />
                                    </div>
                                    <div className="each-checkbox">
                                        <QuestionMark>
                                            <div className="to-show">?
                                                <p className="item-description">I like my taste buds intact</p>
                                            </div>
                                        </QuestionMark>
                                        <p>Mild Sauces</p>
                                        <input
                                            type="checkbox"
                                            name="mild"
                                            id="mild"
                                            className="input"
                                            value="Mild Sauces"
                                        />
                                    </div>
                                </div>
                                <div className="checkbox-container">
                                    <div className="each-checkbox">
                                        <QuestionMark>
                                            <div className="to-show">?
                                                <p className="item-description">
                                                    AKA  South Carolina Style:<br />
                                                    Yellow Mustard<br />
                                                    Honey<br />
                                                    Apple Cider Vinegar<br />
                                                    Ketchup<br />
                                                    Various Spices
                                                </p>
                                            </div>
                                        </QuestionMark>
                                        <p>Mustard Based</p>
                                        <input
                                            type="checkbox"
                                            name="mustard"
                                            id="mustard"
                                            className="input"
                                            value="Mustard Based"
                                        />
                                    </div>
                                    <div className="each-checkbox">
                                        <QuestionMark>
                                            <div className="to-show">?
                                                <p className="item-description">
                                                    AKA North Carolina Style:<br />
                                                    Apple Cider Vinegar<br />
                                                    Ketchup<br />
                                                    Brown Sugar<br />
                                                    Various Spices
                                                </p>
                                            </div>
                                        </QuestionMark>
                                        <p>Vinegar Based</p>
                                        <input
                                            type="checkbox"
                                            name="vinegar"
                                            id="vinegar"
                                            className="input"
                                            value="Vinegar Based"
                                        />
                                    </div>
                                    <div className="each-checkbox">
                                        <p>Other</p>
                                        <input type="text" name="otherSauce" id="otherSauce" />
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

export default UpdateUserForm