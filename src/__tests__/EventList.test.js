import { render } from '@testing-library/react';
import EventList from '../components/EventList';
import { getEvents } from '../api';

//Describe the scope
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
    expect(EventListComponent.getAllByRole('listitem')).toHaveLength(4);
  });
});