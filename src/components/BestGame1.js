import React from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import BackForBlood from '../asset/best/back4blood.jpg';

const BestGame1 = () => {
    return (
        <div>
        <Container>
            <br></br>
            <h1 className='text-white text-center' id='best'>BEST GAMES</h1>
            <Row>
                <Col md={4}>
                <Card className='gameImage'>
                    <Image src={BackForBlood} className='images'/>
                    <Card.Title className='text-white text-center'>Back For Blood</Card.Title>    
                    <Card.Text className='text-white text-left'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, maxime!
                    </Card.Text>
                    <Card.Text className='text-white text-left'>Last updated 3 mins ago</Card.Text>
                </Card>
                </Col>
            </Row>
        </Container>

      </div>
    )
}

export default BestGame1