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
//Import InfoAlert
import { InfoAlert } from './components/Alert';


function App() {
  const [events, setEvents] = useState([]);
  const [allLocations, setAllLocations] = useState([]);
  const [numberOfEvents, setNumberOfEvents] = useState('32');
  const [currentCity, setCurrentCity] = useState('See all cities');
  const [infoAlert, setInfoAlert] = useState('');

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
  }, [currentCity, numberOfEvents]);
  
  //Handle number of events change
  const handleNumberOfEventsChange = (newNumber) => {
    const newNumberInteger = Number(newNumber);
    setNumberOfEvents(newNumberInteger);
  };

  return (
    <div className="App">
      <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert}/> : null}
      </div>
      <CitySearch 
        allLocations={allLocations} 
        setCurrentCity={setCurrentCity} 
        setInfoAlert={setInfoAlert}
      />
      <NumberOfEvents 
        numberOfEvents={numberOfEvents}
        handleNumberOfEventsChange={handleNumberOfEventsChange}
      />
      <EventList events={events}/>
    </div>
  );
}

export default App;
