var EmHomePage = function() {

    // Elements
    this.departure_text_field     = element(by.name("Departure airport"));
    this.arrival_text_field       = element(by.name("Arrival airport"));
    this.departing_date           = element(by.xpath(""));
    
    // Also add required methods to perform opeations on this page
    // All these methods can be called in required step definitions based on requirement.

};

module.exports = EmHomePage;
