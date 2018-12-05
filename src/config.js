
exports.config = {
    baseUrl: 'http://localhost:4444/wd/hub',
    seleniumAddress: 'http://localhost:4444/wd/hub',

    getPageTimeout: 20000,

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: ['features/**/emirates.feature'],
    ignoreUncaughtExceptions: true,
    restartBrowserBetweenTests: false,

    cucumberOpts: {
        require: [ 'step_definitions/**/*.js', './support/*.js'],
        tags: ['@UI'],
        strict: true,
        'format-options': '{"colorsEnabled": true}',
        format: ['pretty']
    },
    // increase this value if application is slow
    // this is an extended wait for element to load
    params: {
       elementwait: 1200000,
        baseUrlName: 'https://test.fly10.emirates.com'
   },

};
