import React, { useState, useReducer } from "react";

import Modal from "./modal";
import { data } from "../data";

// reducer function
const reducer = (state, action) => {};

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};

const UseReducer = () => {
  const [name, setName] = useState("");

  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name) {
    } else {
    }
  };

  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button className="btn" type="submit">
          Add
        </button>
      </form>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div className="item" key={id}>
            <ul>
              <li>
                <h4>{name}</h4>
              </li>
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default UseReducer;
