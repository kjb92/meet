import { render, within, waitFor } from '@testing-library/react';
import EventList from '../components/EventList';
import App from '../App';
import { getEvents } from '../api';

//Scope 1
describe('<EventList /> component', () => {
  let EventListComponent;
  beforeEach(() => {
    EventListComponent = render(<EventList />);
  });
  
  //Test 1
  test('has an element with "list" role', () => {
    expect(EventListComponent.getByRole('list')).toBeInTheDocument();
  });

  //Test 2
  test('renders correct number of events', async () => {
    const allEvents = await getEvents();
    EventListComponent.rerender(<EventList events={allEvents}/>);
    expect(EventListComponent.getAllByRole('listitem')).toHaveLength(allEvents.length);
  });
});

//Scope 2
describe('<EventList /> integration', () => {
  //Test 1
  test('renders a list of 32 events when the app is mounted and rendered', async () => {
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;
    const EventListDOM = AppDOM.querySelector('#event-list');
    await waitFor(() => {
      const EventListItems = within(EventListDOM).queryAllByRole('listitem');
      expect(EventListItems.length).toBe(32);
    });
  });
});