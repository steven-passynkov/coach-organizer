import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useState, useEffect, useContext } from "react";
import Login from "../components/login";
import Calendar from "../components/calendarApp";
import { supabase } from "../utils/supabaseClient";
import { UserContext } from "../components/UserContext";

export default function HomePage() {
  const [modalShow, setModalShow] = useState(false);
  const user = useContext(UserContext);

  useEffect(() => {
    if (user.session != null && user.sessionLoading == false) {
      if (user.name == null) {
        setModalShow(true);
      }
      if (user.nameModleLoading == false) {
        setModalShow(false);
      }
    }
  }, [user.name, user.nameModleLoading]);

  return (
    <>
      {user.sessionLoading == false ? (
        <>
          {user.session != null ? (
            <Calendar/>
          ) : (
            <Login />
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
}
