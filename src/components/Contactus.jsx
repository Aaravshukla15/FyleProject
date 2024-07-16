import { useState } from "react";
import "./Contactus.css";
import PropTypes from "prop-types";

const ContactUsPopup = ({ isOpen, onClose }) => {
  const initialFormData = {
    email: "",
    firstName: "",
    lastName: "",
    agree: false,
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("You must agree to the terms and conditions to submit the form.");
      return;
    }

    try {
      const response = await fetch("https://getform.io/f/avreyjza", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData(initialFormData);
        onClose();
      } else {
        alert("Failed to submit the form.");
      }
    } catch (error) {
      alert("An error occurred while submitting the form.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="overlay" onClick={onClose}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <h2 className="contact-head">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <label>
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              required
            />
            I agree to Fyle terms and conditions, and provide consent to send me
            communication.
          </label>
          <button className="btnc" type="submit" disabled={!formData.agree}>
            Contact Us
          </button>
        </form>
      </div>
    </div>
  );
};

ContactUsPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ContactUsPopup;
