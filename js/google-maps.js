function initMap() {
	var element = document.getElementById('map');
	var options = {
		zoom: 15,
		center: {lat: 40.789557, lng: -73.942014}
	};
	var myMap = new google.maps.Map(element, options);
	var markers = [
		{
			coordinates: {lat: 40.789557, lng: -73.942014},
		}
	];
	for(var i = 0; i < markers.length; i++) {
		addMarker(markers[i]);
	}
	function addMarker(properties) {
		var marker = new google.maps.Marker({
			position: properties.coordinates,
			map: myMap
		});
	}
}