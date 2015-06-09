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
    .setValue('#username','wrongusr')
    .setValue('#password','wrongpwd!')
    .click('button')
    .pause(5000)
    .end();