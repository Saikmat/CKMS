import { Loader } from "@googlemaps/js-api-loader";
import * as destinations from "./destinations.js";

// Navbar slide function
const sidebar = document.getElementById("sidebar");
const navbutton = document.getElementById("navbutton");
const mainMap = document.getElementById("map");

navbutton.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  mainMap.classList.toggle('active');
});

// Route display functionality
const routeDisplay = new function () {
  this.directionsService;
  this.directionsRenderer;
  this.origin;
  this.dest;

  this.init = function () {
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer({ preserveViewport: true });
    //can switch preserveViewport to false if we want to zoom into a route
  };

  this.setOrigin = function (origin) {
    if (!origin.geometry || !origin.place_id) return;

    this.origin = {
      lat: origin.geometry.location.lat(),
      lng: origin.geometry.location.lng()
    };
  };

  this.setDest = function (dest) {
    if (!dest.geometry || !dest.place_id) return;

    this.dest = {
      lat: dest.geometry.location.lat(),
      lng: dest.geometry.location.lng()
    };
  };

  this.render = function (map) {
    this.directionsRenderer.setMap(map);
    let self = this; // Suppresses invalid use of this warnings

    if (this.origin !== undefined && this.dest !== undefined) {
      this.directionsService.route({
        origin: this.origin,
        destination: this.dest,
        travelMode: google.maps.TravelMode.WALKING //Should the mode be adjustable?
      }, function (response, status) {
        if (status === "OK") {
          self.directionsRenderer.setDirections(response);
          self.directionsRenderer.setPanel(document.getElementById("directions-region"));
        } else {
          console.log('Directions request failed due to ' + status);
        }
      }).then();
    }
  };

  this.hide = function () {
    this.directionsRenderer.setMap(null);
    this.directionsRenderer.setPanel(null);
  }
};

function searchBoxInitialization(searchBox, markers, AdvancedMarkerElement, map) {
  searchBox.addListener("place_changed", () => {
    const place = searchBox.getPlace();
    //console.log(place);
    markers.forEach((marker) => {
      marker.setMap(null);
    });
    markers.length = 0;

    if (!place.geometry || !place.geometry.location) {
      return;
    }

    let icon = "";
    let content = "<div style='max-height: 10vw; max-width: 35vw; overflow: auto;'>";

    let desc = destinations.buildings.find(b => b.name === place.name);
    //If location is a building
    if(desc != undefined){
       content += "<h1 style='font-family: \"Inter\", sans-serif; font-size: 1vw;'>" + place.name + "</h1>"
       + "<p style='font-family: \"Inter\", sans-serif; font-size: 0.75vw;'>" + desc.description + "</p>";
    }
    //If location is POI
    else{
      desc = destinations.destinations.find(b => b.name === place.name);
       
      //Check that the location exists
      if(desc != undefined){
        if(desc.category === "Food"){
          icon = "🍽️";
        }
        else if(desc.category === "Academic"){
          icon = "📖";
        }
        else if(desc.category === "Professional"){
          icon = "🏢";
        }
        else if(desc.category === "Organization"){
          icon = "👐";
        }
        else if(desc.category === "Health"){
          icon = "❤️";
        }
        else if(desc.category === "Student support"){
          icon = "🤝";
        }
        else if(desc.category === "Housing"){
          icon = "🏠";
        }
        content += "<h1 style='font-family: \"Inter\", sans-serif; font-size: 1vw;'>" + place.name + " " + icon + "</h1>"
        + "<p style='font-family: \"Inter\", sans-serif; font-size: 0.75vw; font-style: italic'>" + desc.location + "</p>"
        + "<p style='font-family: \"Inter\", sans-serif; font-size: 0.75vw;'>" + desc.description + "</p>";
      }
    }
 
    content += "</div>";

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

function navButtonInitialization(map, markersCollection){
  const showButton = document.getElementById("search-button");
  showButton.addEventListener("click", () => {
    routeDisplay.render(map);
  });

  const hideButton = document.getElementById("clear-button");
  hideButton.addEventListener("click", () => {
    routeDisplay.hide();
    document.getElementById("origin-input").value = "";
    document.getElementById("dest-input").value = "";
    clearMarkers(markersCollection);
  });
}

function clearMarkers(markersCollection){
  markersCollection.map((markers) => {
    markers.forEach((marker) => {
      marker.setMap(null);
    });
    markers.length = 0;
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

// 🔥 FAVORITES FEATURE START
function saveFavoriteSearch(place) {
  let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

  if (!favorites.some(fav => fav.place_id === place.place_id)) {
    favorites.push({
      name: place.name,
      place_id: place.place_id,
      geometry: {
        location: {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng()
        }
      }
    });

    localStorage.setItem('favorites', JSON.stringify(favorites));
    displayFavoriteSearches();
  }
}

function displayFavoriteSearches() {
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  const favoritesList = document.getElementById('favorites-list');
  favoritesList.innerHTML = '';

  favorites.forEach(place => {
    const listItem = document.createElement('li');
    listItem.textContent = place.name;
    listItem.style.cursor = "pointer";
    listItem.addEventListener('click', () => {
      const mockPlace = {
        name: place.name,
        place_id: place.place_id,
        geometry: {
          location: {
            lat: () => place.geometry.location.lat,
            lng: () => place.geometry.location.lng
          }
        }
      };
      routeDisplay.setDest(mockPlace);
      document.getElementById("dest-input").value = place.name;
    });
    favoritesList.appendChild(listItem);
  });
}
// 🔥 FAVORITES FEATURE END

export async function initMap() {
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const center = { lat: 39.254752, lng: -76.710837 }

  const map = getMap(center);
  let originMarkers = [];
  let destMarkers = [];
  let allMarks = [originMarkers, destMarkers];

  // Setup Place Search (autocomplete input for search)
  const originInput = document.getElementById("origin-input");
  const originBox = new google.maps.places.Autocomplete(originInput, {
    fields: ["place_id", "geometry", "formatted_address", "name"],
    strictBounds: true,
  });
  originBox.addListener("place_changed", () => {
    routeDisplay.setOrigin(originBox.getPlace());
  });
  const destInput = document.getElementById("dest-input");
  const destBox = new google.maps.places.Autocomplete(destInput, {
    fields: ["place_id", "geometry", "formatted_address", "name"], 
    strictBounds: true,
  });
  destBox.addListener("place_changed", () => {
    routeDisplay.setDest(destBox.getPlace());
  });

  map.addListener("bounds_changed", () => {
    originBox.bindTo("bounds", map);
    destBox.bindTo("bounds", map);
  });

  const umbcRetrieverHead = document.createElement('img');
  umbcRetrieverHead.src = "./assets/UMBC_Retriever_Head.png";
  umbcRetrieverHead.id = "commons-marker-icon";

  const commonsMarkerView = new AdvancedMarkerElement({
    map,
    position: center,
    content: umbcRetrieverHead,
  });

  searchBoxInitialization(originBox, originMarkers, AdvancedMarkerElement, map);
  searchBoxInitialization(destBox, destMarkers, AdvancedMarkerElement, map);

  routeDisplay.init();
  navButtonInitialization(map, allMarks);
}

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
