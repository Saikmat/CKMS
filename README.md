# UMBC Interactive Map

Welcome to the UMBC Interactive Map! This application is designed to provide students, staff, and visitors with an interactive map of the University of Maryland, Baltimore County (UMBC) campus. It offers comprehensive information on UMBC buildings, frequently visited rooms, and up-to-date directions, making campus navigation clearer and more accessible. With its powerful search function and accurate, real-time directions, this tool significantly enhances campus navigation, reducing confusion and improving the overall user experience for anyone navigating the UMBC campus.

---
## Features
  
- **Building Details**: Click on a building to view available offices, facilities, and resources
- **Search & Navigation**: Find offices based on specific services or assistance needed, with clear directions to their locations.
- **Campus Resources**: Highlight key areas such as academic buildings, dining halls, and campus services such as Retriever Essentials.
- **Accurate & Reliable Information**: Locations are correctly marked, relevant, and easy to access. Real-time map with GPS integration.

---

## Tech Stack

This project uses the following technologies:

- **Frontend**: 
  - HTML5, CSS3, JavaScript 
  - [Google Maps API](https://developers.google.com/maps/documentation/javascript/get-api-key)
- **Backend**: 
  - [Node.js](https://nodejs.org/en) the server-side runtime environment for handling backend logic
  - [Express.js](https://expressjs.com/)  handles routing and API requests
  - [MariaDB](https://mariadb.com/) stores the list of places in the map and their associated data
- **Other Tools**:
  - [Kotlin Multi-Platform ](https://kotlinlang.org/docs/multiplatform.html) ensure portability across different platforms
  - [Vite](https://vite.dev/) to bundle and optimize frontend code
  - [AWS S3](https://aws.amazon.com/pm/serv-s3/?gclid=Cj0KCQjw7dm-BhCoARIsALFk4v8X0cwMKcTpry7Ypk74512cHsSFqtgSV4IPeGJWpJ703it4mUHLMukaAiOfEALw_wcB&trk=20e04791-939c-4db9-8964-ee54c41bc6ad&sc_channel=ps&ef_id=Cj0KCQjw7dm-BhCoARIsALFk4v8X0cwMKcTpry7Ypk74512cHsSFqtgSV4IPeGJWpJ703it4mUHLMukaAiOfEALw_wcB:G:s&s_kwcid=AL!4422!3!651751060962!e!!g!!aws%20s3!19852662362!145019251177) used for statically hosting the website
  
---

## Getting Started

### Prerequisites

Make sure you have the following software installed:

- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **Git**: [Install Git](https://git-scm.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/umbc-interactive-map.git
   cd umbc-interactive-map
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Run the website locally:

Either use:
      ```bash
      npm start
      ```

This will launch the map website at `http://localhost:3000`.

Or use:
      ```bash
      vite
      ``` 
 
Vite is being actively supported, and is much lighter weight.
This will launch the map website at `http://localhost:5173`.
---
## How to Contribute

We welcome contributions to improve the UMBC Interactive Map. Here's how you can help:

1. **Fork the repository** and create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
   
    To connect your branch to an issue, use this
    ```bash
    git checkout -b CKMS-<issue number>-dev
    ```


2. **Make changes** and commit them:
   ```bash
   git commit -m "Add your feature"
   ```

3. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```
    ```bash

```
4. **Create a pull request**.

---
## Features to Implement

- Merge backend and frontend
- Migrate database from CSV file to relational database
- Implement search capability
- Improve UI
- Implement favorite and recent search capabilities
- Error handling for GPS functionality
- Solicit stakeholder feedback


---
## Additional Information
Here is information about us and how you can use our code outside the repository.

### Contact

For questions or suggestions, please reach out to the product owner at [RX93572@umbc.edu].

### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
