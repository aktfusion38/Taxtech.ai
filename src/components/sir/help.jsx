import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function Footer() {
  const [email, setEmail] = useState({ email: '' });

  // Handle input changes
  function handleChange(e) {
    setEmail({ [e.target.name]: e.target.value });
  }

  // Handle form submission
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // Send the email request
      const response = await axios({
        method: 'post',
        url: 'http://localhost:8080/sendmail',
        data: email,
      });

      // Assuming a successful response indicates the email was sent
      if (response.status === 200) {
        toast.success('Email sent successfully!');  // Success toast
      } else {
        toast.error('Failed to send email.');  // Error toast if status is not 200
      }
    } catch (error) {
      toast.error('An error occurred while sending the email.');  // Error toast in case of exception
    }
    
    setEmail({ email: '' });  // Reset email input after submission
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        <button type="submit">Send Email</button>
      </form>
    </div>
  );
}

export default Footer;


/*

@media screen and (max-width:600){
}
@media screen and (min-width:600){
}
@media screen and (min-width:768){
}
@media screen and (min-width:950){
}
@media screen and (min-width:1024){
}
 */

















/*
import React from "react";

const PricingCard = ({
  backgroundColor = "linear-gradient(360deg, #3E78C5 0%, #1E3A5F 100%)",
  txtcolor = "white",
  card = 1,
  price = "49.99",
  title = "For Small Businesses",
  headtext = "Business",
  color = "white",
  footertxt = "In Tax Returns",
}) => {
  return (
    <div style={{ ...styles.cardContainer, background: backgroundColor }}>
      <div style={styles.cardcontent}>
        <h3 style={{ ...styles.planTitle, color: txtcolor }}>{headtext}</h3>
        <h2 style={{ ...styles.priceText, color: txtcolor }}>
          {`$${price}`}
          <span style={{ ...styles.priceDuration, color: txtcolor }}>/mo+</span>
        </h2>
        <p style={{ ...styles.priceNote, color: txtcolor }}>applicable taxes</p>
        <p style={{ ...styles.subTitle, color: txtcolor }}>{title}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="listcontainer">
            <ul style={{ ...styles.featureList, color: txtcolor }}>
              <li style={{ color: color }}>? AI Tax Advisor</li>
              <li style={{ color: color }}>? AI Error Detector*</li>
              <li style={{ color: color }}>? AI Tax Updates</li>
              <li style={{ color: color }}>? AI Filing Assistance</li>
              <li style={{ color: color }}>? Software Integrations</li>
              {card === 2 ? (
                <li style={{ color: color }}>? AI Tax Planning</li>
              ) : null}
              {card === 3 ? (
                <>
                  <li style={{ color: color }}>? AI Fraud Detector</li>
                  <li style={{ color: color }}>? Professional Tools</li>
                  <li style={{ color: color }}>? Unlimited Clients</li>
                </>
              ) : null}
            </ul>
          </div>
        </div>
      </div>
      <p style={{ ...styles.disclaimer, color: txtcolor }}>{footertxt}</p>
      <div style={{ width: "160px" }}>
        <button
          className="waitlistButton"
          onClick={() => {
            const element = document.getElementById("feature");
            if (element) {
              element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
        >
          Choose Plan
        </button>
      </div>
    </div>
  );
};

// CSS Styles as JS objects
const styles = {
  cardContainer: {
    width: "100%",
    maxWidth: "390px",
    height: "730px",
    padding: "20px",
    paddingBottom: "60px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "linear-gradient(360deg, #3E78C5 0%, #1E3A5F 100%)",

    borderRadius: "16px",
    border: "2px solid #8CB1E2",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    color: "#fff",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    transition: "transform 0.2s ease-in-out",
  },
  cardcontent: {
    width: "343px",
    maxWidth: "343px",
    height: "556px",
    display: "flex",
    marginTop: "80px",
    flexDirection: "column",
    alignItems: "center",
    left: "23px",
  },
  planTitle: {
    fontSize: "26px",
    fontWeight: "500",
    marginBottom: "10px",
    fontFamily: "Poppins",
  },
  priceText: {
    fontSize: "32px",
    fontWeight: "bold",
    margin: "0",
  },
  priceDuration: {
    fontSize: "16px",
    fontWeight: "normal",
  },
  priceNote: {
    fontSize: "14px",
    fontWeight: "lighter",
    marginBottom: "10px",
    color: "white",
  },
  subTitle: {
    fontSize: "14px",
    fontWeight: "300",
    color: "#d0e0ff",
    marginBottom: "20px",
  },
  featureList: {
    listStyleType: "none",
    padding: "0",
    fontSize: "14px",
    marginBottom: "20px",
    textAlign: "left",
    alignself: "center",
    lineHeight: "24px",
    color: "white",
  },
  disclaimer: {
    fontSize: "10px",
    color: "#b0c4ff",
    marginTop: "10px",
  },
  choosePlanButton: {
    backgroundColor: "#ffffff",
    color: "#377dff",
    border: "none",
    borderRadius: "24px",
    padding: "10px 20px",
    fontSize: "14px",
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s",
  },
};

export default PricingCard;

*/