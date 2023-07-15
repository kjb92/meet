import { useState } from "react";

const NumberOfEvents = () => {
  const [numberOfEvents, setNumberOfEvents] = useState(32);

  //Hanlde input change
  const handleInputChange = (event) => {
    const value = event.target.value;
    setNumberOfEvents(value);
  };
  
  return (
    <div id="number-of-events">
      <input 
        type="text" 
        id="number-of-events-input" 
        className="number-of-events" 
        value={numberOfEvents}
        onChange={handleInputChange}
        />
    </div>
  );
};

export default NumberOfEvents;