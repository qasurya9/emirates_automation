// Import required files
var EmHomePage = require('../pages/emirates_home_page');

var user_travel_steps = function () {

    this.Given(/^that Bill has decided to check available flights$/, function () {
        // Write code here that turns the phrase above into concrete actions
        console.log('that Bill has decided to check available flights')
    });

    this.When(/^he looks at a return trip from DXB to LHR leaving one week from now$/, function () {
        // Write code here that turns the phrase above into concrete actions
        console.log('he looks at a return trip from DXB to LHR leaving one week from now')
    });

    this.Then(/^he should be shown the cheapest return ticket from DXB to LHR$/, function () {
        // Write code here that turns the phrase above into concrete actions
        console.log('he should be shown the cheapest return ticket from DXB to LHR')
    });

};

module.exports = user_travel_steps;