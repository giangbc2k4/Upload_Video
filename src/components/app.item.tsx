'use client';
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = () => {
    return (
        <Container>
            <Card style={{ width: '18rem' }}>
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                    <iframe
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                        }}
                        src="https://www.youtube.com/embed/NAMvdbS4lk4"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <Card.Body>
                    <Card.Title>Người đăng: Trần Trường Giang</Card.Title>
                    <Card.Text>
                        Má,dễ vl
                    </Card.Text>
                    <Button variant="primary">Xem chi tiết</Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Item;
