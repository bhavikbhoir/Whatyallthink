import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button, Container } from 'react-bootstrap';
import logo from '../assets/logo.png';
import img from '../assets/HomeBG.png';
import Media from 'react-bootstrap/Media';
import Form from 'react-bootstrap/Form';

const Styles = styled.div`
.SignupContent{
    height: 100%;
    width: 100%;
    background-image: url(${img});
    background-size: contain;
}
#form{
    color: #0D5863;
    background-color: #d0e9ed;
    justify-content: center;
    font-size: 20px;
    border: 1px solid #0D5863;
    border-radius: 5px;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);
    margin: 50px 0px;
    padding: 10px;
}
h2 {
    text-align: center;
    margin: 10px 0px;
}
.forgotpw{
    text-align: end;
}
#forgotbtn{
    margin: 5px 0px;
    border: none;
    background: none;
    color: #0D5863;
}
.buttons{
    text-align: center;
}
.buttons .btn-primary{
    color: white;
    border-color: #0D5863;
    background-color: #0D5863;
    margin: 5px 0px;
}
#logo{
    background-color: #d0e9ed;
    border: 1px solid #0D5863;
    border-radius: 5px;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);
    margin: 50px 0px;
    text-align: center;
}
.brand{
    width: 100%;
    height: auto;
}
img{
    margin-top: 25%;
    border: 1px solid #0D5863;
    border-radius: 5px;
}
@media screen and (max-width:992px){
    #logo{
        display: none;
    }
}
`;

const Signup = () => {
    return (
        <Styles>
            <div class="SignupContent">
                <Container>
                <Row> 
                    
                    <Col lg={6} sm={12} id="logo">
                        <div class="brand">
                            <img
                                width={300}
                                height={300}
                                src={logo}
                                alt="Logo"
                            />
                        </div>
                    </Col>

                    <Col lg={6} sm={12} id="form">
                        <Container>
                        <Form>
                        <h2>Whatyallthink</h2>
                        <Form.Group controlId="formName">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" placeholder="Username" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Email address" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Re-Type Password</Form.Label>
                            <Form.Control type="password" placeholder="Re-Type Password" />
                        </Form.Group>
                        <div class="buttons">
                        <Button variant="primary" type="submit" href="/login">
                            SIGN UP
                        </Button>
                        <Form.Text>Already have an account?</Form.Text>
                        <Button variant="primary" type="submit" href="/login">
                            LOGIN HERE!
                        </Button>
                        </div>
                        </Form>
                        </Container>


                    </Col>
                </Row> 
                </Container>

            </div>
        </Styles>
    );
}

export default Signup;