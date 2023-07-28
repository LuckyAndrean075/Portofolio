import React from "react";
import { contactDetails } from "../Details";

function Contact() {
  const { email, phone } = contactDetails;
  return (
    <main className="container mx-auto max-width section">
      <div className="bg-teal-100 mb-8">
        <h1
          className="text-center text-3xl md:text-4xl lg:text-5xl  font-semibold md:font-bold"
          style={{ color: "#333333" }}
        >
          Let's Connect
        </h1>
        <h3
          className="text-center text-base lg:text-lg font-semibold md:font-bold pt-5 md:pt-10 "
          style={{ color: "#333333" }}
        >
          Email
        </h3>
        <h3
          className="text-center text-base lg:text-lg font-semibold md:font-bold"
          style={{ color: "rgb(45, 191, 212)" }}
          href={`mailto:${email}`}
        >
          {email}
        </h3>

        <h3
          className="text-center text-base lg:text-lg text-white font-semibold md:font-bold pt-4 md:pt-10"
          style={{ color: "#333333" }}
        >
          Phone
        </h3>
        <h3
          className="text-center text-base lg:text-lg text-teal-400 font-semibold md:font-bold  md:pb-6"
          style={{ color: "rgb(45, 191, 212)" }}
        >
          <a href={`tel:${phone}`}>{phone}</a>
        </h3>
      </div>
    </main>
  );
}

export default Contact;
