import React from "react";
import logo from "./img/logo.png";
import army from "./img/army.png";
import pastry from "./img/pastry.png";
import boy from "./img/boy.png";
import cage from "./img/cage.png";
import buju from "./img/buju.png";
import hand from "./img/hand.png";
import ross from "./img/ross.png";
import kpop from "./img/kpop.png";
import body from "./img/body.png";
import hair from "./img/hair.png";
import bridge from "./img/bridge.png";
import cat from "./img/cat.png";

import PopPop from "react-poppop";

export default class App extends React.Component {
    state = {
        open: false,
        modalImage: "",
        modal_des: "",
        modal_title: ""
    };

    onOpenModal = (img, modal_des, modal_title) => {
        console.log(document.body.clientWidth);
        if (document.body.clientWidth >= 1024) {
            this.setState({ open: true });
            this.setState({ modalImage: img });
            this.setState({ modal_des: modal_des });
            this.setState({ modal_title: modal_title });
        }
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { open, modalImage, modal_des, modal_title } = this.state;
        var content = {
            transition: "all 0.3s",
            backgroundColor: "white",
            borderRadius: "3px",
            zIndex: 2000,
            position: "relative",
            boxShadow: "0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)",
            overflow: "hidden",
            maxWidth: "9999px",
            padding: "0px 0px"
        };
        return (
            <div>
                <div class="top">
                    <div class="logo header">
                        <img class="logo" src={logo} />
                    </div>

                    <div class="name">Rebekah Rhodes Portfolio</div>

                    <hr />
                </div>
                <div class="main">

                    <div
                        class="container"
                        onClick={() =>
                            this.onOpenModal(
                                cage,
                                "The origami crane is trapped in a barbed wire cage with a calaverita (sugar skull) and marigold base which symbolize the Japanese American and Hispanic American respectively. I wanted to showcase how the American government apprehends innocent racial minorities. During World War II, the US government put Japanese Americans into internment camps, and the same thing is happening today with Hispanic children. It shows that history repeats itself and shed light on the recent political events.",
                                "Caged Child"
                            )
                        }
                    >
                        <img class="material" src={cage} />
                        <div class="overlay">
                            <div class="text">CAGED CHILD</div>
                        </div>
                    </div>

                    <div
                        class="container"
                        onClick={() =>
                            this.onOpenModal(
                                army,
                                "This logo was a rebranding of the original United States Army logo. I added a rainbow to the center of the star to show inclusiveness of the army. This piece will challenge the stereotype and invoke a change in the way we view our military.",
                                "Pride and Strong"
                            )
                        }
                    >
                        <img class="material" src={army} />
                        <div class="overlay">
                            <div class="text">ARMY LOGO</div>
                        </div>
                    </div>

                    <div
                        class="container"
                        onClick={() =>
                            this.onOpenModal(
                                hand,
                                "Recently, scientists have found that dark matters are the key to hold our galaxy together. Dark matter cannot be seen or detected with nowadays technologies. It is almost like an “invisible hand” sitting at the center of the galaxy, spinning the planets with its gravitational potential.",
                                "Dark Matter (Invisible Hand)"
                            )
                        }
                    >
                        <img class="material" src={hand} />
                        <div class="overlay">
                            <div class="text">Center of the Galaxy</div>
                        </div>
                    </div>

                    <div class="container" onClick={() => this.onOpenModal(body,
                        <div>Beauty” is a series of three different works that challenge the way we view beauty as a society. Today beauty standards dictate what is appropriate for either sex to do with their bodies. With this series I hope to drive viewers to confront these beauty standards. <br /> <br /> “Body” is a piece that presents the opposite of what society views as beautiful. Many women are told that they should be skinny to be beautiful, and that being overweight is wrong.'</div>,
                        "Beauty:Body",
                    )}>
                        <img class="material" src={body} />
                        <div class="overlay">
                            <div class="text" id="black">BEAUTY:BODY</div>
                        </div>
                    </div>



                    <div class="container" onClick={() => this.onOpenModal(hair,
                        <div>“Beauty” is a series of three different works that challenge the way we view beauty as a society. Today beauty standards dictate what is appropriate for either sex to do with their bodies. With this series I hope to drive viewers to confront these beauty standards.
                        <br /><br />“Hair” presents the issue of body hair on women. Society tells women that they need to be practically hairless to be considered beautiful, and that it’s gross to have body hair. Body hair is natural, and women should not have to feel so ashamed to have body hair.
                        </div>,
                        "Beauty:Hair")}>
                        <img class="material" src={hair} />
                        <div class="overlay">
                            <div class="text" id="black">BEAUTY:HAIR</div>
                        </div>
                    </div>

                    <div class="container" onClick={() => this.onOpenModal(boy,
                        <div>“Beauty” is a series of three different works that challenge the way we view beauty as a society. Today beauty standards dictate what is appropriate for either sex to do with their bodies. With this series I hope to drive viewers to confront these beauty standards.
                        <br /><br />“Femme” introduces the idea of what we know about being feminine. In society men are told that being any sort of feminine is a weakness. However, I wanted to use this piece to show that it is fine to be feminine regardless of the gender, just like the figure in the illustration.
                        </div>,
                        'Beauty:Femme')}>
                        <img class="material" src={boy} />
                        <div class="overlay">
                            <div class="text" id="black">BEAUTY:FEMME</div>
                        </div>
                    </div>

                    <div
                        class="container"
                        onClick={() =>
                            this.onOpenModal(
                                pastry,
                                " This watercolor depicts a bakery scene where the only thing in focus are the delicious pastries. Whenever I go to a bakery, the pastries are what stand out to me the most, and everything else becomes a blur of color. Between the smell of the golden brown pastries, and the vibrant joy",
                                "Sweet Memories"
                            )
                        }
                    >
                        <img class="material" src={pastry} />
                        <div class="overlay">
                            <div class="text">SWEET MEMORIES</div>
                        </div>
                    </div>



                    <div class="container" onClick={() => this.onOpenModal(buju,
                        <div>As an avid reader, i found it difficult to keep track of all the books i wanted to read. I would always lose sticky notes or loose paper with the title written on them. Therefore, I created an aesthetically pleasing way to help me keep track of books that I would love to read. Whenever I come across with an interesting book,
                            I would record it in the spaces on the "bookshelf"
                        </div>,
                        "Bookshelf")}>
                        <img class="material" src={buju} />
                        <div class="overlay">
                            <div class="text">BOOKSHELF</div>
                        </div>
                    </div>

                      <div class="container" onClick={() => this.onOpenModal(cat,
                        <div>This photography piece is a bokeh image of a cat sitting on a windowsill enjoying a lazy afternoon. I wanted to capture the moment of laziness that hung in the air. During post-editing, i brought out the softness of the light and the fur by adjusting the contrast and brightness.
                        </div>,
                        "Lazy Afternoon")}>
                        <img class="material" src={cat} />
                        <div class="overlay">
                            <div class="text">LAZY AFTERNOON</div>
                        </div>
                    </div>

                      <div class="container" onClick={() => this.onOpenModal(bridge,
                        <div>This photography piece is of a delicate pastel sky observed through a clearing by the railroad tracks. While walking home from classes, I looked over the bridge I normally cross and discovered this brilliant color pallet created in the sky. Using post editing, I modified the color intensities to give the same tone as what I felt in that moment.
                        </div>,
                        "Pastel Sky")}>
                        <img class="material" src={bridge} />
                        <div class="overlay">
                            <div class="text">PASTEL SKY</div>
                        </div>
                    </div>

                    <div class="container" onClick={() => this.onOpenModal(kpop,
                        <div>This piece is a pencil sketch of the kpop idol Lee Jeongmin.
                        </div>,
                        "Lee Jeong Min")}>
                        <img class="material" src={kpop} />
                        <div class="overlay">
                            <div class="text">LEE JEONG MIN</div>
                        </div>
                    </div>


                    <div class="container" onClick={() => this.onOpenModal(ross,
                        <div>This piece is an acrylic of a mountainous landscape inspired by the works of Bob Ross.
                        </div>,
                        "Landscape")}>
                        <img class="material" src={ross} />
                        <div class="overlay">
                            <div class="text">LANDSCAPE</div>
                        </div>
                    </div>


                </div>
                <div class="footer">
                    <hr />
                    <h1>Author</h1>
                    <p>Rebekah Rhodes </p>
                </div>

                <div class="poppop">
                    <PopPop
                        open={open}
                        onClose={this.onCloseModal}
                        position="centerCenter"
                        contentStyle={content}
                        closeBtn="true"
                        closeOnEsc="true"
                    >
                        <div class="modal">
                            <div class="modal left">
                                <img class="modalImg" src={this.state.modalImage} />
                            </div>
                            <div class="modal right">
                                <h1>{this.state.modal_title}</h1>
                                {this.state.modal_des}
                            </div>
                        </div>
                    </PopPop>
                </div>
            </div>
        );
    }
}
