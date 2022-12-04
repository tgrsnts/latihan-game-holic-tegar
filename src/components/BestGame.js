import React from 'react'
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import back4blood from "../asset/best/back4blood.jpg";
import crysis3 from "../asset/best/crysis3.jpg";
import residentEvil2 from "../asset/best/residentEvil2.jpg";
import theWalkingDead from "../asset/best/theWalkingDead.jpg";
import thief from "../asset/best/thief.jpg";
import untilDawn from "../asset/best/untilDawn.jpg";

const BestGame = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white text-center" id="best">BEST GAMES</h1>
                <br />
                <Row>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={back4blood} alt="Minecraft Game" className="images" />
                                <div>
                                    <Card.Title className="text-center text-white">A</Card.Title>
                                    <Card.Text className="text-left  text-white">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, maxime!
                                    </Card.Text>
                                    <Card.Text className="text-left  text-white">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={crysis3} alt="Minecraft Game" className="images" />
                                <div>
                                    <Card.Title className="text-center text-white">A</Card.Title>
                                    <Card.Text className="text-left  text-white">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, maxime!
                                    </Card.Text>
                                    <Card.Text className="text-left  text-white">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={residentEvil2} alt="Minecraft Game" className="images" />
                                <div>
                                    <Card.Title className="text-center text-white">A</Card.Title>
                                    <Card.Text className="text-left  text-white">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, maxime!
                                    </Card.Text>
                                    <Card.Text className="text-left  text-white">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={theWalkingDead} alt="Minecraft Game" className="images" />
                                <div>
                                    <Card.Title className="text-center text-white">A</Card.Title>
                                    <Card.Text className="text-left  text-white">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, maxime!
                                    </Card.Text>
                                    <Card.Text className="text-left  text-white">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={thief} alt="Minecraft Game" className="images" />
                                <div>
                                    <Card.Title className="text-center text-white">A</Card.Title>
                                    <Card.Text className="text-left  text-white">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, maxime!
                                    </Card.Text>
                                    <Card.Text className="text-left  text-white">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={untilDawn} alt="Minecraft Game" className="images" />
                                <div>
                                    <Card.Title className="text-center text-white">A</Card.Title>
                                    <Card.Text className="text-left  text-white">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, maxime!
                                    </Card.Text>
                                    <Card.Text className="text-left  text-white">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BestGame;