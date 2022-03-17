import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import styles from "../styles/login.module.css";
import { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";

export default function login() {
  const [authState, setAuthState] = useState(false);
  const [invalidAuthState, setInvalidAuthState] = useState(false);
  const [value, setValue] = useState(null);

  async function signInWithEmail(evt) {
    evt.preventDefault();
    let { data, error } = await supabase
      .from("profiles")
      .select("email")
      .eq("email", value);
    if (data[0] == undefined) {
      setInvalidAuthState(true);
    } else if (data[0].email == value) {
      await supabase.auth.signIn({
        email: `${value}`,
      });
      setAuthState(true);
    }
  }
  return (
    <>
      {authState == false ? (
        <>
          <Modal
            show={invalidAuthState}
            onHide={() => setInvalidAuthState(false)}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header>
              <Modal.Title>Email is invalid</Modal.Title>
            </Modal.Header>
            <Modal.Body>Try submitting a valid email address</Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setInvalidAuthState(false)}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          <Container style={{ marginTop: "2.5%" }}>
            <h1 className={styles.title}>Coach organizer</h1>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="email"
                  onChange={() => setValue(event.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit" onClick={signInWithEmail}>
                Send
              </Button>
            </Form>
          </Container>
        </>
      ) : (
        <>
          <Container style={{ marginTop: "2.5%" }}>
            <h1 className={styles.title}>
              Send magic link, look at your email
            </h1>
          </Container>
        </>
      )}
    </>
  );
}
