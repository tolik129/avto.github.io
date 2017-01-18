var map;

var center_p = new google.maps.LatLng(55.66906586, 37.43179321);
var office_1 = new google.maps.LatLng(55.7353225, 37.6630835);
var office_2 = new google.maps.LatLng(55.6175188, 37.7156123);
var office_3 = new google.maps.LatLng(55.659953, 37.864999); // г. Котельники, Дзержинское шоссе, д. 6


var MY_MAPTYPE_ID = 'custom_style';


function initialize() {
	var featureOpts = [
	{
		"stylers": [
			{
				"hue": "#dd0d0d"
			}
		]
	},
	{
		"featureType": "road",
		"elementType": "labels",
		"stylers": [
			{
				"visibility": "off"
			}
		]
	},
	{
		"featureType": "road",
		"elementType": "geometry",
		"stylers": [
			{
				"lightness": 100
			},
			{
				"visibility": "simplified"
			}
		]
	}];
	

	var mapOptions = {
		zoom: 10,
		minZoom: 10,
		center: center_p,
		mapTypeControlOptions: {
			mapTypeIds: [google.maps.MapTypeId.ROADMAP,
				MY_MAPTYPE_ID
			]
		},
		mapTypeId: MY_MAPTYPE_ID,
		disableDefaultUI: true
	};

	map = new google.maps.Map(document.getElementById('map'), mapOptions);
	var styledMapOptions = {
		name: 'Custom Style'
	};

	var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
	map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

	var marker_1 = new google.maps.Marker({
		position: office_1,
		title: 'г. Москва, м. Пролетарская, ул. Марксистская, д. 34'
	});
	var content_1 = '<div class="baloon">' +
		'<p>г. Москва, м. Пролетарская, ул. Марксистская, д. 34</p>' +
		'</div>';
	var infowindow_1 = new google.maps.InfoWindow({
		content: content_1
  });
	marker_1.addListener('click', function() {
		infowindow_1.open(map, marker_1);
  });
	marker_1.setMap(map);
	
	
	var marker_2 = new google.maps.Marker({
		position: office_2,
		title: 'г. Москва, Каширское ш., 61'
	});
	var content_2 = '<div class="baloon">' +
		'<p>г. Москва, Каширское ш., 61</p>' +
		'</div>';
	var infowindow_2 = new google.maps.InfoWindow({
		content: content_2
  });
	marker_2.addListener('click', function() {
		infowindow_2.open(map, marker_2);
  });
	marker_2.setMap(map);
	
	
	var marker_3 = new google.maps.Marker({
		position: office_3,
		title: '14 км МКАД рядом с «МЕГА» Белая Дача	'
	});
	var content_3 = '<div class="baloon">' +
		'<p>г. Котельники, Дзержинское шоссе, д. 6</p>' +
		'</div>';
	var infowindow_3 = new google.maps.InfoWindow({
		content: content_3
  });
	marker_3.addListener('click', function() {
		infowindow_3.open(map, marker_3);
  });
	marker_3.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.addDomListener(window, 'resize', initialize);