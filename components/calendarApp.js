import Button from "react-bootstrap/Button";
import CreateUser from "./create_user";
import Calendar from "./calendar";
import Navbar from "./Navbar";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "./UserContext";

export default function CalendarPage() {
  const [modalShow, setModalShow] = useState(false);
  const user = useContext(UserContext);

  useEffect(() => {
    if (user.session !== null && user.sessionLoading == false) {
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
    <div style={{marginBottom:"1%"}}>
      <Navbar/>
    </div>
      <Calendar />
      <CreateUser show={modalShow} />
    </>
  );
}
