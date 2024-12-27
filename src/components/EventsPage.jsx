import React from "react";
import { Link } from 'react-router-dom'; 
import eve from '../assets/eve1.jpg';
import evee from '../assets/eve2.jpg';
import "./EventsPage.css";
import upceve from '../assets/upceve-1.png';
import td from '../assets/teamdynamics.jpeg';
import iimb from '../assets/iimb.jpg';
import bhu from '../assets/bhu.jpg';
import ama from '../assets/amazon.jpg';
import capgemini from '../assets/capgemini.jpg';
import cio from '../assets/cio.jpg';
import aic from '../assets/aic.jpeg';
import dot from '../assets/dot.jpeg';
import cii from '../assets/cii2.jpg';
import cii2 from '../assets/CII.jpg';

const upcomingEvents = [
  {
    title: "",
    date: "",
    description: "",
    registrationLink: "",
    image: dot
  },
];

const pastEvents = [
  {
    title: "Amazon: Mind Your Mind Program",
    image: ama,
    description: "A successful workshop on health and fitness at Amazon.",
    detailLink: "/past-events"
  },
  {
    title: "Aug2024: Team Dynamics Workshop",
    image: td,
    description: "We hosted a Team Dynamics workshop for 50 participants, focusing on collaboration, self-awareness, and holistic well-being to enhance teamwork and performance.",
    detailLink: "/past-events"
  },
];

const industryConnects = [
  {
    title: "CAPGEMINI INNOVATION HEALTH ROUNTABLE",
    image: capgemini,
    description: "A seminar bringing together industry experts.",
    detailLink: "/industry-connects" 
  },
  {
    title: "SMART CIO SUMMIT 2024",
    image: cio,
    description: "A seminar bringing together industry experts.",
    detailLink: "/industry-connects" 
  },
];

const StartupEcosystemConnects = [
  {
    title: " Department of Telecommunications, Ministry of Communication & IT (INDIA)",
    image: dot,
    description: "Invited as jury for a 30-hour “5G and 6G Hackathon” that brought together top talent from across India to develop cutting-edge 5G and 6G products and solutions.",
    detailLink: "/StartupEcosystem-connects"
  },

];

const academiaConnects = [
  {
    title: "IIM Bengaluru",
    image: iimb,
    description: "Invited for a guest lecture on the topic 'Healthtech & Medtech is next Fintech'.",
    detailLink: "/academia-connects"
  },
  {
    title: "IIT BHU",
    image: bhu,
    description: "Invited as a speaker at their Annual Conference.",
    detailLink: "/academia-connects"
  },
];

const chambersOfCommerce = [
  {
    title: "CII Indo Swedish Life Sciences Delegation",
    image: cii2, // replace with the relevant image for the event
    description: "Sarvesh Singh attended a dinner by AIC-GNITS Foundation, honoring a Swedish Life Sciences Delegation. The event featured leaders from Sweden and India, exploring collaborations in healthcare, biotech, and AI.",
    detailLink: "/chambers-of-commerce"
  },
    {
    title: "Health & Lifesciences Summit organised by Indo-French Chambers of Commerce & Industry (IFCCI)",
    image: cii,
    description: "This event spotlighted the contributions and initiatives of French and India entities, aiming to catalyze the growth and innovation within Health & Lifesciences sector.",
    detailLink: "/chambers-of-commerce"
  },
];

