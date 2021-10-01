Feature: Launch Versions
  As a user
  I want to be able to view the revisions history

  @NR-24
  Scenario: Return a message when there are no revisions
    Given I have saved a post
    When I attempt to view the revisions
    Then I see that there is no content to process
