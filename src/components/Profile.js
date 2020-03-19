import React from 'react';
import styled from 'styled-components';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button } from 'react-bootstrap';

import img from '../assets/HomeBG.png';
import bravo from '../assets/bravo.jpg';
import mario from '../assets/mario.jpg';
import dino from '../assets/dino.jpg';

import Media from 'react-bootstrap/Media';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Emojify from 'react-emojione';

const Styles = styled.div`
.ProfileContent {
    height: 100%;
    width: 100%;
    background-image: url(${img});
    background-size: contain;
}
.profile{
    margin: 25px;
}
.profile img{
    border: 2px solid #d0e9ed;
    border-radius: 4px;
}
.profileimg{
    display: grid;
}
.profileimg .btn-primary{
    color: #0D5863;
    border-color: #0D5863;
    background-color: #d0e9ed;
    margin: 5px 0px;
}
.col-lg-2, .col-lg-3, .col-lg-7, .col-sm-12{
    padding: 0px;
}
.names h4{
    color: #0D5863;
    background-color: #d0e9ed;
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
}
.names h6{
    padding: 0rem 1rem;
}
.nav{
    justify-content: space-evenly
}
.nav-tabs{
    color: #0D5863;
    background-color: #d0e9ed;    
}
.nav-link{
    color: #0D5863; 
    border: none;
}
.signout{
    color: #0D5863;
    background-color: #d0e9ed;
    text-decoration: none;
    text-align: center;
    padding: 0.125rem 1rem;
}
.signout .btn-primary{
    border: none;
    color: #0D5863;
    border-color: #0D5863;
    background-color: #d0e9ed;
}
.users{
    margin: 25px 0px;
    background-color: white;
    border: 1px solid black;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);
}
.users h4{
    color: #0D5863;
    margin: 0px 10px;
    padding: 10px;
    border-bottom: 2px solid #d0e9ed;
}
.suggestedusers{
    padding: 10px;
}
.suggestedusers .row{
    padding: 10px;
    text-align: center;
}
.suggestedusers h6{
    color: grey;
    padding: 10px;
}
.posttab {
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
    h5{
        color: #0D5863;
    }
    h6{
        color: #0D5863;
        opacity: 0.7;
    }
    .btn{
        margin: 0px 10px;
        color: #0D5863;
        background-color: #d0e9ed;
        border-radius: 3px;
    }
    .btn-primary{
        border-color: #0D5863;
    }
    .activity .btn{
        border: none;
        background: none;
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
    .options #bg-nested-dropdown{
        font-size: 30px;
    }
}
.followerstab, .followingtab{
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
    h5{
        color: #0D5863;
    }
    h6{
        color: #0D5863;
        opacity: 0.7;
    }
    .btn{
        margin: 0px 10px;
        color: #0D5863;
        background-color: #d0e9ed;
        border-radius: 3px;
    }
    .btn-primary{
        border-color: #0D5863;
    }
    .options .btn{
        margin: 10px;
        border: 1px solid #0D5863;
        background: none;
        font-size: 18px;
        font-style: bold;
        color: #0D5863;
    }
    .dropdown-toggle::after {
        content: none;
    }
}
`;

