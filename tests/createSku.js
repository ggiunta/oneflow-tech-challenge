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
    .pause(2000)
    .url('https://demo.oneflowcloud.com/sku/add')
    .windowHandleMaximize()
    .pause(2000)
    .setValue('[name=code]', Math.random().toString(36).substring(7))
    .setValue('[name=unitCost]', 'unitCost')
    .setValue('[name=maxItems]', 'maxItems')
    .pause(5000)
    .end();