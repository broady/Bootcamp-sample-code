function initialize() {
  var mapDiv = document.getElementById('map-canvas');
  var map = new google.maps.Map(mapDiv, {
    center: new google.maps.LatLng(37.4419, -122.1419),
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var markers = [];
  var path = [];
  var line = new google.maps.Polyline;

  var addMarkerButton = document.createElement('button');
  document.body.appendChild(addMarkerButton);
  addMarkerButton.innerHTML = 'Add markers';

  google.maps.event.addDomListener(addMarkerButton, 'click', function() {
    path = [];
    for (var i = 0; i < 20; i++) {
      var latLng = randomLatLng(map.getBounds());
      path.push(latLng);

      if (!markers[i]) {
        markers[i] = new google.maps.Marker;
      }

      markers[i].setOptions({
        position: latLng,
        map: map
      });
    }
  });

  var togglePoly = document.createElement('button');
  document.body.appendChild(togglePoly);
  togglePoly.innerHTML = 'Toggle poly';

  google.maps.event.addDomListener(togglePoly, 'click', function() {
    line.setPath(path);
    line.setMap(line.getMap() ? null: map);
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

