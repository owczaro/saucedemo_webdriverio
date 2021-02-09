exports.config = {
    runner: 'local',
    specs: ['./tests/*.js'],
    maxInstances: 10,
    capabilities: [
        {
            maxInstances: 5,
            browserName: 'chrome',
            acceptInsecureCerts: true,
        },
    ],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        require: ['@babel/register'],
        timeout: 60000,
    },
};
