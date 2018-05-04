import React, {Component} from 'react';
import {Button,Popover, Glyphicon,Overlay,ButtonToolbar} from 'react-bootstrap';
import {FacebookShareButton,LinkedinShareButton} from 'react-share';

import './Sharescore.css';



class Sharescore extends Component{



  shareonFacebook(){

    console.log(" sharing on facebook");

  }

  shareonLinkedIn(){

    console.log("sharing on LinkedIn");
  }



  render(){
    return(

      <ButtonToolbar>

      <a href="#"  ><Glyphicon  className = "glyphicon" glyph ="share"  onClick ={this.props.clicked}/> </a>


             <Overlay
               show={this.props.showed}

               placement="bottom"
               container={this}

             >
               <Popover id="popover-contained" title="Share your score on: ">
          <div className = "button-contained" >

              <Button onClick = {this.shareonFacebook}>facebook</Button>

              <Button className="linkedin-button" onClick = {this.shareonLinkedIn}>LinkedIn</Button>
              </div>
               </Popover>
             </Overlay>

           </ButtonToolbar>

    );
  }


}


export default Sharescore;
