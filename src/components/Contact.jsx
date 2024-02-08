import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import IconEmail from "../icons/iconEmail";
import Point from '../assets/point.png'

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");
  const [userNameErrorMsg, setUserNameErrorMsg] = useState("");
  const [userEmailErrorMsg, setUserEmailErrorMsg] = useState("");
  const [userMessageErrorMsg, setUserMessageErrorMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    const { user_name, user_email, message } = e.target.elements;

    if (!user_name.value.trim()) {
      setUserNameErrorMsg("*Required");
      return;
    } else if (!user_email.value.trim()) {
      setUserEmailErrorMsg("*Required");
      return;
    } else if (!message.value.trim()) {
      setUserMessageErrorMsg("*Required");
      return;
    }

    emailjs
      .sendForm(
        "service_sfe4lok",
        "template_2k64qci",
        form.current,
        "dXv-sln1zBsnGA9Bl"
      )
      .then(
        (result) => {
          setMessage("Message sent!");
          form.current.reset();
        },
        (error) => {
          setMessage("Failed to send email. Please try again.");
        }
      );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Remove error message when input field is not empty
    if (name === "user_name") {
      setUserNameErrorMsg(value.trim() ? "" : "* Required");
    } else if (name === "user_email") {
      setUserEmailErrorMsg(value.trim() ? "" : "* Required");
    } else if (name === "message") {
      setUserMessageErrorMsg(value.trim() ? "" : "* Required");
    }
  };

  return (
    <section id="contact" className="page-width pb-[5rem]">
      <div className="contact-container">
        <div className="mb-[3rem]">
          <h3 className="section-heading flex gap-[1rem] items-center">CONTACT <IconEmail/></h3>
          <h4 className="section-subheading flex gap-[1rem] items-center">
            Hit me up, I'll get back to you soon... 
            {/* <img src={Point} alt="point icon" className="transform rotate-90 w-[25px] h-[25px]"/> */}
          </h4>
          
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <div className="contact-form-container ">
            <div className="flex flex-col gap-[2rem] w-[50%]">
              <div className="flex flex-col relative">
                {/* <label>Name</label> */}
                <input
                  onChange={handleInputChange}
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  className="contact-input"
                />
                <span className="contact-error ">{userNameErrorMsg}</span>
              </div>
              <div className="flex flex-col relative">
                {/* <label>Email</label> */}
                <input
                  onChange={handleInputChange}
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  className="contact-input"
                />
                <span className="contact-error">{userEmailErrorMsg}</span>
              </div>
            </div>

            <div className="flex flex-col w-[50%] relative">
              {/* <label>Message</label> */}
              <textarea
                onChange={handleInputChange}
                name="message"
                className="contact-textarea "
                placeholder="Message..."
              />
              <span className="contact-error">{userMessageErrorMsg}</span>
            </div>
          </div>

          <div className="flex gap-[2rem] items-center">
            <button type="submit" value="Send" className="btn-primary">
              Send it
            </button>
            {message && <p className="text-green-500 font-bold">{message}</p>}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
