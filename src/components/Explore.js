import React from 'react';
import styled from 'styled-components';
import img from '../assets/ExploreBG.png';
import { Container, Button, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaSearch } from 'react-icons/fa';

const Styles = styled.div`
.ExploreContent{
   height: 100%;
   width: 100%;
   background-image: url(${img});
   background-size: contain;
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
.search{
   margin: 5px 0px;
   float: right;
}
.flex-container{
   width: auto;
   display: flex;
   flex-container: row;
   justify-content: space-around;
   text-align: center;
}

.Fashion .btn-primary{
   background: linear-gradient(to right, #A83279, #D38312); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
   border: none;
   margin: 0 2px;
}
.Sports .btn-primary{
   background: linear-gradient(to bottom, #93F9B9, #1D976C); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
   border: none;
   margin: 0 2px;
}
.Food .btn-primary{
   background: linear-gradient(to right, #B06AB3, #4568DC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
   border: none;
   margin: 0 2px;
}
.Entertainment .btn-primary{
   background: linear-gradient(to left, #f7b733, #fc4a1a); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
   border: none;
   margin: 0 2px;
}
.Gaming .btn-primary{
   background: linear-gradient(to left, #29ffc6, #20e3b2, #0cebeb); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
   border: none;
   margin: 0 2px;
}
.Social .btn-primary{
   background: linear-gradient(to right, #45B649, #DCE35B); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
   border: none;
   margin: 0 2px;
}

.posts{
   text-align: justify;
   font-style: bold;
   padding: 20px;
   border: 1px solid black;
   border-radius: 2px;
   box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);
   margin: 20px;
}
.row{
   margin: 20px 0px;
}
#Fashion, #Sports, #Food, #Entertainment, #Gaming, #Social{
   margin: 3px 3px;
}
#Fashion{
   color: white;
   background: linear-gradient(to right, #A83279, #D38312); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#Sports{
   color: white;
   background: linear-gradient(to bottom, #93F9B9, #1D976C); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#Food{
   color: white;
   background: linear-gradient(to right, #B06AB3, #4568DC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#Entertainment{
   color: white;
   background: linear-gradient(to left, #f7b733, #fc4a1a); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#Gaming{
   color: white;
   background: linear-gradient(to left, #29ffc6, #20e3b2, #0cebeb); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#Social{
   color: white;
   background: linear-gradient(to right, #45B649, #DCE35B); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
`;

const Explore = () => {
    return (
      <Styles>
      <div class="ExploreContent">
         <div class="title">
            <h3>Explore</h3>
            <div class="search">
            <InputGroup>
               <FormControl
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
               />
               <InputGroup.Append>
                  <Button variant="outline-secondary"><FaSearch/></Button>
               </InputGroup.Append>
            </InputGroup>
            </div>
         </div>

         <div class="flex-container">
               <div class="Fashion"><Button>FASHION</Button></div>
               <div class="Sports"><Button>SPORTS</Button></div>
               <div class="Food"><Button>FOOD</Button></div>
               <div class="Entertainment"><Button>ENTERTAINMENT</Button></div>
               <div class="Gaming"><Button>GAMING</Button></div>
               <div class="Social"><Button>SOCIAL</Button></div>
         </div>

         <div class="flex-container">
            <div class="posts">
               <Row>
                  <Col lg={6} sm={12}>
                  <CardDeck>
                  <Card  id="Fashion">
                     <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                        </Card.Text>
                     </Card.Body>
                     <Card.Footer>
                        <small>Last updated 3 mins ago</small>
                     </Card.Footer>
                  </Card>
                  <Card id="Gaming">
                     <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                        </Card.Text>
                     </Card.Body>
                     <Card.Footer>
                        <small>Last updated 3 mins ago</small>
                     </Card.Footer>
                  </Card>
                  <Card id="Social">
                     <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                        </Card.Text>
                     </Card.Body>
                     <Card.Footer>
                        <small>Last updated 3 mins ago</small>
                     </Card.Footer>
                  </Card>
                  </CardDeck>
                  </Col>

                  <Col lg={6} sm={12}>
                  <CardDeck>
                  <Card id="Entertainment">
                     <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                        </Card.Text>
                     </Card.Body>
                     <Card.Footer>
                        <small>Last updated 3 mins ago</small>
                     </Card.Footer>
                  </Card>
                  <Card id="Food">
                     <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                        </Card.Text>
                     </Card.Body>
                     <Card.Footer>
                        <small>Last updated 3 mins ago</small>
                     </Card.Footer>
                  </Card>
                  <Card id="Sports">
                     <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                        </Card.Text>
                     </Card.Body>
                     <Card.Footer>
                        <small>Last updated 3 mins ago</small>
                     </Card.Footer>
                  </Card>
                  </CardDeck>
                  </Col>
               </Row>

               <Row>
                  <Col lg={6} sm={12}>
                  <CardDeck>
                  <Card id="Food">
                     <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                        </Card.Text>
                     </Card.Body>
                     <Card.Footer>
                        <small>Last updated 3 mins ago</small>
                     </Card.Footer>
                  </Card>
                  <Card id="Fashion">
                     <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                        </Card.Text>
                     </Card.Body>
                     <Card.Footer>
                        <small>Last updated 3 mins ago</small>
                     </Card.Footer>
                  </Card>
                  </CardDeck>
                  </Col>

                  <Col lg={6} sm={12}>
                  <CardDeck>
                  <Card id="Gaming">
                     <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                        </Card.Text>
                     </Card.Body>
                     <Card.Footer>
                        <small>Last updated 3 mins ago</small>
                     </Card.Footer>
                  </Card>
                  <Card id="Entertainment">
                     <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                        </Card.Text>
                     </Card.Body>
                     <Card.Footer>
                        <small>Last updated 3 mins ago</small>
                     </Card.Footer>
                  </Card>
                  </CardDeck>
                  </Col>
               </Row>
            </div>
         </div>
       </div>
       </Styles>
    );
}
 
export default Explore;