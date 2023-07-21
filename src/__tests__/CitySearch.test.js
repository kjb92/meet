import { render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CitySearch from '../components/CitySearch';
import App from '../App';
import { getEvents, extractLocations } from '../api';


//Scope 1
describe('<CitySearch /> component', () => {  
  let CitySearchComponent;
  let cityTextBox;
  beforeEach(() => {
    CitySearchComponent = render(<CitySearch allLocations={[]} />);
    cityTextBox = CitySearchComponent.queryByRole('textbox');
  });
  
  //Test 1
  test('renders text input', () => {
    expect(cityTextBox).toBeInTheDocument();
    expect(cityTextBox).toHaveClass('city');
  });

  //Test 2
  test('suggestions list is hidden by default', () =>{
    const suggestionsList = CitySearchComponent.queryByRole('list');
    expect(suggestionsList).not.toBeInTheDocument();
  });

  //Test 3
  test('renders a list of suggestions when city textbox gains focus', async () => {
    //Setup the object that will represent the user for testing purposes
    const user = userEvent.setup();
    await user.click(cityTextBox);
    const suggestionsList = CitySearchComponent.queryByRole('list');
    expect(suggestionsList).toBeInTheDocument();
    expect(suggestionsList).toHaveClass('suggestions');
  });

  //Test 4 
  test('updates list of suggestions correctly when user types in city textbox', async () => {
    //Setup the object that will represent the user for testing purposes
    const user = userEvent.setup();
    const allEvents = await getEvents();
    const allLocations = extractLocations(allEvents);
    CitySearchComponent.rerender(<CitySearch allLocations={allLocations} />);

    //user types "Berlin" in city textbox
    await user.type(cityTextBox, 'Berlin');

    //filter allLocations to locations matching "Berlin"
    const suggestions = allLocations ? allLocations.filter(location => {
      return location.toUpperCase().indexOf(cityTextBox.value.toUpperCase()) > -1;
    }) : [];

    //get all <li> elements inside the suggestions list
    const suggestionListItems = CitySearchComponent.queryAllByRole('listitem');
    expect(suggestionListItems).toHaveLength(suggestions.length + 1);
    for (let i = 0; i < suggestions.length; i += 1) {
      expect(suggestionListItems[i].textContent).toBe(suggestions[i]);
    }
  });

  //Test 5
  test('renders the suggestion text in the textbox upon clicking on the suggestion', async () => {
    const user = userEvent.setup();
    const allEvents = await getEvents();
    const allLocations = extractLocations(allEvents);
    CitySearchComponent.rerender(<CitySearch allLocations={allLocations} setCurrentCity={() => { }}/>);

    const cityTextBox = CitySearchComponent.queryByRole('textbox');
    await user.type(cityTextBox, 'Berlin');

    // the suggestion's textContent look like this: "Berlin, Germany"
    const BerlinGermanySuggestion = CitySearchComponent.queryAllByRole('listitem')[0];

    await user.click(BerlinGermanySuggestion);

    expect(cityTextBox).toHaveValue(BerlinGermanySuggestion.textContent);
  });

});

//Scope 2
describe('<CitySearch /> integration', () => {
  test('renders suggestions list when the app is rendered.', async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    const CitySearchDOM = AppDOM.querySelector('#city-search');
    const cityTextBox = within(CitySearchDOM).queryByRole('textbox');
    await user.click(cityTextBox);

    const allEvents = await getEvents();
    const allLocations = extractLocations(allEvents);

    const suggestionListItems = within(CitySearchDOM).queryAllByRole('listitem');
    expect(suggestionListItems.length).toBe(allLocations.length + 1);
 });
});