import React, {Component} from 'react';
import { Glyphicon,ButtonToolbar,Modal} from 'react-bootstrap';
import {FacebookIcon,FacebookShareButton,
        LinkedinShareButton, LinkedinIcon} from 'react-share';

import './Sharescore.css';



class Sharescore extends Component{





  render(){


    let pageurl= "https://github.com";
    let title = 'My score is:';
    return(



      <ButtonToolbar>

         <Glyphicon  className = "glyphicon" glyph ="share"  onClick ={this.props.clicked}/> 

            {/* <Overlay
               show={this.props.showed}
               placement="bottom"
               container={this}   >

                  <Popover id="popover-contained" title="Share your score on: "> */}
                  <Modal show={this.props.showed} onHide={this.props.close} className="parentmodal">
                   <Modal.Header closeButton>
                   <Modal.Title>Share score on: </Modal.Title>
                   </Modal.Header>
                   <Modal.Body>
                     <div className = "button-contained" >

                      <div className ="social-icons">

                        <FacebookShareButton
                           url ={pageurl}
                           quote = {title}
                           className="facebooksharebutton">
                          <FacebookIcon size={32} className = "facebookicon" />
                      </ FacebookShareButton>
                      <LinkedinShareButton
                         url={pageurl}
                         quote={title}
                         className="linkedinsharebutton">
                         <LinkedinIcon size ={32} className="linkedinicon" />
                         </LinkedinShareButton>

                      </div>
                    </div>
                    </Modal.Body>
                    </Modal>
              { /*</Popover>
             </Overlay>*/}

      </ButtonToolbar>

    );
  }


}


export default Sharescore;
