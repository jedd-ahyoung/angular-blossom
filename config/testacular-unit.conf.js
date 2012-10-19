basePath = '../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'app/lib/angular.js',
  'app/lib/angular-mocks.js',

  'app/application/application.js',

  'app/*/*-constants.js',
  'app/*/*-service.js',
  'app/*/*-controller.js',
  'app/*/*-filter.js',
  'app/*/*-directive.js',
  'app/*/*-unit.js'

];

autoWatch = true;

browsers = ['Chrome'];

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};
