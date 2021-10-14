Feature: Automation for retail website

  Background: Automates login and navigate to dashboard of Retail Website
    Given Admin is on login page
    When Admin enters username and password
    And Admin clicks on login button
    Then Admin goes to dashboard
    And Admin clicks on menu
    And Admin clicks on Reports
    Then Admin goes to repots section
    And Admin clicks on Sales
    Then Admin goes to Sales section

  Scenario Outline: Verify dates for Order section
    When Admin clicks on order
    Then Admin is redirected to order report section
    And Admin clicks on StartDate field
    And Admin give "<startdate>" in startdate field
    And Admin clicks on EndDate field
    And Admin give "<enddate>" in enddate field
    Then Admin clicks on filter
    And Admin checks the result table for order report

    Examples: 
      | startdate  | enddate    |
      | 2021-10-22 | 2021-11-26 |

  Scenario: Verify the Drop down fields for Order section
    When Admin clicks on order section
    Then Admin is on   order report section
    When Admin clicks on Groupby field
    And Admin choose option from drop down menu
    And Admin clicks on Otherstatus field
    And Admin choose options
    Then Admin hit filter button
    And checks if there is any result showing for order table

  Scenario Outline: Verify dates for Tax section
    When Admin clicks on tax
    Then Admin is redirected to tax report section
    And Admin clicks on StartDate field of tax report
    And Admin give "<startdate>" in startdate field of tax report
    And Admin clicks on EndDate field of tax report
    And Admin give "<enddate>" in enddate field of tax report
    Then Admin clicks on filter of tax report page
    And Admin checks the result table for tax report

    Examples: 
      | startdate | enddate   |
      | 2021-9-23 | 2021-10-5 |

  Scenario: Verify the Drop down fields for tax section
    When Admin clicks on tax section
    Then Admin is on  tax report section
    When Admin clicks on Groupby field of tax report
    And Admin choose option from drop down menu of tax report
    And Admin clicks on Otherstatus field of tax report
    And Admin choose options of tax report
    Then Admin hit filter button of tax report page
    And checks if there is any result showing for order table of tax report

  Scenario Outline: Verify dates for Shipping  section
    When Admin clicks on shipping
    Then Admin is redirected to shipping report section
    And Admin clicks on StartDate field of shipping report
    And Admin give "<startdate>" in startdate field of shipping report
    And Admin clicks on EndDate field  of shipping report
    And Admin give "<enddate>" in enddate field of shipping report
    Then Admin clicks on filter of shipping report page
    And Admin checks the result table for order report  of shipping report

    Examples: 
      | startdate  | enddate    |
      | 2021-08-22 | 2021-10-10 |

  Scenario: Verify the Drop down fields for Shipping section
    When Admin clicks on shipping section
    Then Admin is on   shipping report section
    When Admin clicks on Groupby field of shipping report
    And Admin choose option from drop down menu of shipping report
    And Admin clicks on Otherstatus field of shipping report
    And Admin choose options of shipping report
    Then Admin hit filter button of shipping report page
    And checks if there is any result showing for order table  of shipping report
