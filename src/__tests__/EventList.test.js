import { render } from '@testing-library/react';
import EventList from '../components/EventList';

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
  test('renders correct number of events', () => {
    EventListComponent.rerender(<EventList events={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]}/>);
    expect(EventListComponent.getAllByRole('listitem')).toHaveLength(4);
  });
});