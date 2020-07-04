import React from 'react';
import styled from 'styled-components';
import { Container, Button, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import img from '../assets/HomeBG.png';
import dino from '../assets/dino.jpg';
import mario from '../assets/mario.jpg';
import bravo from '../assets/bravo.jpg';
import Media from 'react-bootstrap/Media';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Emojify from 'react-emojione';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Styles = styled.div`
.content{
    height: 100%;
    width: 100%;
    margin: 50px 0px;
    background-image: url(${img});
    background-size: contain;
}
.row{
    justify-content: center;
}
.columns{
    margin: 25px;
}
.card, .replies, .postsection{
    border: 1px solid #0D5863;
    border-radius: 2px;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);
}
.card-title h3{
    color: #0D5863;
    padding: 5px;
}
.card-title{
    border-bottom: 1px solid #0D5863;
}
.replies{
    font-size: 16px;
    padding: 1.25rem;
    background-color: white;
}
.postsection{
    padding: 1.25rem;
    background-color: white;
}
.replies h3{
    color: #0D5863;
}
.media{
    background-color: white;
    border: 1px solid #d0e9ed;
    margin: 10px;
}
img{
    margin: 5px;
    border: 1px solid black;
    border-radius: 3px;
}
.btn{
    margin: 0px 10px;
    color: #0D5863;
    background-color: #d0e9ed;
    border-radius: 3px;
    padding: 5px;
}
.btn-primary{
    border-color: #0D5863;
}
.activity .btn{
    border: none;
    background: none;
}
.options #bg-nested-dropdown{
    font-size: 30px;
}
.options .dropdown-item{
    border: none;
    background: none;
    font-size: 16px;
    font-style: bold;
    color: #0D5863;
}
.dropdown-toggle{
    background-color: white;
    color: #0D5863;
    border: none;
}
.dropdown-toggle::after {
    content: none;
}
.Head{
    display: flex;
    justify-content: space-between;
}
.replyarea{
    margin: 10px;
}
.form-control{
    height: 200px;
}
.ReplyUser {
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
}
.ReplyUser .media{
    border: none;
}
.replybutton .btn{
    margin: 10px;
    padding: 5px 10px;
}
`;

const data = [
    {
      name: 'Reach', votes: 22400,
    },
    {
      name: 'Dislike', votes: 10450,
    },
    {
      name: 'Fire',  votes: 18290,
    },
  ];


const Options = () => {
    function DateTime() {

        const monthNames = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ];
          var tempDate = new Date();
          var date = tempDate.getDate()+(tempDate.getDate() % 10 == 1 && tempDate.getDate() != 11 ? 'st' : (tempDate.getDate() % 10 == 2 && tempDate.getDate() != 12 ? 'nd' : (tempDate.getDate() % 10 == 3 && tempDate.getDate() != 13 ? 'rd' : 'th'))) + ' ' + monthNames[tempDate.getMonth()] + ' ' + tempDate.getFullYear() +' '+ tempDate.getHours() +':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds() + ' '+ ((tempDate.getHours() < 12) ? "AM" : "PM");
          const currDate = "Posted on "+date;
          return (
            <p>{currDate}</p>
          );
        }

    return (
        <Styles>
            <div class="content">
                <div class="columns">
                <Row>
                    <Col xl={3} lg={6} md={12} sm={12}>
                    <Card>
                        <Card.Body>
                            <Card.Title><h3>Voting Results</h3></Card.Title>
                            {/* <Card.Img variant="top" src={require('../assets/Graph.png')} /> */}
                            <BarChart
                                width={325}
                                height={325}
                                data={data}
                                margin={{
                                top: 5, right: 10, left: 10, bottom: 5,
                                }}
                            >
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="votes" fill="#0D5863" />
                            </BarChart>
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col xl={4} lg={6} sm={12}>
                    <div class="postsection">

                    <Media>
                        <img
                            width={32}
                            height={32}
                            src={dino}
                            alt="Generic placeholder"
                        />
                        <Media.Body>
                            <div class="Head">
                                <div class="names">
                                    <h5>Dino</h5>
                                    <h6>@dino10</h6>     
                                </div>
                            <div class="options">
                            <DropdownButton as={ButtonGroup} title="..." id="bg-nested-dropdown">
                            <Dropdown.Item eventKey="1" onClick={(e) => { if (window.confirm('Are you sure you want to block this user?')) this.deleteItem(e) } }>
                                Block User
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="2" onClick={(e) => { if (window.confirm('Are you sure you want to report this post?')) this.deleteItem(e) } }>
                                Report Post
                            </Dropdown.Item>
                            </DropdownButton>
                            </div>   
                            </div>
                            <p>
                            The Food at Del tacos is great.
                            </p>
                            <p className="text-center">
                                <DateTime /> 
                            </p>
                        </Media.Body> 
                    </Media>
                        <div class="replyarea">
                            <InputGroup>
                                <FormControl as="textarea" aria-label="With textarea" placeholder="Type your reply..." length="300"/>
                            </InputGroup>  
                        </div>
                        <div class="ReplyUser">
                        <Media>
                        <img
                            width={32}
                            height={32}
                            src={bravo}
                            alt="Generic placeholder"
                        />
                        <Media.Body>
                            <div class="Head">
                                <div class="names">
                                    <h6>Johnny Bravo</h6>
                                    <h7>@bravo</h7>     
                                </div>
                            </div>           
                        </Media.Body>
                        </Media>
                        <div class="replybutton">
                            <Button>Reply</Button>
                        </div>
                        </div>
                    </div> 
                    </Col>
                    
                    <Col xl={4} lg={12} sm={12}>
                    <div class="replies">
                    <Card.Title><h3>Replies</h3></Card.Title>
                    <Media>
                        <img
                            width={32}
                            height={32}
                            src={dino}
                            alt="Generic placeholder"
                        />
                        <Media.Body>
                            <div class="Head">
                                <div class="names">
                                    <h6>Dino</h6>
                                    <h7>@dino10</h7>     
                                </div>
                            <div class="options">
                            <DropdownButton as={ButtonGroup} title="..." id="bg-nested-dropdown">
                            <Dropdown.Item eventKey="1" onClick={(e) => { if (window.confirm('Are you sure you want to block this user?')) this.deleteItem(e) } }>
                                Block User
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="2" onClick={(e) => { if (window.confirm('Are you sure you want to report this post?')) this.deleteItem(e) } }>
                                Report Post
                            </Dropdown.Item>
                            </DropdownButton>
                            </div>   
                            </div>
                            <p>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                            ante sollicitudin commodo.
                            </p>            
                            <ButtonGroup className="mb-2">
                                <Button>40K<Emojify><span>:thumbsup:</span></Emojify></Button>
                                <Button>10K<Emojify><span>:thumbsdown:</span></Emojify></Button>                                
                            </ButtonGroup>            
                        </Media.Body>
                    </Media>

                    <Media>
                        <img
                            width={32}
                            height={32}
                            src={mario}
                            alt="Generic placeholder"
                        />
                        <Media.Body>
                            <h6>Mario</h6>
                            <h7>@superbro</h7>
                            <p>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                            ante sollicitudin commodo.
                            </p>
                            <ButtonGroup className="mb-2">
                                <Button>30K<Emojify><span>:thumbsup:</span></Emojify></Button>
                                <Button>1K<Emojify><span>:thumbsdown:</span></Emojify></Button>                                   
                            </ButtonGroup>  
                        </Media.Body>
                        <div class="options">
                        <DropdownButton as={ButtonGroup} title="..." id="bg-nested-dropdown">
                        <Dropdown.Item eventKey="1" onClick={(e) => { if (window.confirm('Are you sure you want to block this user?')) this.deleteItem(e) } }>
                            Block User
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="2" onClick={(e) => { if (window.confirm('Are you sure you want to report this post?')) this.deleteItem(e) } }>
                            Report Post
                        </Dropdown.Item>
                        </DropdownButton>
                        </div>
                    </Media>  

                    <Media>
                        <img
                            width={32}
                            height={32}
                            src={bravo}
                            alt="Generic placeholder"
                        />
                        <Media.Body>
                            <div class="Head">
                                <div class="names">
                                    <h6>Johnny Bravo</h6>
                                    <h7>@bravo</h7>     
                                </div>
                            <div class="options">
                            <DropdownButton as={ButtonGroup} title="..." id="bg-nested-dropdown">
                            <Dropdown.Item eventKey="1" onClick={(e) => { if (window.confirm('Are you sure you want to block this user?')) this.deleteItem(e) } }>
                                Block User
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="2" onClick={(e) => { if (window.confirm('Are you sure you want to report this post?')) this.deleteItem(e) } }>
                                Report Post
                            </Dropdown.Item>
                            </DropdownButton>
                            </div>   
                            </div>
                            <p>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                            ante sollicitudin commodo.
                            </p>            
                            <ButtonGroup className="mb-2">
                                <Button>20K<Emojify><span>:thumbsup:</span></Emojify></Button>
                                <Button>100<Emojify><span>:thumbsdown:</span></Emojify></Button>                                
                            </ButtonGroup>            
                        </Media.Body>
                    </Media>
                          
                    </div>
                    </Col>
                </Row>       
                </div>
            </div>
        </Styles>
    );
}
 
export default Options;