const Profile = () => {
    return (
        <Styles>
            <div class="ProfileContent">
                <div class="profile">
                <Row>
                    <Col lg={3} sm={12}>
                    <Media>
                        <div class="profileimg">
                        <img
                            width={100}
                            height={100}
                            src={bravo}
                            alt="Generic placeholder"
                        />
                        <Button id="editprofile">Edit Profile</Button>
                        </div>

                        <Media.Body>
                            <div class="Head">
                                <div class="names">
                                    <h4>Johnny Bravo</h4>
                                    <h6>@bravo</h6>     
                                </div>
                            </div>
                        </Media.Body>
                        </Media>

                        <div class="users">
                            <h4>Welcome Johnny Bravo</h4>
                            <div class="suggestedusers">
                                <h6>Suggested Users to Follow</h6>
                                <Row>
                                    <Col lg={3} sm={3}>
                                    <img
                                        width={64}
                                        height={64}
                                        src={bravo}
                                        alt="Generic placeholder"
                                    />
                                    <h6>@user1</h6>
                                    </Col>
                                    <Col lg={3} sm={3}>
                                    <img
                                        width={64}
                                        height={64}
                                        src={dino}
                                        alt="Generic placeholder"
                                    />
                                    <h6>@user11</h6>
                                    </Col>
                                    <Col lg={3} sm={3}>
                                    <img
                                        width={64}
                                        height={64}
                                        src={dino}
                                        alt="Generic placeholder"
                                    />
                                    <h6>@user41</h6>
                                    </Col>
                                    <Col lg={3} sm={3}>
                                    <img
                                        width={64}
                                        height={64}
                                        src={bravo}
                                        alt="Generic placeholder"
                                    />
                                    <h6>@user12</h6>
                                    </Col>
                                </Row>
                                <Row>
                                <Col lg={3} sm={3}>
                                    <img
                                        width={64}
                                        height={64}
                                        src={dino}
                                        alt="Generic placeholder"
                                    />
                                    <h6>@user15</h6>
                                    </Col>
                                    <Col lg={3} sm={3}>
                                    <img
                                        width={64}
                                        height={64}
                                        src={bravo}
                                        alt="Generic placeholder"
                                    />
                                    <h6>@user231</h6>
                                    </Col>
                                    <Col lg={3} sm={3}>
                                    <img
                                        width={64}
                                        height={64}
                                        src={mario}
                                        alt="Generic placeholder"
                                    />
                                    <h6>@user91</h6>
                                    </Col>
                                    <Col lg={3} sm={3}>
                                    <img
                                        width={64}
                                        height={64}
                                        src={mario}
                                        alt="Generic placeholder"
                                    />
                                    <h6>@user05</h6>
                                    </Col>
                                </Row>
                            </div>

                        </div>
                    </Col>
                    <Col lg={7} sm={12}>
                    <Tabs defaultActiveKey="followers" transition={false} id="noanim-tab-example">
                    <Tab eventKey="posts" title="Posts">
                    <div class="posttab">
                    <Media>
                    <img
                        width={64}
                        height={64}
                        className="mr-3"
                        src={dino}
                        alt="Generic placeholder"
                    />
                    <Media.Body>
                        <h5>Dino</h5>
                        <h6>@dino10</h6>
                        <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                        Donec lacinia congue felis in faucibus.
                        </p>            
                        <ButtonGroup className="mb-2">
                            <Button>300K<Emojify><span>:eyes:</span></Emojify></Button>
                            <Button>100K<Emojify><span>:poop:</span></Emojify></Button>
                            <Button>500K<Emojify><span>:fire:</span></Emojify></Button>
                            <div class="activity">
                            <Button><Emojify><span>:bar_chart:</span></Emojify></Button>    
                            </div>
                            
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
                        width={64}
                        height={64}
                        className="mr-3"
                        src={mario}
                        alt="Generic placeholder"
                    />
                    <Media.Body>
                        <h5>Mario</h5>
                        <h6>@mario210</h6>
                        <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                        Donec lacinia congue felis in faucibus.
                        </p>            
                        <ButtonGroup className="mb-2">
                            <Button>300K<Emojify><span>:eyes:</span></Emojify></Button>
                            <Button>100K<Emojify><span>:poop:</span></Emojify></Button>
                            <Button>500K<Emojify><span>:fire:</span></Emojify></Button>
                            <div class="activity">
                            <Button><Emojify><span>:bar_chart:</span></Emojify></Button>    
                            </div>
                            
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

                    </div>
                    </Tab>
                    
                    <Tab eventKey="followers" title="Followers">
                        <div class="followerstab">
                        <Media>
                            <img
                                width={64}
                                height={64}
                                className="mr-3"
                                src={mario}
                                alt="Generic placeholder"
                            />
                            <Media.Body>
                                <h5>Mario</h5>
                                <h6>@mario210</h6>  
                            </Media.Body>
                                <div class="options">
                                <DropdownButton as={ButtonGroup} title="Following &#9660;" id="bg-nested-dropdown">
                                <Dropdown.Item eventKey="1" onClick={(e) => { if (window.confirm('Are you sure you want to block this user?')) this.deleteItem(e) } }>
                                        Block User
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="2" onClick={(e) => { if (window.confirm('Are you sure you want to unfollow this user?')) this.deleteItem(e) } }>
                                        Unfollow User
                                </Dropdown.Item>
                                </DropdownButton>
                                </div>
                            </Media>
                            <Media>
                            <img
                                width={64}
                                height={64}
                                className="mr-3"
                                src={dino}
                                alt="Generic placeholder"
                            />
                            <Media.Body>
                                <h5>Dino</h5>
                                <h6>@dino10</h6>  
                            </Media.Body>
                                <div class="options">
                                <DropdownButton as={ButtonGroup} title="Follow &#9660;" id="bg-nested-dropdown">
                                <Dropdown.Item eventKey="1" onClick={(e) => { if (window.confirm('Are you sure you want to block this user?')) this.deleteItem(e) } }>
                                        Block User
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="2" onClick={(e) => { if (window.confirm('Are you sure you want to report this post?')) this.deleteItem(e) } }>
                                        Report User
                                </Dropdown.Item>
                                </DropdownButton>
                                </div>
                            </Media>
                            <Media>
                            <img
                                width={64}
                                height={64}
                                className="mr-3"
                                src={bravo}
                                alt="Generic placeholder"
                            />
                            <Media.Body>
                                <h5>Bravo Handsome</h5>
                                <h6>@bravoh10</h6>  
                            </Media.Body>
                                <div class="options">
                                <DropdownButton as={ButtonGroup} title="Follow &#9660;" id="bg-nested-dropdown">
                                <Dropdown.Item eventKey="1" onClick={(e) => { if (window.confirm('Are you sure you want to block this user?')) this.deleteItem(e) } }>
                                        Block User
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="2" onClick={(e) => { if (window.confirm('Are you sure you want to report this user?')) this.deleteItem(e) } }>
                                        Report User
                                </Dropdown.Item>
                                </DropdownButton>
                                </div>
                            </Media>
                            <Media>
                            <img
                                width={64}
                                height={64}
                                className="mr-3"
                                src={mario}
                                alt="Generic placeholder"
                            />
                            <Media.Body>
                                <h5>Mario Bro</h5>
                                <h6>@mariobro22</h6>  
                            </Media.Body>
                                <div class="options">
                                <DropdownButton as={ButtonGroup} title="Following &#9660;" id="bg-nested-dropdown">
                                <Dropdown.Item eventKey="1" onClick={(e) => { if (window.confirm('Are you sure you want to block this user?')) this.deleteItem(e) } }>
                                        Block User
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="2" onClick={(e) => { if (window.confirm('Are you sure you want to unfollow this user?')) this.deleteItem(e) } }>
                                        Unfollow
                                </Dropdown.Item>
                                </DropdownButton>
                                </div>
                            </Media> 
                        </div>
                    </Tab>
                    
                    <Tab eventKey="following" title="Following">
                        <div class="followingtab">
                            <Media>
                            <img
                                width={64}
                                height={64}
                                className="mr-3"
                                src={mario}
                                alt="Generic placeholder"
                            />
                            <Media.Body>
                                <h5>Mario</h5>
                                <h6>@mario210</h6>  
                            </Media.Body>
                                <div class="options">
                                <DropdownButton as={ButtonGroup} title="Following &#9660;" id="bg-nested-dropdown">
                                <Dropdown.Item eventKey="1" onClick={(e) => { if (window.confirm('Are you sure you want to block this user?')) this.deleteItem(e) } }>
                                        Block User
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="2" onClick={(e) => { if (window.confirm('Are you sure you want to unfollow this user?')) this.deleteItem(e) } }>
                                        Unfollow
                                </Dropdown.Item>
                                </DropdownButton>
                                </div>
                            </Media>
                            <Media>
                            <img
                                width={64}
                                height={64}
                                className="mr-3"
                                src={dino}
                                alt="Generic placeholder"
                            />
                            <Media.Body>
                                <h5>Dino</h5>
                                <h6>@dino10</h6>  
                            </Media.Body>
                                <div class="options">
                                <DropdownButton as={ButtonGroup} title="Following &#9660;" id="bg-nested-dropdown">
                                <Dropdown.Item eventKey="1" onClick={(e) => { if (window.confirm('Are you sure you want to block this user?')) this.deleteItem(e) } }>
                                        Block User
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="2" onClick={(e) => { if (window.confirm('Are you sure you want to unfollow this user?')) this.deleteItem(e) } }>
                                        Unfollow
                                </Dropdown.Item>
                                </DropdownButton>
                                </div>
                            </Media>
                            <Media>
                            <img
                                width={64}
                                height={64}
                                className="mr-3"
                                src={bravo}
                                alt="Generic placeholder"
                            />
                            <Media.Body>
                                <h5>Bravo Handsome</h5>
                                <h6>@bravoh10</h6>  
                            </Media.Body>
                                <div class="options">
                                <DropdownButton as={ButtonGroup} title="Following &#9660;" id="bg-nested-dropdown">
                                <Dropdown.Item eventKey="1" onClick={(e) => { if (window.confirm('Are you sure you want to block this user?')) this.deleteItem(e) } }>
                                        Block User
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="2" onClick={(e) => { if (window.confirm('Are you sure you want to unfollow this user?')) this.deleteItem(e) } }>
                                        Unfollow
                                </Dropdown.Item>
                                </DropdownButton>
                                </div>
                            </Media>
                            <Media>
                            <img
                                width={64}
                                height={64}
                                className="mr-3"
                                src={mario}
                                alt="Generic placeholder"
                            />
                            <Media.Body>
                                <h5>Mario Bro</h5>
                                <h6>@mariobro22</h6>  
                            </Media.Body>
                                <div class="options">
                                <DropdownButton as={ButtonGroup} title="Following &#9660;" id="bg-nested-dropdown">
                                <Dropdown.Item eventKey="1" onClick={(e) => { if (window.confirm('Are you sure you want to block this user?')) this.deleteItem(e) } }>
                                        Block User
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="2" onClick={(e) => { if (window.confirm('Are you sure you want to unfollow this user?')) this.deleteItem(e) } }>
                                        Unfollow
                                </Dropdown.Item>
                                </DropdownButton>
                                </div>
                            </Media>
                        </div>
                    </Tab>
                    </Tabs>
                    </Col>

                    <Col lg={2} sm={12}>
                        <div class="signout">
                            <DropdownButton as={ButtonGroup} title="My Account" id="bg-nested-dropdown">
                                <Dropdown.Item href="/Login" eventKey="1">Switch Account</Dropdown.Item>
                                <Dropdown.Item href="/" eventKey="2">Sign Out</Dropdown.Item>
                            </DropdownButton>
                        </div>
                        
                    </Col>
                </Row>
                </div>
            </div>
        </Styles>
    );
}
 
export default Profile;