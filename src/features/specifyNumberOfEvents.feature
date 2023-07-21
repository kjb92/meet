Feature: Specify number of events
  Scenario: When user hasn’t specified a number, 32 is the default number
    Given the user has not specified a number of events to be listed
    When a list of events is returned to the user
    Then the number of events input value is set to “32“
    And the number of displayed events equals to “32“ as well.

  Scenario: User can change the number of events they want to see
    Given the user wants to change the amount of events being displayed
    When the user enters a new number of events (such as “10“)
    Then the new number of displayed events changes and equals to “10“ as well. 