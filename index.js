var lat; //to fetch latitude
var long; //to fetch longitude
var x; //to fetch element with ID="location"
mapboxgl.accessToken =
	'pk.eyJ1Ijoic3dhcmFqdHJpdmVkaSIsImEiOiJja3lsbjJmamYwMG9jMndwODFqbG5vaXFjIn0.n2hD-RnDq3YHE6kcczMmeg';
navigator.geolocation.getCurrentPosition(
	(pos) => {
		//in case of success
		let map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [ pos.coords.longitude, pos.coords.latitude ],
			zoom: 13
		});
		lat = pos.coords.latitude;
		long = pos.coords.longitude;
		x = document.getElementById('location');
		x.innerHTML = 'Latitude : ' + lat + '<br>Longitude : ' + long;
		let marker = new mapboxgl.Marker() //adding a marker to the map
			.setLngLat([ pos.coords.longitude, pos.coords.latitude ])
			.addTo(map);
	},
	(err) => {
		//in case of error
		x = document.getElementById('location');
		x.innerHTML = 'Kindly Check Your Browser';
	},
	{
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0
	}
);
