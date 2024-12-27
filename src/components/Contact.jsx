import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from '@emailjs/browser';
import { User, MapPin, School, Building, Mail, Phone, MessageSquare, Send } from 'lucide-react';

const Wrapper = styled.section`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-weight: bold;
    font-size: 33px;
    text-align: center;
    margin-bottom: 3px;
  }

  iframe {
    width: 100%;
    height: 250px;
    border: 0;
  }

  .container {
    margin-top: 1rem;
    text-align: center;
    width: 100%;
    max-width: 100%;
  }

  .background-container {
    width: 100vw;
    margin-left: 100%;
    transform: translateX(-50%);
    position: relative;
    left: 0;
    right: 0;
    padding: 2rem 0;
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), url("https://images.unsplash.com/photo-1499914485622-a88fac536970?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: white;
    text-align: center;
  }

  .background-container h2,
  .background-container p {
    padding-left: 1rem;
    padding-right: 1rem;
  }


  .contact-form {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;

    .contact-inputs {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      input,
      textarea {
        width: 100%;
        padding: 1rem 1rem 1rem 2.5rem;
        border: 2px solid #65b741;
        border-radius: 8px;
        outline: none;
        transition: all 0.3s ease;
        font-size: 1rem;
        background-color: #f0f8ff;
        color: #333;

        &:focus {
          border-color: #4f9433;
          box-shadow: 0 0 0 2px rgba(79, 148, 51, 0.2);
          background-color: #fff;
        }

        &::placeholder {
          color: #666;
        }
      }

      .input-wrapper {
        position: relative;
        width: 100%;

        svg {
          position: absolute;
          left: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          color: #65b741;
        }

        textarea + svg {
          top: 1rem;
          transform: none;
        }
      }
    }
  }

  button.submit-btn {
    cursor: pointer;
    transition: all 0.3s ease;
    background-color: #65b741;
    border: 2px solid #65b741;
    color: white;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    font-weight: bold;
    margin: 2rem 0;
    width: 100%;
    max-width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border-radius: 8px;

    &:hover {
      background-color: #4f9433;
      border-color: #4f9433;
      transform: translateY(-3px);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    &:active {
      transform: translateY(-1px);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    svg {
      transition: transform 0.3s ease;
    }

    &:hover svg {
      transform: translateX(3px);
    }
  }

  @media only screen and (max-width: 768px) {
    .container {
      padding: 0 1rem;
    }
  }
`;

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rwgyu89', 'template_8w9ceq5', form.current, 'NrLCZQh-kj3e7WC63')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again.');
      });
    e.target.reset();
  };

  return (
    <Wrapper className="section">
      <div className="background-container">
        <h2 className="py-6">WRITE TO US</h2>
        <p className="mb-8 font-semibold">
          You can get in touch with us at- <br />
          <span className="font-bold">Address: </span> Marichi Ventures, T-Hub Phase-2, 20, Inorbit Mall Road, <br />
          Vittal Rao Nagar, Madhapur, Hyderabad <br />
          <span className="font-bold">Pin:</span> 500081 <br />
          <span className="font-bold">Email: </span> info@marichiventures.com
          <br />
          <span className="font-bold">Phone: </span> +91-7200212158
        </p>
      </div>
      <div className="container">
        <div className="contact-form">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact-inputs"
          >
            <div className="input-wrapper">
              <User size={20} />
              <input
                type="text"
                name="name"
                placeholder="Name*"
                autoComplete="off"
                required
              />
            </div>
            <div className="input-wrapper">
              <MapPin size={20} />
              <input
                type="text"
                name="location"
                placeholder="Location"
                autoComplete="off"
              />
            </div>
            <div className="input-wrapper">
              <School size={20} />
              <input
                type="text"
                name="collegename"
                placeholder="College Name (for students)"
                autoComplete="off"
              />
            </div>
            <div className="input-wrapper">
              <Building size={20} />
              <input
                type="text"
                name="companyname"
                placeholder="Company Name (for corporates)"
                autoComplete="off"
              />
            </div>
            <div className="input-wrapper">
              <Mail size={20} />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                autoComplete="off"
                required
              />
            </div>
            <div className="input-wrapper ">
              <Phone size={20} />
              <input
                type="tel"
                name="phone"
                placeholder="Phone*"
                autoComplete="off"
                required
              />
            </div>
            <div className="relative">
      <div className="absolute left-3 top-5 text-green-500">
        <MessageSquare size={20} />
      </div>
      <textarea
        name="message"
        placeholder="Message"
        className="w-full pl-10 pr-4 py-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
        rows={6}
        autoComplete="off"
        required
      />
    </div>
            <button type="submit" className="submit-btn">
              <Send size={20} />
              <span>Send</span>
            </button>
          </form>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.533135383003!2d78.37646572369046!3d17.43417870145839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e37831f177%3A0x32d4499d34baaa78!2sT-Hub%20Phase%202!5e0!3m2!1sen!2sin!4v1706268163009!5m2!1sen!2sin"
        width="100%"
        height="250"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Wrapper>
  );
};

export default Contact;

