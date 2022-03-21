import { Button, Form, Col, Nav, InputGroup } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import Image from "next/image";
import icon from "../public/smiley.png";
import styles from "../styles/message.module.css";

export default function Contacts() {
  const user = useContext(UserContext);

  return (
    <Col lg={5} sm={5} style={{ paddingRight: "0px" }}>
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
                  <>
                    <Image
                      src={icon}
                      height="40"
                      width="30"
                      className={styles.profilePicture}
                    />
                    <a
                      style={{
                        position: "absolute",
                        marginBottom: "1rem",
                        paddingLeft: "1rem",
                      }}
                    >
                      {user.uuidName.find((item) => item.id === `${el}`).name}
                    </a>
                    <a
                      style={{
                        position: "absolute",
                        paddingLeft: "9.5rem",
                        fontSize: "14px",
                      }}
                    >
                      5:00pm
                    </a>
                    <a
                      style={{
                        paddingLeft: "1rem",
                        fontSize: "14px",
                      }}
                    >
                      Last message
                    </a>
                  </>
                ) : (
                  <></>
                )}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </div>
    </Col>
  );
}
