/*jslint node: true*/
var now = new Date();
var fs = require('fs');
var shell = require('shelljs');
var pad = require('pad-number');
var Cucumber = require('cucumber');
var reporter = require('cucumber-html-reporter');


var hooks = function () {
    "use strict";

    var uniqueDirectory = now.getFullYear() + '-' + pad((now.getMonth() + 1),2) + '-'  + pad(now.getDate(),2) + "-" + pad((now.getHours()),2) + "." +  pad((now.getMinutes()),2);
    var jsonReports = process.cwd() + '/reports/' + uniqueDirectory + '/json';
    var htmlReports = process.cwd() + '/reports/' + uniqueDirectory + '/html';
    var targetJson = jsonReports + '/cucumber_report.json';

    // Create the directories
    shell.mkdir('-p', jsonReports);
    shell.mkdir('-p', htmlReports);

    this.registerHandler('BeforeFeature', { timeout: 20 * 2000 }, function (event) {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        browser.manage().timeouts().setScriptTimeout(80000);
        return browser.get(browser.params.baseUrlName);
    });

    this.After({ timeout: 2 * 5000 }, function (scenario, callback) {
      if (scenario.isFailed())
      {
        browser.sleep(500);
        browser.takeScreenshot().then(function(buffer) {
            var currDate = new Date();
            var stream = fs.createWriteStream(htmlReports+'/Exception '+currDate.getDate()+'_'+(currDate.getMonth()+1)+'_'+currDate.getFullYear()+'_'+currDate.getHours()+'_'+currDate.getMinutes()+'.png');
            stream.write(new Buffer(buffer, 'base64'));
            stream.end();
        });
      }
      else {
        callback();
        // Below line should be ENABLED only if we run multiple tests with same tag name.
        // return browser.get(envName);
      }

    });

    var cucumberReporteroptions = {
        name: "Emirates Sample Automation Scripts",
        brandTitle: "Emirates Test Results",
        theme: 'bootstrap',
        jsonFile: jsonReports + '/cucumber_report.json',
        output: htmlReports + '/cucumber_reporter.html',
        reportSuiteAsScenarios: true,
        storeScreenshots: false
    };

    var JsonFormatter = Cucumber.Listener.JsonFormatter();
    JsonFormatter.log = function (string) {
        if (!fs.existsSync(jsonReports)) {
            fs.mkdirSync(jsonReports);
        }
        try {
            fs.writeFileSync(targetJson, string);
            reporter.generate(cucumberReporteroptions);
        }
        catch (err) {
            if (err) {
                console.log('Failed to save cucumber test results to json file.');
                console.log(err);
            }
        }
    };
    this.registerListener(JsonFormatter);

};

module.exports = hooks;
