"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.config = void 0;
var protractor_1 = require("protractor");
var reporter = require('cucumber-html-reporter');
exports.config = {
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
        ],
        tags: '@FunctionalTest'
    },
    onPrepare: function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            //await browser.waitForAngularEnabled(false);
            protractor_1.browser.manage().window().maximize();
            return [2 /*return*/];
        });
    }); },
    onComplete: function () { return __awaiter(void 0, void 0, void 0, function () {
        var options;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    options = {
                        theme: 'bootstrap',
                        //jsonFile: 'test/report/cucumber_report.json',
                        //output: 'test/report/cucumber_report.html',
                        //reportSuiteAsScenarios: true,
                        //scenarioTimestamp: true,
                        // launchReport: true,
                        //metadata: {
                        "App Version": "2021.30.4",
                        "Test Environment": "QCREGRESSIONCA",
                        "Browser": "Chrome  94.0.4606.71",
                        "Platform": "Windows 10",
                        "Parallel": "Scenarios",
                        "Executed": "Local"
                        // }
                    };
                    //reporter.generate(options);
                    return [4 /*yield*/, protractor_1.browser.close()];
                case 1:
                    //reporter.generate(options);
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); }
};
