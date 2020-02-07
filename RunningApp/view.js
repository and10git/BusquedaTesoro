function bootstrap(){
	var ungsLocation = [-34.521819, -58.700949];
	var map = L.map('mapid').setView(ungsLocation, 15);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//Circle
var Circle = L.circle(ungsLocation,{
	color: "#0000AA",
	fillColor: "#0000CC",
	fillOpacity: 0.2,
	radius: 300
}).addTo(map);

//Polygon
L.polygon([
    L.latLng(-34.522336, -58.701813),
    L.latLng(-34.523627, -58.700139),
    L.latLng(-34.521939, -58.698497),
    L.latLng(-34.520613, -58.699924),
]).addTo(map);

/*L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();
*/
}
$(bootstrap);