import React, { Fragment } from "react";
import { FaRegMap, FaRegUser, FaRegAddressBook } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {
  const userName = useRef();
  const userEmail = useRef();
  const userSubject = useRef();
  const userMessage = useRef();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // console.log("username", userName.current.value);
    // console.log("userEmail", userEmail.current.value);
    // console.log("userSubject", userSubject.current.value);
    // console.log("userMessage", userMessage.current.value);
    // if (
    //   userName.current.value === "" ||
    //   userEmail.current.value === "" ||
    //   userSubject.current.value === "" ||
    //   userMessage.current.value === ""
    // ) {
    //   userSubject.current.focus();
    // }

    emailjs
      .sendForm(
        "service_e25f7ic",
        "template_km2teky",
        form.current,
        "W4Bzjfqh53bc0CY_4"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Fragment>
      <div className="text-center my-10">
        <div className="text-6xl font-jost font-semibold"> CONTACT ME</div>
        <div className="mt-4">
          <span className="text-lg font-semibold text-[#29a587]">LET'S</span>
          <span className="text-2xl font-caveat font-bold ml-4">
            Talk About Ideas
          </span>
        </div>
      </div>
      <div className="md:grid grid-cols12">
        <div className="flex flex-col space-y-10">
          <div className="flex items-center">
            <div className="w-14 h-14 bg-white flex justify-center items-center rounded-full border-2 border-black drop-shadow-lg">
              <FaRegMap size={"24px"} />
            </div>
            <div className="h-0.5 w-12 rounded bg-black" />
            <div className="ml-4 translate-y-2">
              <h1 className="font-caveat font-bold text-2xl">Address</h1>
              <h3 className="text-[#262626] opacity-70">
                North Tower, Toronto, Canada
              </h3>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-14 h-14 bg-white flex justify-center items-center rounded-full border-2 border-black drop-shadow-lg">
              <FaRegUser size={"24px"} />
            </div>
            <div className="h-0.5 w-12 rounded bg-black" />
            <div className="ml-4 translate-y-2">
              <h1 className="font-caveat font-bold text-2xl">Freelance</h1>
              <h3 className="text-[#262626] opacity-70">Available Right Now</h3>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-14 h-14 bg-white flex justify-center items-center rounded-full border-2 border-black drop-shadow-lg">
              <AiOutlineMail size={"24px"} />
            </div>
            <div className="h-0.5 w-12 rounded bg-black" />
            <div className="ml-4 translate-y-2">
              <h1 className="font-caveat font-bold text-2xl">Email</h1>
              <h3 className="text-[#262626] opacity-70">
                zoe.miller@mydomain.com
              </h3>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-14 h-14 bg-white flex justify-center items-center rounded-full border-2 border-black drop-shadow-lg">
              <FaRegAddressBook size={"24px"} />
            </div>
            <div className="h-0.5 w-12 rounded bg-black" />
            <div className="ml-4 translate-y-2">
              <h1 className="font-caveat font-bold text-2xl">Phone</h1>
              <h3 className="text-[#262626] opacity-70">+1900-900-9000</h3>
            </div>
          </div>
        </div>
        <div className="mt-10 md:mt-0 flex flex-col space-y-8">
          <form ref={form} onSubmit={sendEmail}>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold ml-6">
                  Your Full Name <span className="text-[#29a587]">*</span>
                </h3>
                <input
                  required
                  ref={userName}
                  type="text"
                  name="user_name"
                  className="px-6 w-full mt-2 py-3 rounded-full border-black border-2"
                />
              </div>
              <div>
                <h3 className="font-semibold ml-6">
                  Your Email Address <span className="text-[#29a587]">*</span>
                </h3>
                <input
                  required
                  ref={userEmail}
                  type="text"
                  name="user_email"
                  className="px-6 w-full mt-2 py-3 rounded-full border-black border-2"
                />
              </div>
            </div>
            <div>
              <h3 className="font-semibold ml-6">
                Your Subject <span className="text-[#29a587]">*</span>
              </h3>
              <input
                required
                ref={userSubject}
                type="text"
                name="subject"
                className="px-6 w-full mt-2 py-3 rounded-full border-black border-2"
              />
            </div>
            <div>
              <h3 className="font-semibold ml-6">
                Your Message <span className="text-[#29a587]">*</span>
              </h3>
              <textarea
                required
                ref={userMessage}
                type="text-area"
                name="message"
                className="px-6 w-full h-40 mt-2 py-3 rounded-3xl border-black border-2"
              />
            </div>
            <div className="flex justify-end mt-8 space-x-2">
              <p className="text-[#262626] opacity-70">
                * Accept the terms and conditions.
              </p>
              <input
                className="border-black border-2 py-2 px-4 rounded-full drop-shadow-lg bg-white"
                type="submit"
                value="Send"
              />
              {/* <button className="border-black border-2 py-2 px-4 rounded-full drop-shadow-lg bg-white">
                SEND MESSAGE
              </button> */}
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default Contact;
