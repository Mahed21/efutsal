import React, { useState } from "react";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  },
};

const DisplayManageOpnant = (props) => {
  const { afterUpdate } = props;
  const {
    teamName,
    oponant,
    venue,
    opponantContact,
    day,
    time,
    date,
    description,
    challange,
    email,
    _id,
  } = props.data;

  const updateOponant = (id) => {
    const updateOponantInfo = {
      challange: "accepted",
    };
    fetch(`http://localhost:5000/team/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateOponantInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          alert("lets a play match");
          afterUpdate();
        }
      });
  };

  //modal
  const [modalIsOpen, setIsOpen] = useState(false);

  let subtitle;
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="mt-5 container">
      <div className="d-flex">
        <h3 className="me-2">
          {oponant} is accepted Your Challange on {day} at {time}
          {date} match at {venue}
        </h3>
        <div>
          <button className="manageDashbtn p-2 me-2" onClick={openModal}>
            Oponant Details
          </button>
        </div>
        <div>
          {challange === "accepted" ? (
            <button className="manageDashbtn p-2 me-2">Lets Play</button>
          ) : (
            <button
              className="manageDashbtn p-2 me-2"
              onClick={() => updateOponant(_id)}
            >
              Confirm match
            </button>
          )}
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h3>Team name :{oponant}</h3>
        <h3>Contact :{opponantContact}</h3>
        <div className="d-flex justify-content-end mt-3">
          <button className="cancel-btn me-3" onClick={closeModal}>
            cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default DisplayManageOpnant;