const EventsPage = () => {
  return (
    <div className="events-page mb-20">
      <h1 className="text-center text-3xl font-bold my-8">DISCOVER & RELIVE OUR EVENTS: WHERE INNOVATION MEETS INSPIRATION</h1>


  {/* <div className="events-section">
        <h2 className="text-2xl font-semibold mb-6">UPCOMING EVENTS</h2>
        <div className="upcoming-events grid grid-cols-1 sm:grid-cols-2 gap-8">
          {upcomingEvents.slice(0, 3).map((event, index) => (
            <div key={index} className="event-item bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-8">
              <img src={event.image} alt={event.title} className="w-full h-40 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-2">{event.date}</p>
              <p className="text-gray-700 mb-4">{event.description}</p>
              <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                <button className="register-button text-white px-4 py-2 rounded hover: transition-colors duration-300">
                  Register Now
                </button>
              </a>
            </div>
          ))}
          <Link to="/upcoming-events" className="text-blue-500 hover:underline">View More</Link>
        </div>
      </div>
      */}
      

      <div className="events-section mt-12">
        <h2 className="text-2xl font-semibold mb-6">PAST EVENTS</h2>
        <div className="past-events grid grid-cols-1 sm:grid-cols-2 gap-8">
          {pastEvents.slice(0, 3).map((event, index) => (
            <Link key={index} to={event.detailLink} className="event-item bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-60 flex items-center justify-center overflow-hidden rounded mb-4">
                <img src={event.image} alt={event.title} className="w-full h-40 object-contain rounded mb-4" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-700">{event.description}</p>
            </Link>
          ))}
          <Link to="/past-events" className="text-blue-500 hover:underline">View More</Link>
        </div>
      </div>

      <div className="events-section mt-12">
        <h2 className="text-2xl font-semibold mb-6">INDUSTRY CONNECTS</h2>
        <div className="industry-connects grid grid-cols-1 sm:grid-cols-2 gap-8">
          {industryConnects.slice(0, 3).map((event, index) => (
            <Link key={index} to={event.detailLink} className="event-item bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-60 flex items-center justify-center overflow-hidden rounded mb-4">
                <img src={event.image} alt={event.title} className="w-full h-40 object-contain rounded mb-4" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-700">{event.description}</p>
            </Link>
          ))}
          <Link to="/industry-connects" className="text-blue-500 hover:underline">View More</Link>
        </div>
      </div>

      {/* Adding the new Chambers of Commerce Section */}
      <div className="events-section mt-12">
        <h2 className="text-2xl font-semibold mb-6">CHAMBERS OF COMMERCE</h2>
        <div className="chambers-of-commerce grid grid-cols-1 sm:grid-cols-2 gap-8">
          {chambersOfCommerce.slice(0, 3).map((event, index) => (
            <Link key={index} to={event.detailLink} className="event-item bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-60 flex  justify-center overflow-hidden rounded mb-4">
                <img src={event.image} alt={event.title} className=" h-250  rounded mb-4"  />
              </div>
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-700">{event.description}</p>
            </Link>
          ))}
          <Link to="/chambers-of-commerce" className="text-blue-500 hover:underline">View More</Link>
        </div>
      </div>

      <div className="events-section mt-12">
        <h2 className="text-2xl font-semibold mb-6">STARTUP ECOSYSTEM CONNECTS</h2>
        <div className="academia-connects grid grid-cols-1 sm:grid-cols-2 gap-8">
          {StartupEcosystemConnects.slice(0, 3).map((event, index) => (
            <Link key={index} to={event.detailLink} className="event-item bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-60 flex items-center justify-center overflow-hidden rounded mb-4">
                <img src={event.image} alt={event.title} className="w-full h-40 object-contain rounded mb-4" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-700">{event.description}</p>
            </Link>
          ))}
          <Link to="/StartupEcosystem-connects" className="text-blue-500 hover:underline">View More</Link>
        </div>
      </div>

      <div className="events-section mt-12">
        <h2 className="text-2xl font-semibold mb-6">ACADEMIA CONNECTS</h2>
        <div className="academia-connects grid grid-cols-1 sm:grid-cols-2 gap-8">
          {academiaConnects.slice(0, 3).map((event, index) => (
            <Link key={index} to={event.detailLink} className="event-item bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-60 flex items-center justify-center overflow-hidden rounded mb-4">
                <img src={event.image} alt={event.title} className="w-full h-40 object-contain rounded mb-4" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-700">{event.description}</p>
            </Link>
          ))}
          <Link to="/academia-connects" className="text-blue-500 hover:underline">View More</Link>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
