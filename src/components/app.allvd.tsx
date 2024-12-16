'use client';
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import Item from "@/components/app.item";
import { Container, ListGroup, Row, Col } from "react-bootstrap";
import db from "@/app/sv/firestore";

const All = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "posts"));
        const postsArray: any[] = [];
        querySnapshot.forEach((doc) => {
          postsArray.push({ id: doc.id, ...doc.data() });
        });
        setPosts(postsArray);
      } catch (err) {
        console.error("Lỗi khi lấy bài đăng:", err);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Container>
      <h2>Tất Cả Bài Đăng</h2>
      <Row>
        {posts.map((post, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index}>
           
            <Item 
              videoUrl={post.link} 
              uploaderName={post.email} 
              description={post.description} 
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default All;
