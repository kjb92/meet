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
import { InfoAlert, ErrorAlert, WarningAlert } from './components/Alert';


function App() {
  const [events, setEvents] = useState([]);
  const [allLocations, setAllLocations] = useState([]);
  const [numberOfEvents, setNumberOfEvents] = useState('32');
  const [currentCity, setCurrentCity] = useState('See all cities');
  const [infoAlert, setInfoAlert] = useState('');
  const [errorAlert, setErrorAlert] = useState('');
  const [warningAlert, setWarningAlert] = useState('');

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
    if (navigator.onLine) {
      // set the warning alert message to an empty string ""
      setWarningAlert('');
    } else {
      // set the warning alert message to a non-empty string
      setWarningAlert('You are currently not connected to the internet. Data is being fetched from cache');
    }
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
        {errorAlert.length ? <ErrorAlert text={errorAlert}/> : null}
        {warningAlert.length ? <WarningAlert text={warningAlert}/> : null}
      </div>
      <CitySearch 
        allLocations={allLocations} 
        setCurrentCity={setCurrentCity} 
        setInfoAlert={setInfoAlert}
      />
      <NumberOfEvents 
        numberOfEvents={numberOfEvents}
        handleNumberOfEventsChange={handleNumberOfEventsChange}
        setErrorAlert={setErrorAlert}
      />
      <EventList events={events}/>
    </div>
  );
}

export default App;
