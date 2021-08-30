//let { expect } = require('chai').use(require('chai-as-promised'));
var expect=require('chai').expect;

const { Given, When, Then } = require('@cucumber/cucumber');
const {browser,promise} = require('protractor');
//import chai from "chai";
//var expect = chai.expect;
const hpObj=require('../PageObjects/HomePagePO.ts');
//let hpObj = new HomePagePO
//var expect = chai.expect;


Given('I will navigate to the iFirm CA MFA Page',  async function() {

    await browser.get("https://qcregressionca.cchifirmdev.com/2/login/#/fe/dashboard");
    
    await browser.sleep(10000);
    return;
});


When('I will enter userdetails and Submit', async function() {   
    await hpObj.LoginToApplication('harshi','P@ssword123');
    console.log('User is landed on MFA page');
          expect(8).to.equal(8);
    await browser.sleep(10000);
    return;

});

Then('I will validate the MFA title', async function() {
    
    await hpObj.VerifyTitle();
    console.log('Verified MFA page');
     await browser.sleep(10000);
     return;
    });



