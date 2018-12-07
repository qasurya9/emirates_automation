// Import required files
var EmHomePage = require('../pages/emirates_home_page');
var TestUtils = require('../support/test_utils');

var user_travel_steps = function () {

    var em_home_page = new EmHomePage();
    var test_utils = new TestUtils();

    this.Given(/^that Bill has decided to check available flights$/, function () {
        // No need add any code here, if you are running Emirates App from chrome browser and Mac platform.
        // Only add Search flights - option available - either tablet/mobile platforms.
        console.log('that Bill has decided to check available flights')
    });

    this.When(/^he looks at a return trip from "([^"]*)" to "([^"]*)" leaving one week from now$/, function (departure, arrival) {

        em_home_page.clickOnDeparture(departure);
        test_utils.waitForThePageLoadWithTime(2000);
        em_home_page.clickOnArrival(arrival);
        test_utils.waitForThePageLoadWithTime(2000);
        em_home_page.clickOnDepartingDate();
        test_utils.waitForThePageLoadWithTime(2000);
        em_home_page.clickOnReturnDate();
        test_utils.waitForThePageLoadWithTime(2000);
        em_home_page.clickOnSearchBtn();
        test_utils.waitForThePageLoadWithTime(10000);
        console.log('he looks at a return trip from DXB to LHR leaving one week from now')
    });

    this.Then(/^he should be shown the cheapest return ticket from DXB to LHR$/, function () {

        test_utils.scrollIntoViewAndClickElement(em_home_page.inbound_price_link);
        test_utils.waitForThePageLoadWithTime(12000);
        console.log('he should be shown the cheapest return ticket from DXB to LHR')
    });

};

module.exports = user_travel_steps;