const destinations = [
  [
    "Office for Academic and Pre-Professional Advising",
    "Sherman Room 224",
    "Professional",
    "N"
  ],
  [
    "Financial Services",
    "Administration Floors 3 and 4",
    "Professional",
    "N"
  ],
  [
    "Administration and Finance",
    "Administration Room 925",
    "Professional",
    "N"
  ],
  [
    "UMBC Bookstore",
    "The Commons Level 1",
    "Academic",
    "Y"
  ],
  [
    "Office of Budget and Resource Analysis",
    "Administration Floor 4",
    "Professional",
    "N "
  ],
  [
    "Career Center",
    "Math & Psychology Room 201",
    "Professional",
    "N"
  ],
  [
    "Campus Life",
    "The Commons Room 336",
    "Professional",
    "N"
  ],
  [
    "Yum Shoppe",
    "The Commons Level G, Suite 003",
    "Food",
    "Y"
  ],
  [
    "Women's Center",
    "The Commons Level G, Suite 004",
    "Organization",
    "Y"
  ],
  [
    "Campus Information Center",
    "The Commons Level 1",
    "Miscellaneous",
    "Y"
  ],
  [
    "Flat Tuesday's",
    "The Commons Levels 1 and 2",
    "Food",
    "N"
  ],
  [
    "Dean of Students and Student Support Services",
    "The Commons Room 1A02",
    "Academic",
    "N"
  ],
  [
    "Retriever Sports Zone",
    "The Commons Level M",
    "Miscellaneous",
    "N"
  ],
  [
    "Sushi Do",
    "The Commons Level 1",
    "Food",
    "Y"
  ],
  [
    "Student Organizations Space",
    "The Commons Level 2",
    "Organization",
    "N"
  ],
  [
    "Student Involvement Center",
    "The Commons Level 2",
    "Miscellaneous",
    "N"
  ],
  [
    "The Mosaic: Center for Cultural Diversity",
    "The Commons Level 2",
    "Organization",
    "Y"
  ],
  [
    "Student Government Association",
    "The Commons Room 2B20",
    "Organization",
    "N"
  ],
  [
    "Center for Democracy and Civic Life",
    "The Commons Room 2B24",
    "Organization",
    "N"
  ],
  [
    "Fraternities and Sororities",
    "The Commons Room 2B11",
    "Organization",
    "N"
  ],
  [
    "Student Events Board",
    "The Commons Room 2B10",
    "Organization",
    "N"
  ],
  [
    "Gameroom",
    "The Commons Level 2",
    "Miscellaneous",
    "N"
  ],
  [
    "Event and Conference Services",
    "The Commons Room 334",
    "Miscellaneous",
    "N"
  ],
  [
    "Student Affairs",
    "The Commons Room 335",
    "Academic",
    "N...unless this is off-campus student services"
  ],
  [
    "Office of the Vice President For Student Affairs",
    "The Commons Room 319",
    "Academic",
    "N"
  ],
  [
    "CommonVision and UMBC Design and Print Center",
    "The Commons Room 309",
    "Miscellaneous",
    "N"
  ],
  [
    "The Skylight Room",
    "The Commons Room 305",
    "Miscellaneous",
    "N"
  ],
  [
    "Fireside Lounge",
    "The Commons Room 303",
    "Miscellaneous",
    "N"
  ],
  [
    "Graduate Student Life",
    "The Commons Room 308",
    "Academic",
    "N"
  ],
  [
    "Retriever Essentials",
    "The Commons Level 1",
    "Food",
    "Y"
  ],
  [
    "Halal Shack",
    "The Commons Level 1",
    "Food",
    "Y"
  ],
  [
    "Mato",
    "The Commons Level 1",
    "Food",
    "N"
  ],
  [
    "Wild Greens",
    "The Commons Level 1",
    "Food",
    "Y"
  ],
  [
    "Dunkin Donuts",
    "The Commons Level 1",
    "Food",
    "Y"
  ],
  [
    "Copperhead Jacks",
    "The Commons Level 1",
    "Food",
    "Y"
  ],
  [
    "Commons Retriever Market",
    "The Commons Level 1",
    "Food",
    "N"
  ],
  [
    "Absurd Bird & Burgers",
    "The Commons Level 1",
    "Food",
    "N"
  ],
  [
    "Indian Kitchen",
    "The Commons Level 1",
    "Food",
    "Y"
  ],
  [
    "Chick-fil-A",
    "University Center",
    "Food",
    "Y"
  ],
  [
    "Starbucks",
    "University Center",
    "Food",
    "Y"
  ],
  [
    "Einstein Brother'sBagels",
    "Albin O. Kuhn Library & Gallery Floor 1",
    "Food",
    "Y"
  ],
  [
    "True Grit's Retriever Market",
    "True Grit's",
    "Food",
    "N"
  ],
  [
    "Retriever Integrated Health",
    "The Center for Well-Being",
    "Health",
    "Y"
  ],
  [
    "Police Department",
    "UMBC Police Department\r\nCentral Plant",
    "Student support",
    "Y"
  ],
  [
    "Faculty Development Center",
    "Engineering 101",
    "Academic",
    "N"
  ],
  [
    "Glass Shop",
    "Meyerhoff Chemistry Room 206",
    "Miscellaneous",
    "N"
  ],
  [
    "Office of Equity and Civil Rights",
    "Administration Building\r\nFloor 9",
    "Student support",
    "N"
  ],
  [
    "Human Resources & Strategic Talent Management",
    "Administration Floor 5",
    "Professional",
    "N"
  ],
  [
    "Retriever Card Center & Mail Services",
    "University Center Room 112",
    "Student support",
    "N"
  ],
  [
    "Institutional Research, Analysis & Decision Support",
    "Administration Floor 4",
    "Professional",
    "N"
  ],
  [
    "Academic Success Center",
    "Albin O. Kuhn Library & Gallery Floor 1",
    "Student support",
    "N"
  ],
  [
    "Meyerhoff Scholars Program",
    "Sherman\r\nRoom 218",
    "Organization",
    "N"
  ],
  [
    "Parking Services",
    "900 Walker Suite 107",
    "Miscellaneous",
    "Y...I think"
  ],
  [
    "Procurement and Strategic Sourcing",
    "Administration Room 732",
    "Professional",
    "N"
  ],
  [
    "Registrar's Office",
    "Sherman Room\r\n221",
    "Academic",
    "Y"
  ],
  [
    "Residential Life",
    "Erickson Hall",
    "Housing",
    "Y"
  ],
  [
    "The Shriver Center",
    "Public Policy",
    "Organization",
    "N"
  ],
  [
    "Transit",
    "Warehouse 113",
    "Miscellaneous",
    "Y...I think"
  ],
  [
    "Student Conduct and Community Standards",
    "The Center for Well-Being\r\nSuite 119",
    "Student support",
    "Y"
  ],
  [
    "Student Business Services",
    "Administration Floor 3",
    "Academic",
    "N"
  ],
  [
    "Computing Success Center",
    "Fine Arts 010",
    "Student support",
    "N"
  ]
];