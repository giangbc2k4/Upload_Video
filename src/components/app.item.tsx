'use client';
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from "next/link"; 

interface ItemProps {
  videoUrl: string;
  uploaderName: string;
  description: string;
}

const Item = ({ videoUrl, uploaderName, description }: ItemProps) => {
  const videoId = videoUrl.split('v=')[1];

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
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <Card.Body>
          <Card.Title>Người đăng: {uploaderName}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Link href={`/youtube/${videoId}`} passHref>
            <Button variant="primary">Xem chi tiết</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Item;
