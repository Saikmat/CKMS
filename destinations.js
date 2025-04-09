// noinspection JSUnusedGlobalSymbols
const destinations = [
  {
    name: "Office for Academic and Pre-Professional Advising",
    location: "Sherman Room 224",
    category: "Professional",
    onGoogle: "N"
  },
  {
    name: "Financial Services",
    location: "Administration Floors 3 and 4",
    category: "Professional",
    onGoogle: "N"
  },
  {
    name: "Administration and Finance",
    location: "Administration Room 925",
    category: "Professional",
    onGoogle: "N"
  },
  {
    name: "UMBC Bookstore",
    location: "The Commons Level 1",
    category: "Academic",
    onGoogle: "Y"
  },
  {
    name: "Office of Budget and Resource Analysis",
    location: "Administration Floor 4",
    category: "Professional",
    onGoogle: "N"
  },
  {
    name: "Career Center",
    location: "Math & Psychology Room 201",
    category: "Professional",
    onGoogle: "N"
  },
  {
    name: "Campus Life",
    location: "The Commons Room 336",
    category: "Professional",
    onGoogle: "N"
  },
  {
    name: "Yum Shoppe",
    location: "The Commons Level G, Suite 003",
    category: "Food",
    onGoogle: "Y"
  },
  {
    name: "Women's Center",
    location: "The Commons Level G, Suite 004",
    category: "Organization",
    onGoogle: "Y"
  },
  {
    name: "Campus Information Center",
    location: "The Commons Level 1",
    category: "Miscellaneous",
    onGoogle: "Y"
  },
  {
    name: "Flat Tuesday's",
    location: "The Commons Levels 1 and 2",
    category: "Food",
    onGoogle: "N"
  },
  {
    name: "Dean of Students and Student Support Services",
    location: "The Commons Room 1A02",
    category: "Academic",
    onGoogle: "N"
  },
  {
    name: "Retriever Sports Zone",
    location: "The Commons Level M",
    category: "Miscellaneous",
    onGoogle: "N"
  },
  {
    name: "Sushi Do",
    location: "The Commons Level 1",
    category: "Food",
    onGoogle: "Y"
  },
  {
    name: "Student Organizations Space",
    location: "The Commons Level 2",
    category: "Organization",
    onGoogle: "N"
  },
  {
    name: "Student Involvement Center",
    location: "The Commons Level 2",
    category: "Miscellaneous",
    onGoogle: "N"
  },
  {
    name: "The Mosaic: Center for Cultural Diversity",
    location: "The Commons Level 2",
    category: "Organization",
    onGoogle: "Y"
  },
  {
    name: "Student Government Association",
    location: "The Commons Room 2B20",
    category: "Organization",
    onGoogle: "N"
  },
  {
    name: "Center for Democracy and Civic Life",
    location: "The Commons Room 2B24",
    category: "Organization",
    onGoogle: "N"
  },
  {
    name: "Fraternities and Sororities",
    location: "The Commons Room 2B11",
    category: "Organization",
    onGoogle: "N"
  },
  {
    name: "Student Events Board",
    location: "The Commons Room 2B10",
    category: "Organization",
    onGoogle: "N"
  },
  {
    name: "Gameroom",
    location: "The Commons Level 2",
    category: "Miscellaneous",
    onGoogle: "N"
  },
  {
    name: "Event and Conference Services",
    location: "The Commons Room 334",
    category: "Miscellaneous",
    onGoogle: "N"
  },
  {
    name: "Student Affairs",
    location: "The Commons Room 335",
    category: "Academic",
    onGoogle: "N...unless this is off-campus student services"
  },
  {
    name: "Office of the Vice President For Student Affairs",
    location: "The Commons Room 319",
    category: "Academic",
    onGoogle: "N"
  },
  {
    name: "CommonVision and UMBC Design and Print Center",
    location: "The Commons Room 309",
    category: "Miscellaneous",
    onGoogle: "N"
  },
  {
    name: "The Skylight Room",
    location: "The Commons Room 305",
    category: "Miscellaneous",
    onGoogle: "N"
  },
  {
    name: "Fireside Lounge",
    location: "The Commons Room 303",
    category: "Miscellaneous",
    onGoogle: "N"
  },
  {
    name: "Graduate Student Life",
    location: "The Commons Room 308",
    category: "Academic",
    onGoogle: "N"
  },
  {
    name: "Retriever Essentials",
    location: "The Commons Level 1",
    category: "Food",
    onGoogle: "Y"
  },
  {
    name: "Halal Shack",
    location: "The Commons Level 1",
    category: "Food",
    onGoogle: "Y"
  },
  {
    name: "Mato",
    location: "The Commons Level 1",
    category: "Food",
    onGoogle: "N"
  },
  {
    name: "Wild Greens",
    location: "The Commons Level 1",
    category: "Food",
    onGoogle: "Y"
  },
  {
    name: "Dunkin Donuts",
    location: "The Commons Level 1",
    category: "Food",
    onGoogle: "Y"
  },
  {
    name: "Copperhead Jacks",
    location: "The Commons Level 1",
    category: "Food",
    onGoogle: "Y"
  },
  {
    name: "Commons Retriever Market",
    location: "The Commons Level 1",
    category: "Food",
    onGoogle: "N"
  },
  {
    name: "Absurd Bird & Burgers",
    location: "The Commons Level 1",
    category: "Food",
    onGoogle: "N"
  },
  {
    name: "Indian Kitchen",
    location: "The Commons Level 1",
    category: "Food",
    onGoogle: "Y"
  },
  {
    name: "Chick-fil-A",
    location: "University Center",
    category: "Food",
    onGoogle: "Y"
  },
  {
    name: "Starbucks",
    location: "University Center",
    category: "Food",
    onGoogle: "Y"
  },
  {
    name: "Einstein Brother'sBagels",
    location: "Albin O. Kuhn Library & Gallery Floor 1",
    category: "Food",
    onGoogle: "Y"
  },
  {
    name: "True Grit's Retriever Market",
    location: "True Grit's",
    category: "Food",
    onGoogle: "N"
  },
  {
    name: "Retriever Integrated Health",
    location: "The Center for Well-Being",
    category: "Health",
    onGoogle: "Y"
  },
  {
    name: "Police Department",
    location: "UMBC Police Department\r\nCentral Plant",
    category: "Student support",
    onGoogle: "Y"
  },
  {
    name: "Faculty Development Center",
    location: "Engineering 101",
    category: "Academic",
    onGoogle: "N"
  },
  {
    name: "Glass Shop",
    location: "Meyerhoff Chemistry Room 206",
    category: "Miscellaneous",
    onGoogle: "N"
  },
  {
    name: "Office of Equity and Civil Rights",
    location: "Administration Building\r\nFloor 9",
    category: "Student support",
    onGoogle: "N"
  },
  {
    name: "Human Resources & Strategic Talent Management",
    location: "Administration Floor 5",
    category: "Professional",
    onGoogle: "N"
  },
  {
    name: "Retriever Card Center & Mail Services",
    location: "University Center Room 112",
    category: "Student support",
    onGoogle: "N"
  },
  {
    name: "Institutional Research, Analysis & Decision Support",
    location: "Administration Floor 4",
    category: "Professional",
    onGoogle: "N"
  },
  {
    name: "Academic Success Center",
    location: "Albin O. Kuhn Library & Gallery Floor 1",
    category: "Student support",
    onGoogle: "N"
  },
  {
    name: "Meyerhoff Scholars Program",
    location: "Sherman\r\nRoom 218",
    category: "Organization",
    onGoogle: "N"
  },
  {
    name: "Parking Services",
    location: "900 Walker Suite 107",
    category: "Miscellaneous",
    onGoogle: "Y...I think"
  },
  {
    name: "Procurement and Strategic Sourcing",
    location: "Administration Room 732",
    category: "Professional",
    onGoogle: "N"
  },
  {
    name: "Registrar's Office",
    location: "Sherman Room\r\n221",
    category: "Academic",
    onGoogle: "Y"
  },
  {
    name: "Residential Life",
    location: "Erickson Hall",
    category: "Housing",
    onGoogle: "Y"
  },
  {
    name: "The Shriver Center",
    location: "Public Policy",
    category: "Organization",
    onGoogle: "N"
  },
  {
    name: "Transit",
    location: "Warehouse 113",
    category: "Miscellaneous",
    onGoogle: "Y...I think"
  },
  {
    name: "Student Conduct and Community Standards",
    location: "The Center for Well-Being\r\nSuite 119",
    category: "Student support",
    onGoogle: "Y"
  },
  {
    name: "Student Business Services",
    location: "Administration Floor 3",
    category: "Academic",
    onGoogle: "N"
  },
  {
    name: "Computing Success Center",
    location: "Fine Arts 010",
    category: "Student support",
    onGoogle: "N"
  }
];