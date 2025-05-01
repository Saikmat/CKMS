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

const faveButton = document.getElementById("view-fave-button");

faveButton.addEventListener('click', () => {
    const faveDiv = document.getElementById("favorites-container");
    if(faveDiv.style.display === "none"){
      faveDiv.style.display = "block";
    }
    else{
      faveDiv.style.display = "none";
    }
});

const recentButton = document.getElementById("recent-button");

recentButton.addEventListener('click', () => {
    const faveDiv = document.getElementById("recent-container");
    if(faveDiv.style.display === "none"){
      faveDiv.style.display = "block";
    }
    else{
      faveDiv.style.display = "none";
    }
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
    let self = this;


    if (this.origin !== undefined && this.dest !== undefined) {
      this.directionsService.route({
        origin: this.origin,
        destination: this.dest,
        travelMode: google.maps.TravelMode.WALKING
      }, function (response, status) {
        if (status === "OK") {
          self.directionsRenderer.setPanel(document.getElementById("directions-region"));
          self.directionsRenderer.setDirections(response);

        } else {
          console.log('Directions request failed due to ' + status);
        }
      }).then();
    }
  };


  this.hide = function () {
    this.directionsRenderer.setMap(null);
    this.directionsRenderer.setPanel(null);
  };
};

let lastFocusedInput = "dest"; // Tracks which input field was last focused


function searchBoxInitialization(searchBox, markers, AdvancedMarkerElement, map) {
  searchBox.addListener("place_changed", () => {
    const place = searchBox.getPlace();
    markers.forEach((marker) => {
      marker.setMap(null);
    });
    markers.length = 0;


    if (!place.geometry || !place.geometry.location) return;


    let icon = "";
    let content = "<div style='max-height: 10vw; max-width: 35vw; overflow: auto;'>";
    let desc = destinations.buildings.find(b => b.name === place.name);


    if (desc != undefined) {
      content += `<h1 style='font-family: "Inter", sans-serif; font-size: 1vw;'>${place.name}</h1>
      <p style='font-family: "Inter", sans-serif; font-size: 0.75vw;'>${desc.description}</p>`;
    } else {
      desc = destinations.destinations.find(b => b.name === place.name);
      if (desc != undefined) {
        const icons = {
          "Food": "🍽️",
          "Academic": "📖",
          "Professional": "🏢",
          "Organization": "👐",
          "Health": "❤️",
          "Student support": "🤝",
          "Housing": "🏠"
        };
        icon = icons[desc.category] || "";
        content += `<h1 style='font-family: "Inter", sans-serif; font-size: 1vw;'>${place.name} ${icon}</h1>
        <p style='font-family: "Inter", sans-serif; font-size: 0.75vw; font-style: italic'>${desc.location}</p>
        <p style='font-family: "Inter", sans-serif; font-size: 0.75vw;'>${desc.description}</p>`;
      }
    }


    content += "</div>";


    const marker = new AdvancedMarkerElement({
      map,
      position: place.geometry.location,
    });


    const infoWindow = new google.maps.InfoWindow({ content });


    marker.addListener("gmp-click", () => {
      infoWindow.open(map, marker);
    });

    markers.push(marker);
  });
}


function navButtonInitialization(map, markersCollection) {
  const directions = document.getElementById("directions-region");
  directions.style.display = "none";

  const showButton = document.getElementById("search-button");
  showButton.addEventListener("click", () => {
    routeDisplay.render(map);
    directions.style.display = "block";
  });

  const hideButton = document.getElementById("clear-button");
  hideButton.addEventListener("click", () => {
    routeDisplay.hide();
    document.getElementById("origin-input").value = "";
    document.getElementById("dest-input").value = "";
    clearMarkers(markersCollection);
    directions.style.display = "none";
  });
}


function clearMarkers(markersCollection) {
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
        north: center.lat + 0.009,
        south: center.lat - 0.0105,
        east: center.lng + 0.01,
        west: center.lng - 0.01,
      },
    },
    mapId: import.meta.env.VITE_MAP_ID,
  });
}


// --- FAVORITES FUNCTIONS ---
function saveFavoriteSearch(place) {
  //if(!place.place_id) return;

  let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");


  if (!favorites.some(fav => fav.place_id === place.place_id)) {
    favorites.push(place);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    displayFavoriteSearches();
    document.getElementById("favorites-container").style.display = "block";
    console.log("Saved favorite:", place.name);
  }
}

function deleteFavoriteSearch(index) {
  let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  favorites.splice(index, 1);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  displayFavoriteSearches();
}

function displayFavoriteSearches() {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  const favoritesList = document.getElementById("favorites-list");
  if (!favoritesList) return;


  favoritesList.innerHTML = "";
  
  if(favorites.length === 0){
    const emptyItem = document.createElement("p");
    emptyItem.textContent = "Nothing to see here!";
    favoritesList.appendChild(emptyItem);
    return;
  }

  favorites.forEach((place, index) => {
    const listItem = document.createElement("li");
    const itemWrapper = document.createElement("div");
    const itemName = document.createElement("div");
    itemName.innerHTML = place.name;
    itemName.addEventListener('click', () => {
      const placeStub = {
        name: place.name,
        place_id: place.place_id,
        geometry: {
          location: {
            lat: () => place.geometry.location.lat,
            lng: () => place.geometry.location.lng
          }
        }
      };
      if (lastFocusedInput === "origin") {
        routeDisplay.setOrigin(placeStub);
        document.getElementById("origin-input").value = place.name;
      } else {
        routeDisplay.setDest(placeStub);
        document.getElementById("dest-input").value = place.name;
      }
      
    });
    listItem.appendChild(itemName);
    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "-";
    deleteButton.className = "delete-fave";
    deleteButton.onclick = () => {
      deleteFavoriteSearch(index);
    };

    itemWrapper.appendChild(itemName);
    itemWrapper.appendChild(deleteButton);
    listItem.appendChild(itemWrapper);
    favoritesList.appendChild(listItem);
  });
}

