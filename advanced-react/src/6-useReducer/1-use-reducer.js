import React, { useState } from "react";

import Modal from "./modal";
import { data } from "../data";

const UseReducer = () => {
  //useReducer - useState Setup
  const [name, setName] = useState("");
  const [people, setPeople] = useState(data);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name) {
      setShowModal(false);
      setPeople([...people, { id: new Date().getTime().toString(), name }]);
      console.log(name);
      setName("");
    } else {
      setShowModal(true);
      console.log(name);
    }
  };

  return (
    <>
      {showModal && <Modal />}
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
      {people.map((person) => {
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
