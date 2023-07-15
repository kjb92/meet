import { render } from '@testing-library/react';
import Event from '../components/Event';
import { getEvents } from '../api';
import userEvent from '@testing-library/user-event';


//Describe the scope
describe('<Event /> component', () => {
  let EventComponent;
  let allEvents;

  beforeAll(async () => {
    //get mock-data via getEvents from api.js
    allEvents = await getEvents();
  });

  beforeEach(() => {
    EventComponent = render(<Event event={allEvents[0]}/>);
  });
  
  //Test 1
  test('renders event title', () => {
    expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();
  });

  //Test 2
  test('renders event start-time', () => {
    expect(EventComponent.queryByText(allEvents[0].start.dateTime)).toBeInTheDocument();
  });

  //Test 3
  test('renders event location', () => {
    expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
  });

  //Test 4
  test('renders event details button with the title "show details"', () => {
    expect(EventComponent.queryByText('show details')).toBeInTheDocument();
  });

  //Test 5
  test('by default, event details should be hidden', () => {
    expect(EventComponent.container.querySelector('.event-details')).toBeNull();
  });
  

  //Test 6
  test('show the event details section when user clicks on "show details"', async () => {
    //code
    const user = userEvent.setup();
    user.click(EventComponent.getByText('show details'));
    expect(EventComponent.container.querySelector('.event-details')).not.toBeNull();
  });

  //Test 7
  test('hide the event details section when user clicks on "hide details"', async () => {
    //code
    const user = userEvent.setup();
    user.click(EventComponent.getByText('hide details'));
    expect(EventComponent.container.querySelector('.event-details')).toBeNull();
  });

});