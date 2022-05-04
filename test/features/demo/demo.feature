Feature: Demo feature

    
    Scenario Outline: Run first demo feature
        Given Google page is opened
        When Search with <SearchItem>
        Then Click on first search result
        Then URL should match <ExpectedURL>


        Examples:
            | TestID  | SearchItem | ExpectedURL|
            | Value 1 | WDIO  | https://www.wdio.com/  |

