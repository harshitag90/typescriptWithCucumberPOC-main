var expect=require('chai').expect;
var { Given, When, Then } = require('@cucumber/cucumber');
var {browser,promise} = require('protractor');
var hpObj=require('../PageObjects/HomePagePO.ts');



Given('I will navigate to the iFirm CA MFA Page',  async function() {

    await browser.get("https://qcregressionca.cchifirmdev.com/2/login/#/fe/dashboard");
    await browser.sleep(1000);
    return;
});


When('I will enter userdetails and Submit', async function() {   
   
    await hpObj.LoginToApplication('harshi','P@ssword123');
    console.log('User is landed on MFA page');
    await browser.sleep(1000);
    await browser.waitForAngular();
    return;

});

Then('I will validate the MFA title', async function() {
  
   
     await hpObj.VerifyTitle();
     console.log('Verified MFA page');
     await browser.sleep(1000);
     await browser.waitForAngular();
     await browser.sleep(1000);
     return;
    });



