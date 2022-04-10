import {
  Modal,
  Button,
  Form,
  Tab,
  Row,
  Col,
  Container,
  Nav,
  InputGroup,
} from "react-bootstrap";
import { useEffect, useState, useContext } from "react";
import Image from "next/image";
import icon from "../public/smiley.png";
import styles from "../styles/message.module.css";
import { supabase } from "../utils/supabaseClient";
import { UserContext } from "./UserContext";
import Contacts from "./contacts.js";
import Messages from "./messages.js";

export default function Messaging(props) {
  const user = useContext(UserContext);
  const [activeTab, setActiveTab] = useState();

  useEffect(() => {
    if (user.loading == false) {
      setActiveTab(user.userData[0].messaging_contacts.contact[0]);
    }
  }, [props.show]);

  return (
    <>
      {user.userData != null ? (
        <Modal
          {...props}
          size="lg"
          backdrop="static"
          dialogClassName="modal-90hw"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Messaging
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ padding: "0px" }}>
            <>
              {user.userData[0].messaging_contacts.contact[0] ? (
                <>
                  <Tab.Container
                    onSelect={(event) => setActiveTab(event)}
                    defaultActiveKey={
                      user.userData[0].messaging_contacts.contact[0]
                    }
                  >
                    <Row style={{ marginRight: "0px", marginLeft: "0px" }}>
                      <Contacts />
                      <Messages activeTab={activeTab} props={props} />
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
