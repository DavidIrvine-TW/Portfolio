import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import IconEmail from "../icons/iconEmail";
import Point from "../assets/point.png";
import IconLocation from "../icons/IconLocation";
import IconEmailAlt from "../icons/IconEmailAlt";

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
      setUserNameErrorMsg("* Required");
    } else {
      setUserNameErrorMsg("");
    }

    if (!user_email.value.trim()) {
      setUserEmailErrorMsg("* Required");
    } else if (!/\S+@\S+\.\S+/.test(user_email.value)) {
      setUserEmailErrorMsg("* Invalid email address");
    } else {
      setUserEmailErrorMsg("");
    }

    if (!message.value.trim()) {
      setUserMessageErrorMsg("* Required");
      hasError = true;
    } else {
      setUserMessageErrorMsg("");
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

  const copyEmailToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Email address copied to clipboard: ", text);
      })
      .catch((error) => {
        console.error("Failed to copy email:", error);
      });
  };

  return (
    <section id="contact" className="page-width pb-[7rem] px-[1.75rem] ">

      <div className="contact-container">

        <div className="flex flex-col tb900:flex-row tb900:gap-[3rem] items-center">

          <div className="flex flex-col items-center tb900:items-start gap-[1rem] mb-[3rem] tb900:w-[50%]">
            <h3 className="section-heading flex items-center gap-[1rem]  ">
              CONTACT
              <img
                src={Point}
                alt="point icon"
                className="transform rotate-90 w-[25px] h-[25px]"
              />
            </h3>
            <h4 className="section-subheading flex gap-[1rem] items-center justify-center tb900:text-left text-center">
              Hit me up, I'll get back to you soon...
            </h4>
          </div>

          <div className="flex flex-col gap-[1rem] mb-[3rem] tb900:flex-start tb900:w-[50%] tb900:gap-[2rem]" >

            {/* <div className="flex flex-col items-center justify-center gap-[1rem] tb900:flex-row tb900:justify-start ">
              <IconLocation />
              <div className="flex flex-col items-center justify-center gap-[rem]  tb900:items-start">
                <span className="font-Rubik font-bold text-header-txt text-[1.1rem]">
                  Location
                </span>
                <span className="font-Mulish text-gray-500 text-[.9rem]  dk:text-[1rem]">
                  Glasgow, Scotland
                </span>
              </div>
            </div> */}

            <div className="flex flex-col  items-center justify-center gap-[1rem] tb900:flex-row  tb900:justify-start">
              <IconEmailAlt />
              <div className="flex flex-col items-center justify-center gap-[rem] tb900:items-start ">
                <span className="font-Rubik font-bold text-header-txt text-[1.1rem]">
                  Mail
                </span>
                <span
                  onClick={() =>
                    copyEmailToClipboard("david.irvineakamarv@gmail.com")
                  }
                  className="font-Mulish text-gray-500 text-[.9rem] hover:text-babyblue cursor-pointer  dk:text-[1rem]"
                >
                  david.irvineakamarv@gmail.com
                </span>
              </div>
            </div>

          </div>

        </div>

        <form ref={form} onSubmit={sendEmail}>

          <div className="contact-form-container ">

            <div className="flex flex-col gap-[2rem] tb900:gap-[3rem] tb900:w-[50%]">
              <div className="flex flex-col relative ">
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

            <div className="flex flex-col relative min-h-[200px] tb900:w-[50%]">
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
