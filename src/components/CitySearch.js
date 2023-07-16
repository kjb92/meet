import { useState, useEffect } from'react';


const CitySearch = ({ allLocations, setCurrentCity }) => {
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

  //Handle item clicked
  const handleItemClicked = (event) => {
    const value = event.target.textContent;
    setQuery(value);
    setShowSuggestions(false); //to hide the list
    setCurrentCity(value); //to select the current city
  };

  //Update suggestions every time the allLocations array changes
  useEffect(() => {
    setSuggestions(allLocations);
  }, [`${allLocations}`]); //compare string representations of the arrays, not their memory references

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
            <li key={suggestion} onClick={handleItemClicked}>{suggestion}</li>
          ))}
          <li key='See all cities' onClick={handleItemClicked}>
            <b>See all cities</b>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default CitySearch;