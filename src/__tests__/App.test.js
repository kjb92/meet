import { render } from '@testing-library/react';
import App from '../App';

//Describe the first test scope
describe('<App /> component', () => {
  //Write the first test
  test('renders list of events', () => {
    const AppDOM = render(<App />).container.firstChild;
    expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
  });
});