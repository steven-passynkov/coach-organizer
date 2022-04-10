import { Button, Form, Tab, Col, Container, InputGroup } from "react-bootstrap";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "./UserContext";
import { supabase } from "../utils/supabaseClient";
import styles from "../styles/message.module.css";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

export default function Messages({ activeTab, props }) {
  const user = useContext(UserContext);
  const [messageForm, setMessageForm] = useState("");
  const [emojiState, setEmojiState] = useState(false);
  const [messagesSent, setMessageSent] = useState([]);
  const [messagesRecived, setMessagesRecived] = useState([]);
  const [messages, setMessages] = useState([]);
  const [numberOfMessages, setNumberOfMessages] = useState([]);

  const selectMessagesSent = async () => {
    let { data, error } = await supabase
      .from("messaging")
      .select("*")
      .eq("profile_sent", `${user.userData[0].id}`);
    setMessageSent([data]);
    console.log("MessagesSent: ", data[0].message);
    console.log("CreatedAt: ", data[0].created_at);
  };

  const selectMessagesRecived = async () => {
    let { data, error } = await supabase
      .from("messaging")
      .select("*")
      .eq("profile_received", `${user.userData[0].id}`);
    setMessagesRecived([data]);
    console.log("MessagesRecived: ", data[0].message);
    console.log("CreatedAt: ", data[0].created_at);
  };

  const selectMessages = async () => {
    let { data, error } = await supabase
      .from("messaging")
      .select("*")
      .or(
        `profile_sent.eq.${user.userData[0].id},profile_received.eq.${user.userData[0].id}`
      );
    setMessages([data]);
    setNumberOfMessages(range(data.length));
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

  function range(end) {
    var numbers = [];
    for (let i = 0; i <= end - 1; i++) {
      numbers.push(i);
    }
    return numbers;
  }

  useEffect(() => {
    if (user.loading == false) {
      selectMessagesSent();
      selectMessagesRecived();
      selectMessages();
    }
  }, [props.show]);

  return (
    <Col lg={7} sm={7} style={{ padding: "0px" }}>
      <Tab.Content>
        {(user.userData[0].messaging_contacts.contact || []).map((el) => (
          <Tab.Pane key={el} eventKey={el}>
            <Container className={styles.messaging} fluid>
              {numberOfMessages.map((numMessage) => (
                <>
                  {messages.map((message) => (
                    <>
                      {messages[0][numMessage].profile_sent ==
                      user.userData[0].id ? (
                        <Col className="d-flex justify-content-start">
                          <div className={styles.messageSent}>
                            {message[numMessage].message}
                          </div>
                        </Col>
                      ) : (
                        <Col className="d-flex justify-content-end">
                          <div className={styles.messageRecived}>
                            {message[numMessage].message}
                          </div>
                        </Col>
                      )}
                    </>
                  ))}
                </>
              ))}
            </Container>
            <InputGroup
              style={{
                paddingBottom: "15px",
                paddingLeft: "15px",
                paddingRight: "15px",
                paddingTop: "20px",
              }}
            >
              {emojiState == true ? (
                <>
                  <Picker
                    emoji="point_up"
                    title="Pick your emoji…"
                    className="d-flex justify-content-center"
                    style={{
                      position: "absolute",
                      bottom: "4rem",
                    }}
                  />
                  <Button
                    variant="primary"
                    className={styles.messageEmoji}
                    onClick={(event) => setEmojiState(false)}
                  />
                </>
              ) : (
                <Button
                  variant="light"
                  className={styles.messageEmoji}
                  onClick={(event) => setEmojiState(true)}
                />
              )}
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
