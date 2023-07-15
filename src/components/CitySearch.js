import { useState } from'react';


const CitySearch = ({ allLocations }) => {
  //true / false state
  const [showSuggestions, setShowSuggestions] = useState(false);
  //query state
  const [query, setQuery] = useState('');
  //filtered allLocations by query
  const [suggestions, setSuggestions] = useState([]);

  //Hanlde input change
  const handleInputChange = (event) => {
    const value = event.target.value;
    const filteredLocations = allLocations ? allLocations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    }) : [];
    setQuery(value);
    setSuggestions(filteredLocations);
  };

  return (
    <div id="city-search">
      <input 
        type="text" 
        id="city-search-input" 
        className="city" 
        placeholder="Search for a city"
        onFocus={() => setShowSuggestions(true)}
        onChange={handleInputChange}
        value={query}
        />
      {showSuggestions ? (
        <ul className="suggestions">
          {suggestions.map((suggestion) => (
            <li key={suggestion}>{suggestion}</li>
          ))}
          <li key='See all cities'>
            <b>See all cities</b>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default CitySearch;