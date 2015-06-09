var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'firefox'
    }
};
webdriverio
    .remote(options)
    .init()
    .url('https://demo.oneflowcloud.com/')
    .setValue('#username','tech.challenge')
    .setValue('#password','challenge!')
    .click('button')
    .pause(5000)
    .click('#menu2-dropdown')
    .pause(5000)
    .end();