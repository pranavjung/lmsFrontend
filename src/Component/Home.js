import React from 'react';
import Notice from './Subcomponents/Notice';
import Navbar from './Navbar';
import Sessions from './Subcomponents/Sessions';
import { Col, Container, Row } from 'reactstrap';

export default function Home() {
    return (
        <>
            <Container>
                <Row>
                    <Navbar />
                </Row>
                <Row>
                    <Col md={8}>
                        <Sessions />
                    </Col>
                    <Col md={4}>
                        <Notice />
                    </Col>
                </Row>
            </Container>
        </>
    );
}