import {
  Modal,
  Button,
  Form,
  Tab,
  Row,
  Col,
  Nav,
  InputGroup,
} from "react-bootstrap";
import { useEffect, useState, useContext } from "react";
import Image from "next/image";
import icon from "../public/smiley.png";
import styles from "../styles/message.module.css";
import { supabase } from "../utils/supabaseClient";
import { UserContext } from "./UserContext";

export default function Messaging(props) {
  const user = useContext(UserContext);
  const [addMessage, setAddMessage] = useState(false);
  const [contacts, setContacts] = useState();
  const [uuidName, setUuidName] = useState();
  const [newMessageUser, setNewMessageUser] = useState();
  const [messageForm, setMessageForm] = useState("");
  const [activeTab, setActiveTab] = useState();

  const newContactButton = (event) => {
    if (addMessage == false) {
      setAddMessage(true);
    } else {
      setAddMessage(false);
    }
  };

  const selectUuidName = async () => {
    let { data, error } = await supabase.from("profiles").select("id,name");
    setUuidName(data);
  };

  const selectMessagesSent = async () => {
    let { data, error } = await supabase
      .from("messaging")
      .select("*")
      .eq("profile_sent", `${user.userData[0].id}`);
    console.log(data);
  };

  const selectMessagesRecived = async () => {
    let { data, error } = await supabase
      .from("messaging")
      .select("*")
      .eq("profile_recived", `${user.userData[0].id}`);
    console.log(data);
  };

  const sendMessage = async () => {
    let { data, error } = await supabase.from("messaging").insert(
      [
        {
          profile_sent: `${user.userData[0].id}`,
          profile_received: `${activeTab}`,
          message: `${messageForm}`,
        },
      ],
      { upsert: true }
    );
    setMessageForm("");
  };

  useEffect(() => {
    if (user.loading == false) {
      setContacts(user.userData[0].messaging_contacts.contact);
      console.log(contacts);
    }
  }, [user.userData]);

  useEffect(() => {
    setMessageForm();
    setAddMessage(false);
    setNewMessageUser();
  }, [props.show]);

  useEffect(() => {
    if (user.loading == false) {
      selectUuidName();
      selectMessagesSent();
      selectMessagesRecived();
    }
  }, [user.userData]);

  return (
    <>
      {user.userData != null ? (
        <Modal
          {...props}
          size="lg"
          backdrop="static"
          dialogClassName="modal-90hw"
          centered
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Messaging
            </Modal.Title>
            <Button onClick={(event) => newContactButton(event)}>
              New Contact
            </Button>
          </Modal.Header>
          <Modal.Body style={{ padding: "0px" }}>
            {addMessage == true ? (
              <>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>New contact</Form.Label>
                    <Form.Control
                      onChange={(event) =>
                        setNewMessageUser(event.target.value)
                      }
                      onSubmit={(event) => event.preventDefault()}
                      value={newMessageUser}
                      placeholder="User Email"
                    />
                  </Form.Group>
                </Form>

                <Button
                  style={{ marginTop: "1%" }}
                  variant="primary"
                  type="submit"
                  onClick={console.log(newMessageUser)}
                >
                  Submit
                </Button>
              </>
            ) : (
              <>
                {user.userData[0].messaging_contacts.contact[0] ? (
                  <>
                    <Tab.Container
                      onSelect={(event) => setActiveTab(event)}
                      defaultActiveKey={
                        user.userData[0].messaging_contacts.contact[0]
                      }
                    >
                      <Row>
                        <Col lg={5} sm={5}  style={{ paddingRight: "0px"}}>
                          <div style={{backgroundColor: "#f2f2f2", height:"100%"}}>
                            <InputGroup
                              style={{
                                paddingTop: "16px",
                                paddingRight: "14px",
                                paddingLeft: "14px",
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
                              {(contacts || []).map((el) => (
                                <Nav.Item key={el}>
                                  <Nav.Link
                                    style={{ height: "4rem" }}
                                    eventKey={el}
                                  >
                                    {uuidName != null ? (
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
                                          {
                                            uuidName.find(
                                              (item) => item.id === `${el}`
                                            ).name
                                          }
                                        </a>
                                        <a
                                          style={{
                                            position: "absolute",
                                            paddingLeft: "9.5rem",
                                            fontSize: "15px",
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
                        
                        <Col lg={7} sm={7} style={{ paddingLeft: "0" }}>
                          <Tab.Content>
                            {(contacts || []).map((el) => (
                              <Tab.Pane key={el} eventKey={el}>
                                <div>
                                  <Col>
                                    <div>
                                      <div className={styles.messageSent}>
                                        hellow
                                      </div>
                                    </div>
                                  </Col>
                                  <Col md={{ span: 10, offset: 10 }}>
                                    <div>
                                      <div className={styles.messageRecived}>
                                        hi
                                      </div>
                                    </div>
                                  </Col>
                                  <Col>
                                    <div>
                                      <div className={styles.messageSent}>
                                        how are you
                                      </div>
                                    </div>
                                  </Col>
                                </div>
                                <InputGroup
                                  style={{
                                    paddingTop: "100%",
                                    justifyContent: "left",
                                    paddingBottom: "16px",
                                    paddingLeft: "15px",
                                    paddingRight: "15px",
                                  }}
                                >
                                  <Button
                                    variant="light"
                                    className={styles.messageEmoji}
                                  />
                                  <Button
                                    variant="light"
                                    className={styles.messageAddFile}
                                  />
                                  <Form style={{ flex: "1" }}>
                                    <Form.Group>
                                      <Form.Control
                                        onSubmit={(event) =>
                                          event.preventDefault()
                                        }
                                        onChange={(event) =>
                                          setMessageForm(event.target.value)
                                        }
                                        value={messageForm}
                                        placeholder="Type a message"
                                      />
                                    </Form.Group>
                                  </Form>
                                  {messageForm == "" || messageForm == null ? (
                                    <Button
                                      className={styles.messageConfirm}
                                      disabled
                                    />
                                  ) : (
                                    <Button
                                      className={styles.messageConfirm}
                                      onClick={(event) => {
                                        sendMessage();
                                      }}
                                    />
                                  )}
                                </InputGroup>
                              </Tab.Pane>
                            ))}
                          </Tab.Content>
                        </Col>
                      </Row>
                    </Tab.Container>
                  </>
                ) : (
                  <div>
                    <h5>No contacts found</h5>
                    <p>Click the add contact button to add a contact</p>
                  </div>
                )}
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
}
