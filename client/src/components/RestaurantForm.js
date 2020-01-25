import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import { ClosedMenuStyle, InvisibleBox, CheckBoxStyle } from '../Styles/ContainerStyle'
import { FormStyle } from '../Styles/FormStyles'
import { Title } from '../Styles/TextStyles'
import { ButtonStyle } from '../Styles/ButtonStyles'
import { FormContainerStyle } from '../Styles/ContainerStyle'
import { QuestionMark } from '../Styles/QuestionMarkStyle'

class RestaurantForm extends Component {
    render() {
        return (
            <InvisibleBox>
                <ClosedMenuStyle>
                    <FormContainerStyle>
                        <Title>
                            <h2>Add a New BBQ Joint</h2>
                        </Title>
                        <FormStyle>
                            <p>Restaurant Name<span className="required">* required</span></p>
                            <input
                                type="text"
                                placeholder="Restaurant Name"
                                name="name"
                                required
                            />
                            <p>Address</p>
                            <input
                                type="text"
                                placeholder="Restaurant Address"
                                name="text"
                            />
                            <p>Restaurant Overall Rating</p>
                            <p>Phone</p>
                            <input
                                type="text"
                                placeholder="Optional"
                                name="phone"
                            />
                            <p>Hours</p>
                            <input
                                type="text"
                                placeholder="Optional"
                                name="hours"
                            />
                            <a>Style of BBQ</a>
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
                                    <p>Style/Sauce rating</p>
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

export default RestaurantForm