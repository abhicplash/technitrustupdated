import React, { useState } from "react";
import "./Contact.css";
import Layout from "../Layout/Layout";
import PageTop from "../Layout/PageTop";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    subject: "",
    message: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSendMessage = () => {
    const { name, number, email, subject, message } = formData;

    if (!name || !number || !email || !subject || !message) {
      alert("Please fill out all fields before sending the message.");
      return;
    }

    const phoneNumber = "+971521460459"; 
    const text = `Name: ${name}%0AContact Number: ${number}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Layout>
      <div className="contactContainer">
        <PageTop title={"Contact Us"} />
        <div className="contactDetails">
          <h2>get in touch with us !</h2>
          <div className="cardList">
            <div className="contactCard">
              <IoPhonePortraitOutline className="contactIcon" />
              <span className="cardhead">phone</span>
              <span className="carddetails">Phone: +971 55 422 8284 </span>
              <span className="carddetails">Phone: +971 50 737 9659</span>
              {/* <span className="carddetails">Phone:+971-87654321</span> */}
            </div>
            <div className="contactCard">
              <IoLocationOutline className="contactIcon" />
              <span className="cardhead">Address</span>
              <span className="carddetails">International City, Dubai</span>
              <span className="carddetails">United Arab Emirates</span>
            </div>
            <div className="contactCard">
              <MdMailOutline className="contactIcon" />
              <span className="cardhead">Mail</span>
              <span className="carddetails">Mail us</span>
              <span className="carddetails">info@technitech.ae </span>
            </div>
          </div>
        </div>
        <h3 className="subHead">
          Let <span className="technitrust">Techni Trust </span>
          Technical Services <br /> handle your next project with care and
          expertise
        </h3>

        <div className="contactForm">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
          />
          <input
            type="text"
            name="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="Your Number"
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
          />
          <textarea
            name="message"
            id=""
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
          ></textarea>
          <button onClick={handleSendMessage}>send message</button>
        </div>
        <div className="contactLinks">
          <h2>Connect with us !</h2>
          <div className="iconLists">
            <div className="contactIconWrapper">
              <FaInstagram />
            </div>
            <div className="contactIconWrapper">
              <FaXTwitter />
            </div>
            <div className="contactIconWrapper">
              <FaFacebookSquare />
            </div>
            <div className="contactIconWrapper">
              <FaLinkedin />
            </div>
            <div className="contactIconWrapper">
              <FaTiktok />
            </div>
          </div>
        </div>
        <div className="mapwrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14444.656910712387!2d55.409975!3d25.163932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f614eb88deb71%3A0x1639bd9727e18e15!2sDubai%20International%20City%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1733554981153!5m2!1sen!2sin"
            title="map"
            className="Contactmap"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
