var expect=require('chai').expect;
var { Given, When, Then } = require('@cucumber/cucumber');
var {browser,promise} = require('protractor');
var hpObj=require('../PageObjects/HomePagePO.ts');
var ifirmleftMenuObj=require('../PageObjects/IFirmLeftMenuPagePO.ts');


Given('I will login to the AngularJS iFirm Application',  async function() {

    await browser.get("https://qcregressionca.cchifirmdev.com/2/login/#/fe/dashboard");
    await browser.sleep(1000);
    console.log('Successfully navigated to qcregressionca site');

    await hpObj.LoginToApplication('harshi','P@ssword123');
   
    await browser.sleep(1000);
    await browser.waitForAngular();
    await hpObj.SkipMFAPage();
    await browser.sleep(1000);
    return;
   
    
});


When('I will select the menu from Left Menu', async function() {   
  
   
    await browser.sleep(5000);
    await browser.refresh()
    await browser.sleep(5000);
    await ifirmleftMenuObj.NavigateToMenuSection()
    await browser.sleep(5000);
    await browser.waitForAngular();
      return;

});

Then('I will validate the title of that particular Page', async function() {
  
        await ifirmleftMenuObj.VerifyPageTitle()
        await browser.sleep(5000);
        await browser.waitForAngular(); 
        await browser.sleep(5000);
    //expect(title).to.contain('jobs');
         return;
   
    });



