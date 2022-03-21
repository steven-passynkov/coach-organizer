import { Button, Form, Tab, Col, Container, InputGroup } from "react-bootstrap";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "./UserContext";
import { supabase } from "../utils/supabaseClient";
import styles from "../styles/message.module.css";

export default function Messages({activeTab,props}) {
  const user = useContext(UserContext);
  const [messageForm, setMessageForm] = useState("");

  const selectMessagesSent = async () => {
    let { data, error } = await supabase
      .from("messaging")
      .select("*")
      .eq("profile_sent", `${user.userData[0].id}`);
  };

  const selectMessagesRecived = async () => {
    let { data, error } = await supabase
      .from("messaging")
      .select("*")
      .eq("profile_recived", `${user.userData[0].id}`);
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
      selectMessagesSent();
      selectMessagesRecived();
    }
  }, [props.show]);

  return (
    <Col lg={7} sm={7} style={{ padding: "0" }}>
      <Tab.Content>
        {(user.userData[0].messaging_contacts.contact || []).map((el) => (
          <Tab.Pane key={el} eventKey={el}>
            <Container className={styles.messaging} fluid>
              <Col>
                <div className={styles.messageSent}>hellow</div>
              </Col>
              <Col md={{ span: 10, offset: 10 }}>
                <div className={styles.messageRecived}>hi</div>
              </Col>
              <Col>
                <div className={styles.messageSent}>how are you</div>
              </Col>
            </Container>
            <InputGroup
              style={{
                justifyContent: "left",
                paddingBottom: "14px",
                paddingLeft: "14px",
                paddingRight: "14px",
                paddingTop: "20px",
              }}
            >
              <Button variant="light" className={styles.messageEmoji} />
              <Button variant="light" className={styles.messageAddFile} />
              <Form style={{ flex: "1" }}>
                <Form.Group>
                  <Form.Control
                    onSubmit={(event) => event.preventDefault()}
                    onChange={(event) => setMessageForm(event.target.value)}
                    value={messageForm}
                    placeholder="Type a message"
                  />
                </Form.Group>
              </Form>
              {messageForm == "" || messageForm == null ? (
                <Button className={styles.messageConfirm} disabled />
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
  );
}
