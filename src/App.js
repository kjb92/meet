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
  const [allLocations, setAllLocations] = useState([]);
  const [numberOfEvents, setNumberOfEvents] = useState('32');
  const [currentCity, setCurrentCity] = useState('See all cities');

  //Get all events function
  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents = currentCity === "See all cities" ?
    allEvents :
    allEvents.filter(event => event.location === currentCity)
    setEvents(filteredEvents.slice(0, numberOfEvents));
    setAllLocations(extractLocations(allEvents));
  };

  //useEffect: fetchData
  useEffect(() => {
    fetchData();
  }, [currentCity]);
  
  //Handle number of events change
  const handleNumberOfEventsChange = (newNumber) => {
    setNumberOfEvents(newNumber);
  };

  return (
    <div className="App">
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity}/>
      <NumberOfEvents 
        numberOfEvents={numberOfEvents}
        handleNumberOfEventsChange={handleNumberOfEventsChange}
      />
      <EventList events={events}/>
    </div>
  );
}

export default App;
