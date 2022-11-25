import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

import DatePicker from "react-date-picker";

const Create = () => {
  const [show, setShow] = useState(false);
  const [todoContent, setTodoContent] = useState("");

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
  };

  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ToDo 생성</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <DatePicker value={startDate} onChange={setStartDate} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>TO-DO</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={todoContent}
                onChange={(e) => setTodoContent(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            취소
          </Button>
          <Button variant="primary" onClick={handleClose}>
            생성
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Create;
