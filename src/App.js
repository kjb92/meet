import './App.css';
import { useState } from "react"; 
//Import EventList component
import EventList from './components/EventList';
//Import CitySearch component
import CitySearch from './components/CitySearch';
//Import NumberOfEvents component
import NumberOfEvents from './components/NumberOfEvents';

function App() {
  const [numberOfEvents, setNumberOfEvents] = useState('32');
  
  //Handle number of events change
  const handleNumberOfEventsChange = (newNumber) => {
    setNumberOfEvents(newNumber);
  };

  return (
    <div className="App">
      <CitySearch />
      <EventList />
      <NumberOfEvents 
        numberOfEvents={numberOfEvents}
        handleNumberOfEventsChange={handleNumberOfEventsChange}
      />
    </div>
  );
}

export default App;
