import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logout from "./logout";
import { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import Lessons from "./lessons";
import Messaging from "./messaging";
import Settings from "./settings";

export default function Nav_bar() {
  const user = useContext(UserContext);
  const [showLessons, setShowLessons] = useState(false);
  const [showMessaging, setShowMessaging] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Coach Organizer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Calendar</Nav.Link>
            <Nav.Link onClick={() => setShowLessons(true)}>Lessons</Nav.Link>
            <Nav.Link onClick={() => setShowMessaging(true)}>
              Messaging
            </Nav.Link>
          </Nav>
          <NavDropdown title={user.name} id="basic-nav-dropdown">
            <NavDropdown.Item onClick={() => setShowSettings(true)}>
              Settings
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>
              <Logout />
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>

      <Lessons show={showLessons} onHide={() => setShowLessons(false)} />
      <Messaging show={showMessaging} onHide={() => setShowMessaging(false)} />
      <Settings show={showSettings} onHide={() => setShowSettings(false)} />
    </>
  );
}
