Feature: Advanced Web Interactions

    
    Scenario Outline: Adwanced Demo Web Interactions
        Given Login inventory web app
        Then Inventory page should list <NumberOfProducts>
        Then Validate all products have valid price



        Examples:
            | TestID    | NumberOfProducts | 
            | INV_TC001 | 6                |

