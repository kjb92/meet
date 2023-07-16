const NumberOfEvents = ( {numberOfEvents, handleNumberOfEventsChange} ) => {
  //Hanlde input change
  const handleInputChange = (event) => {
    const value = event.target.value;
    handleNumberOfEventsChange(value);
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