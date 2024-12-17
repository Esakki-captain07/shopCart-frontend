import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function TopBar() {
  const navigate = useNavigate();

  const role = sessionStorage.getItem('role') || localStorage.getItem('role');

  const handleLogin = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    sessionStorage.clear();
    localStorage.clear();
    navigate('/')
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}>AmzCart</Navbar.Brand>
        <Nav className="me-auto">
          {role === 'admin' && (
            <>
              <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
              <Nav.Link onClick={() => navigate("/upload-product")}>Upload Product</Nav.Link>
              <Nav.Link onClick={() => navigate("/pricing")}>Pricing</Nav.Link>
              
            </>
          )}
          {role === 'user' && (
            <>
              <Nav.Link onClick={() => navigate("/user-home")}>User Home</Nav.Link>
              <Nav.Link onClick={() => navigate("/user-features")}>
                User Features
              </Nav.Link>
              <Nav.Link onClick={() => navigate("/user-pricing")}>Pricing</Nav.Link>
            </>
          )}
        </Nav>
        <Nav>
          {role ? (
            <Button variant="danger" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Button variant="primary" onClick={handleLogin}>
              Login / Sign Up
            </Button>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default TopBar;
