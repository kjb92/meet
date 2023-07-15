import './App.css';
//Import EventList component
import EventList from './components/EventList';
//Import CitySearch component
import CitySearch from './components/CitySearch';
//Import NumberOfEvents component
import NumberOfEvents from './components/NumberOfEvents';

function App() {
  return (
    <div className="App">
      <CitySearch />
      <EventList />
      <NumberOfEvents />
    </div>
  );
}

export default App;
