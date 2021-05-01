Feature: Projects Page
  I want to get to the projects page
  
  @focus
  Scenario: Opening the projects page
    Given I open the projects page
    Then I see "Work" in the title
