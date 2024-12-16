'use client';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../sv/firebaseAuth';
import { useRouter } from 'next/navigation';

const SignUp = () => {
  const [email, setEmail] = useState<string>('');  
  const [password, setPassword] = useState<string>('');  
  const router = useRouter(); 
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

   
    if (!email || !password) {
      console.log('Vui lòng nhập đủ thông tin');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User registered:", userCredential.user);
      alert("Ban da tao tai khoan thanh cong,vui long dang nhap de tiep tuc")
      router.push('/Login');
    } catch (err) {
      alert("Tao taai khoan")
    }
  };
  

  return (
    <Container className="justify-content-center align-items-center min-vh-100" style={{ backgroundColor: '#f8f9fa' }}>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6} className="bg-white p-5 rounded shadow-sm">
          <h2 className="text-center mb-4">Đăng Ký</h2>
          <Form onSubmit={handleSignup}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Nhập Email"
                className="border-primary"
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mật Khẩu</Form.Label>
              <Form.Control
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Mật Khẩu"
                className="border-primary"
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">
              Đăng ký
            </Button>
            <div className="mt-3 text-center">
              <span>Nếu bạn đã có tài khoản, <a href="/Login">Đăng Nhập</a></span>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
