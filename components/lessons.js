import { Modal, Button} from "react-bootstrap";
import Open_lessons from "./open_lessons";
import styles from "../styles/lessons.module.css";

export default function Lessons(props) {

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
          <Modal.Title id="contained-modal-title-vcenter">Lessons</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.lessons}>
            <Open_lessons/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
