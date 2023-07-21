Feature: Show/hide an event's details
  Scenario: An event element is collapsed by default
    Given the list of events has loaded
    And the number of events input field is not empty
    When the user opens the app
    Then all event detail elements will be collapsed.

  Scenario: User can expand an event to see its details
    Given the list of events has loaded
    When the user clicks on “show details“
    Then the event element will expand to show more details about the event.

  Scenario: User can collapse an event to hide its details
    Given the user has all the information they need about an event
    When the user clicks on “hide details“
    Then the event element will collapse and hide the event details.
