import { render } from '@testing-library/react';
import App from '../App';

//Describe the first test scope
describe('<App /> component', () => {
  let AppDOM;
  //Before each test
  beforeEach(() => {
    AppDOM = render(<App />).container.firstChild;
  });

  //Test 1
  test('renders list of events', () => {
    expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
  });

  //Test 2
  test('render CitySearch', () => {
    expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
  });

  //Test 3
  test('render NumberOfEvents', () => {
    expect(AppDOM.querySelector('#number-of-events')).toBeInTheDocument();
  });
});