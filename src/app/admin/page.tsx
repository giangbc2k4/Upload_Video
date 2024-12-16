'use client';
// SignupForm.tsx
import React, { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';

import { collection, addDoc } from 'firebase/firestore';
import db from '../sv/firestore';

const SignupForm: React.FC = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !age) {
      setError('Please fill in both fields');
      return;
    }

    try {
      // Thêm dữ liệu vào Firestore
      const docRef = await addDoc(collection(db, 'users'), {
        name,
        age: Number(age),
      });
      console.log('Document written with ID: ', docRef.id);
      setName('');
      setAge('');
      setError('');
    } catch (e) {
      setError('Error adding document: ' + e);
      console.error('Error adding document: ', e);
    }
  };

  return (
    <Container className="mt-5">
      <h2>Sign Up Form</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </Form.Group>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default SignupForm;
