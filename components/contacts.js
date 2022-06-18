import { Button, Form, Col, Container, Nav, InputGroup } from "react-bootstrap";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "./UserContext";
import { supabase } from "../utils/supabaseClient";
import Image from "next/image";
import icon from "../public/smiley.png";
import styles from "../styles/message.module.css";

export default function Contacts() {
  const user = useContext(UserContext);

  const [messages, setMessages] = useState({});
  const [latestMessages, setLatestMessages] = useState();

  const selectMessages = async () => {
    let { data, error } = await supabase
      .from("messaging")
      .select("*")
      .or(
        `profile_sent.eq.${user.userData[0].id},and(profile_received.eq.${user.userData[0].messaging_contacts.contact[2]})`
      );
  };

  selectMessages();

  useEffect(() => {
    setMessages(
      user.userData[0].messaging_contacts.contact.map(
        (id, index) =>
          user.messages.filter(
            (messages) =>
              messages.profile_sent ===
                `${user.userData[0].messaging_contacts.contact[index]}` ||
              messages.profile_received ===
                `${user.userData[0].messaging_contacts.contact[index]}`
          )
        //.slice(-1)[0].message
      )
    );
  }, [user.messages]);

  useEffect(() => {
    if (messages !== []) {
      setLatestMessages(
        user.userData[0].messaging_contacts.contact.map((id, index) => {
          if (messages[index] !== "") {
            console.log(":",messages[index])
          }
        })
      );
    }
  }, [messages]);

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
              <Nav.Link key={el} style={{ height: "4rem" }} eventKey={el}>
                {user.uuidName !== null ? (
                  <Container key={el}>
                    <div key={el} className="d-flex">
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
                        {new Date(
                          `${
                            user.messages[user.messages.length - 1].created_at
                          }`
                        ).toLocaleString("en", {
                          timeZoneName: "short",
                        })}
                      </div>

                      <div
                        className="d-flex align-items-end"
                        style={{
                          fontSize: "14px",
                          paddingLeft: "0.6rem",
                        }}
                      >
                        {console.log(messages)}
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
