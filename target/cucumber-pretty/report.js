$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Feature/RRF.feature");
formatter.feature({
  "name": "Automation for retail website",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify dates for Order section",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Admin clicks on order",
  "keyword": "When "
});
formatter.step({
  "name": "Admin is redirected to order report section",
  "keyword": "Then "
});
formatter.step({
  "name": "Admin clicks on StartDate field",
  "keyword": "And "
});
formatter.step({
  "name": "Admin give \"\u003cstartdate\u003e\" in startdate field",
  "keyword": "And "
});
formatter.step({
  "name": "Admin clicks on EndDate field",
  "keyword": "And "
});
formatter.step({
  "name": "Admin give \"\u003cenddate\u003e\" in enddate field",
  "keyword": "And "
});
formatter.step({
  "name": "Admin clicks on filter",
  "keyword": "Then "
});
formatter.step({
  "name": "Admin checks the result table for order report",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "startdate",
        "enddate"
      ]
    },
    {
      "cells": [
        "2021-10-22",
        "2021-11-26"
      ]
    }
  ]
});
formatter.background({
  "name": "Automates login and navigate to dashboard of Retail Website",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Admin is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "RRD.admin_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters username and password",
  "keyword": "When "
});
formatter.match({
  "location": "RRD.admin_enters_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.admin_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin goes to dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "RRD.admin_goes_to_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on menu",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.admin_clicks_on_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on Reports",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.admin_clicks_on_Reports()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin goes to repots section",
  "keyword": "Then "
});
formatter.match({
  "location": "RRD.admin_goes_to_repots_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on Sales",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.admin_clicks_on_Sales()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin goes to Sales section",
  "keyword": "Then "
});
formatter.match({
  "location": "RRD.admin_goes_to_Sales_section()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify dates for Order section",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Admin clicks on order",
  "keyword": "When "
});
formatter.match({
  "location": "RRD.admin_clicks_on_order()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin is redirected to order report section",
  "keyword": "Then "
});
formatter.match({
  "location": "RRD.admin_is_redirected_to_order_report_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on StartDate field",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.admin_clicks_on_StartDate_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin give \"2021-10-22\" in startdate field",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.admin_give_in_startdate_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on EndDate field",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.admin_clicks_on_EndDate_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin give \"2021-11-26\" in enddate field",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.admin_give_in_enddate_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on filter",
  "keyword": "Then "
});
formatter.match({
  "location": "RRD.admin_clicks_on_filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin checks the result table for order report",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.admin_checks_the_result_table_for_order_report()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Automates login and navigate to dashboard of Retail Website",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Admin is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "RRD.admin_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters username and password",
  "keyword": "When "
});
formatter.match({
  "location": "RRD.admin_enters_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.admin_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin goes to dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "RRD.admin_goes_to_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on menu",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.admin_clicks_on_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on Reports",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.admin_clicks_on_Reports()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin goes to repots section",
  "keyword": "Then "
});
formatter.match({
  "location": "RRD.admin_goes_to_repots_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on Sales",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.admin_clicks_on_Sales()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin goes to Sales section",
  "keyword": "Then "
});
formatter.match({
  "location": "RRD.admin_goes_to_Sales_section()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the Drop down fields for Order section",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Admin clicks on order section",
  "keyword": "When "
});
formatter.match({
  "location": "RRD.admin_clicks_on_order_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on   order report section",
  "keyword": "Then "
});
formatter.match({
  "location": "RRD.admin_is_on_order_report_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on Groupby field",
  "keyword": "When "
});
formatter.match({
  "location": "RRD.admin_clicks_on_Groupby_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin choose option from drop down menu",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.admin_choose_option_from_drop_down_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on Otherstatus field",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.admin_clicks_on_Otherstatus_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin choose options",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.admin_choose_options()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin hit filter button",
  "keyword": "Then "
});
formatter.match({
  "location": "RRD.admin_hit_filter_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "checks if there is any result showing for order table",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.checks_if_there_is_any_result_showing_for_order_table()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify dates for Tax section",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Admin clicks on tax",
  "keyword": "When "
});
formatter.step({
  "name": "Admin is redirected to tax report section",
  "keyword": "Then "
});
formatter.step({
  "name": "Admin clicks on StartDate field of tax report",
  "keyword": "And "
});
formatter.step({
  "name": "Admin give \"\u003cstartdate\u003e\" in startdate field of tax report",
  "keyword": "And "
});
formatter.step({
  "name": "Admin clicks on EndDate field of tax report",
  "keyword": "And "
});
formatter.step({
  "name": "Admin give \"\u003cenddate\u003e\" in enddate field of tax report",
  "keyword": "And "
});
formatter.step({
  "name": "Admin clicks on filter of tax report page",
  "keyword": "Then "
});
formatter.step({
  "name": "Admin checks the result table for tax report",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "startdate",
        "enddate"
      ]
    },
    {
      "cells": [
        "2021-9-23",
        "2021-10-5"
      ]
    }
  ]
});
formatter.background({
  "name": "Automates login and navigate to dashboard of Retail Website",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Admin is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "RRD.admin_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters username and password",
  "keyword": "When "
});
formatter.match({
  "location": "RRD.admin_enters_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.admin_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin goes to dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "RRD.admin_goes_to_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on menu",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.admin_clicks_on_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on Reports",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.admin_clicks_on_Reports()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin goes to repots section",
  "keyword": "Then "
});
formatter.match({
  "location": "RRD.admin_goes_to_repots_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on Sales",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.admin_clicks_on_Sales()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin goes to Sales section",
  "keyword": "Then "
});
formatter.match({
  "location": "RRD.admin_goes_to_Sales_section()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify dates for Tax section",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Admin clicks on tax",
  "keyword": "When "
});
formatter.match({
  "location": "RRD.admin_clicks_on_tax()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin is redirected to tax report section",
  "keyword": "Then "
});
formatter.match({
  "location": "RRD.admin_is_redirected_to_tax_report_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on StartDate field of tax report",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.admin_clicks_on_StartDate_field_of_tax_report()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin give \"2021-9-23\" in startdate field of tax report",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.admin_give_in_startdate_field_of_tax_report(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on EndDate field of tax report",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.admin_clicks_on_EndDate_field_of_tax_report()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin give \"2021-10-5\" in enddate field of tax report",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.admin_give_in_enddate_field_of_tax_report(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on filter of tax report page",
  "keyword": "Then "
});
formatter.match({
  "location": "RRD.admin_clicks_on_filter_of_tax_report_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin checks the result table for tax report",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.admin_checks_the_result_table_for_tax_report()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Automates login and navigate to dashboard of Retail Website",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Admin is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "RRD.admin_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters username and password",
  "keyword": "When "
});
formatter.match({
  "location": "RRD.admin_enters_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.admin_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin goes to dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "RRD.admin_goes_to_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on menu",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.admin_clicks_on_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on Reports",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.admin_clicks_on_Reports()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin goes to repots section",
  "keyword": "Then "
});
formatter.match({
  "location": "RRD.admin_goes_to_repots_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on Sales",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.admin_clicks_on_Sales()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin goes to Sales section",
  "keyword": "Then "
});
formatter.match({
  "location": "RRD.admin_goes_to_Sales_section()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the Drop down fields for tax section",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Admin clicks on tax section",
  "keyword": "When "
});
formatter.match({
  "location": "RRD.admin_clicks_on_tax_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on  tax report section",
  "keyword": "Then "
});
formatter.match({
  "location": "RRD.admin_is_on_tax_report_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on Groupby field of tax report",
  "keyword": "When "
});
formatter.match({
  "location": "RRD.admin_clicks_on_Groupby_field_of_tax_report()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin choose option from drop down menu of tax report",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.admin_choose_option_from_drop_down_menu_of_tax_report()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on Otherstatus field of tax report",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.admin_clicks_on_Otherstatus_field_of_tax_report()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin choose options of tax report",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.admin_choose_options_of_tax_report()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin hit filter button of tax report page",
  "keyword": "Then "
});
formatter.match({
  "location": "RRD.admin_hit_filter_button_of_tax_report_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "checks if there is any result showing for order table of tax report",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.checks_if_there_is_any_result_showing_for_order_table_of_tax_report()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify dates for Shipping  section",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Admin clicks on shipping",
  "keyword": "When "
});
formatter.step({
  "name": "Admin is redirected to shipping report section",
  "keyword": "Then "
});
formatter.step({
  "name": "Admin clicks on StartDate field of shipping report",
  "keyword": "And "
});
formatter.step({
  "name": "Admin give \"\u003cstartdate\u003e\" in startdate field of shipping report",
  "keyword": "And "
});
formatter.step({
  "name": "Admin clicks on EndDate field  of shipping report",
  "keyword": "And "
});
formatter.step({
  "name": "Admin give \"\u003cenddate\u003e\" in enddate field of shipping report",
  "keyword": "And "
});
formatter.step({
  "name": "Admin clicks on filter of shipping report page",
  "keyword": "Then "
});
formatter.step({
  "name": "Admin checks the result table for order report  of shipping report",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "startdate",
        "enddate"
      ]
    },
    {
      "cells": [
        "2021-08-22",
        "2021-10-10"
      ]
    }
  ]
});
formatter.background({
  "name": "Automates login and navigate to dashboard of Retail Website",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Admin is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "RRD.admin_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters username and password",
  "keyword": "When "
});
formatter.match({
  "location": "RRD.admin_enters_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.admin_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin goes to dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "RRD.admin_goes_to_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on menu",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.admin_clicks_on_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on Reports",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.admin_clicks_on_Reports()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin goes to repots section",
  "keyword": "Then "
});
formatter.match({
  "location": "RRD.admin_goes_to_repots_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on Sales",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.admin_clicks_on_Sales()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin goes to Sales section",
  "keyword": "Then "
});
formatter.match({
  "location": "RRD.admin_goes_to_Sales_section()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify dates for Shipping  section",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Admin clicks on shipping",
  "keyword": "When "
});
formatter.match({
  "location": "RRD.admin_clicks_on_shipping()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin is redirected to shipping report section",
  "keyword": "Then "
});
formatter.match({
  "location": "RRD.admin_is_redirected_to_shipping_report_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on StartDate field of shipping report",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.admin_clicks_on_StartDate_field_of_shipping_report()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin give \"2021-08-22\" in startdate field of shipping report",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.admin_give_in_startdate_field_of_shipping_report(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on EndDate field  of shipping report",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.admin_clicks_on_EndDate_field_of_shipping_report()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin give \"2021-10-10\" in enddate field of shipping report",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.admin_give_in_enddate_field_of_shipping_report(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on filter of shipping report page",
  "keyword": "Then "
});
formatter.match({
  "location": "RRD.admin_clicks_on_filter_of_shipping_report_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin checks the result table for order report  of shipping report",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.admin_checks_the_result_table_for_order_report_of_shipping_report()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Automates login and navigate to dashboard of Retail Website",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Admin is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "RRD.admin_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters username and password",
  "keyword": "When "
});
formatter.match({
  "location": "RRD.admin_enters_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.admin_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin goes to dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "RRD.admin_goes_to_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on menu",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.admin_clicks_on_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on Reports",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.admin_clicks_on_Reports()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin goes to repots section",
  "keyword": "Then "
});
formatter.match({
  "location": "RRD.admin_goes_to_repots_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on Sales",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.admin_clicks_on_Sales()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin goes to Sales section",
  "keyword": "Then "
});
formatter.match({
  "location": "RRD.admin_goes_to_Sales_section()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the Drop down fields for Shipping section",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Admin clicks on shipping section",
  "keyword": "When "
});
formatter.match({
  "location": "RRD.admin_clicks_on_shipping_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on   shipping report section",
  "keyword": "Then "
});
formatter.match({
  "location": "RRD.admin_is_on_shipping_report_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on Groupby field of shipping report",
  "keyword": "When "
});
formatter.match({
  "location": "RRD.admin_clicks_on_Groupby_field_of_shipping_report()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin choose option from drop down menu of shipping report",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.admin_choose_option_from_drop_down_menu_of_shipping_report()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on Otherstatus field of shipping report",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.admin_clicks_on_Otherstatus_field_of_shipping_report()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin choose options of shipping report",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.admin_choose_options_of_shipping_report()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin hit filter button of shipping report page",
  "keyword": "Then "
});
formatter.match({
  "location": "RRD.admin_hit_filter_button_of_shipping_report_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "checks if there is any result showing for order table  of shipping report",
  "keyword": "And "
});
formatter.match({
  "location": "RRD.checks_if_there_is_any_result_showing_for_order_table_of_shipping_report()"
});
formatter.result({
  "status": "passed"
});
});