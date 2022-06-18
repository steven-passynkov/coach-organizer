import { Modal, Button, Tab, Tabs, Row, Col, Nav } from "react-bootstrap";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "./UserContext";

export default function Settings(props) {
  const user = useContext(UserContext);
  const [tab, setTab] = useState("Account");

  return (
    <>
      <Modal
        {...props}
        size="lg"
        backdrop="static"
        dialogClassName="modal-90hw"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs
            id="controlled-tab-example"
            activeKey={tab}
            onSelect={(tab) => setTab(tab)}
          >
            <Tab eventKey="Account" title="Account">
            </Tab>
            <Tab eventKey="Player_info" title="Player info">
            </Tab>
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
