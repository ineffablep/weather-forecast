import home from '../js/controllers/home/index';

describe('Controller: Home', function(){
  let $controller;
  beforeEach(angular.mock.module(home));

  beforeEach(angular.mock.inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  it('Constructor Initialised', function() {
    let ctrl = $controller('HomeController');
    expect(ctrl.notFoundError).toBe(false);
  });
});
