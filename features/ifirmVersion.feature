Feature: Validate CCH IFirm Global Version Details

        @FunctionalTest
        Scenario: Scenario Outline name
                Given I will login to alphaglobalCA application
                When I will click on WK image
                Then I will validate CCH Ifirm Version details

                Examples:
                        | username | password       | version                   |
                        | harshi   | P@ssword123    | CCH iFirm 2018.30.48455.0 |
                   