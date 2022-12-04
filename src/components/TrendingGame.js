import React from 'react'
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import mineCraftImage from "../asset/trending/minecraft.jpg";
import farCryImage from "../asset/trending/farCry6.jpg";
import lolImage from "../asset/trending/lol.jpg";
import olliwoorldImage from "../asset/trending/olliworld.jpg";
import valorantImage from "../asset/trending/valorant.jpg";
import wowImage from "../asset/trending/wow.jpg";

const TrendingGame = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white text-center" id="trending">TRENDING GAMES</h1>
                <br />
                <Row>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={mineCraftImage} alt="Minecraft Game" className="images" />
                                <div>
                                    <Card.Title className="text-center text-white">A</Card.Title>
                                    <Card.Text className="text-left text-white">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, maxime!
                                    </Card.Text>
                                    <Card.Text className="text-left text-white">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={farCryImage} alt="Minecraft Game" className="images" />
                                <div>
                                    <Card.Title className="text-center text-white">A</Card.Title>
                                    <Card.Text className="text-left text-white">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, maxime!
                                    </Card.Text>
                                    <Card.Text className="text-left text-white">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={lolImage} alt="Minecraft Game" className="images" />
                                <div>
                                    <Card.Title className="text-center text-white">A</Card.Title>
                                    <Card.Text className="text-left text-white">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, maxime!
                                    </Card.Text>
                                    <Card.Text className="text-left text-white">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={olliwoorldImage} alt="Minecraft Game" className="images" />
                                <div>
                                    <Card.Title className="text-center text-white">A</Card.Title>
                                    <Card.Text className="text-left text-white">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, maxime!
                                    </Card.Text>
                                    <Card.Text className="text-left text-white">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={valorantImage} alt="Minecraft Game" className="images" />
                                <div>
                                    <Card.Title className="text-center text-white">A</Card.Title>
                                    <Card.Text className="text-left text-white">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, maxime!
                                    </Card.Text>
                                    <Card.Text className="text-left text-white">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={wowImage} alt="Minecraft Game" className="images" />
                                <div>
                                    <Card.Title className="text-center text-white">A</Card.Title>
                                    <Card.Text className="text-left text-white">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, maxime!
                                    </Card.Text>
                                    <Card.Text className="text-left text-white">
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

export default TrendingGame;