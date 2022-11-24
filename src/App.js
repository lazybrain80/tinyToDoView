import React, { useState } from "react";
import { Card, Collapse, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import moment from "moment";

import "./App.css";
import { CreateToDo } from "./todoModals";

function App() {
  const [date, setDate] = useState(new Date());
  const [dateExpand, setCollapse] = useState(false);
  const [todoList, setTodoList] = useState([
    "오늘 할일 1번",
    "오늘 할일 2번",
    "오늘 할일 3번",
  ]);

  const hSelectDate = (value) => {
    setDate(value);
    setCollapse(true);
  };

  return (
    <div className="App">
      <Card>
        <Card.Header>
          <h1>Daily TO-DO List</h1>
        </Card.Header>
        <Card.Body>
          <div className="d-grid gap-2">
            <CreateToDo />
            <div className="Content">
              <Calendar
                className={["c1", "c2"]}
                onChange={hSelectDate}
                value={date}
                formatDay={(locale, date) => moment(date).format("DD")}
              />
            </div>
          </div>
        </Card.Body>
        <Card.Footer>
          <Collapse in={dateExpand}>
            <ListGroup as="ol" numbered>
              {todoList.map((todo, index) => {
                return (
                  <ListGroup.Item
                    key={index}
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div>{todo}</div>
                    </div>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Collapse>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default App;
