import React from "react"
import logo from "./img/logo.png"
import army from "./img/army.png"
import pastry from "./img/pastry.png"
import boy from './img/boy.png'
import cage from "./img/cage.png"
import buju from "./img/buju.png"
import hand from "./img/hand.png"
import ross from "./img/ross.png"
import kpop from "./img/kpop.png"
import body from "./img/body.png"
import hair from "./img/hair.png"

import PopPop from 'react-poppop';

export default class App extends React.Component {
    state = {
        open: false,
        modalImage: "",
        modal_des: "",
        modal_title: ""
      };
    
      onOpenModal = (img, modal_des, modal_title) => {
          console.log(document.body.clientWidth)
        if(document.body.clientWidth >= 1024){
            this.setState({ open: true });
            this.setState({ modalImage: img });
            this.setState({ modal_des: modal_des });
            this.setState({ modal_title: modal_title })
          }     
      };
    
      onCloseModal = () => {
        this.setState({ open: false });
      };
    

    render() {
        const { open, modalImage, modal_des, modal_title } = this.state;
        var content = {
            transition: 'all 0.3s',
            backgroundColor: 'white',
            borderRadius: '3px',
            zIndex: 2000,
            position: 'relative',
            boxShadow: '0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)',
            overflow: 'hidden',
            maxWidth: '9999px',
            padding: '0px 0px'
          };
        return(
            <div>
                <div class="top">
                    <div class="logo header">
                        <img class="logo"src={logo}></img>
                    </div>

                    <div class="name">
                        Rebekah Rhodes Portfolio
                    </div>

                    <hr /> 

                </div>
                <div class="main">
                        <div class="container" onClick={() => this.onOpenModal(army, "Army", "Army Logo Rebrand")} >
                            <img class="material"src={army}></img>      
                            <div class="overlay">
                             <div class="text">ARMY LOGO</div>
                            </div>                      
                        </div>
                        
                       
                        <div class="container" onClick={() => this.onOpenModal(cage)}>
                            <img class="material"src={cage}></img>      
                            <div class="overlay">
                             <div class="text">CAGE</div>
                            </div>                      
                        </div>

                        <div class="container" onClick={() => this.onOpenModal(pastry)}>
                            <img class="material"src={pastry}></img>      
                            <div class="overlay">
                             <div class="text">PASTRY</div>
                            </div>                      
                        </div>

                        <div class="container" onClick={() => this.onOpenModal(boy)}>
                            <img class="material"src={boy}></img>      
                            <div class="overlay">
                             <div class="text">BOY</div>
                            </div>                      
                        </div>

                          <div class="container" onClick={() => this.onOpenModal(buju)}>
                            <img class="material"src={buju}></img>      
                            <div class="overlay">
                             <div class="text">BUJU</div>
                            </div>                      
                        </div>

                        <div class="container" onClick={() => this.onOpenModal(hand)}>
                            <img class="material"src={hand}></img>      
                            <div class="overlay">
                             <div class="text">HAND</div>
                            </div>                      
                        </div>

                        <div class="container" onClick={() => this.onOpenModal(ross)}>
                            <img class="material"src={ross}></img>      
                            <div class="overlay">
                             <div class="text">ROSS</div>
                            </div>                      
                        </div>

                        <div class="container" onClick={() => this.onOpenModal(kpop)}>
                            <img class="material"src={kpop}></img>      
                            <div class="overlay">
                             <div class="text">KPOP</div>
                            </div>                      
                        </div>

       
                        <div class="container" onClick={() => this.onOpenModal(hair)}>
                            <img class="material"src={hair}></img>      
                            <div class="overlay">
                             <div class="text">HAIR</div>
                            </div>                      
                        </div>       

                        
                        <div class="container" onClick={() => this.onOpenModal(body)}>
                            <img class="material"src={body}></img>      
                            <div class="overlay">
                             <div class="text">BODY</div>
                            </div>                      
                        </div>

                        
                        <div class="container" onClick={() => this.onOpenModal(buju)}>
                            <img class="material"src={buju}></img>      
                            <div class="overlay">
                             <div class="text">BUJU</div>
                            </div>                      
                        </div>          

                </div>
                <div class="footer">
                    <hr/>
                    <h1>Author</h1>
                    <p>Rebekah Rhodes </p>
                </div>


                <div class="poppop">
                <PopPop open={open} 
                            onClose={this.onCloseModal} 
                            position="centerCenter" 
                            contentStyle={content}
                            closeBtn="true"
                            closeOnEsc="true"
                            >
                            <div class="modal">
                                <div class="modal left">
                                <img class="modalImg"src={this.state.modalImage}></img>      
                                </div>
                                <div class="modal right">
                                   <h1>{this.state.modal_title}</h1>
                                   <p>
                                      {this.state.modal_des}
                                   </p>
                                </div>
                            </div>
                        </PopPop>

            </div>
            </div>
        )
    }
}