import { Button, Form, Tab, Col, Container, InputGroup } from "react-bootstrap";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "./UserContext";
import { supabase } from "../utils/supabaseClient";
import styles from "../styles/message.module.css";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

export default function Messages({ activeTab, props }) {
  const user = useContext(UserContext);
  const [messageForm, setMessageForm] = useState("");
  const [emojiState, setEmojiState] = useState(false);
  const [emojiSelected, setEmojiSelected] = useState();
  const [messages, setMessages] = useState([]);

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
    if (user.userData !== null && user.messages !== null) {
      function checkMessageProfile(id) {
        return (
          (id.profile_sent == `${user.userData[0].id}` &&
            id.profile_received === `${activeTab}`) ||
          (id.profile_sent == `${activeTab}` &&
            id.profile_received === `${user.userData[0].id}`)
        );
      }
      const filteredMessages = user.messages.filter(checkMessageProfile);
      setMessages(filteredMessages);

      //console.log("profile: ", filteredMessages);
      //console.log(emojiSelected);
    }
  }, [user.messages, activeTab]);

  useEffect(() => {
    if (emojiSelected !== null) {
      setMessageForm(
        messageForm + String.fromCodePoint(`0x${emojiSelected.unified}`)
      );
      //console.log(emojiSelected);
    }
  }, [emojiSelected]);

  /*
  window.scrollTo(0,document.body.scrollHeight);
  var element = document.getElementById("container");
  element.scrollTop = element.scrollHeight;
*/

  return (
    <Col lg={7} sm={7} style={{ padding: "0px" }}>
      <Tab.Content>
        {(user.userData[0].messaging_contacts.contact || []).map((id) => (
          <Tab.Pane key={id} eventKey={id}>
            <Container key={id} className={styles.messaging} fluid>
              {messages.map((message) => (
                <>
                  {message.profile_received !== activeTab && (
                    <Col
                      key={message.message}
                      className="d-flex justify-content-end"
                    >
                      <div className={styles.messageSent}>
                        {message.message}
                      </div>
                    </Col>
                  )}
                  {message.profile_received === activeTab && (
                    <Col
                      key={message.message}
                      className="d-flex justify-content-start"
                    >
                      <div className={styles.messageRecived}>
                        {message.message}
                      </div>
                    </Col>
                  )}
                </>
              ))}
            </Container>
          </Tab.Pane>
        ))}
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
                onClick={(emoji) => setEmojiSelected(emoji)}
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
      </Tab.Content>
    </Col>
  );
}