function saveRecentSearch(place) {
  let recent = JSON.parse(localStorage.getItem("recentSearches") || "[]");

  // Prevent duplicates
  recent = recent.filter(p => p.place_id !== place.place_id);

  // Add new to front
  recent.unshift(place);

  // Limit to last 5 searches
  if (recent.length > 5) {
    recent = recent.slice(0, 5);
  }

  localStorage.setItem("recentSearches", JSON.stringify(recent));
  displayRecentSearches();
}

function displayRecentSearches() {
  const recent = JSON.parse(localStorage.getItem("recentSearches") || "[]");
  const recentList = document.getElementById("recent-list");
  if (!recentList) return;

  recentList.innerHTML = "";

  if (recent.length === 0) {
    const emptyItem = document.createElement("p");
    emptyItem.textContent = "No recent searches.";
    recentList.appendChild(emptyItem);
    return;
  }

  recent.forEach(place => {
    const listItem = document.createElement("li");
    listItem.textContent = place.name;
    listItem.addEventListener("click", () => {
      const placeStub = {
        name: place.name,
        place_id: place.place_id,
        geometry: {
          location: {
            lat: () => place.geometry.location.lat,
            lng: () => place.geometry.location.lng
          }
        }
      };
      // Optionally reuse as destination or origin
      //routeDisplay.setDest(placeStub);
      //document.getElementById("dest-input").value = place.name;
      if (lastFocusedInput === "origin") {
        routeDisplay.setOrigin(placeStub);
        document.getElementById("origin-input").value = place.name;
      } else {
        routeDisplay.setDest(placeStub);
        document.getElementById("dest-input").value = place.name;
      }
    });
    recentList.appendChild(listItem);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const clearRecentBtn = document.getElementById("clear-recent-button");
  if (clearRecentBtn) {
    clearRecentBtn.addEventListener("click", clearRecentSearches);
  }

  // Display recent searches on load
  displayRecentSearches();
});


function clearRecentSearches() {
  localStorage.removeItem("recentSearches");
  displayRecentSearches();
}

// --- MAIN INIT ---
export async function initMap() {
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const center = { lat: 39.254752, lng: -76.710837 }


  const map = getMap(center);
  let originMarkers = [];
  let destMarkers = [];
  let allMarks = [originMarkers, destMarkers];


  const originInput = document.getElementById("origin-input");
  const originBox = new google.maps.places.Autocomplete(originInput, {
    fields: ["place_id", "geometry", "formatted_address", "name"],
    strictBounds: true,
  });
  originBox.addListener("place_changed", () => {
    //routeDisplay.setOrigin(originBox.getPlace());
    const place = originBox.getPlace();
    routeDisplay.setOrigin(place);
    saveRecentSearch(place); // Move here
  });
  const topFavButton = document.getElementById("favorite-button-1");
  if (topFavButton) {
    topFavButton.onclick = () => {
      const place = originBox.getPlace();
      if (place && place.place_id && place.geometry && place.geometry.location) {
        saveFavoriteSearch(place);
      } else {
        alert("Please select a location from the suggestions.");
      }
    };
  }  

  const destInput = document.getElementById("dest-input");
  const destBox = new google.maps.places.Autocomplete(destInput, {
    fields: ["place_id", "geometry", "formatted_address", "name"],
    strictBounds: true,
  });
  destBox.addListener("place_changed", () => {
    const place = destBox.getPlace();
    routeDisplay.setDest(place);
    saveRecentSearch(place); // Move here
  });
  const bottomFavButton = document.getElementById("favorite-button-2");
  if (bottomFavButton) {
    bottomFavButton.onclick = () => {
      const place = destBox.getPlace();
      if (place && place.place_id && place.geometry && place.geometry.location) {
        saveFavoriteSearch(place);
      } else {
        alert("Please select a location from the suggestions.");
      }
    };
  }

  map.addListener("bounds_changed", () => {
    originBox.bindTo("bounds", map);
    destBox.bindTo("bounds", map);
  });
  
  searchBoxInitialization(originBox, originMarkers, AdvancedMarkerElement, map);
  searchBoxInitialization(destBox, destMarkers, AdvancedMarkerElement, map);
  //saveRecentSearch(place);


  routeDisplay.init();
  navButtonInitialization(map, allMarks);


  displayFavoriteSearches(); // Display saved favorites on load

  //hide favorites on load
  const favs = document.getElementById("favorites-container");
  favs.style.display = "none";
  const recents = document.getElementById("recent-container");
  recents.style.display = "none";

  //adding here
  originInput.addEventListener("focus", () => {
    lastFocusedInput = "origin";
  });
  destInput.addEventListener("focus", () => {
    lastFocusedInput = "dest";
  });
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

