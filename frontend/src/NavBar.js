import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar(){
    return (
        <>
      
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Employee Management Application</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      
    </>
    );
}