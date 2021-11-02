var expect=require('chai').expect;
var { Given, When, Then } = require('@cucumber/cucumber');
var {browser,promise} = require('protractor');
var hpObj=require('../PageObjects/HomePagePO.ts');
var ifirmVerObj=require('../PageObjects/CCHIFirmVersionPagePO.ts');


Given('I will login to alphaglobalCA application',  async function() {

    await browser.get("https://alphaglobalca.cchifirmdev.com/2/login/#/fe/dashboard");
    await browser.sleep(1000);
    console.log('Successfully navigated to alphaglobal site');

    await hpObj.LoginToApplication('automate01','test@123');
    console.log('Successfully logged in with User: automate01');
    return;
});


When('I will click on WK image', async function() {   
    await browser.sleep(5000);
    await browser.refresh()
    await browser.sleep(1000);
    await ifirmVerObj.ClickOnWKImage()
    await browser.sleep(1000);
    await browser.waitForAngular();
    return;

});

Then('I will validate CCH Ifirm Version details', async function() {
  
    await ifirmVerObj.VerifyVersion()
  
    //expect(version).to.contain('CCH iFirm 2018.30.48455.0');
    await browser.sleep(1000);
    await browser.waitForAngular();
    await ifirmVerObj.CloseDialog();
    await browser.sleep(1000);
     return;
    });



