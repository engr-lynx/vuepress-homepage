Feature: Home Page
  I want to get to the home page
  
  @focus
  Scenario: Opening the home page
    Given I open the home page
    Then I see "Harry Potter" in the title
