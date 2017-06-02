function googleMaps() {
	var mapProp = {
		center: new google.maps.LatLng(37.724984, -122.157662),
		zoom: 15,
		disabledDefaultUI: true,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	var map = new google.maps.Map(document.getElementById('googleMaps'), mapProp);
	var marker1 = new google.maps.Marker({
		position: mapProp.center
	});
	marker1.setMap(map);

	var marker2 = new google.maps.Marker({
		position: new google.maps.LatLng(37.724984, -122.157662)
	});
	marker2.setMap(map);

	google.maps.event.addListener(marker1, 'click', function() {
		map.setZoom(19);
		map.setCenter(marker1.getPosition(0));
	});

	google.maps.event.addListener(marker2, 'click', function() {
		map.setZoom(19);
		map.setCenter(marker2.getPosition(0));
	})
}

google.maps.event.addDomListener(window, 'load', googleMaps);