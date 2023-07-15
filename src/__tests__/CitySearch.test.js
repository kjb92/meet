import { render } from '@testing-library/react';
import CitySearch from './CitySearch';

//Describe the scope
describe('<CitySearch /> component', () => {  
  //Test 1
  test('renders text input', () => {
    const CitySearchComponent = render(<CitySearch />);
    const cityTextBox = CitySearchComponent.queryByRole('textbox');
    expect(cityTextBox).toBeInTheDocument();
    expect(cityTextBox).toHaveClass('city');
  });
});