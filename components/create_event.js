import { useState, useEffect, useContext, useMemo } from "react";
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
import { EventForm } from "./event-form";

export const CreateEvent = (props) => {
  const user = useContext(UserContext);
  const [value, setValue] = useState(false);
  const [dateValue, setDateValue] = useState(null);
  const [timeValueOne, setTimeValueOne] = useState(null);
  const [timeValueTwo, setTimeValueTwo] = useState(null);
  const [studentNames, setStudentNames] = useState(undefined);
  const [coach, setCoach] = useState(`${user.name}`);
  const [lessionType, setLessionType] = useState();
  const [selectedFacilitie, setSelectedFacilitie] = useState();
  const [selectedCourt, setSelectedCourt] = useState();
  const [extraInfo, setExtraInfo] = useState();
  const [student, setStudent] = useState('');

  const selectStudents = async () => {
    let { data, error } = await supabase.from("profiles").select("name");
    const names = data.map(({ name }) => name);
    setStudentNames(names);
  };

  useEffect(() => {
    selectStudents();
  }, [user]);

  useEffect(() => {
    if (coach !== user.name) {
      setCoach(`${user.name}`);
    }
  }, [props.onHide]);

  const selectFacilitieNames = useMemo(() => {
    if (!user) return [];
    return (user.facilities || []).map((facilitie) => facilitie.name);
  }, [user]);

  const selectFacilitieCourt = useMemo(() => {
    if (!user) return [];
    return (user.facilities || []).map((facilitie) => facilitie.court_number);
  }, [user]);

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

  const Destop = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 1000 });
    return isTablet ? children : null;
  };

  const Mobile = ({ children }) => {
    const isTablet = useMediaQuery({ maxWidth: 999 });
    return isTablet ? children : null;
  };
  return (
    <>
        <Modal
          {...props}
          backdrop="static"
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title>Create event</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EventForm {...props}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>
              Close
            </Button>
            <Button variant="primary">Submit</Button>
          </Modal.Footer>
        </Modal>
    </>
  );
};
