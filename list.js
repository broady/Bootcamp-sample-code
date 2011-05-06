function initialize() {
  var demos = ['random-marker-polyline'];
  var p = document.getElementById('map-canvas');
  p.innerHTML = '<h2>Demos:</h2>';

  for (var i = 0, demo; demo = demos[i]; i++) {
    p.innerHTML += '<a href="?' + demo + '/1.js">' + demo + '</a><br>';
  }
}
