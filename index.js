import { Loader } from "@googlemaps/js-api-loader";

var routeDisplay = new function(){
  let self = this;
  self.directionsService;
  self.directionsRenderer;
  self.map;

  self.origin;
  self.dest;

  self.setup = function(map){
    self.directionsService = new google.maps.DirectionsService();
    self.directionsRenderer = new google.maps.DirectionsRenderer({preserveViewport: true});
    self.map = map;
    self.directionsRenderer.setMap(map);
  }

  self.setPoints = function(origin, dest){
    self.origin = origin;
    self.dest = dest;
  }

  self.render = function(){
    self.directionsService.route({
      origin: self.origin,
      destination: self.dest,
      travelMode: google.maps.TravelMode.WALKING
    }, function(response, status){
      if(status === "OK"){
        self.directionsRenderer.setDirections(response);
      }
      else{
        console.log('Directions request failed due to ' + status);
      }
    })
  }
}

async function initMap(){
  const center = {lat: 39.254752, lng: -76.710837};
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: center,
    minZoom: 16.5,
    maxZoom: 25,
    restriction: {
      latLngBounds: {
        north: center["lat"] + 0.009,
        south: center["lat"] - 0.0105,
        east: center["lng"] + 0.01,
        west: center["lng"] - 0.01,
      },
    }
  });
  routeDisplay.setup(map);
  let markers = [];

  const input = document.getElementById("pac-input");
  const searchBox = new google.maps.places.SearchBox(input);

  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(input);
  map.addListener("bounds_changed", () => {
    searchBox.setBounds(map.getBounds());
  });

  searchBox.addListener("places_changed", () => {
      const places = searchBox.getPlaces();
      if(places.length === 0) return;

      markers.forEach((marker) => {
        marker.setMap(null);
      });
      markers = [];

      places.forEach((place) => {
        if(!place.geometry || !place.geometry.location){
          return;
        }

        const marker = new google.maps.Marker({
          map,
          position: place.geometry.location,
          title: place.name
        });
        const infoWindow = new google.maps.InfoWindow({
          content: Math.random() + "",
        });
        marker.addListener("click", () => {
          infoWindow.open({
            map: map,
            anchor: marker
          })
        });

        markers.push(marker);
      });
  });
}

const loader = new Loader({
  apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  version: "weekly",
  libraries: ["maps", "places", "marker"]
});

loader.load().then(async () => {
  initMap();
}).catch((e) => {
  console.log("Failed to load api " + e);
});
