import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Form } from '../Styles/FormStyles'
import { Title } from '../Styles/TextStyles'
import { Button } from '../Styles/ButtonStyles'

const PageContainer = styled.div`
    width: 40%;
    margin: 0 auto;
`

class CreateUserForm extends Component {
    render() {
        return (
            <PageContainer>
                <Title>
                    <h1>Create New User</h1>
                </Title>
                <Form>
                    <p>First Name<span className="required">* required</span></p>
                    <input type="text" placeholder="First Name" name="firstName" required />
                    <p>Last Name<span className="required">* required</span></p>
                    <input type="text" placeholder="Last Name" name="lastName" required />
                    <p>Email<span className="required">* required</span></p>
                    <input type="email" placeholder="Email Address" name="email" required />
                    <p>Enter Password<span className="required">* required</span></p>
                    <input type="text" placeholder="Enter Password" name="password" required />
                    <p>Re-enter Password<span className="required">* required</span></p>
                    <input type="text" placeholder="Re-enter Password" name="reenterPassword" required />
                    <Button>
                        <button className="button"><Link to="/userpage" className="button">Let's Go!!</Link></button>
                    </Button>
                </Form>
            </PageContainer>
        )
    }
}

export default CreateUserForm