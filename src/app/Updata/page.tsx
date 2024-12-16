'use client';
import { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Button, Form, Container } from "react-bootstrap";
import auth from "../sv/firebaseAuth";
import db from "../sv/firestore";

const CreatePost = () => {
  const [description, setDescription] = useState<string>("");
  const [link, setLink] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (user) {
      try {
        await addDoc(collection(db, "posts"), {
          email: user.email,
          link: link,
          description: description,
          timestamp: new Date(),
        });
        alert("Bài đăng đã được lưu thành công!");
      } catch (err) {
        console.error("Lỗi khi tạo bài đăng:", err);
        alert("Có lỗi xảy ra!");
      }
    } else {
      alert("Bạn cần đăng nhập để tạo bài đăng.");
    }
  };

  return (
    <Container>
      <h2>Tạo Bài Đăng</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formDescription">
          <Form.Label>Mô Tả</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập mô tả"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formLink">
          <Form.Label>Link YouTube</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập link YouTube"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Tạo Bài Đăng
        </Button>
      </Form>
    </Container>
  );
};

export default CreatePost;
