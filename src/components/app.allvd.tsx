'use client';
import Item from "@/components/app.item";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
const All = ()=>{
    return(<Container>
         <Row xs={1} md={4} className="g-4">
      {Array.from({ length: 10 }).map((_, idx) => (
        <Col key={idx}>
          <Item></Item>
        </Col>
      ))}
    </Row>



</Container>

    )
}

export default All