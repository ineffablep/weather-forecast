import angular from 'angular';

function autoCity () {
  return {
    restrict: 'A',
    link: function postLink(scope, element) {

      var options = {
        types: ['(cities)']
      };
      var scopeSup = scope;
      var autocomplete = new google.maps.places.Autocomplete(element[0], options);
      google.maps.event.addListener(autocomplete, 'place_changed', function () {
        var place = autocomplete.getPlace();
        scopeSup.home.search.lat = place.geometry.location.lat();
        scopeSup.home.search.lng = place.geometry.location.lng();
        scopeSup.home.search.city = place.formatted_address;
        scopeSup.$apply();
      });

    }
  };
}

export default angular.module('directives.autoCity', [])
    .directive('autoCity', autoCity)
    .name;
