var TestUtils = require('../support/test_utils');

var EmHomePage = function() {

    var test_utils = new TestUtils();

    // Elements
    this.departure_text_field           = element(by.xpath("//div[@id='panel0']//input[contains(@name, 'Departure')]"));
    this.departure_auto_suggestion_link = element(by.xpath("//div[@class='dropdown']//div[contains(@aria-label, 'DXB')]"))
    this.arrival_text_field             = element(by.xpath("//div[@id='panel0']//input[contains(@name, 'Arrival')]"));
    this.arrival_auto_suggestion_link   = element(by.xpath("//div[@class='dropdown']//div[contains(@aria-label, 'LHR')]"))
    this.search_flights_btn             = element(by.xpath("//span[contains(text(), 'Search flights') and contains(@class, 'cta__text')]"));
    this.inbound_price_link             = element(by.xpath("//div[contains(@id, 'InBound')]//a[@data-value='price']"));

    // Actions
    this.clickOnDeparture = function(text) {
        this.departure_text_field.clear();
        this.departure_text_field.sendKeys(text);
        test_utils.waitForThePageLoadWithTime(2000);
        this.departure_auto_suggestion_link.click();
    };

    this.clickOnArrival = function(text) {
        this.arrival_text_field.clear();
        this.arrival_text_field.sendKeys(text);
        test_utils.waitForThePageLoadWithTime(2000);
        this.arrival_auto_suggestion_link.click();
    };

    this.clickOnDepartingDate = function () {
        var date = test_utils.nextWeekDate();
        element(by.xpath("//a[@data-string='"+date+"']")).click();
        test_utils.waitForThePageLoadWithTime(2000);
    }

    this.clickOnReturnDate = function () {
        var date = '1602019'; // as of now I am using this test data value
        element(by.xpath("//a[@data-string='"+date+"']")).click();
        test_utils.waitForThePageLoadWithTime(2000);

    }

    this.clickOnSearchBtn = function () {
        this.search_flights_btn.click();
    }

};

module.exports = EmHomePage;