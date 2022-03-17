import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect, useState, useContext } from "react";
import { supabase } from "../utils/supabaseClient";
import { UserContext } from "./UserContext";

export default function Create_user(props) {
  const [alert, setAlert] = useState(true);
  const [value, setValue] = useState(null);
  const user = useContext(UserContext);

  useEffect(() => {
    if (value === null) {
      return;
    }
    if (value === "") {
      setAlert(true);
    } else {
      setAlert(false);
    }
  }, [value]);

  const setName = async () => {
    let { data, error } = await supabase
      .from("profiles")
      .update({ name: `${value}` })
      .eq("id", user.session.user.id);
    user.setNameModleLoading(false)
  };

  return (
    <Modal
      {...props}
      size="lg"
      backdrop="static"
      keyboard={false}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Enter student name
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              onChange={() => setValue(event.target.value)}
              placeholder="Name"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {alert == false ? (
          <Button onClick={setName}>Submit</Button>
        ) : (
          <Button disabled>Submit</Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}
