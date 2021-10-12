import {browser, Config } from 'protractor';
var reporter = require('cucumber-html-reporter');


 export let config: Config = {

    //To start selenum server using a specific address
    seleniumAddress: 'http://localhost:4444/wd/hub',

    //To start / run tests on selenium server directly
    directConnect: true,

    //To use cucumber framework
    framework: 'custom',

    //Path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    //To use the specific browser
    capabilities: {
        browserName: 'chrome'
    },

    //To run tests on multiple browsers simultaneously
    // multiCapabilities: [{
    // 'browserName': 'firefox'
    // }, {
    // 'browserName': 'chrome'
    // }],

    //Relative Path to the feature files
    //specs: ['./features/homePage.feature'],
    specs: ['./features/ifirmVersion.feature'],

    //Relative path to create step definitions
    cucumberOpts: {
    
        // require: [
        //     './PageObjects/HomePagePO.ts',
        //     './StepDefinitions/HomePageTest.ts',
        //     './timeout.ts'
        // ] 
        require: [
            './PageObjects/CCHIFirmVersionPagePO.ts',
            './StepDefinitions/IFirmVersionTest.ts',
            './timeout.ts'
        ] 
        , 
        tags:'@FunctionalTest', //To run scenarios with this tag
    },

    onPrepare: async()=>
    {
       //await browser.waitForAngularEnabled(false);
        browser.manage().window().maximize();               
    },

    onComplete: async() => {
    var options = {
        theme: 'bootstrap',
        //jsonFile: 'test/report/cucumber_report.json',
        //output: 'test/report/cucumber_report.html',
        //reportSuiteAsScenarios: true,
        //scenarioTimestamp: true,
       // launchReport: true,
        //metadata: {
            "App Version":"2021.30.4",
            "Test Environment": "QCREGRESSIONCA",
            "Browser": "Chrome  94.0.4606.71",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Local"
       // }
    };

    //reporter.generate(options);
   await browser.close();    

    }
}
