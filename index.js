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

    const marker = new AdvancedMarkerElement({
      map,
      position: place.geometry.location,
    });
    const infoWindow = new google.maps.InfoWindow({
      content: "<h1>" + place.name + "</h1>"
    });
    marker.addListener("click", () => {
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

  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(input);

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

  const buildings = [
    {
      name: "Albin O. Kuhn Library & Gallery",
      coordinates: {
        lat: 39.2563038,
        lng: -76.7115496
      },
      description: "The Albin O. Kuhn Library & Gallery, UMBC's main library, is a central resource for the University of Maryland, Baltimore County, offering a vast collection of books, journals, digital resources, and more, along with study spaces, learning centers, and various services to support research and learning."
    },
    {
      name: "Public Policy Building",
      coordinates: {
        lat: 39.2552847,
        lng: -76.7092553
      },
      description: "The UMBC Public Policy Building, home to the School of Public Policy, houses academic departments like Economics, Political Science, Public Health, Public Policy, and Sociology/Anthropology, as well as the Shriver Center, a hub for applied learning and community engagement."
    },
    {
      name: "Physics Building",
      coordinates: {
        lat: 38.9436262,
        lng: -92.3226382
      },
      description: "The UMBC Physics Building, a 78,000 square-foot facility, houses classrooms, labs, the UMBC NanoImaging Facility, the UMBC Observatory, a physics machine shop, and more, serving as a hub for physics research and education at UMBC"
    },
    {
      name: "The Commons",
      coordinates: {
        lat: -37.8041282,
        lng: 144.9882914
      },
      description: "The UMBC Commons is the central student activities center, a 143,000 sq ft high-tech facility, serving as a hub for campus life with dining, entertainment, meeting spaces, and student services, fostering community among students, faculty, and staff."
    },
    {
      name: "Interdisciplinary Life Sciences Building",
      coordinates: {
        lat: 39.2539082,
        lng: -76.7111874
      },
      description: "The UMBC Interdisciplinary Life Sciences Building (ILSB) is a 130,000 square foot facility designed as a center for interdisciplinary research, active learning, innovation, and inspiration, supporting UMBC's mission of student success and research discoveries."
    },
    {
      name: "Lecture Hall 1",
      coordinates: {
        lat: NaN,
        lng: NaN
      },
      description: "UMBC's Lecture Hall 1 (LH1), also known as Biology Lecture Hall 1, is a building on the UMBC campus that houses a large lecture hall and underwent renovations in 2024, including upgrades to seating, audio/video components, and restrooms"
    },
    {
      name: "Biological Sciences Building",
      coordinates: {
        lat: 39.9967855,
        lng: -83.0200061
      },
      description: "The Biological Sciences Building at UMBC (University of Maryland, Baltimore County) is a building that houses 22 biology labs, classrooms, tutorial centers, and departmental offices, and was UMBC's first academic building, housing all academic and administrative departments"
    },
    {
      name: "Meyerhoff Building",
      coordinates: {
        lat: 39.2549256,
        lng: -76.7130437
      },
      description: "The Robert and Jane Meyerhoff Chemistry Building at UMBC is a reddish-brown brick building adjacent to the University Center, housing chemistry and biochemistry departments, labs, and the Howard Hughes Medical Institute (HHMI) research facility, as well as the Meyerhoff Lecture Hall."
    },
    {
      name: "Fine Arts Building",
      coordinates: {
        lat: 41.8763659,
        lng: -87.6245409
      },
      description: "The Fine Arts Building at UMBC houses the Department of Visual Arts, including studios, labs, and exhibition spaces, and is home to the Visual Arts Production Center and the Center for Art, Design and Visual Culture."
    },
    {
      name: "Math & Psychology Building",
      coordinates: {
        lat: 39.2541348,
        lng: -76.7124123
      },
      description: "The Math and Psychology Building at UMBC houses general classrooms on the first floor and the Career Center on the second floor, offering resources for students to explore career options, gain experience, and connect with employers."
    },
    {
      name: "University Center",
      coordinates: {
        lat: NaN,
        lng: NaN
      },
      description: "The University Center (UC) at UMBC, located between Meyerhoff Hall and Sherman Hall, provides the campus community with a variety of amenities like the Campus Card Services, WMBC student-run radio station, and Chick-fil-A and Starbucks."
    },
    {
      name: "Engineering Building",
      coordinates: {
        lat: 42.7249358,
        lng: -84.4813352
      },
      description: "The UMBC Engineering Building, which houses the Department of Chemical, Biochemical & Environmental Engineering and the Department of Mechanical Engineering, is distinct from the Information Technology & Engineering (ITE) Building, which houses the COEIT Dean's Offices, Engineering and Computing Education Program, and other related departments."
    },
    {
      name: "Sondheim Hall",
      coordinates: {
        lat: 39.2533894,
        lng: -76.7128633
      },
      description: "Sondheim Hall at UMBC, dedicated in 2005, houses classrooms, the Geography and Environmental Systems Department, and cartography and psychology research labs, and honors the Sondheims' contributions to Baltimore and UMBC."
    },
    {
      name: "Sherman Hall",
      coordinates: {
        lat: 40.1070935,
        lng: -88.2323492
      },
      description: "Sherman Hall at UMBC, a brick building built in 1980, houses classrooms, a lecture hall, and academic offices for various departments, including Modern Languages and Education, and is undergoing a renovation project to meet the university's needs for the next 30 years."
    },
    {
      name: "Information Technology / Engineering Building",
      coordinates: {
        lat: NaN,
        lng: NaN
      },
      description: "The UMBC Information Technology and Engineering Building (ITE) houses the College of Engineering and Information Technology (COEIT), including departments like Computer Science and Electrical Engineering, and the Engineering and Computing Education Program, as well as research facilities like the PI2 Immersive Hybrid Reality Lab"
    },
    {
      name: "Retriever Activies Center",
      coordinates: {
        lat: 39.2528573,
        lng: -76.7125458
      },
      description: "The Retriever Activities Center (RAC) at UMBC is a multi-purpose recreational and athletic facility offering a range of amenities including fitness studios, weight rooms, an indoor track, an aquatics center, and more, serving students, faculty, and staff."
    },
    {
      name: "Administration Building",
      coordinates: {
        lat: NaN,
        lng: NaN
      },
      description: "The UMBC Administration Building,  is the tallest building on campus at ten stories, housing offices for UMBC's president, the Graduate School, International Education Services, and Student Business Services, among other administrative functions."
    },
    {
      name: "Performing Arts and Humantities Building",
      coordinates: {
        lat: 39.2552507,
        lng: -76.7153731
      },
      description: "The UMBC Performing Arts and Humanities Building (PAHB) is a state-of-the-art, LEED Gold certified facility housing the Department of Theatre, Music, and Dance, featuring a Proscenium Theatre, Black Box Theatre, Concert Hall, Dance Cube, and various studios, classrooms, and rehearsal spaces"
    },
    {
      name: "Susquehanna Hall",
      coordinates: {
        lat: 38.981983,
        lng: -76.9437595
      },
      description: "Susquehanna Hall at UMBC is the oldest residence hall, built in 1970, and home to the Honors College Living Learning Community, offering a relaxed, residential setting for freshman Honors College students."
    },
    {
      name: "Patapsco Hall",
      coordinates: {
        lat: 39.2546254,
        lng: -76.7061715
      },
      description: "Patapsco Hall at UMBC is a residence hall that houses first-year students, offering a mix of single, double, and triple rooms, and features study and social spaces, a caf\u00e9 lounge, and access to a green roof, along with exterior courtyards and outdoor gathering areas"
    },
    {
      name: "Potomac Hall",
      coordinates: {
        lat: 39.255853,
        lng: -76.706648
      },
      description: "Potomac Hall at UMBC is a nine-month residence hall that offers traditional single-gender housing options, with a quiet lifestyle community located on the ground floor (south wing) and is known for its proximity to the dining hall and other dorms."
    },
    {
      name: "Chesapeake Hall",
      coordinates: {
        lat: 39.2567907,
        lng: -76.7085813
      },
      description: "Chesapeake Hall at UMBC is a student residence hall home to the Center for Women In Technology Living-Learning Community offering shared bedrooms, semi-private bathrooms, and amenities like community kitchens, lounges, and laundry rooms."
    },
    {
      name: "Harbor Hall",
      coordinates: {
        lat: 39.2571626,
        lng: -76.7085791
      },
      description: "Harbor Hall at UMBC is a suite-style residence hall offering semi-private communal spaces, with most suites comprising two double bedrooms and a common living space for four students. It also has limited single bedroom suites, prioritized for those with approved medical accommodations and upperclassmen."
    },
    {
      name: "Erickson Hall",
      coordinates: {
        lat: 39.4694144,
        lng: -87.4103077
      },
      description: "Erickson Hall at UMBC is a residence hall that offers suite-style housing, providing students with semi-private communal spaces and access to community kitchens, lounges, and laundry rooms. It is also home to the Shriver Living Learning Center."
    },
    {
      name: "Hillside Apartments",
      coordinates: {
        lat: NaN,
        lng: NaN
      },
      description: "Hillside Apartments at UMBC offer suite-style apartment living with four single-occupancy bedrooms, shared bathrooms, and common living areas, all furnished with essentials like beds, desks, and chairs."
    },
    {
      name: "Terrace Apartments",
      coordinates: {
        lat: 42.95789,
        lng: -77.345755
      },
      description: "The Terrace Apartments at UMBC offer on-campus apartment living with four single-occupancy bedrooms, shared bathrooms, and common living areas, all within walking distance of academic buildings."
    },
    {
      name: "West Hill Apartments",
      coordinates: {
        lat: NaN,
        lng: NaN
      },
      description: "West Hill Apartments at UMBC, the university's first campus apartment complex, underwent a renovation in 2016 and features five apartment buildings housing 236 students, with amenities like enclosed stairwells, upgraded interiors, and community gathering spaces."
    },
    {
      name: "Walker Avenue Apartments",
      coordinates: {
        lat: 39.259438,
        lng: -76.7138605
      },
      description: "Walker Avenue Apartments at UMBC are apartment-style, on-campus housing designed for upper-level undergraduate and graduate students, offering private bedrooms, shared bathrooms, and a full-size kitchen, with amenities like a community center and sand volleyball court."
    },
    {
      name: "Apartment Community Center",
      coordinates: {
        lat: 39.2581149,
        lng: -76.7119651
      },
      description: "The UMBC Apartment Community Center, located adjacent to Walker Avenue, provides 24-hour access to services like mail pickup, laundry, and community gathering spaces for students living in apartments."
    },
    {
      name: "The Center for Well-Being",
      coordinates: {
        lat: 44.9640859,
        lng: -89.6229392
      },
      description: "The UMBC Center for Well-Being is a facility that houses the Counseling Center, University Health Services, and offices of Student Conduct and Community Standards, aiming to provide a centralized, integrative approach to mental and physical well-being, and convenient access to health and wellness services for students."
    },
    {
      name: "True Grit's",
      coordinates: {
        lat: 39.2557329,
        lng: -76.7077426
      },
      description: "True Grit's is UMBC's all-you-care-to-eat dining hall, located in the center of the residential halls, offering breakfast, lunch, dinner, and late-night meals, with options for Halal, Kosher, vegetarian, and gluten-free diets."
    },
    {
      name: "Preschool Center",
      coordinates: {
        lat: NaN,
        lng: NaN
      },
      description: "The Y Preschool at UMBC, a program of the Y of Central Maryland, provides a safe, happy, and enriching environment for children ages 2-5, focusing on intellectual, emotional, and physical growth through a curriculum designed to stimulate learning and prepare children for kindergarten and beyond"
    },
    {
      name: "Chesapeake Arena",
      coordinates: {
        lat: 35.4634247,
        lng: -97.5151138
      },
      description: "The Chesapeake Employers Insurance Arena, formerly the UMBC Event Center, is a multi-purpose arena on the UMBC campus in Baltimore, MD, serving as the home for the UMBC Retrievers men's and women's basketball and women's volleyball teams, and hosting concerts, commencements, and other events."
    },
    {
      name: "Warehouse",
      coordinates: {
        lat: NaN,
        lng: NaN
      },
      description: "The campus data warehouse, known as REX (Report EXchange), which is a reporting and decision support environment that integrates data from various systems across the university."
    },
    {
      name: "Facilities Management",
      coordinates: {
        lat: NaN,
        lng: NaN
      },
      description: "UMBC's Facilities Management department plans, designs, constructs, operates, and maintains the university's facilities, grounds, and utilities, aiming to provide customer service and be stewards of university resources."
    },
    {
      name: "UMBC Stadium Complex",
      coordinates: {
        lat: 39.2504812,
        lng: -76.7075033
      },
      description: "The UMBC Stadium Complex is a multi-purpose athletic facility on the UMBC campus, housing the main stadium, Alumni Baseball Field, and Softball Stadium, and has undergone recent upgrades to enhance the fan experience and facilities for student athletes."
    },
    {
      name: "Administration Drive Garage",
      coordinates: {
        lat: 39.2518878,
        lng: -76.7126378
      },
      description: "The Administration Drive Garage at UMBC is a metered garage where visitor parking is available, specifically on the upper level, and parking costs $2.00 per hour, payable by MasterCard, Visa, or exact currency, with no change or refunds provided"
    },
    {
      name: "900 Walker",
      coordinates: {
        lat: NaN,
        lng: NaN
      },
      description: "900 Walker Avenue, located near the Walker Apartments and across from the Baltimore County Police Building, is the home of the UMBC Parking Services and the Department of Emergency and Disaster Health Systems, and also houses research centers and units for the College of Engineering and Information Technology."
    },
    {
      name: "Army ROTC",
      coordinates: {
        lat: NaN,
        lng: NaN
      },
      description: "Houses the UMBC Army ROTC program, which is a professional organization that offers a leadership training program, aiming to develop characterful, committed, and competent leaders for the Army and the wider community, fully integrated into the UMBC academic community and partnering with Johns Hopkins ROTC"
    },
    {
      name: "Naval ROTC",
      coordinates: {
        lat: NaN,
        lng: NaN
      },
      description: "Houses the UMBC Naval ROTC program, part of the Maryland NROTC consortium, and its mission is to develop midshipmen mentally, morally, and physically, instilling ideals of duty, loyalty, honor, courage, and commitment, with the goal of commissioning college graduates as naval officers."
    },
    {
      name: "Central Plant",
      coordinates: {
        lat: NaN,
        lng: NaN
      },
      description: "UMBC's Central Plant is the building that houses the campus's utility infrastructure, including boilers, chillers, and other equipment, which are essential for heating, cooling, and electricity distribution across the campus."
    },
    {
      name: "Greenhouse",
      coordinates: {
        lat: NaN,
        lng: NaN
      },
      description: "UMBC's greenhouse facility, managed by the Landscape and Grounds department, is a one-third portion of a larger greenhouse, where 95% of the annuals and plant materials used for campus events, interior arrangements, and general landscaping are propagated"
    },
    {
      name: "Undergraduate Admissions",
      coordinates: {
        lat: NaN,
        lng: NaN
      },
      description: "The UMBC Office of Undergraduate Admissions and Orientation is located on the lower level of the Albin O. Kuhn Library, specifically next to Library Pond. They handle the recruitment and admission of new first-time, first-year, and transfer students, as well as facilitating onboarding through new student orientation programs."
    },
    {
      name: "Enrollment Management",
      coordinates: {
        lat: NaN,
        lng: NaN
      },
      description: "The UMBC Office of Enrollment Management serves as the central hub for enrollment services, providing leadership, administrative, and technical support to various departments and units, including Undergraduate Admission and Orientation, Academic and Pre-professional Advising, and Financial Aid and Scholarships."
    },
    {
      name: "Financial Aid and Scholarships",
      coordinates: {
        lat: NaN,
        lng: NaN
      },
      description: "The UMBC Office of Financial Aid and Scholarships, located in the Albin O. Kuhn Library, provides a range of financial aid options to assist students, including grants, scholarships, loans, and work-study programs, and can be contacted by phone, email, or in person."
    },
    {
      name: "Commons Drive Garage",
      coordinates: {
        lat: 39.2534888,
        lng: -76.7099318
      },
      description: "The Commons Drive Garage at UMBC is a parking garage located on Commons Drive, providing parking for visitors and students, and is a key part of the campus's parking infrastructure."
    },
    {
      name: "Walker Avenue Garage",
      coordinates: {
        lat: 39.2572902,
        lng: -76.7124574
      },
      description: "The Walker Avenue Garage on the UMBC campus is a multi-level parking structure located on Walker Avenue, offering parking for visitors and those with permits, with the upper level being designated for visitor parking."
    },
    {
      name: "Lot 7",
      coordinates: {
        lat: NaN,
        lng: NaN
      },
      description: "Lot 7 is a visitor parking lot located on Walker Avenue, offering parking for visitors at a rate of $2.00 per hour."
    },
    {
      name: "Lot 9",
      coordinates: {
        lat: 32.2515907,
        lng: -80.8664093
      },
      description: "Lot 9 is a parking lot located on Walker Avenue, designated for visitor parking, and is also a part of the UMBC parking infrastructure"
    },
    {
      name: "Stadium Lot",
      coordinates: {
        lat: 40.4370689,
        lng: -86.9189379
      },
      description: "UMBC's Stadium Lot, formerly known as Lot 17, is a parking area primarily used for events at Retriever Soccer Park and the Chesapeake Employers Insurance Arena, with a capacity of 900 vehicles, and is located near the stadium complex."
    },
    {
      name: "Lot 8",
      coordinates: {
        lat: 32.7581341,
        lng: -117.1747393
      },
      description: "Lot 8 at UMBC is a parking area available for free parking, especially for events after 4pm, and is easily accessed by entering the Hilltop Road entrance to the campus."
    }
  ];

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

      searchBoxInitialization(searchBox, markers, AdvancedMarkerElement, map);
    }
  });
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
