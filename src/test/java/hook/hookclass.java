package hook;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class hookclass {
public static  WebDriver driver;
@Before 
public void initialization() throws InterruptedException
{
	System.setProperty("webdriver.chrome.driver", "C:\\Users\\Sudipta\\Documents\\capgi_JS_workspace\\capgeminiDay1\\chromedriver.exe"); 

	driver=new ChromeDriver();
	driver.get("http://retailm1.upskills.in/admin");
	driver.manage().window().maximize();
}

@After

public void close()
{
	driver.quit();
}
}
