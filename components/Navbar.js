import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logout from "./logout";
import { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import Messaging from "./messaging";

export default function Nav_bar() {
  const user = useContext(UserContext);
  const [showMessaging, setShowMessaging] = useState(false);

  const handleClose = () => {
    setShowMessaging(false);
  };
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Coach Organizer</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Calendar</Nav.Link>
          <Nav.Link onClick={() => setShowMessaging(true)}>Messaging</Nav.Link>
        </Nav>
        <NavDropdown title={user.name} id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">
            <Logout />
          </NavDropdown.Item>
        </NavDropdown>
      </Navbar.Collapse>
    </Navbar>
    <Messaging show={showMessaging} onHide={handleClose}/>
    </>
  );
}
