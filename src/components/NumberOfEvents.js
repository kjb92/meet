const NumberOfEvents = ( {numberOfEvents, handleNumberOfEventsChange, setErrorAlert} ) => {
  //Hanlde input change
  const handleInputChange = (event) => {
    const value = event.target.value;
    
      //Check whether to display an ErrorAlert
      let errorText;
      if (isNaN(value)) {
        errorText = "The value you enter has to be a number. Please try again";
      } else if (Number(value) < 0) {
        errorText = "The value you enter has to be greater than 0. Please try again";
      } else {
        errorText = "";
        handleNumberOfEventsChange(value);
      }
      setErrorAlert(errorText);
  };
  
  return (
    <div id="number-of-events">
      <p role="label" for="number-of-events-input">Number of Events</p>
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