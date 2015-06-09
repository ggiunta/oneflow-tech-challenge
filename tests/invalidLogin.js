var webdriverio = require('webdriverio');
var assert = require('assert');
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
    .title(function(err, res) {
        assert(res.value == 'OneFlow Connect - Login')
    })
    .end();