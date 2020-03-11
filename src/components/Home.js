import React from 'react';
import styled from 'styled-components';
import img from '../assets/HomeBG.png';
import dino from '../assets/dino.jpg';
import mario from '../assets/mario.jpg';
import { Container } from 'react-bootstrap';
import Media from 'react-bootstrap/Media';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Emojify from 'react-emojione';
import 'bootstrap/dist/css/bootstrap.min.css';

const Styles = styled.div`
.HomeContent {
    height: 100%;
    width: 100%;
    margin: 50px 0px;
    background-image: url(${img});
    background-size: contain;
}
.container{
    padding: 50px;
    background-color: #d0e9ed;
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
.options .btn{
    border: none;
    background: none;
    font-size: 30px;
    font-style: bold;
    color: #0D5863;
}
.dropdown-toggle::after {
    content: none;
}

`;

const home = () => {
    return (
        <Styles>
        <div class="HomeContent">
           <Container>
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
                <Dropdown.Item eventKey="1">Block User</Dropdown.Item>
                <Dropdown.Item eventKey="2">Report Post</Dropdown.Item>
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
                <h6>@superbro</h6>
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
                <Dropdown.Item eventKey="1">Block User</Dropdown.Item>
                <Dropdown.Item eventKey="2">Report Post</Dropdown.Item>
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
                <h6>@dino11</h6>
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
                <Dropdown.Item eventKey="1">Block User</Dropdown.Item>
                <Dropdown.Item eventKey="2">Report Post</Dropdown.Item>
            </DropdownButton>
            </div>
            </Media>
           </Container>
           </div>  
        </Styles>
    );
}
 
export default home;
