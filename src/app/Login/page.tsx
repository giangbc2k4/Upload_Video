'use client';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

import {signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import auth from '../sv/firebaseAuth';
import { useRouter } from 'next/navigation';
const SignIn = () => {
  const [email, setEmail] = useState<string>('');  
  const [password, setPassword] = useState<string>('');  
  const router = useRouter(); 
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); 
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Đăng nhập thành công!");
      router.push('/');
    } catch (err: any) {
      alert("Đăng nhập thất bại! Vui lòng kiểm tra lại email và mật khẩu.");
    }
  };

  return (
    <Container className="justify-content-center align-items-center min-vh-100" style={{ backgroundColor: '#f8f9fa' }}>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6} className="bg-white p-5 rounded shadow-sm">
          <h2 className="text-center mb-4">Đăng nhập</h2>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Nhập Email"
                className="border-primary"
                value={email}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mật Khẩu</Form.Label>
              <Form.Control
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Mật Khẩu"
                className="border-primary"
                value={password}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">
              Đăng Nhập
            </Button>
            <div className="mt-3 text-center">
              <span>Nếu bạn chưa có tài khoản, <a href="/Signup">Đăng ký</a></span>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
