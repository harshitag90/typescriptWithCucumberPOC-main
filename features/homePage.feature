Feature: Validate IFirm Global MFA Page

        @FunctionalTest
        Scenario: Validate MFA title
                Given I will navigate to the iFirm CA MFA Page
                When I will enter userdetails and Submit
                Then I will validate the MFA title

                Examples:
                        | username | password       | title                       |
                        | harshi   | P@ssword123    | Multi-Factor Authentication |
                   