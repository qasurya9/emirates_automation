var EmHomePage = function() {

    // Elements
    this.departure_text_field     = element(by.name("Departure airport"));
    this.arrival_text_field       = element(by.name("Arrival airport"));
    this.departing_date           = element(by.xpath(""));

};

module.exports = EmHomePage;