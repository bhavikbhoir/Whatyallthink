import React, { useState, useEffect }  from 'react';
import styled from 'styled-components';
import img from '../assets/NotificationBG.png';
import dino from '../assets/dino.jpg';
import mario from '../assets/mario.jpg';
import bravo from '../assets/bravo.jpg';
import Toast from 'react-bootstrap/Toast';
import ToastHeader from 'react-bootstrap/ToastHeader';
import ToastBody from 'react-bootstrap/ToastBody';
import Button from 'react-bootstrap/Button';
import { Row, Col, Container} from 'react-bootstrap';


const Styles = styled.div`
.NotificationContent{
   height: 100%;
   width: 100%;
   background-image: url(${img});
   background-size: contain;
   margin: 50px 0px;
}
.container{
   padding: 50px;
   background-color: #d0e9ed;
}
h3{
   color: #0D5863;
   padding: 10px;
   border-bottom: 1px solid #0D5863;
   margin-bottom: 20px;
}
.toast{
   max-width: 70%;
   color: #0D5863;
}
.row{
   margin: 10px 0px;
}
`;

function Notifications() {
   const [showA, setShowA] = useState(true);
   const [showB, setShowB] = useState(true);
   const [showC, setShowC] = useState(true);
   const [showD, setShowD] = useState(true);
   const [showE, setShowE] = useState(true);
 
   const toggleShowA = () => setShowA(!showA);
   const toggleShowB = () => setShowB(!showB);
   const toggleShowC = () => setShowC(!showC);
   const toggleShowD = () => setShowD(!showD);
   const toggleShowE = () => setShowE(!showE);
 
   return (
      <Styles>
      <div class="NotificationContent">
         <Container>
         <h3>Notifications</h3>
         <Row>
         <Col>
            <Toast show={showA} onClose={toggleShowA}>
            <Toast.Header>
               <img
                  width={40}
                  height={40}
                  src={dino}
                  className="rounded mr-2"
                  alt=""
               />
               <strong className="mr-auto">Mickey started following you!</strong>
               <small>11 mins ago</small>
            </Toast.Header>
            </Toast>
         </Col>
         </Row>
         <Row>
         <Col>
            <Toast show={showB} onClose={toggleShowB}>
            <Toast.Header>
               <img
                  width={40}
                  height={40}
                  src={bravo}
                  className="rounded mr-2"
                  alt=""
               />
               <strong className="mr-auto">Johnny Bravo started following you!</strong>
               <small>17 mins ago</small>
            </Toast.Header>
            </Toast>
         </Col>
         </Row>
         <Row>
         <Col>
            <Toast show={showC} onClose={toggleShowC}>
            <Toast.Header>
               <img
                  width={40}
                  height={40}
                  src={dino}
                  className="rounded mr-2"
                  alt=""
               />
               <strong className="mr-auto">Minnie commented on your post!</strong>
               <small>22 mins ago</small>
            </Toast.Header>
            </Toast>
         </Col>
         </Row>
         <Row>
         <Col>
            <Toast show={showD} onClose={toggleShowD}>
            <Toast.Header>
               <img
                  width={40}
                  height={40}
                  src={mario}
                  className="rounded mr-2"
                  alt=""
               />
               <strong className="mr-auto">Goofy liked your post!</strong>
               <small>23 mins ago</small>
            </Toast.Header>
            </Toast>
         </Col>
         </Row>
         <Row>
         <Col>
            <Toast show={showE} onClose={toggleShowE}>
            <Toast.Header>
               <img
                  width={40}
                  height={40}
                  src={mario}
                  className="rounded mr-2"
                  alt=""
               />
               <strong className="mr-auto">Bunny started following you!</strong>
               <small>30 mins ago</small>
            </Toast.Header>
            </Toast>
         </Col>
         </Row>                    
         </Container>
      </div>
      </Styles>
   );
 }
 
 export default Notifications;