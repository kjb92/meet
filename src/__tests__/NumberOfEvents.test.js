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

  // Test 2
  test('default value of number input is 32', () => {
    expect(numberTextBox).toHaveValue('32');
  });

  //Test 3 
  test('updates number of events when user types in number input', async () => {
    //Setup the object that will represent the user for testing purposes
    const user = userEvent.setup();

    //user types "10" in number input
    await user.type(numberTextBox, '10');

    //expect number input to have value of "10"
    expect(numberTextBox).toHaveValue('10');
  });
});