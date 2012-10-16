basePath = '../';

files = [
  ANGULAR_SCENARIO,
  ANGULAR_SCENARIO_ADAPTER,
  'e2e/*-e2e.js'
];

autoWatch = true;

browsers = ['Chrome'];

singleRun = false;

proxies = {
  '/': 'http://localhost:8000/'
};

urlRoot = '/__testacular/';

junitReporter = {
  outputFile: 'test_out/e2e.xml',
  suite: 'e2e'
};
