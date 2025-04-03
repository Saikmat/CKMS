import { Loader } from "@googlemaps/js-api-loader";

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
    self.directionsRenderer = new google.maps.DirectionsRenderer({ preserveViewport: true });
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

const locations = [["Building Name", "Building Abbreviation", "Building Category", "On Google (Y/N)"],
  ["Albin O. Kuhn Library & Gallery", "AOK Library", "Academic", "Y"],
  ["Public Policy Building", "PUP", "Academic", "Y"],
  ["Physics Building", "PHYS", "Academic", "Y"],
  ["The Commons", "", "Academic", "Y"],
  ["Interdisciplinary Life Sciences Building", "ILSB", "Academic", "Y"],
  ["Lecture Hall 1", "", "Academic", "Y"],
  ["Biological Sciences Building", "BIOL", "Academic", "Y"],
  ["Meyerhoff Building", "MEYR", "Academic", "Y"],
  ["Fine Arts Building", "FA", "Academic", "Y"],
  ["Math & Psychology Building", "MP", "Academic", "Y"],
  ["University Center", "UC", "Academic", "Y"],
  ["Engineering Building", "ENGR", "Academic", "Y"],
  ["Sondheim Hall", "SOND", "Academic", "Y"],
  ["Sherman Hall", "SHER", "Academic", "Y"],
  ["Information Technology / Engineering Building", "ITE", "Academic", "Y"],
  ["Retriever Activies Center", "RAC", "Recreation", "Y"],
  ["Administration Building", "ADM", "Academic", "Y"],
  ["Performing Arts and Humantities Building", "PAHB", "Academic", "Y"],
  ["Susquehanna Hall", "", "Housing", "Y"],
  ["Patapsco Hall", "", "Housing", "Y"],
  ["Potomac Hall", "", "Housing", "Y"],
  ["Chesapeake Hall", "", "Housing", "Y"],
  ["Harbor Hall", "", "Housing", "Y"],
  ["Erickson Hall", "", "Housing", "Y"],
  ["Hillside Apartments", "", "Housing", "Y"],
  ["Terrace Apartments", "", "Housing", "has circle"],
  ["West Hill Apartments", "", "Housing", "Y"],
  ["Walker Avenue Apartments", "", "Housing", "Y"],
  ["Apartment Community Center", "ACC", "Miscellaneous", "Y"],
  ["The Center for Well-Being", "", "Health Center", "Y"],
  ["True Grit's", "", "Food", "Y"],
  ["Preschool Center", "", "Miscellaneous", "Y"],
  ["Chesapeake Arena", "", "Recreation", "Y"],
  ["Warehouse", "", "Miscellaneous", "Y"],
  ["Facilities Management", "", "Miscellaneous", "Y"],
  ["UMBC Stadium Complex", "", "Recreation", "Y"],
  ["Administration Drive Garage", "", "Parking", "Y"],
  ["900 Walker", "", "Miscellaneous", "Y"],
  ["Army ROTC", "", "Miscellaneous", "Y"],
  ["Naval ROTC", "", "Miscellaneous", "Y"],
  ["Central Plant", "", "Miscellaneous", "Y"],
  ["Greenhouse", "", "Miscellaneous", "Y"],
  ["Undergraduate Admissions", "", "Academic", "Y"],
  ["Enrollment Management", "", "Academic", "N"],
  ["Financial Aid and Scholarships", "", "Academic", "Y"],
  ["Commons Drive Garage", "", "Parking", "Y"],
  ["Walker Avenue Garage", "", "Parking", "Y"],
  ["Lot 7", "", "Parking", "Y"],
  ["Lot 9", "", "Parking", "Y"],
  ["Stadium Lot", "", "Parking", "Y"],
  ["Lot 8", "", "Parking", "Y"]
];


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

    const marker = new AdvancedMarkerElement({
      map,
      position: place.geometry.location,
    });
    const infoWindow = new google.maps.InfoWindow({
      content: "<h1>" + place.name + "</h1>"
    });
    marker.addListener("gmp-click", () => {
      infoWindow.open(map, marker)
    });
    markers.push(marker);
  });
}

export async function initMap() {
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  const center = { lat: 39.254752, lng: -76.710837 };

  function getMap() {
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

  const map = getMap();
  routeDisplay.setup(map);
  let markers = [];

  // Setup Place Search (autocomplete input for search)
  const input = document.getElementById("pac-input");
  const searchBox = new google.maps.places.Autocomplete(input, {
    fields: ["place_id", "geometry", "formatted_address", "name"], 
    strictBounds: true,
  });


  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(input);

  map.addListener("bounds_changed", () => {
    searchBox.bindTo("bounds", map);
  });

  const flag = document.createElement('img');
  flag.src = "./assets/UMBC_Retriever_Head.png";
  const commonsMarkerView = new AdvancedMarkerElement({
    map,
    position: center,
    content: flag,
  });

  searchBoxInitialization(searchBox, markers, AdvancedMarkerElement, map);
}

// Save favorite search to local storage
function saveFavoriteSearch(place) {
  let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  favorites.push(place);
  localStorage.setItem('favorites', JSON.stringify(favorites));
  displayFavoriteSearches(); // Update favorites display
}

// Retrieve and display favorite searches
function displayFavoriteSearches() {
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  const favoritesList = document.getElementById('favorites-list');
  favoritesList.innerHTML = ''; // Clear the list before displaying
  favorites.forEach(place => {
    const listItem = document.createElement('li');
    listItem.textContent = place.name;
    favoritesList.appendChild(listItem);
  });
}

// Call this function when the page loads to display favorites
window.onload = function() {
  displayFavoriteSearches();
};

const loader = new Loader({
  apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  version: "weekly",
  libraries: ["maps", "places", "marker", "core"],
  retries: 4
});

loader.importLibrary("routes").then(async () => {
  await initMap();
}).catch((e) => {
  console.log("Failed to load api " + e);
});
