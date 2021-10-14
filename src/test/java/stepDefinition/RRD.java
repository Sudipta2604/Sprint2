package stepDefinition;

import static org.junit.Assert.fail;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class RRD {

	WebDriver driver;
	@Given("Admin is on login page")
	public void admin_is_on_login_page() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Sudipta\\Documents\\capgi_JS_workspace\\capgeminiDay1\\chromedriver.exe"); 

		driver=new ChromeDriver();
		driver.get("http://retailm1.upskills.in/admin");
		driver.manage().window().maximize();
		System.out.println("User is on login page");
	}

	@When("Admin enters username and password")
	public void admin_enters_username_and_password() {
		try {
			driver.findElement(By.name("username")).sendKeys("admin");
			
			driver.findElement(By.name("password")).sendKeys("admin@123");
		}
		catch(Exception e)
		{
			System.out.println("Not able to enter credentials" +e);
Assert.fail();
	}
	}

	@When("Admin clicks on login button")
	public void admin_clicks_on_login_button() {
		try {
			  driver.findElement(By.xpath("//i[@class='fa fa-key']")).click();
		  }
		  catch(Exception e)
		  {
			  System.out.println("Not able to login" +e);
		  }
	}

	@Then("Admin goes to dashboard")
	public void admin_goes_to_dashboard() {
		System.out.println("User is on Dashboard");
	}

	@Then("Admin clicks on menu")
	public void admin_clicks_on_menu() {
		try {
			  driver.findElement(By.xpath("//a[@id='button-menu']")).click();
		  }
		  catch(Exception e)
		  {
			  System.out.println("Not able to click on menu" +e);
			  }
	}

	@Then("Admin clicks on Reports")
	public void admin_clicks_on_Reports() {
		try {
			  driver.findElement(By.xpath("//span[contains(text(),'Reports')]")).click();
		  }
		  catch(Exception e)
		  {
			  System.out.println("Not able to click on reports" +e);
		  }
	}

	@Then("Admin goes to repots section")
	public void admin_goes_to_repots_section() {
		System.out.println("User is on reports section");
	}

	@Then("Admin clicks on Sales")
	public void admin_clicks_on_Sales() {
		try {
			  driver.findElement(By.xpath("//a[contains(text(),'Sales')]")).click();
			  Thread.sleep(2000);
		  }
		  catch(Exception e)
		  {
			  System.out.println("Not able to click on sales" +e);
		  }
	}

	@Then("Admin goes to Sales section")
	public void admin_goes_to_Sales_section() {
		System.out.println("User is on sales section");
	}

	@When("Admin clicks on order")
	public void admin_clicks_on_order() {
		try {
			  driver.findElement(By.xpath("//*[@id=\"menu-report\"]/ul/li[1]/ul/li[1]/a")).click();
		  }
		  catch(Exception e)
		  {
			  System.out.println("Not able to click on order" +e);
		  }
	}

	@Then("Admin is redirected to order report section")
	public void admin_is_redirected_to_order_report_section() {
		String title = driver.getTitle();
		System.out.println(title);
		if(title.equals("Sales Report"))
		{
			System.out.println("It is the  correct page");
		}
		else
		{
			System.out.println("Test Case failed");
		}
		 System.out.println("User is on Order Report section");
	}

	@Then("Admin clicks on StartDate field")
	public void admin_clicks_on_StartDate_field() {
		try {
			  driver.findElement(By.xpath("//input[@id='input-date-start']")).click();
			  Thread.sleep(1000);
			  driver.findElement(By.xpath("//input[@id='input-date-start']")).clear();
			  Thread.sleep(2000);
		  }
		  catch(Exception e)
		  {
			  System.out.println("Not able to click on startdate" +e);
		  }
	}
	@Then("Admin give {string} in startdate field")
	public void admin_give_in_startdate_field(String startdate) {
		try {
			
			driver.findElement(By.xpath("//input[@id=\"input-date-start\"]")).sendKeys(startdate);
			
			Thread.sleep(3000);
		}
		catch(Exception e)
		{
			System.out.println("not able to give start date");
			 }
	}

	@Then("Admin clicks on EndDate field")
	public void admin_clicks_on_EndDate_field() {
		try {
			  driver.findElement(By.xpath("//input[@id=\"input-date-end\"]")).click();
				Thread.sleep(1000);
				  driver.findElement(By.xpath("//input[@id=\"input-date-end\"]")).clear();
				Thread.sleep(3000);
		  }
		  catch(Exception e)
		  {
			  System.out.println("Not able to click on end date" +e);
		  }
	}

	@Then("Admin give {string} in enddate field")
	public void admin_give_in_enddate_field(String enddate) {
		try {
			
			driver.findElement(By.xpath("//input[@id=\"input-date-end\"]")).sendKeys(enddate);
			
			Thread.sleep(3000);
		}
		catch(Exception e)
		{
			 System.out.println("Not able to give end date" +e);
			 }
	}

	@Then("Admin clicks on filter")
	public void admin_clicks_on_filter() {
		try {
			driver.findElement(By.id("button-filter")).click();
		  }
		  catch(Exception e)
		  {
			  System.out.println("Not able to click on filter" +e);
		  }
	}
	
	
	@Then("Admin checks the result table for order report")
	public void admin_checks_the_result_table_for_order_report() {
	 
		try
		{
			String text = driver.findElement (By.xpath("//*[@id=\"content\"]/div[2]/div/div[2]/div[3]/div[2]")).getText();
			String no = text.substring(18, 19);
			int i = Integer.parseInt(no);
			if(i>0)
			{
				System.out.println(+ i + "pages are there in the table for entered dates");
			}
			else
			{
				System.out.println("no results for these dates");
			}
		}
		catch(Exception e)
		{
			System.out.println(e);
		}
	
	}



	@When("Admin clicks on order section")
	public void admin_clicks_on_order_section() {
		try {
			  driver.findElement(By.xpath("//*[@id=\"menu-report\"]/ul/li[1]/ul/li[1]/a")).click();
		  }
		  catch(Exception e)
		  {
			  System.out.println("Not able to click on order" +e);
		  }
	}
	
	@Then("Admin is on   order report section")
	public void admin_is_on_order_report_section() {
		String title1 = driver.getTitle();
		System.out.println(title1);
		if(title1.equals("Sales Report"))
		{
			System.out.println("It is the  correct page");
		}
		else
		{
			System.out.println("Test Case failed");
		}
		 System.out.println("User is on Order Rport section");
	}

	@When("Admin clicks on Groupby field")
	public void admin_clicks_on_Groupby_field() {
		try {
			  driver.findElement(By.xpath("//*[@id=\"input-group\"]")).click();
		  }
		  catch(Exception e)
		  {
			  System.out.println("Not able to click on group by field" +e);
		  }
	}

	@When("Admin choose option from drop down menu")
	public void admin_choose_option_from_drop_down_menu() {
		try {
		driver.findElement(By.xpath("//*[@id=\"input-group\"]/option[1]")).click();
		Thread.sleep(1000);
		driver.findElement(By.xpath("//*[@id=\"input-group\"]/option[2]")).click();
		Thread.sleep(1000);
		driver.findElement(By.xpath("//*[@id=\"input-group\"]/option[3]")).click();
		Thread.sleep(1000);
		driver.findElement(By.xpath("//*[@id=\"input-group\"]/option[4]")).click();
		Thread.sleep(1000);
	}
		catch(Exception e)
		{
			 System.out.println("Not able to choose options from dropdown" +e);
		}
	}
	@When("Admin clicks on Otherstatus field")
	public void admin_clicks_on_Otherstatus_field() {
	 try {
		 driver.findElement(By.xpath("//*[@id=\"input-status\"]")).click();
	 }
	 catch(Exception e)
	 {
		 System.out.println("Not able to click on other status field" +e);
	 }
	}

	@When("Admin choose options")
	public void admin_choose_options() {
		try {
			driver.findElement(By.xpath("//*[@id=\"input-status\"]/option[5]")).click();
			Thread.sleep(1000);
			driver.findElement(By.xpath("//*[@id=\"input-status\"]/option[14]")).click();
			Thread.sleep(1000);
			driver.findElement(By.xpath("//*[@id=\"input-status\"]/option[8]")).click();
			Thread.sleep(1000);
			driver.findElement(By.xpath("//*[@id=\"input-status\"]/option[1]")).click();
			Thread.sleep(1000);
		}
			catch(Exception e)
			{
				 System.out.println("Not able to choose options from dropdown" +e);
			}
	}

	@Then("Admin hit filter button")
	public void admin_hit_filter_button() {
		try {
			driver.findElement(By.id("button-filter")).click();
		  }
		  catch(Exception e)
		  {
			  System.out.println("Not able to click on filter" +e);
		  }
	}

	@Then("checks if there is any result showing for order table")
	public void checks_if_there_is_any_result_showing_for_order_table() {
		try
		{
			String text = driver.findElement (By.xpath("//*[@id=\"content\"]/div[2]/div/div[2]/div[3]/div[2]")).getText();
			String no = text.substring(18, 19);
			int i = Integer.parseInt(no);
			if(i>0)
			{
				System.out.println(+ i + "pages are there in the table for entered dates");
			}
			else
			{
				System.out.println("no results for these dates");
			}
		}
		catch(Exception e)
		{
			System.out.println(e);
		}
	}	



	
	

		@When("Admin clicks on tax")
		public void admin_clicks_on_tax() {
			try {
				  driver.findElement(By.xpath("//*[@id=\"menu-report\"]/ul/li[1]/ul/li[2]/a")).click();
			  }
			  catch(Exception e)
			  {
				  System.out.println("Not able to click on tax" +e);
			  }
		}

		@Then("Admin is redirected to tax report section")
		public void admin_is_redirected_to_tax_report_section() {
			String title2 = driver.getTitle();
			System.out.println(title2);
			if(title2.equals("Tax Report"))
			{
				System.out.println("It is the  correct page");
			}
			else
			{
				System.out.println("Test Case failed");
			}
			 System.out.println("User is on Tax  Report section");
		}

		@Then("Admin clicks on StartDate field of tax report")
		public void admin_clicks_on_StartDate_field_of_tax_report() {
			try {
				  driver.findElement(By.xpath("//*[@id=\"input-date-start\"]")).click();
				  Thread.sleep(1000);
				  driver.findElement(By.xpath("//*[@id=\"input-date-start\"]")).clear();
				  Thread.sleep(2000);
			  }
			  catch(Exception e)
			  {
				  System.out.println("Not able to click on startdate" +e);
			  }
		}

		@Then("Admin give {string} in startdate field of tax report")
		public void admin_give_in_startdate_field_of_tax_report(String startdate) {
			try {
				
				driver.findElement(By.xpath("//*[@id=\"input-date-start\"]")).sendKeys(startdate);
				
				Thread.sleep(3000);
			}
			catch(Exception e)
			{
				System.out.println("not able to give start date");
				 }
		}

		@Then("Admin clicks on EndDate field of tax report")
		public void admin_clicks_on_EndDate_field_of_tax_report() {
			try {
				  driver.findElement(By.xpath("//*[@id=\"input-date-end\"]")).click();
					Thread.sleep(1000);
					  driver.findElement(By.xpath("//*[@id=\"input-date-end\"]")).clear();
					Thread.sleep(3000);
			  }
			  catch(Exception e)
			  {
				  System.out.println("Not able to click on end date" +e);
			  }
		}

		@Then("Admin give {string} in enddate field of tax report")
		public void admin_give_in_enddate_field_of_tax_report(String enddate) {
			try {
				
				driver.findElement(By.xpath("//*[@id=\"input-date-end\"]")).sendKeys(enddate);
				
				Thread.sleep(3000);
			}
			catch(Exception e)
			{
				 System.out.println("Not able to give end date" +e);
				 }
		}

		@Then("Admin clicks on filter of tax report page")
		public void admin_clicks_on_filter_of_tax_report_page() {
			try {
				driver.findElement(By.xpath("//*[@id=\"button-filter\"]")).click();
			  }
			  catch(Exception e)
			  {
				  System.out.println("Not able to click on filter" +e);
				 
			  }
		}

		@Then("Admin checks the result table for tax report")
		public void admin_checks_the_result_table_for_tax_report() {
			try
			{
				String text = driver.findElement (By.xpath("//*[@id=\"content\"]/div[2]/div/div[2]/div[3]/div[2]")).getText();
				String no = text.substring(18, 19);
				int i = Integer.parseInt(no);
				if(i>0)
				{
					System.out.println(+ i + "pages are there in the table for entered dates");
				}
				else
				{
					System.out.println("no results for these dates");
				}
			}
			catch(Exception e)
			{
				System.out.println(e);
				
			}
		}

		
		
		
		
		@When("Admin clicks on tax section")
		public void admin_clicks_on_tax_section() {
			try {
				  driver.findElement(By.xpath("//*[@id=\"menu-report\"]/ul/li[1]/ul/li[2]/a")).click();
			  }
			  catch(Exception e)
			  {
				  System.out.println("Not able to click on tax" +e);
				
			  }
		}

		@Then("Admin is on  tax report section")
		public void admin_is_on_tax_report_section() {
			String title3 = driver.getTitle();
			System.out.println(title3);
			if(title3.equals("Sales Report"))
			{
				System.out.println("It is the  correct page");
			}
			else
			{
				System.out.println("Test Case failed");
			}
			 System.out.println("User is on Order Rport section");
		}

		@When("Admin clicks on Groupby field of tax report")
		public void admin_clicks_on_Groupby_field_of_tax_report() {
			try {
				  driver.findElement(By.xpath("//*[@id=\"input-group\"]")).click();
			  }
			  catch(Exception e)
			  {
				  System.out.println("Not able to click on group by field" +e);
			
			  }
		}

		@When("Admin choose option from drop down menu of tax report")
		public void admin_choose_option_from_drop_down_menu_of_tax_report() {
			try {
				driver.findElement(By.xpath("//*[@id=\"input-group\"]/option[1]")).click();  
				Thread.sleep(1000);
				driver.findElement(By.xpath("//*[@id=\"input-group\"]/option[2]")).click();
				Thread.sleep(1000);
				driver.findElement(By.xpath("//*[@id=\"input-group\"]/option[3]")).click();
				Thread.sleep(1000);
				driver.findElement(By.xpath("//*[@id=\"input-group\"]/option[4]")).click();
				Thread.sleep(1000);
			}
				catch(Exception e)
				{
					 System.out.println("Not able to choose options from dropdown" +e);
					 
				}
		}

		@When("Admin clicks on Otherstatus field of tax report")
		public void admin_clicks_on_Otherstatus_field_of_tax_report() {
			try {
				 driver.findElement(By.xpath("//*[@id=\"input-status\"]")).click();
			 }
			 catch(Exception e)
			 {
				 System.out.println("Not able to click on other status field" +e);
				 
			 }
		}

		@When("Admin choose options of tax report")
		public void admin_choose_options_of_tax_report() {
			try {
				driver.findElement(By.xpath("//*[@id=\"content\"]/div[2]/div/div[2]/div[1]/div/div[2]/div[2]/select/option[9]")).click();
				Thread.sleep(1000);
				driver.findElement(By.xpath("//*[@id=\"content\"]/div[2]/div/div[2]/div[1]/div/div[2]/div[2]/select/option[4]")).click();
				Thread.sleep(1000);
				driver.findElement(By.xpath("//*[@id=\"content\"]/div[2]/div/div[2]/div[1]/div/div[2]/div[2]/select/option[12]")).click();
				Thread.sleep(1000);
				driver.findElement(By.xpath("//*[@id=\"content\"]/div[2]/div/div[2]/div[1]/div/div[2]/div[2]/select/option[1]")).click();
				Thread.sleep(1000);
			}
				catch(Exception e)
				{
					 System.out.println("Not able to choose options from dropdown" +e);
					 
				}
		}

		@Then("Admin hit filter button of tax report page")
		public void admin_hit_filter_button_of_tax_report_page() {
			try {
				driver.findElement(By.xpath("//*[@id=\"button-filter\"]")).click();
			  }
			  catch(Exception e)
			  {
				  System.out.println("Not able to click on filter" +e);
			
			  }
		}

		@Then("checks if there is any result showing for order table of tax report")
		public void checks_if_there_is_any_result_showing_for_order_table_of_tax_report() {
			try
			{
				String text = driver.findElement (By.xpath("//*[@id=\"content\"]/div[2]/div/div[2]/div[3]/div[2]")).getText();
				String no = text.substring(18, 19);
				int i = Integer.parseInt(no);
				if(i>0)
				{
					System.out.println(+ i + "pages are there in the table for entered dates");
				}
				else
				{
					System.out.println("no results for these dates");
				}
			}
			catch(Exception e)
			{
				System.out.println(e);
			}
		}

		
		
		
		@When("Admin clicks on shipping")
		public void admin_clicks_on_shipping() {
			try {
				  driver.findElement(By.xpath("//*[@id=\"menu-report\"]/ul/li[1]/ul/li[3]/a")).click();
			  }
			  catch(Exception e)
			  {
				  System.out.println("Not able to click on shipping" +e);
			
			  }
		}

		@Then("Admin is redirected to shipping report section")
		public void admin_is_redirected_to_shipping_report_section() {
			String title4 = driver.getTitle();
			System.out.println(title4);
			if(title4.equals("Shipping Report"))
			{
				System.out.println("It is the  correct page");
			}
			else
			{
				System.out.println("Test Case failed");
			}
			 System.out.println("User is on Shipping Report section");
		}

		@Then("Admin clicks on StartDate field of shipping report")
		public void admin_clicks_on_StartDate_field_of_shipping_report() {
			try {
				  driver.findElement(By.xpath("//*[@id=\"input-date-start\"]")).click();
				  Thread.sleep(1000);
				  driver.findElement(By.xpath("//*[@id=\"input-date-start\"]")).clear();
				  Thread.sleep(2000);
			  }
			  catch(Exception e)
			  {
				  System.out.println("Not able to click on startdate" +e);
				 
			  }
		}

		@Then("Admin give {string} in startdate field of shipping report")
		public void admin_give_in_startdate_field_of_shipping_report(String startdate) {
			try {
				
				driver.findElement(By.xpath("//*[@id=\"input-date-start\"]")).sendKeys(startdate);
				
				Thread.sleep(3000);
			}
			catch(Exception e)
			{
				System.out.println("not able to give start date");
			
				 }
		}

		@Then("Admin clicks on EndDate field  of shipping report")
		public void admin_clicks_on_EndDate_field_of_shipping_report() {
			try {
				  driver.findElement(By.xpath("//*[@id=\"input-date-end\"]")).click();
					Thread.sleep(1000);
					  driver.findElement(By.xpath("//*[@id=\"input-date-end\"]")).clear();
					Thread.sleep(3000);
			  }
			  catch(Exception e)
			  {
				  System.out.println("Not able to click on end date" +e);
				
			  }
		}

		@Then("Admin give {string} in enddate field of shipping report")
		public void admin_give_in_enddate_field_of_shipping_report(String enddate) {
			try {
				
				driver.findElement(By.xpath("//*[@id=\"input-date-end\"]")).sendKeys(enddate);
				
				Thread.sleep(3000);
			}
			catch(Exception e)
			{
				 System.out.println("Not able to give end date" +e);
				 
				 }
		}

		@Then("Admin clicks on filter of shipping report page")
		public void admin_clicks_on_filter_of_shipping_report_page() {
			try {
				driver.findElement(By.xpath("//*[@id=\"button-filter\"]")).click();
			  }
			  catch(Exception e)
			  {
				  System.out.println("Not able to click on filter" +e);
				  
			  }
		}

		@Then("Admin checks the result table for order report  of shipping report")
		public void admin_checks_the_result_table_for_order_report_of_shipping_report() {
		
			try
			{
				String text = driver.findElement (By.xpath("//*[@id=\"content\"]/div[2]/div/div[2]/div[3]/div[2]")).getText();
				String no = text.substring(18, 19);
				int i = Integer.parseInt(no);
				if(i>0)
				{
					System.out.println(+ i + "pages are there in the table for entered dates");
				}
				else
				{
					System.out.println("no results for these dates");
				}
			}
			catch(Exception e)
			{
				System.out.println(e);
			
			}
		}

		
		
		@When("Admin clicks on shipping section")
		public void admin_clicks_on_shipping_section() {
			try {
				  driver.findElement(By.xpath("//*[@id=\"menu-report\"]/ul/li[1]/ul/li[3]/a")).click();
			  }
			  catch(Exception e)
			  {
				  System.out.println("Not able to click on shipping" +e);
		
			  }
		}

		@Then("Admin is on   shipping report section")
		public void admin_is_on_shipping_report_section() {
			String title5 = driver.getTitle();
			System.out.println(title5);
			if(title5.equals("Shipping Report"))
			{
				System.out.println("It is the  correct page");
			}
			else
			{
				System.out.println("Test Case failed");
			}
			 System.out.println("User is on Shipping Report section");
		}

		@When("Admin clicks on Groupby field of shipping report")
		public void admin_clicks_on_Groupby_field_of_shipping_report() {
			try {
				  driver.findElement(By.xpath("//*[@id=\"input-group\"]")).click();
			  }
			  catch(Exception e)
			  {
				  System.out.println("Not able to click on group by field" +e);
				 
			  }
		}

		@When("Admin choose option from drop down menu of shipping report")
		public void admin_choose_option_from_drop_down_menu_of_shipping_report() {
			try {
				driver.findElement(By.xpath("//*[@id=\"input-group\"]/option[1]")).click();
				Thread.sleep(1000);
				driver.findElement(By.xpath("//*[@id=\"input-group\"]/option[2]")).click();
				Thread.sleep(1000);
				driver.findElement(By.xpath("//*[@id=\"input-group\"]/option[3]")).click();
				Thread.sleep(1000);
				driver.findElement(By.xpath("//*[@id=\"input-group\"]/option[4]")).click();
				Thread.sleep(1000);
			}
				catch(Exception e)
				{
					 System.out.println("Not able to choose options from dropdown" +e);
					
				}
		}

		@When("Admin clicks on Otherstatus field of shipping report")
		public void admin_clicks_on_Otherstatus_field_of_shipping_report() {
			try {
				 driver.findElement(By.xpath("//*[@id=\"input-status\"]")).click();
			 }
			 catch(Exception e)
			 {
				 System.out.println("Not able to click on other status field" +e);
				
			 }
		}

		@When("Admin choose options of shipping report")
		public void admin_choose_options_of_shipping_report() {
			try {
				driver.findElement(By.xpath("//*[@id=\"input-status\"]/option[7]")).click();
				Thread.sleep(1000);
				driver.findElement(By.xpath("//*[@id=\"input-status\"]/option[14]")).click();
				Thread.sleep(1000);
				driver.findElement(By.xpath("//*[@id=\"input-status\"]/option[8]")).click();
				Thread.sleep(1000);
				driver.findElement(By.xpath("//*[@id=\"input-status\"]/option[1]")).click();
				Thread.sleep(1000);
			}
				catch(Exception e)
				{
					 System.out.println("Not able to choose options from dropdown" +e);
			
				}
		}

		@Then("Admin hit filter button of shipping report page")
		public void admin_hit_filter_button_of_shipping_report_page() {
			try {
				driver.findElement(By.xpath("//*[@id=\"button-filter\"]")).click();
			  }
			  catch(Exception e)
			  {
				  System.out.println("Not able to click on filter" +e);
				
			  }
		}

		@Then("checks if there is any result showing for order table  of shipping report")
		public void checks_if_there_is_any_result_showing_for_order_table_of_shipping_report() {
			try
			{
				String text = driver.findElement (By.xpath("//*[@id=\"content\"]/div[2]/div/div[2]/div[3]/div[2]")).getText();
				String no = text.substring(18, 19);
				int i = Integer.parseInt(no);
				if(i>0)
				{
					System.out.println(+ i + "pages are there in the table for entered dates");
				}
				else
				{
					System.out.println("no results for these dates");
				}
			}
			catch(Exception e)
			{
				System.out.println(e);
			
			}
		}
}