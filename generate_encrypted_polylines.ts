//var directions_api_url = 
//https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood&key=YOUR_API_KEY;
import {SpeedVanLocation} from './speed_van_location';
import {GOOGLE_API_KEY} from './maps_api';
import {Client, ClientOptions, DirectionsRequest} from "@googlemaps/google-maps-services-js";

var locationData: SpeedVanLocation[] = require('./all_speed_van_locations.json');
const api_key: string = GOOGLE_API_KEY;
var maps_client = new Client({});

function retrieveEncrytpedPolyines() {
   maps_client.directions({
      params: {
         origin: [locationData[0].start_latitude, locationData[0].start_longtitude],
         destination: [locationData[0].end_latitude, locationData[0].end_longtitude],
         mode: 'driving'
      },timeout: 1000
   }).then (r => {})
   maps_client.elevation({
     params: {
       locations: [{ lat: 45, lng: -110 }],
       key: api_key
     },
     timeout: 1000 // milliseconds
   })
   .then(r => {
     console.log(r.data.results[0].elevation);
   })
   .catch(e => {
     console.log(e);
   });
}

retrieveEncrytpedPolyines();


