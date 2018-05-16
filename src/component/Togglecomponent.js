import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';
import {LineChart} from 'react-easy-chart';
import Sharescore from './Sharescore';
 import './Togglecomponent.css';


 class Togglecomponent extends Component{
   constructor(props){
     super(props);
     this.state = {
       userdetails: [
                     {
                       id : 1,
                     name : "Ardeshir",
                     surname: "Sharifzadehgan",
                     email: "bhattu.bhavani3@gmail.com",
                     score : 5647
                   }


                ],

     show: false,
     showModal: false

   };

        this.getDetails = this.getDetails.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.sharealert = this.sharealert.bind(this);
        this.closeHandle =this.closeHandle.bind(this);
     }

     getDetails(){
       this.setState(prevstate => ({showModal:!prevstate.showModal}));

     }
     handleClose(){
       this.setState({showModal: false});
     }
     closeHandle(){
       this.setState({show : false});
     }
     sharealert(e){
          this.setState(prevstate => ({show:!prevstate.show}));
     }


   render(){
     const details = this.state.userdetails.map((detail) =>
         <li key={detail.id}>
         <h4>{detail.name} {detail.surname}</h4>
            <h5>{detail.email}</h5>
              <h5>Your score is: <strong>{detail.score}</strong></h5> </li>
     )


     return(
       <div className =" container">
             <Button className ="button" bsStyle = "primary" onClick = {this.getDetails}> <h4 className = "h-four">{this.state.userdetails[0].name} {this.state.userdetails[0].surname}</h4>
             <h5>Score: <strong> {this.state.userdetails[0].score} </strong> pts.</h5> </Button>
             <Modal show={this.state.showModal} onHide={this.handleClose}>
                 <Modal.Header closeButton>
                   <Modal.Title>Your Information: </Modal.Title>
                 </Modal.Header>
                 <Modal.Body>

                    <Sharescore clicked={this.sharealert} close={this.closeHandle} showed={this.state.show} />



                    <ul className ="ul-list-container">
                        {details}
                    </ul>

                   <LineChart className ="linechartcontainer"
                      axes
                      dataPoints
                      xDomainRange={[0, 100]}
                      yDomainRange={[0, 100]}
                      width={250}
                      height={250}
                      interpolate={'cardinal'}
                      data={[
                        [
                           { x: 0, y: 0 },
                          { x: 10, y: 20 },
                          { x: 20, y: 30 },
                          { x: 30, y: 25 },
                          { x: 40, y: 60 },
                          { x: 50, y: 22 },
                          { x: 60, y: 9 }
                        ]
                      ]}
                    />




       </Modal.Body>
       <Modal.Footer>
                <Button onClick={this.handleClose}>Close</Button>
              </Modal.Footer>
                 </Modal>





       </div>
           );
         }
       }


 export default Togglecomponent;
