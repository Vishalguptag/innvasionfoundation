// packages
import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { Button } from "./styles/Button";

const Contact = () => {

  const [frmData, setFrmData] = useState({
    name: "",
    email: "",
    message: "",
    surname: "",
    phone: "",
  });

  /**
   * Method to handle form Submit
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await axios.post(
        "http://localhost:5252/contactus",
        JSON.stringify(frmData),
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      swal({
        title: "Success",
        text: data.message,
        icon: "success",
        button: "close",
      });
      setFrmData({
        name: "",
        email: "",
        message: "",
        surname: "",
        phone: ""
      });
    } catch (error) {
      console.log("error");
      swal({
        title: "Error",
        text: error.error,
        icon: "error",
        button: "close",
      });
    }
  };

  /**
   * Method to handle inputs change
   * @param {*} e
   */
  const handleChange = (e) => {
    setFrmData({ ...frmData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h2 className="common-heading">Feel Free to Contact us</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15126.28620995241!2d73.92422475000001!3d18.59334505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c14df5c70e0d%3A0x2d19689e09e2fced!2sPhoenix%20Mall%20Washrooms!5e0!3m2!1sen!2sin!4v1658905192255!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container" style={{marginTop: "40px"}}>
        <div className="contact-form">
          <form className="contact-inputs" onSubmit={handleSubmit}>
            <input
              id="name"
              type="text"
              name="name"
              className="form-control  py-2"
              value={frmData.name}
              placeholder="First Name *"
              required="required"
              data-error="First Name is required."
              onChange={handleChange}
            />

            <input
              id="surname"
              type="text"
              name="surname"
              className="form-control  py-2"
              value={frmData.surname}
              placeholder="Last Name *"
              required="required"
              data-error="Last Name is required."
              onChange={handleChange}
            />

            <input
              id="email"
              type="email"
              name="email"
              className="form-control  py-2"
              placeholder="Email *"
              required="required"
              value={frmData.email}
              data-error="Email is required."
              onChange={handleChange}
            />

            <input
              id="phone"
              type="number"
              name="phone"
              className="form-control  py-2"
              value={frmData.phone}
              placeholder="Phone Number *"
              required="required"
              data-error="Phone Number is required."
              onChange={handleChange}
            />

            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              placeholder="Message"
              required
              onChange={handleChange}
              value={frmData.message}
            ></textarea>

            <Button className="btn hireme-btn" type="submit">
              Send Us
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
