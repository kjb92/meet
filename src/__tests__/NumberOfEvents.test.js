import { render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';
import App from '../App';
import { getEvents } from '../api';


//Scope 1
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
    NumberOfEventsComponent.rerender(<NumberOfEvents numberOfEvents='32' />);
    expect(numberTextBox).toHaveValue('32');
  });
});

//Scope 2
describe('<NumberOfEvents /> integration', () => {
  //Test 1
  test('updates number of events when user types in number input', async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');
    const NumberOfEventsInput = within(NumberOfEventsDOM).queryByRole('textbox');

    await user.type(NumberOfEventsInput, '{backspace}{backspace}10');

    const EventListDOM = AppDOM.querySelector('#event-list');
    const allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');   

    expect(allRenderedEventItems.length).toBe(NumberOfEventsInput.value);
  });
});