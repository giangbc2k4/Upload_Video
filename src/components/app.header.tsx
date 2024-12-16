'use client';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { getAuth, onAuthStateChanged, signOut, User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import auth from '@/app/sv/firebaseAuth';

const Hearder = ()=>{


  const [user, setUser] = useState<User | null>(null);



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [auth]);

 
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert('Đăng xuất thành công!');
    } catch (err) {
      alert('Đăng xuất thất bại!');
    }
  };









    return(
       <Container>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Upload Video</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/admin">Home</Nav.Link>
        
            <Nav>
  {user ? ( 
    <>
      <Nav.Link className="ms-2 text-muted">Xin chào, {user.email}</Nav.Link>
      <Nav.Link href='/Updata'>Tải lên vd của bạn</Nav.Link>
      <Nav.Link href='/admin'>Xem tất cả vd của bạn</Nav.Link>
      <Nav.Link onClick={handleLogout}>Đăng Xuất</Nav.Link>
    </>
  ) : (
    <NavDropdown title="Tài khoản" id="basic-nav-dropdown">
      <NavDropdown.Item href="/Login">Đăng Nhập</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="/Signup">Đăng Ký</NavDropdown.Item>
    </NavDropdown>
  )}
</Nav>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       </Container>
    )
}
export default Hearder