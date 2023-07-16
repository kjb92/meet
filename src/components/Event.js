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
      <button
        id={showDetails ? "hide-details" : "show-details"}
        className="details-btn"
        onClick={toggleDetails}
      >
        {showDetails ? "hide details" : "show details"}
      </button>
      {showDetails && (
        <div id="event-details">
          <p>{event.description}</p>
        </div>
      )}
    </li>
  );
};

export default Event;
