module.exports = {
    rootUrl: 'http://localhost:9001/',
    gridUrl: 'http://127.0.0.1:4444/wd/hub',
    calibrate: false,
    browsers: {
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome',
                platform: "LINUX",
                version: "64.0.3282.0"
            }
        }
    }
};