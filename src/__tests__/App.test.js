import { render } from '@testing-library/react';
import App from '../App';

//Describe the first test scope
describe('<App /> component', () => {
  
  //Test 1
  test('renders list of events', () => {
    const AppDOM = render(<App />).container.firstChild;
    expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
  });

  //Test 2
  test('render CitySearch', () => {
    const AppDOM = render(<App />).container.firstChild;
    expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
  });
});