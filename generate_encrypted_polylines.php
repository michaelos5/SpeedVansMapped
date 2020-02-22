<?php
function retrieveEncrytpedPolyines($start_lat, $start_lng, $end_lat, $end_lng) {
	$API_KEY = "AIzaSyAaaJGUdN05Oh7FHXfZOYf74Ok6lGfI5XA";
	$url = "https://maps.googleapis.com/maps/api/directions/json?origin={$start_lat},{$start_lng}&destination={$end_lat},{$end_lng}&key={$API_KEY}";
		
	$resp_json  = file_get_contents($url);
	$resp = json_decode($resp_json, true);

    if($resp['status']=='OK'){
    	return $resp['routes'][0]['overview_polyline']['points'];
    } else {echo "ERROR: API RESPONSE  $resp[status]";};
}

$locationData = file_get_contents('../../dev_projects/SpeedVansMapped/all_speed_van_locations.json');
$export_json = array();
$jsonIterator = new RecursiveArrayIterator(json_decode($locationData, TRUE));

$count = 1;
$total_count = count($jsonIterator);
foreach ($jsonIterator as $value) {
	if(is_array($value)) {
		echo "Processing Speed Van Zone ${count}/${total_count}\n";
		$value['encrypted_polyline'] = retrieveEncrytpedPolyines($value['start_latitude'], $value['start_longtitude'], $value['end_latitude'], $value['end_longtitude']);
		$export_json[] = $value;
		$count = $count + 1;
		
	}
}

$fp = fopen('all_speed_van_locations_polyline.json', 'w');
fwrite($fp, json_encode($export_json, JSON_PRETTY_PRINT));
fclose($fp);
?>