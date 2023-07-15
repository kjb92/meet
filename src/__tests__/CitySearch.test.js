import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CitySearch from '../components/CitySearch';


//Describe the scope
describe('<CitySearch /> component', () => {  
  let CitySearchComponent;
  let cityTextBox;
  let user; 
  beforeEach(() => {
    CitySearchComponent = render(<CitySearch />);
    cityTextBox = CitySearchComponent.queryByRole('textbox');
    //Setup the object that will represent the user for testing purposes
    user = userEvent.setup();
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
    await user.click(cityTextBox);
    const suggestionsList = CitySearchComponent.queryByRole('list');
    expect(suggestionsList).toBeInTheDocument();
    expect(suggestionsList).toHaveClass('suggestions');
  });
});