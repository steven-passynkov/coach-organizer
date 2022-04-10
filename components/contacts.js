import { Button, Form, Col, Container, Nav, InputGroup } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import Image from "next/image";
import icon from "../public/smiley.png";
import styles from "../styles/message.module.css";

export default function Contacts() {
  const user = useContext(UserContext);

  return (
    <Col lg={5} sm={5} style={{ padding: "0px" }}>
      <div
        style={{
          backgroundColor: "#f2f2f2",
          height: "100%",
        }}
      >
        <InputGroup
          style={{
            paddingTop: "16px",
            paddingRight: "14px",
            paddingLeft: "14px",
            paddingBottom: "16px",
          }}
        >
          <Form.Control
            style={{
              borderRadius: "10px",
              borderWidth: "1px",
            }}
          />
          <Button className={styles.searchButton} />
        </InputGroup>
        <Nav variant="pills" className="flex-column">
          {(user.userData[0].messaging_contacts.contact || []).map((el) => (
            <Nav.Item key={el}>
              <Nav.Link style={{ height: "4rem" }} eventKey={el}>
                {user.uuidName != null ? (
                  <Container>
                    <div className="d-flex">
                      <div className="d-flex justify-content-start">
                        <Image
                          src={icon}
                          height="40"
                          width="30"
                          className={styles.profilePicture}
                        />
                      </div>
                      <div
                        className="d-flex justify-content-center"
                        style={{
                          position: "absolute",
                          paddingLeft: "2.5rem",
                        }}
                      >
                        {user.uuidName.find((item) => item.id === `${el}`).name}
                      </div>
                      <div
                        className="d-flex justify-content-end"
                        style={{
                          position: "absolute",
                          paddingLeft: "70%",
                          fontSize: "14px",
                        }}
                      >
                        5:00pm
                      </div>

                      <div
                        className="d-flex align-items-end"
                        style={{
                          fontSize: "14px",
                          paddingLeft: "0.6rem",
                        }}
                      >
                        Last message
                      </div>
                    </div>
                  </Container>
                ) : (
                  <></>
                )}
              </Nav.Link>
              <hr
                style={{ marginTop: "5px", marginBottom: "5px", width: "80%" }}
              />
            </Nav.Item>
          ))}
        </Nav>
      </div>
    </Col>
  );
}
