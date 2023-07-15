import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CitySearch from '../components/CitySearch';


//Describe the scope
describe('<CitySearch /> component', () => {  
  let CitySearchComponent;
  let cityTextBox;
  beforeEach(() => {
    CitySearchComponent = render(<CitySearch />);
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
    CitySearchComponent = rerender(<CitySearch allLocations={allLocations} />);

    //user types "Berlin" in city textbox
    await user.type(cityTextBox, 'Berlin');

    //filter allLocations to locations matching "Berlin"
    const suggestions = allLocations ? allLocations.filter(location => {
      return location.toUpperCase().indexOf(cityTextBox.value.toUpperCase()) > -1;
    }) : [];

    //get all <li> elements inside the suggestions list
    const suggestionListItems = CitySearchComponent.queryAllByRole('listitem');
    expect(suggestionListItems).toHaveLength(suggestions.length + 1);
    for (let i = 0; i < suggestionListItems.length; i += 1) {
      expect(suggestionListItems[i]).toHaveTextContent(suggestions[i]);
    }
  });
});