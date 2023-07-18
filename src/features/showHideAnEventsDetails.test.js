import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, waitFor, within, screen } from '@testing-library/react';
import { toHaveValue } from '@testing-library/jest-dom/matchers';
import userEvent from '@testing-library/user-event';
import App from '../App';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  let AppComponent;
  let AppDOM;
  let EventListDOM;
  let firstEventDOM;

  beforeAll(async () => {
    AppComponent = render(<App />);
  });
  
  //TEST: Feature 2 - Scenario 1
  test('An event element is collapsed by default', ({ given, and, when, then }) => {
    given('the list of events has loaded', async () => {
      // AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
      EventListDOM = AppDOM.querySelector('#event-list');
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).not.toBe(0);
      });
    });
    
    and('the number of events input field is not empty', () => {
      const numberOfEventsDOM = AppDOM.querySelector('#number-of-events');
      const numberOfEventsInput = within(numberOfEventsDOM).queryByRole('textbox');
      expect(numberOfEventsInput).toHaveValue(); // Use toHaveValue matcher to check if the textbox is not empty
    });

    when('the user opens the app', () => {
      expect(AppDOM).not.toBeNull();
    });

    then('all event detail elements will be collapsed.', async () => {
      let firstEventDetails;
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32);
      });
      firstEventDetails = EventListDOM.querySelector('#event-details');
      expect(firstEventDetails).toBeNull();
    });
  });

  //TEST: Feature 2 - Scenario 2
  test('User can expand an event to see its details', ({ given, when, then }) => {
    given('the list of events has loaded', async () => {
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).not.toBe(0);
      });
    });

    when('the user clicks on “show details“', async () => {
      firstEventDOM = EventListDOM.querySelector('.event');
      const user = userEvent.setup();
      await user.click(firstEventDOM.querySelector('#show-details'));
    });
    
    then('the event element will expand to show more details about the event.', async () => {
        let firstEventDetails = firstEventDOM.querySelector('#event-details');
        expect(firstEventDetails).not.toBeNull(); 
    });
  });

  //TEST: Feature 2 - Scenario 3
  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    given('the user has all the information they need about an event', () => {

    });
    
    when('the user clicks on “hide details“', async () => {
      const user = userEvent.setup();
      await user.click(firstEventDOM.querySelector('#hide-details'));
    });

    then('the event element will collapse and hide the event details.', () => {
      let firstEventDetails = firstEventDOM.querySelector('#event-details');
      expect(firstEventDetails).toBeNull();
    });
  });
});

