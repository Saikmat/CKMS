import { Loader } from "@googlemaps/js-api-loader";
import * as destinations from "./destinations.js";

// Route display functionality
var routeDisplay = new function() {
  let self = this;
  self.directionsService;
  self.directionsRenderer;
  self.map;

  self.origin;
  self.dest;

  self.setup = function(map) {
    self.directionsService = new google.maps.DirectionsService();
    self.directionsRenderer = new google.maps.DirectionsRenderer({ preserveViewport: false });
    self.map = map;
    self.directionsRenderer.setMap(map);
  };

  self.setPoints = function(origin, dest) {
    self.origin = origin;
    self.dest = dest;
  };

  self.render = function() {
    self.directionsService.route({
      origin: self.origin,
      destination: self.dest,
      travelMode: google.maps.TravelMode.WALKING
    }, function(response, status) {
      if (status === "OK") {
        self.directionsRenderer.setDirections(response);
      } else {
        console.log('Directions request failed due to ' + status);
      }
    });
  };
};


function searchBoxInitialization(searchBox, markers, AdvancedMarkerElement, map) {
  searchBox.addListener("place_changed", () => {
    const place = searchBox.getPlace();
    console.log(place);
    markers.forEach((marker) => {
      marker.setMap(null);
    });
    markers = [];

    if (!place.geometry || !place.geometry.location) {
      return;
    }

    //Add the description if it exists
    let content = "<h1 style='font-family: \"Inter\", sans-serif;'>" + place.name + "</h1>";
    let desc = destinations.buildings.find(b => b.name === place.name);
    if(desc !== undefined){
      content += "<p>" + desc.description + "</p>";
    }

    const marker = new AdvancedMarkerElement({
      map,
      position: place.geometry.location,
    });
    const infoWindow = new google.maps.InfoWindow({
      content: content
    });
    marker.addListener("gmp-click", () => {
      infoWindow.open(map, marker)
    });
    markers.push(marker);
  });
}


function getMap(center) {
  return new google.maps.Map(document.getElementById("map"), {
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
    },
    mapId: import.meta.env.VITE_MAP_ID,
  });
}


export async function initMap() {
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const center = { lat: 39.254752, lng: -76.710837 }

  const map = getMap(center);
  routeDisplay.setup(map);
  let markers = [];

  // Setup Place Search (autocomplete input for search)
  const input = document.getElementById("pac-input");
  const searchBox = new google.maps.places.Autocomplete(input, {
    fields: ["place_id", "geometry", "formatted_address", "name"], 
    strictBounds: true,
  });

  //map.controls[google.maps.ControlPosition.TOP_RIGHT].push(document.getElementById("searchbar"));

  map.addListener("bounds_changed", () => {
    searchBox.bindTo("bounds", map);
  });

  const umbcRetrieverHead = document.createElement('img');
  umbcRetrieverHead.src = "./assets/UMBC_Retriever_Head.png";
  umbcRetrieverHead.id = "commons-marker-icon";


  // noinspection JSUnusedLocalSymbols
  const commonsMarkerView = new AdvancedMarkerElement({
    map,
    position: center,
    content: umbcRetrieverHead,
  });

//Issue with marker placement was that favorites search and map search were both bound to the same search bar
//Used to be favorites search
/*
  // Initialize Autocomplete for favorite search feature
  const autocompleteInput = document.getElementById('pac-input');
  const autocomplete = new google.maps.places.Autocomplete(autocompleteInput);

  // Listen for place changes
  autocomplete.addListener('place_changed', () => {
    const place = autocomplete.getPlace();
    if (!place.geometry) {
      window.alert("No details available for input: '" + place.name + "'");
      return;
    }

    console.log("Selected place:", place);

    // Add to favorites
    // const favoriteButton = document.getElementById('favorite-button');
    // favoriteButton.addEventListener('click', () => {
    //   saveFavoriteSearch(place);
    // });
  });
*/

/*
  // Add markers and info windows for each building
  buildings.forEach(building => {
    if (!isNaN(building.coordinates.lat)){
      const marker = new google.maps.marker.AdvancedMarkerElement({
        position: building.coordinates,
        map: map,
        title: building.name,
        children: umbcRetrieverHead
      });

      const infoWindowContent = `
      <div>
        <h3>${building.name}</h3>
        <p>${building.description}</p>
      </div>
    `;

      const infoWindow = new google.maps.InfoWindow({
        content: infoWindowContent,
      });

      marker.addListener("gmp-click", () => {
        infoWindow.open(map, marker);
      });
    }
  });
*/
  searchBoxInitialization(searchBox, markers, AdvancedMarkerElement, map);
}

// Save favorite search to local storage
// function saveFavoriteSearch(place) {
//   let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
//   favorites.push(place);
//   localStorage.setItem('favorites', JSON.stringify(favorites));
//   displayFavoriteSearches(); // Update favorites display
// }

// Retrieve and display favorite searches
// function displayFavoriteSearches() {
//   const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
//   const favoritesList = document.getElementById('favorites-list');
//   favoritesList.innerHTML = ''; // Clear the list before displaying
//   favorites.forEach(place => {
//     const listItem = document.createElement('li');
//     listItem.textContent = place.name;
//     favoritesList.appendChild(listItem);
//   });
// }

// Call this function when the page loads to display favorites
// window.onload = function() {
//   displayFavoriteSearches();
// };

const loader = new Loader({
  apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  version: "weekly",
  libraries: ["maps", "places", "marker", "core"],
  retries: 4
});

loader.importLibrary("routes").then(async () => {
  await initMap();
}).catch((e) => {
  console.log("Failed to load API " + e);
});
