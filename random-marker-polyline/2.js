function initialize() {
  var mapDiv = document.getElementById('map-canvas');
  var map = new google.maps.Map(mapDiv, {
    center: new google.maps.LatLng(37.4419, -122.1419),
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  google.maps.event.addListenerOnce(map, 'bounds_changed', function() {
    for (var i = 0; i < 20; i++) {
      new google.maps.Marker({
        position: randomLatLng(map.getBounds()),
        map: map
      });
    }
  });
}

function randomLatLng(bounds) {
  var sw = bounds.getSouthWest();
  var ne = bounds.getNorthEast();

  var latDelta = sw.lat() - ne.lat();
  var lngDelta = sw.lng() - ne.lng();

  var lat = ne.lat() + Math.random() * latDelta;
  var lng = ne.lng() + Math.random() * lngDelta;

  return new google.maps.LatLng(lat, lng);
}

