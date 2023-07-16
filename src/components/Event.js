import { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <li className="event">
      <h2>{event.summary}</h2>
      <p>{event.start.dateTime}</p>
      <p>{event.location}</p>
      {showDetails === true ? (
        <>
          <button id="hide-details" className="details-btn" onClick={toggleDetails}>hide details</button>
          <div id="event-details">
            <p>{event.description}</p>
          </div>
        </>
      ) : (
        <button id="show-details" className="details-btn" onClick={toggleDetails}>show details</button>
      )}
    </li>
  );
};

export default Event;
