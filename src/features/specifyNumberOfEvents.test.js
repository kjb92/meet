import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { getEvents } from '../api';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  //TEST: Feature 3 - Scenario 1
  test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then, and }) => {
    let AppComponent; 
    given('the user has not specified a number of events to be listed', () => {

    });
    
    when('a list of events is returned to the user', async () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');

      expect(EventListDOM).not.toBeNull();
    });

    then('the number of events input value is set to “32“', () => {
      const AppDOM = AppComponent.container.firstChild;
      const numberTextBox = AppDOM.querySelector('#number-of-events-input');
      expect(numberTextBox).toHaveValue('32');
    });

    and('the number of displayed events equals to “32“ as well.', async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32);
      });
    });
  });
 
  //TEST: Feature 3 - Scenario 2
  test('User can change the number of events they want to see', ({ given, when, then }) => {
    let newNumberOfEvents;
    given('the user wants to change the amount of events being displayed', () => {
      newNumberOfEvents = 10;
    });

    let AppComponent; 
    when('the user enters a new number of events (such as “10“)', async () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;
      const numberTextBox = AppDOM.querySelector('#number-of-events-input');
      const user = userEvent.setup();
      await user.type(numberTextBox, `{backspace}{backspace}${newNumberOfEvents}`);
    });

    then('the new number of displayed events changes and equals to “10“ as well.', async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(newNumberOfEvents);
      });    
    });
  });
});