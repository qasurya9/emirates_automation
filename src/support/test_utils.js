
var TestUtils = function() {

  this.until = protractor.ExpectedConditions;

  this.selectOption = function(selector, item){
    var selectList, desiredOption;

    selectList = this.findElement(selector);
    selectList.click();

    selectList.findElements(protractor.By.tagName('option'))
        .then(function findMatchingOption(options){
            options.some(function(option){
                option.getText().then(function doesOptionMatch(text){
                    if (text.includes(item)){
                        desiredOption = option;
                        return true;
                    }
                });
            });
        })
        .then(function clickOption(){
            if (desiredOption){
                desiredOption.click();
            }
        });
  }

  this.waitForThePageLoad = function(){
      browser.driver.sleep(defaultWaitTime);
  };

  this.waitForThePageLoadWithTime = function(time){
    browser.driver.sleep(time);
  }

  this.scrollIntoView = function(el) {
    browser.executeScript(function(el){el.scrollIntoView();},el.getWebElement);
  };

  this.scrollUp = function() {
    browser.executeScript('window.scrollTo(0,0);').then(function(){
        console.log('--- Scrolled up ---');
      });
  };

  this.getRandomStringWithNum= function()
  {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (var i = 0; i < 6; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

  this.getRandomString= function()
  {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = 0; i < 6; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

  this.getRandomStrongPassword = function() {
      var strValues="abcdefg1234567890";
      var strPassword = "";
      var strTmp;
      for (var i=0;i<5;i++) {
          strTmp = strValues.charAt(Math.round(strValues.length*Math.random()));
          strPassword = strPassword + strTmp;
      }
      strPassword = strPassword + "$A1@1";
      return strPassword;
  }

  this.getRandomEmail = function() {
      var strValues="abcdefg12345";
      var strEmail = "";
      var strTmp;
      for (var i=0;i<10;i++) {
          strTmp = strValues.charAt(Math.round(strValues.length*Math.random()));
          strEmail = strEmail + strTmp;
      }
      strTmp = "";
      strEmail = strEmail + "@";
      for (var j=0;j<8;j++) {
          strTmp = strValues.charAt(Math.round(strValues.length*Math.random()));
          strEmail = strEmail + strTmp;
      }
      strEmail = strEmail + ".com"
      return strEmail;
  }

  this.getRandomWebSite = function() {
    var strValues="abcdefg12345";
    var strEmail = "";
    var strTmp;
    for (var i=0;i<10;i++) {
        strTmp = strValues.charAt(Math.round(strValues.length*Math.random()));
        strEmail = strEmail + strTmp;
    }
    strTmp = "";
    // strEmail = strEmail + "@";
    for (var j=0;j<8;j++) {
        strTmp = strValues.charAt(Math.round(strValues.length*Math.random()));
        strEmail = strEmail + strTmp;
    }
    strEmail = strEmail + ".com"
    return strEmail;
 }

 /**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
 this.getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }


};

module.exports = TestUtils;
