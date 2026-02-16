Feature: Login

    Scenario Outline: Successful Login with Valid Credentials
    Given I am on the login page
    When I input my username "<username>" and password "<password>"
    And I click the login button
    Then I should be logged in

Examples:
    | username | password |
    | Admin | admin123 |