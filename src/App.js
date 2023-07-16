import './App.css';
import { useState, useEffect } from "react"; 
//Import EventList component
import EventList from './components/EventList';
//Import CitySearch component
import CitySearch from './components/CitySearch';
//Import NumberOfEvents component
import NumberOfEvents from './components/NumberOfEvents';
//Import getEvents & extractLocations
import { getEvents, extractLocations } from "./api";


function App() {
  const [events, setEvents] = useState([]);
  const [locations, setLocations] = useState([]);
  const [numberOfEvents, setNumberOfEvents] = useState('32');

  //Get all events function
  const fetchData = async () => {
    const allEvents = await getEvents();
    setEvents(allEvents.slice(0, numberOfEvents));
    setLocations(extractLocations(allEvents));
  };

  //useEffect: Get all events
  useEffect(() => {
    fetchData();
  }, []);
  
  //Handle number of events change
  const handleNumberOfEventsChange = (newNumber) => {
    setNumberOfEvents(newNumber);
  };

  return (
    <div className="App">
      <CitySearch allLocations={locations}/>
      <NumberOfEvents 
        numberOfEvents={numberOfEvents}
        handleNumberOfEventsChange={handleNumberOfEventsChange}
      />
      <EventList events={events}/>
    </div>
  );
}

export default App;
