Feature:  Emirates Features

  Background:
  # Add any prequisites - if needed for all scenarios in this feature file

  @UI
  Scenario: Bill wants to travel from DXB to LHR
    Given that Bill has decided to check available flights
    When he looks at a return trip from DXB to LHR leaving one week from now
    Then he should be shown the cheapest return ticket from DXB to LHR