import { Card, Button, Row, Col } from "react-bootstrap";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "./UserContext";
import Moment from "react-moment";
import "moment-timezone";

export default function Open_lessons() {
  const user = useContext(UserContext);
  const [lessons, setLessons] = useState(null);
  const [confirmLesson, setConfirmLesson] = useState(null);
  const [facilities, setFacilities] = useState(null);

  useEffect(() => {
    if (user.lessons !== null && user.facilities !== null) {
      const openFacilities = user.facilities.filter((facilitie) => {
        return user.events.some((event) => event.location === facilitie.id);
      });
      setFacilities(openFacilities);
    }
  }, [user]);

  useEffect(() => {
    if (user.lessons !== null && user.events !== null && facilities !== null) {
      const openLessons = user.events.filter((event) => {
        return user.lessons.some((lesson) => lesson.event === event.id);
      });
      const lessons = openLessons.map((lesson) => {
        const facility = facilities.find((fac) => fac.id === lesson.location);
        return { ...lesson, facility };
      });
      setLessons(lessons);
    }
  }, [user, facilities]);

  if (!lessons || !facilities || !user.uuidName) {
    return <p>loading...</p>;
  }

  return (
    <>
      {lessons.length > 0 ? (
        <>
          {confirmLesson === null ? (
            <>
              {lessons.map((lesson) => (
                <Row
                  key={lesson.id}
                  style={{
                    padding: "0px",
                    paddingTop: "15px",
                    paddingBottom: "15px",
                  }}
                >
                  <Col>
                    <Card>
                      <Card.Header>
                        {
                          user.uuidName.find(
                            (item) =>
                              item.id === `${lesson.coach_id.coaches[0]}`
                          ).name
                        }
                      </Card.Header>
                      <Card.Body>
                        <Card.Title>{lesson.event_type}</Card.Title>
                        <Card.Text>Location: {lesson.facility.name}</Card.Text>
                        <Card.Text>
                          Date:{" "}
                          <Moment format="D MMM YYYY" local>
                            {lesson.start_time}
                          </Moment>
                        </Card.Text>
                        <Card.Text>
                          Time:{" "}
                          <Moment format="hh:mm" local>
                            {lesson.start_time}
                          </Moment>{" "}
                          -{" "}
                          <Moment format="hh:mm" local>
                            {lesson.end_time}
                          </Moment>
                        </Card.Text>
                        <Button
                          onClick={() => setConfirmLesson(lesson)}
                          variant="primary"
                        >
                          Sign up
                        </Button>
                      </Card.Body>
                      <Card.Footer className="text-muted">
                        Time remaining:{" "}
                        <Moment durationFromNow local>
                          {
                            user.lessons.find(
                              (lessons) => lessons.event === lesson.id
                            ).expiry_date
                          }
                        </Moment>
                      </Card.Footer>
                    </Card>
                  </Col>
                </Row>
              ))}
            </>
          ) : (
            <>
              <Row style={{ padding: "0px", paddingTop: "15px" }}>
                <Col>
                  <Card>
                    <Card.Header>
                      {
                        user.uuidName.find(
                          (item) =>
                            item.id === `${confirmLesson.coach_id.coaches[0]}`
                        ).name
                      }
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>{confirmLesson.event_type}</Card.Title>
                      <Card.Text>
                        Location: {confirmLesson.facility.name}
                      </Card.Text>
                      <Card.Text>
                        Date:{" "}
                        <Moment format="D MMM YYYY" local>
                          {confirmLesson.start_time}
                        </Moment>
                      </Card.Text>
                      <Card.Text>
                        Time:{" "}
                        <Moment format="hh:mm" local>
                          {confirmLesson.start_time}
                        </Moment>{" "}
                        -{" "}
                        <Moment format="hh:mm" local>
                          {confirmLesson.end_time}
                        </Moment>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      Time remaining:{" "}
                      <Moment durationFromNow local>
                        {
                          user.lessons.find(
                            (lessons) => lessons.event === confirmLesson.id
                          ).expiry_date
                        }
                      </Moment>
                    </Card.Footer>
                  </Card>
                </Col>
              </Row>
              <Row
                className="justify-content-center"
                style={{ paddingTop: "3rem"}}
              >
                <Col md="auto" sm="auto" style={{ paddingRight: "5px" }}>
                  <Button
                    onClick={() => setConfirmLesson(null)}
                    variant="primary"
                  >
                    Cancel
                  </Button>
                </Col>
                <Col md="auto" sm="auto" style={{ paddingLeft: "5px" }}>
                  <Button
                    onClick={() => setConfirmLesson(null)}
                    variant="primary"
                  >
                    Confirm
                  </Button>
                </Col>
              </Row>
            </>
          )}
        </>
      ) : (
        <p>There are no open lessons!</p>
      )}
    </>
  );
}
