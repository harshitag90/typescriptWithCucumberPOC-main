Feature: Validate left Menu Navigation of iFirm Application

        @FunctionalTest
         Scenario Outline: Validate Jobs navigation
                Given I will login to the AngularJS iFirm Application
                When I will select the menu from Left Menu
                Then I will validate the title of that particular Page

                Examples:
                      | username | password    | title          |
                      | harshi   | P@ssword123 | Team Directory |
                     