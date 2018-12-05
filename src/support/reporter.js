var reporter = require('cucumberjs-allure-reporter');
var fs = require('fs');
var xmlReports = process.cwd() + '/reports/allure_results';

var createXmlDir = function () {
    if (!fs.existsSync(xmlReports)) {
        fs.mkdir(xmlReports);
    }
} ();

reporter.config(
    {
        targetDir: xmlReports
    }
);
module.exports = reporter;
