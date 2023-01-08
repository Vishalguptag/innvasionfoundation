import React from "react";
import { useState } from "react";
import Payment from "./Payment";
import { Button } from "../../styles/Button";

const DetailForm = () => {
  // states
  const [frmData, setFrmData] = useState({
    name: "",
    email: "",
    amount: 500,
  });
  const [isPaymentForm, setIsPaymentForm] = useState(false);
  const [isDetailForm, setIsDetailForm] = useState(true);

  /**
   * Method to handle Submit
   * @param {*} e
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsDetailForm(false);
    setIsPaymentForm(true);
  };

  /**
   * Method to set the inputs
   * @param {object} event
   */
  const handleInputs = (event) => {
    setFrmData({
      ...frmData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      {isDetailForm && (
        <div className="container">
          <div className="contact-form">
            <form
              className="contact-inputs"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Name"
                name="name"
                required
                onChange={handleInputs}
                value={frmData.name}
                className="form-control  py-2"
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                required
                onChange={handleInputs}
                value={frmData.email}
                className="form-control  py-2"
              />
              <input
                type="number"
                required
                name="amount"
                onChange={handleInputs}
                value={frmData.amount}
                className="form-control  py-2"
              />
              <Button type="submit" className="btn hireme-btn">
                Next
              </Button>
            </form>
          </div>
        </div>
      )}
      {isPaymentForm && (
        <Payment frmData={frmData} isPaymentForm={isPaymentForm} />
      )}
    </>
  );
};

export default DetailForm;
