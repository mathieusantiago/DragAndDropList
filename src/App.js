import React, { FC, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [state, setState] = useState([
    {
      id: 1,
      name: "shrek1",
      data: [
        {
          test: "test",
        },
        {
          test: "test",
        },
        {
          test: "test",
        },
        {
          test: "test",
        },
        {
          test: "test",
        },
      ],
    },
    {
      id: 2,
      name: "shrek2",
      data: [
        {
          test: "test",
        },
        {
          test: "test",
        },
        {
          test: "test",
        },
        {
          test: "test",
        },
        {
          test: "test",
        },
      ],
    },
    {
      id: 3,
      name: "shrek3",
      data: [
        {
          test: "test",
        },
        {
          test: "test",
        },
        {
          test: "test",
        },
        {
          test: "test",
        },
        {
          test: "test",
        },
      ],
    },
  ]);
  console.log(state)
  return (
    <ReactSortable list={state} setList={setState}>
      {state.map((item) => (
        <div key={item.id}>
          <Accordion >
            <Accordion.Item eventKey={item.id}>
              <Accordion.Header>{item.name}</Accordion.Header>
              <Accordion.Body>
                {item.data.map((item) => {
                  return <Accordion.Body>{ item.test }</Accordion.Body>;
                })}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      ))}
    </ReactSortable>
  );
}

export default App;
