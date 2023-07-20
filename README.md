# meet app

The objective of this repo is to build a serverless, progressive web application (PWA) with React using a
test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.


# Table of Contents

1. [Getting Started](#getting-started)
2. [Technical Requirements](#technical-requirements)
3. [Features](#features)
4. [Built With](#built-with)


# Getting started

## Live Test-Version
For a live test version of the API, simply go to `https://kjb92.github.io/meet/`
You will need a Google Account to login and test the app

## Clone the repo
Follow the instructions below to get a copy of the project up and running on your local machine for development and testing purposes:

1. Open your terminal and navigate to the directory where you want to clone the repository.
2. Clone the repository:
```bash
git clone https://github.com/kjb92/meet.git
```

2. Navigate to the root directory of the project.
3. Run `npm install` to install all dependencies.
4. Run parcel to build the project with `npm run start`
5. Open a web browser and navigate to `http://localhost:1234` to access the front-end


# Technical requirements
- The app must be a React application.
- The app must be built using the TDD technique.
- The app must use the Google Calendar API and OAuth2 authentication flow.
- The app must use serverless functions (AWS lambda is preferred) for the authorization server
instead of using a traditional server.
- The app’s code must be hosted in a Git repository on GitHub.
- The app must work on the latest versions of Chrome, Firefox, Safari, Edge, and Opera, as well
as on IE11.
- The app must display well on all screen sizes (including mobile and tablet) widths of 1920px
and 320px.
- The app must pass Lighthouse’s PWA checklist.
- The app must work offline or in slow network conditions with the help of a service worker.
- Users may be able to install the app on desktop and add the app to their home screen on
mobile.
- The app must be deployed on GitHub Pages.
- The app must implement an alert system using an OOP approach to show information to the
user.
- The app must make use of data visualization.
- The app must be covered by tests with a coverage rate >= 90%.
- The app must be monitored using an online performance monitoring tool.

# Features
In this Meet App users are able to
- Filter Events by City.
- Show/Hide Event Details.
- Specify Number of Events.
- Use the App When Offline.
- Add an App Shortcut to the Home Screen.
- Display Charts Visualizing Event Details.


## FEATURE 1: Filter events by city.

User story:
As a user, I want to be able to filter events based on the city so that I can see a list of events happening in that particular city.

Scenarios:
[1]: Display all upcoming events when no city is searched.
Given that the user hasn't searched for any city, when they open the app, they should see a list of all upcoming events.

[2]: Show suggestions while searching for a city.
When the user starts typing in the city textbox on the main page, they should see a list of suggested cities that match their input.

[3]: Select a city from the suggested list.
While the user is typing in the city textbox, if the list of suggested cities is displayed, they can select a city from that list. Once a city is selected, the city textbox should be updated accordingly, and the list of suggestions should disappear. The user should then receive a list of upcoming events in the selected city.

## FEATURE 2: Show/Hide event details.

User Story:
As a user, I want the ability to show or hide event details so that I can access information about events I'm interested in.

Scenarios:
[1]: Default collapse of event elements.
When the user selects their chosen city to browse, the list of events in that city should be collapsed by default.

[2]: Expand an event to view its details.
If the user chooses an event they are interested in, they should be able to click on it to expand and view its details.

[3]: Collapse an event to hide its details.
If the user has opened an event and no longer needs to see the details, they should be able to click on the event again to collapse and hide the details.

## FEATURE 3: Specify the number of events.

User Story:
As a user, I want the ability to specify the number of events displayed so that I can control the quantity of events shown.

Scenarios:
[1]: Default number of events is 32.
When the user doesn't specify a number of events to display in a city and selects a city to view events, the default number of events shown should be 32.

[2]: Change the number of displayed events.
Once the user has selected a city and received the default number of events, they should have the option to adjust the quantity of displayed events according to their preference.

## FEATURE 4: Offline app usage.

User Story:
As a user, I want to be able to use the app even when I don't have an internet connection, so that I can access event information offline.

Scenarios:
[1]: Display cached data without an internet connection.
If the user loses internet connection but still accesses the app, the cached data stored within the app should remain accessible.

[2]: Show error message when settings are changed offline.
If the user changes their settings (city, time range) within the app while offline and then opens the app again or returns from the settings screen, an error message should be displayed, informing the user that changes have been made while offline.

## FEATURE 5: Data Visualization

User Story:
As a user, I want to be able to view a chart that presents the number of upcoming events in each city.

Scenarios:
[1]: Display a chart showing the number of upcoming events in each city.
When the user hasn't selected a specific city and wants to compare the number of events between cities, they should have access to a chart that displays the respective number of upcoming events in each city.


# Built with
- React
- AWS Lambda

## Serverless
The "Meet" app is using an API provided by Google Calendar that will be used for retrieving data about upcoming events based on a user's location. Therefore, I have created a serverless function to generate an authorization token using the OAuth framework, which will determine that my app users are authorized to see the event data from the Google API.
Written with Node/Express as Lambda functions, my backend server logic is hosted on AWS and handles requests that come from my React frontend.


## Dependencies
- `react` to use the react library
- `react-bootstrap` to use the react version of bootstrap modules
- `react-dom` to use as entry point to the DOM, intended to be paired with `react`
- `Jest` as JS testing framework
- `testing-library` as React testing framework
- `AWS Lamda` as backend server logic
- `atatus-spa` as browser monitoring service
- `recharts` for data visualization

