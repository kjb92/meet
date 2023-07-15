import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';
import { getEvents } from '../api';


//Describe the scope
describe('<NumberOfEvents /> component', () => {  
  let NumberOfEventsComponent;
  let numberTextBox;
  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents />);
    numberTextBox = NumberOfEventsComponent.queryByRole('textbox');
  });
  
  //Test 1
  test('renders number input', () => {
    expect(numberTextBox).toBeInTheDocument();
    expect(numberTextBox).toHaveClass('number-of-events');
  });

});