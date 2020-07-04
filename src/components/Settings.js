import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Row, Col, Container, Card, Button} from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import bravo from '../assets/bravo.jpg';
import Media from 'react-bootstrap/Media';
import Emojify from 'react-emojione';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import img from '../assets/SettingsBG.png';
import { FaPlus, FaCaretRight, FaHashtag } from 'react-icons/fa';

const Styles = styled.div`
.SettingsContent{
    height: 100%;
    width: 100%;
    background-image: url(${img});
    background-size: cover;
 }
 .title{
    display: flex;
    justify-content: space-between;
    color: white;
    background-color: #0D5863;
    padding: 5px;
    margin: 10px 0px; 
 }
 .title h3{
    margin: 5px 0px;
 }
.row{
    justify-content: center;
    margin: 0px;
 }
.columns{
    margin: 25px 0px 10px 0px;
}
.head{
    display: inline-flex;
}
.head .form-control, .head .btn{
    margin: 30px 0px;
    height: 40px;
}
#post .media{
    display: block;
    background-color: white;
    border: 1px solid #d0e9ed;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);
    margin: 25px;
}
#post .media img{
    margin: 10px;
    border: 1px solid #d0e9ed;
    border-radius: 3px;
}
.replyarea{
    margin: 10px;
}
.form-control{
    height: 200px;
}
.buttons{
    width: auto;
    margin: 10px;
    display: inline-flex;
    justify-content: space-between;
}
.buttons .btn{
    background-color: white;
    color: #0D5863;
    border: none;
    margin: 5px;
}
.default .btn{
    color: #0D5863;
    border: 1px solid #0D5863;
    border-radius: 2px;
}
#settings{
    margin: 25px;
}
#settings h3{
    color: #0D5863;
    padding: 1.25rem;
    border-bottom: 1px solid #0D5863;
}
.accordion .card-header{
    background-color: white;
    font-style: bold;
    color: #0D5863; 
}
.accordion .card-header .btn-link{
    font-size: 22px;
    text-decoration: none;
    color: #0D5863; 
}
.accordion .card-body{
    font-size: 16px;
    padding: 1.25rem 3.25rem;
}
`;

const Settings = () => {
    return (
        <Styles>
            <div class="SettingsContent">
                <div class="title">
                    <h3>Settings</h3>
                </div>
                <div class="columns"> 

                <Row>
                    
                    <Col lg={5} sm={12} id="post">
                    <Media>
                        <div class="head">
                        <img
                            width={80}
                            height={80}
                            src={bravo}
                            alt="Generic placeholder"
                        />
                        <InputGroup>
                        <FormControl
                            placeholder="Post Tags"
                            aria-label="Post Tags"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button variant="outline-secondary"><FaHashtag/></Button>
                        </InputGroup.Append>
                        </InputGroup>
                        </div>
                        <div class="replyarea">
                            <InputGroup>
                                <FormControl as="textarea" aria-label="With textarea" placeholder="What's up for discussion..." length="300"/>
                            </InputGroup>  
                        </div>
                        <div class="buttons">
                            <div class="options">
                                <Button><FaCaretRight /></Button>
                                <Button><Emojify><span>:thumbsup:</span></Emojify></Button>
                                <Button><Emojify><span>:thumbsdown:</span></Emojify></Button>
                                <Button><FaPlus /></Button>     
                            </div>
                            <div class="default">
                                <Button>Set to default</Button>
                            </div>
                        </div>
                    </Media>

                    </Col>

                    <Col lg={5} sm={12} id="settings">
                        <Card.Title><h3>Post Settings</h3></Card.Title>
                        <Accordion>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            <FaCaretRight />
                                All users can comment.
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>Allows any user to comment on the post.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            <FaCaretRight />
                                All users can view.
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body>Allows any user on the platform to view your post.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            <FaCaretRight />
                                Users must vote before seeing the voting results.
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                            <Card.Body>Users cannot see the voting results on your post until they have voted.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                    </Col>
                </Row>
                </div>
            </div>
        </Styles>
    );
}
 
export default Settings;