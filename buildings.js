const buildings = [
  [
    "Albin O. Kuhn Library & Gallery",
    "AOK Library",
    "Academic",
    "Y",
    39.2563038,
    -76.7115496,
    "The Albin O. Kuhn Library & Gallery, UMBC's main library, is a central resource for the University of Maryland, Baltimore County, offering a vast collection of books, journals, digital resources, and more, along with study spaces, learning centers, and various services to support research and learning."
  ],
  [
    "Public Policy Building",
    "PUP",
    "Academic",
    "Y",
    39.2552847,
    -76.7092553,
    "The UMBC Public Policy Building, home to the School of Public Policy, houses academic departments like Economics, Political Science, Public Health, Public Policy, and Sociology/Anthropology, as well as the Shriver Center, a hub for applied learning and community engagement."
  ],
  [
    "Physics Building",
    "PHYS",
    "Academic",
    "Y",
    38.9436262,
    -92.3226382,
    "The UMBC Physics Building, a 78,000 square-foot facility, houses classrooms, labs, the UMBC NanoImaging Facility, the UMBC Observatory, a physics machine shop, and more, serving as a hub for physics research and education at UMBC"
  ],
  [
    "The Commons",
    NaN,
    "Academic",
    "Y",
    -37.8041282,
    144.9882914,
    "The UMBC Commons is the central student activities center, a 143,000 sq ft high-tech facility, serving as a hub for campus life with dining, entertainment, meeting spaces, and student services, fostering community among students, faculty, and staff."
  ],
  [
    "Interdisciplinary Life Sciences Building",
    "ILSB",
    "Academic",
    "Y",
    39.2539082,
    -76.7111874,
    "The UMBC Interdisciplinary Life Sciences Building (ILSB) is a 130,000 square foot facility designed as a center for interdisciplinary research, active learning, innovation, and inspiration, supporting UMBC's mission of student success and research discoveries."
  ],
  [
    "Lecture Hall 1",
    NaN,
    "Academic",
    "Y",
    NaN,
    NaN,
    "UMBC's Lecture Hall 1 (LH1), also known as Biology Lecture Hall 1, is a building on the UMBC campus that houses a large lecture hall and underwent renovations in 2024, including upgrades to seating, audio/video components, and restrooms"
  ],
  [
    "Biological Sciences Building",
    "BIOL",
    "Academic",
    "Y",
    39.9967855,
    -83.0200061,
    "The Biological Sciences Building at UMBC (University of Maryland, Baltimore County) is a building that houses 22 biology labs, classrooms, tutorial centers, and departmental offices, and was UMBC's first academic building, housing all academic and administrative departments"
  ],
  [
    "Meyerhoff Building",
    "MEYR",
    "Academic",
    "Y",
    39.2549256,
    -76.7130437,
    "The Robert and Jane Meyerhoff Chemistry Building at UMBC is a reddish-brown brick building adjacent to the University Center, housing chemistry and biochemistry departments, labs, and the Howard Hughes Medical Institute (HHMI) research facility, as well as the Meyerhoff Lecture Hall."
  ],
  [
    "Fine Arts Building",
    "FA",
    "Academic",
    "Y",
    41.8763659,
    -87.6245409,
    "The Fine Arts Building at UMBC houses the Department of Visual Arts, including studios, labs, and exhibition spaces, and is home to the Visual Arts Production Center and the Center for Art, Design and Visual Culture."
  ],
  [
    "Math & Psychology Building",
    "MP",
    "Academic",
    "Y",
    39.2541348,
    -76.7124123,
    "The Math and Psychology Building at UMBC houses general classrooms on the first floor and the Career Center on the second floor, offering resources for students to explore career options, gain experience, and connect with employers."
  ],
  [
    "University Center",
    "UC",
    "Academic",
    "Y",
    NaN,
    NaN,
    "The University Center (UC) at UMBC, located between Meyerhoff Hall and Sherman Hall, provides the campus community with a variety of amenities like the Campus Card Services, WMBC student-run radio station, and Chick-fil-A and Starbucks."
  ],
  [
    "Engineering Building",
    "ENGR",
    "Academic",
    "Y",
    42.7249358,
    -84.4813352,
    "The UMBC Engineering Building, which houses the Department of Chemical, Biochemical & Environmental Engineering and the Department of Mechanical Engineering, is distinct from the Information Technology & Engineering (ITE) Building, which houses the COEIT Dean's Offices, Engineering and Computing Education Program, and other related departments."
  ],
  [
    "Sondheim Hall",
    "SOND",
    "Academic",
    "Y",
    39.2533894,
    -76.7128633,
    "Sondheim Hall at UMBC, dedicated in 2005, houses classrooms, the Geography and Environmental Systems Department, and cartography and psychology research labs, and honors the Sondheims' contributions to Baltimore and UMBC."
  ],
  [
    "Sherman Hall",
    "SHER",
    "Academic",
    "Y",
    40.1070935,
    -88.2323492,
    "Sherman Hall at UMBC, a brick building built in 1980, houses classrooms, a lecture hall, and academic offices for various departments, including Modern Languages and Education, and is undergoing a renovation project to meet the university's needs for the next 30 years."
  ],
  [
    "Information Technology / Engineering Building",
    "ITE",
    "Academic",
    "Y",
    NaN,
    NaN,
    "The UMBC Information Technology and Engineering Building (ITE) houses the College of Engineering and Information Technology (COEIT), including departments like Computer Science and Electrical Engineering, and the Engineering and Computing Education Program, as well as research facilities like the PI2 Immersive Hybrid Reality Lab"
  ],
  [
    "Retriever Activies Center",
    "RAC",
    "Recreation",
    "Y",
    39.2528573,
    -76.7125458,
    "The Retriever Activities Center (RAC) at UMBC is a multi-purpose recreational and athletic facility offering a range of amenities including fitness studios, weight rooms, an indoor track, an aquatics center, and more, serving students, faculty, and staff."
  ],
  [
    "Administration Building",
    "ADM",
    "Academic",
    "Y",
    NaN,
    NaN,
    "The UMBC Administration Building,  is the tallest building on campus at ten stories, housing offices for UMBC's president, the Graduate School, International Education Services, and Student Business Services, among other administrative functions."
  ],
  [
    "Performing Arts and Humantities Building",
    "PAHB",
    "Academic",
    "Y",
    39.2552507,
    -76.7153731,
    "The UMBC Performing Arts and Humanities Building (PAHB) is a state-of-the-art, LEED Gold certified facility housing the Department of Theatre, Music, and Dance, featuring a Proscenium Theatre, Black Box Theatre, Concert Hall, Dance Cube, and various studios, classrooms, and rehearsal spaces"
  ],
  [
    "Susquehanna Hall",
    NaN,
    "Housing",
    "Y",
    38.981983,
    -76.9437595,
    "Susquehanna Hall at UMBC is the oldest residence hall, built in 1970, and home to the Honors College Living Learning Community, offering a relaxed, residential setting for freshman Honors College students."
  ],
  [
    "Patapsco Hall",
    NaN,
    "Housing",
    "Y",
    39.2546254,
    -76.7061715,
    "Patapsco Hall at UMBC is a residence hall that houses first-year students, offering a mix of single, double, and triple rooms, and features study and social spaces, a caf\u00e9 lounge, and access to a green roof, along with exterior courtyards and outdoor gathering areas"
  ],
  [
    "Potomac Hall",
    NaN,
    "Housing",
    "Y",
    39.255853,
    -76.706648,
    "Potomac Hall at UMBC is a nine-month residence hall that offers traditional single-gender housing options, with a quiet lifestyle community located on the ground floor (south wing) and is known for its proximity to the dining hall and other dorms."
  ],
  [
    "Chesapeake Hall",
    NaN,
    "Housing",
    "Y",
    39.2567907,
    -76.7085813,
    "Chesapeake Hall at UMBC is a student residence hall home to the Center for Women In Technology Living-Learning Community offering shared bedrooms, semi-private bathrooms, and amenities like community kitchens, lounges, and laundry rooms."
  ],
  [
    "Harbor Hall",
    NaN,
    "Housing",
    "Y",
    39.2571626,
    -76.7085791,
    "Harbor Hall at UMBC is a suite-style residence hall offering semi-private communal spaces, with most suites comprising two double bedrooms and a common living space for four students. It also has limited single bedroom suites, prioritized for those with approved medical accommodations and upperclassmen."
  ],
  [
    "Erickson Hall",
    NaN,
    "Housing",
    "Y",
    39.4694144,
    -87.4103077,
    "Erickson Hall at UMBC is a residence hall that offers suite-style housing, providing students with semi-private communal spaces and access to community kitchens, lounges, and laundry rooms. It is also home to the Shriver Living Learning Center."
  ],
  [
    "Hillside Apartments",
    NaN,
    "Housing",
    "Y",
    NaN,
    NaN,
    "Hillside Apartments at UMBC offer suite-style apartment living with four single-occupancy bedrooms, shared bathrooms, and common living areas, all furnished with essentials like beds, desks, and chairs."
  ],
  [
    "Terrace Apartments",
    NaN,
    "Housing",
    "has circle",
    42.95789,
    -77.345755,
    "The Terrace Apartments at UMBC offer on-campus apartment living with four single-occupancy bedrooms, shared bathrooms, and common living areas, all within walking distance of academic buildings."
  ],
  [
    "West Hill Apartments",
    NaN,
    "Housing",
    "Y",
    NaN,
    NaN,
    "West Hill Apartments at UMBC, the university's first campus apartment complex, underwent a renovation in 2016 and features five apartment buildings housing 236 students, with amenities like enclosed stairwells, upgraded interiors, and community gathering spaces."
  ],
  [
    "Walker Avenue Apartments",
    NaN,
    "Housing",
    "Y",
    39.259438,
    -76.7138605,
    "Walker Avenue Apartments at UMBC are apartment-style, on-campus housing designed for upper-level undergraduate and graduate students, offering private bedrooms, shared bathrooms, and a full-size kitchen, with amenities like a community center and sand volleyball court."
  ],
  [
    "Apartment Community Center",
    "ACC",
    "Miscellaneous",
    "Y",
    39.2581149,
    -76.7119651,
    "The UMBC Apartment Community Center, located adjacent to Walker Avenue, provides 24-hour access to services like mail pickup, laundry, and community gathering spaces for students living in apartments."
  ],
  [
    "The Center for Well-Being",
    NaN,
    "Health Center",
    "Y",
    44.9640859,
    -89.6229392,
    "The UMBC Center for Well-Being is a facility that houses the Counseling Center, University Health Services, and offices of Student Conduct and Community Standards, aiming to provide a centralized, integrative approach to mental and physical well-being, and convenient access to health and wellness services for students."
  ],
  [
    "True Grit's",
    NaN,
    "Food",
    "Y",
    39.2557329,
    -76.7077426,
    "True Grit's is UMBC's all-you-care-to-eat dining hall, located in the center of the residential halls, offering breakfast, lunch, dinner, and late-night meals, with options for Halal, Kosher, vegetarian, and gluten-free diets."
  ],
  [
    "Preschool Center",
    NaN,
    "Miscellaneous",
    "Y",
    NaN,
    NaN,
    "The Y Preschool at UMBC, a program of the Y of Central Maryland, provides a safe, happy, and enriching environment for children ages 2-5, focusing on intellectual, emotional, and physical growth through a curriculum designed to stimulate learning and prepare children for kindergarten and beyond"
  ],
  [
    "Chesapeake Arena",
    NaN,
    "Recreation",
    "Y",
    35.4634247,
    -97.5151138,
    "The Chesapeake Employers Insurance Arena, formerly the UMBC Event Center, is a multi-purpose arena on the UMBC campus in Baltimore, MD, serving as the home for the UMBC Retrievers men's and women's basketball and women's volleyball teams, and hosting concerts, commencements, and other events."
  ],
  [
    "Warehouse",
    NaN,
    "Miscellaneous",
    "Y",
    NaN,
    NaN,
    "The campus data warehouse, known as REX (Report EXchange), which is a reporting and decision support environment that integrates data from various systems across the university."
  ],
  [
    "Facilities Management",
    NaN,
    "Miscellaneous",
    "Y",
    NaN,
    NaN,
    "UMBC's Facilities Management department plans, designs, constructs, operates, and maintains the university's facilities, grounds, and utilities, aiming to provide customer service and be stewards of university resources."
  ],
  [
    "UMBC Stadium Complex",
    NaN,
    "Recreation",
    "Y",
    39.2504812,
    -76.7075033,
    "The UMBC Stadium Complex is a multi-purpose athletic facility on the UMBC campus, housing the main stadium, Alumni Baseball Field, and Softball Stadium, and has undergone recent upgrades to enhance the fan experience and facilities for student athletes."
  ],
  [
    "Administration Drive Garage",
    NaN,
    "Parking",
    "Y",
    39.2518878,
    -76.7126378,
    "The Administration Drive Garage at UMBC is a metered garage where visitor parking is available, specifically on the upper level, and parking costs $2.00 per hour, payable by MasterCard, Visa, or exact currency, with no change or refunds provided"
  ],
  [
    "900 Walker",
    NaN,
    "Miscellaneous",
    "Y",
    NaN,
    NaN,
    "900 Walker Avenue, located near the Walker Apartments and across from the Baltimore County Police Building, is the home of the UMBC Parking Services and the Department of Emergency and Disaster Health Systems, and also houses research centers and units for the College of Engineering and Information Technology."
  ],
  [
    "Army ROTC",
    NaN,
    "Miscellaneous",
    "Y",
    NaN,
    NaN,
    "Houses the UMBC Army ROTC program, which is a professional organization that offers a leadership training program, aiming to develop characterful, committed, and competent leaders for the Army and the wider community, fully integrated into the UMBC academic community and partnering with Johns Hopkins ROTC"
  ],
  [
    "Naval ROTC",
    NaN,
    "Miscellaneous",
    "Y",
    NaN,
    NaN,
    "Houses the UMBC Naval ROTC program, part of the Maryland NROTC consortium, and its mission is to develop midshipmen mentally, morally, and physically, instilling ideals of duty, loyalty, honor, courage, and commitment, with the goal of commissioning college graduates as naval officers."
  ],
  [
    "Central Plant",
    NaN,
    "Miscellaneous",
    "Y",
    NaN,
    NaN,
    "UMBC's Central Plant is the building that houses the campus's utility infrastructure, including boilers, chillers, and other equipment, which are essential for heating, cooling, and electricity distribution across the campus."
  ],
  [
    "Greenhouse",
    NaN,
    "Miscellaneous",
    "Y",
    NaN,
    NaN,
    "UMBC's greenhouse facility, managed by the Landscape and Grounds department, is a one-third portion of a larger greenhouse, where 95% of the annuals and plant materials used for campus events, interior arrangements, and general landscaping are propagated"
  ],
  [
    "Undergraduate Admissions",
    NaN,
    "Academic",
    "Y",
    NaN,
    NaN,
    "The UMBC Office of Undergraduate Admissions and Orientation is located on the lower level of the Albin O. Kuhn Library, specifically next to Library Pond. They handle the recruitment and admission of new first-time, first-year, and transfer students, as well as facilitating onboarding through new student orientation programs."
  ],
  [
    "Enrollment Management",
    NaN,
    "Academic",
    "N",
    NaN,
    NaN,
    "The UMBC Office of Enrollment Management serves as the central hub for enrollment services, providing leadership, administrative, and technical support to various departments and units, including Undergraduate Admission and Orientation, Academic and Pre-professional Advising, and Financial Aid and Scholarships."
  ],
  [
    "Financial Aid and Scholarships",
    NaN,
    "Academic",
    "Y",
    NaN,
    NaN,
    "The UMBC Office of Financial Aid and Scholarships, located in the Albin O. Kuhn Library, provides a range of financial aid options to assist students, including grants, scholarships, loans, and work-study programs, and can be contacted by phone, email, or in person."
  ],
  [
    "Commons Drive Garage",
    NaN,
    "Parking",
    "Y",
    39.2534888,
    -76.7099318,
    "The Commons Drive Garage at UMBC is a parking garage located on Commons Drive, providing parking for visitors and students, and is a key part of the campus's parking infrastructure."
  ],
  [
    "Walker Avenue Garage",
    NaN,
    "Parking",
    "Y",
    39.2572902,
    -76.7124574,
    "The Walker Avenue Garage on the UMBC campus is a multi-level parking structure located on Walker Avenue, offering parking for visitors and those with permits, with the upper level being designated for visitor parking."
  ],
  [
    "Lot 7",
    NaN,
    "Parking",
    "Y",
    NaN,
    NaN,
    "Lot 7 is a visitor parking lot located on Walker Avenue, offering parking for visitors at a rate of $2.00 per hour."
  ],
  [
    "Lot 9",
    NaN,
    "Parking",
    "Y",
    32.2515907,
    -80.8664093,
    "Lot 9 is a parking lot located on Walker Avenue, designated for visitor parking, and is also a part of the UMBC parking infrastructure"
  ],
  [
    "Stadium Lot",
    NaN,
    "Parking",
    "Y",
    40.4370689,
    -86.9189379,
    "UMBC's Stadium Lot, formerly known as Lot 17, is a parking area primarily used for events at Retriever Soccer Park and the Chesapeake Employers Insurance Arena, with a capacity of 900 vehicles, and is located near the stadium complex."
  ],
  [
    "Lot 8",
    NaN,
    "Parking",
    "Y",
    32.7581341,
    -117.1747393,
    "Lot 8 at UMBC is a parking area available for free parking, especially for events after 4pm, and is easily accessed by entering the Hilltop Road entrance to the campus."
  ]
];