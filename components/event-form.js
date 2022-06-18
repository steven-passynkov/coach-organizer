import { useState, useEffect, useContext,useMemo } from "react";
import { UserContext } from "./UserContext";
import { supabase } from "../utils/supabaseClient";
import { useMediaQuery } from "react-responsive";
import Autocomplete from "./autocomplete";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as yup from "yup";

export const EventForm = (props) => {
  const user = useContext(UserContext);
  const [value, setValue] = useState(false);
  const [dateValue, setDateValue] = useState(null);
  const [timeValueOne, setTimeValueOne] = useState(null);
  const [timeValueTwo, setTimeValueTwo] = useState(null);
  const [studentNames, setStudentNames] = useState("");
  const [coach, setCoach] = useState(`${user.name}`);
  const [lessionType, setLessionType] = useState();
  const [selectedFacilitie, setSelectedFacilitie] = useState();
  const [selectedCourt, setSelectedCourt] = useState();
  const [extraInfo, setExtraInfo] = useState();
  const [student, setStudent] = useState("");
  const [facility, setFacility] = useState();

  useEffect(() => {
    const names = user.studentNames.map(({ name }) => name);
    setStudentNames(names);
  }, [user.studentNames]);

  useEffect(() => {
    if (coach !== user.name) {
      setCoach(`${user.name}`);
    }
  }, [props.onHide]);

  useEffect(() => {
    if (!user.facilities) {
      return;
    }
    const facility = user.facilities.find(
      (item) => item.id === selectedFacilitie
    );
    setFacility(facility);
  }, [selectedFacilitie]);

  function range(end) {
    var numbers = [];
    for (let i = 1; i <= end; i++) {
      numbers.push(i);
    }
    return numbers;
  }

  useEffect(() => {
    if (dateValue === null || timeValueOne === null || timeValueTwo === null) {
      return;
    }
    if (dateValue !== "" && timeValueOne !== "" && timeValueTwo !== "") {
      //see if formated right
      console.log("filled");
    } else {
      return;
    }
  }, [value, dateValue, timeValueOne, timeValueTwo]);

  return (
    <Form>
      <Container>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter a date"
                onChange={(event) => setDateValue(event.target.value)}
                value={dateValue}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Time</Form.Label>
              <Row>
                <Col>
                  <Form.Control
                    type="time"
                    placeholder="Enter a time"
                    onChange={(event) => setTimeValueOne(event.target.value)}
                    value={timeValueOne}
                  />
                </Col>
                <Form.Label>_</Form.Label>
                <Col>
                  <Form.Control
                    type="time"
                    placeholder="Enter a time"
                    onChange={(event) => setTimeValueTwo(event.target.value)}
                    value={timeValueTwo}
                  />
                </Col>
              </Row>
            </Form.Group>
          </Col>
        </Row>
      </Container>
      <Container style={{ marginTop: "1rem" }}>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Lession Type</Form.Label>
              <Form.Control
                as="select"
                onChange={(event) => setLessionType(event.target.value)}
                value={lessionType}
              >
                <option>Lession</option>
                <option>Private</option>
                <option>Semi-Private</option>
                <option>Group</option>
                <option>Assessment</option>
                <option>Fitness</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Select a coach</Form.Label>
              <Form.Control
                defaultValue={coach}
                onChange={(event) => setCoach(event.target.value)}
                value={coach}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Select a student</Form.Label>{" "}
              {/* make it so you can add multiplue students */}
              {studentNames == undefined ? (
                <Autocomplete />
              ) : (
                <Autocomplete
                  suggestions={studentNames}
                  value={student}
                  onValue={setStudent}
                />
              )}
            </Form.Group>
          </Col>
        </Row>
      </Container>
      <Container style={{ marginTop: "1rem" }}>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Location</Form.Label>
              <Form.Control
                value={selectedFacilitie}
                as="select"
                onChange={(event) => {
                  setSelectedFacilitie(event.target.value);
                  setSelectedCourt("Court");
                }}
              >
                <option>Select</option>
                {(user.facilities || []).map((el) => (
                  <option key={el.id} value={el.id}>
                    {el.name}
                  </option>
                ))}
              </Form.Control>
              <Form.Text>To add location go to settings</Form.Text>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Court</Form.Label>
              <Form.Control
                as="select"
                onChange={(event) => setSelectedCourt(event.target.value)}
                value={selectedCourt}
              >
                {facility == null ? (
                  <option key="court">Court</option>
                ) : (
                  <>
                    <option>Court</option>
                    {(range(facility.court_number) || []).map((el) => (
                      <option key={el}>{el}</option>
                    ))}
                  </>
                )}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
      </Container>
      <Container style={{ marginTop: "1rem" }}>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Extra info</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(event) => setExtraInfo(event.target.value)}
                value={extraInfo}
              />
            </Form.Group>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};
