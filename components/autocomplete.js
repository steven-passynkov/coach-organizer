import React, { useEffect, useState, useMemo } from "react";
import style from "../styles/autocomplete.module.css";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

//make it so you can't add two of the same name
//only make it so you can add names that are in the database
//make it so you can delete the one you clicked over
//do the css for the students
//when you press enter and the press add it add blank
//make it so when you click on a time on the clander it auto puts the corresponding time
//make the sudent list by alphabetical order

export default function Autocomplete({ suggestions, value, onValue }) {
  const [active, setActive] = useState();
  const [filtered, setFiltered] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [input, setInput] = useState(value);
  const [mouse, setMouse] = useState(false);
  const [studentList, setStudentList] = useState([]);
  const [numberStudentList, setNumberStudentList] = useState([]);
  const [studentListIndex, setStudentListIndex] = useState();

  const onChange = (event) => {
    const newFilteredSuggestions = suggestions.filter(
      (suggestion) =>
        suggestion
          .toLowerCase()
          .indexOf(event.currentTarget.value.toLowerCase()) > -1
    );
    setActive(-1);
    setFiltered(newFilteredSuggestions);
    setIsShow(true);
    setInput(event.target.value);
    onValue(event.target.value);
  };

  const onClick = (event) => {
    setActive();
    setFiltered([]);
    setIsShow(false);
    setInput(event.currentTarget.innerText);
    onValue(event.target.value);
  };

  const onClickAdd = () => {
    setStudentList([...studentList, input]);
    setInput("");
  };

  const onKeyDown = (event) => {
    const key = event.key;
    if (key === "Enter") {
      event.preventDefault();
      setInput(filtered[active]);
      setIsShow(false);
      setActive();
    }
    if (key === "ArrowUp") {
      if (active !== 0) {
        setActive(active - 1);
      }
    }
    if (key === "ArrowDown") {
      if (active + 1 != filtered.length) {
        setActive(active + 1);
      }
    }
  };

  useEffect(() => {
    //it is not working on mobile
    if (mouse === true) {
      setActive(-1);
    }
  }, [mouse]);

  function range(end) {
    var numbers = [];
    for (let i = 0; i <= end-1; i++) {
      numbers.push(i);
    }
    return numbers;
  }

  useEffect(() => {
    setNumberStudentList(range(suggestions.length));
  }, [suggestions]);

  console.log(numberStudentList);

  useEffect(() => {
    numberStudentList.forEach(function (entry) {
      console.log(entry)
      setStudentListIndex(entry);
    });
  }, [numberStudentList]);

  console.log(studentListIndex);

  const renderAutocomplete = () => {
    if (isShow && input) {
      if (filtered.length) {
        return (
          <Card>
            <ul className={style.list}>
              {filtered.map((suggestion, index) => {
                let classNameStyle = style.listComponents;
                if (index === active) {
                  classNameStyle = `${style.listComponents} ${style.active}`;
                }
                return (
                  <li
                    key={suggestion}
                    onClick={onClick}
                    onMouseOver={() => setMouse(true)}
                    onMouseOut={() => setMouse(false)}
                    className={classNameStyle}
                  >
                    <a>{suggestion}</a>
                  </li>
                );
              })}
            </ul>
          </Card>
        );
      } else {
        return (
          <div className="no-autocomplete">
            <em>Not found</em>
          </div>
        );
      }
    }
    return <></>;
  };

  const renderStudentList = () => {
    if (studentList.length !== 0) {
      return (
        <>
          {studentList.map((el) => (
            <li
              key={el}
              onClick={() =>
                setStudentList(studentList.filter((item) => item !== el))
              }
            >
              <a>{el}</a>
            </li>
          ))}
        </>
      );
    } else {
      return <></>;
    }
  };
  return (
    <Form>
      <Form.Group>
        <Form.Control
          type="text"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={input}
        />
        {input == "" ? (
          <>
            <Button disabled>Add</Button>
          </>
        ) : (
          <>
            {suggestions[0] == input ? (
              <>
                {studentList[0] == input ? (
                  <Button disabled>Add</Button>
                ) : (
                  <Button onClick={() => onClickAdd()}>Add</Button>
                )}
              </>
            ) : (
              <Button disabled>Add</Button>
            )}
          </>
        )}
        {renderAutocomplete()}
        {renderStudentList()}
      </Form.Group>
    </Form>
  );
}
