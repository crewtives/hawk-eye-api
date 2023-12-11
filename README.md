# Project Hawk-Eye Documentation

## Overview

Hawk-Eye is a project aimed at creating a sports-related application with a focus on football (soccer). The project structure is organized for a Node.js application using TypeScript. The application provides features related to football data, preferences, and synchronization.

## Project Structure

```plaintext
hawk-eye
├── app
│   ├── README.md
│   ├── jest.config.ts
│   ├── nodemon.json
│   ├── package-lock.json
│   ├── package.json
│   ├── src
│   │   ├── app.ts
│   │   ├── config.ts
│   │   ├── controllers
│   │   │   ├── footballApi
│   │   │   │   └── index.ts
│   │   │   └── preferences
│   │   │       └── index.ts
│   │   ├── data-source.ts
│   │   ├── database
│   │   │   ├── entity
│   │   │   │   ├── Match.ts
│   │   │   │   └── Team.ts
│   │   │   └── migrations
│   │   │       ├── 1702167475000-TeamMigration.ts
│   │   │       └── 1702167491495-MatchMigration.ts
│   │   ├── index.ts
│   │   ├── middleware
│   │   │   ├── 404.ts
│   │   │   └── errorHandler.ts
│   │   ├── routes
│   │   │   └── index.ts
│   │   ├── services
│   │   │   ├── api
│   │   │   │   └── football
│   │   │   ├── footballAPI
│   │   │   │   └── index.ts
│   │   │   └── sync
│   │   │       ├── main.ts
│   │   │       ├── match.ts
│   │   │       └── team.ts
│   │   └── tests
│   └── tsconfig.json
├── data
├── docker-compose.yml
└── readme.md
```

### Key Components

1. **app**

   - **README.md:** Documentation for the `app` directory.
   - **jest.config.ts:** Jest configuration file for testing.
   - **nodemon.json:** Nodemon configuration file for automatic server restarts during development.
   - **package-lock.json:** Auto-generated file for npm dependencies.
   - **package.json:** Configuration file for Node.js dependencies.
   - **src:** Source code directory.
     - **app.ts:** Main application entry point.
     - **config.ts:** Configuration file for the application.
     - **controllers:** Controllers for handling HTTP requests.
       - **footballApi:** Controller for football API-related functionality.
       - **preferences:** Controller for preferences functionality.
     - **data-source.ts:** Module for handling external data sources.
     - **database:** Directory for database-related functionality.
       - **entity:** Entity classes for the database (e.g., Match and Team).
       - **migrations:** Database migration scripts.
     - **index.ts:** Export file for the source code directory.
     - **middleware:** Middleware functions.
       - **404.ts:** Middleware for handling 404 errors.
       - **errorHandler.ts:** Middleware for handling errors.
     - **routes:** Route definitions.
       - **index.ts:** Main route configuration.
     - **services:** Business logic services.
       - **api:** Service for handling external APIs.
         - **football:** Football-related API service.
       - **footballAPI:** Service for football API-related functionality.
       - **sync:** Synchronization services.
         - **main.ts:** Main synchronization service.
         - **match.ts:** Service for synchronizing match data.
         - **team.ts:** Service for synchronizing team data.
     - **tests:** Directory for testing files.

2. **data:** Data directory for storing application data.

3. **docker-compose.yml:** Docker Compose configuration file for containerized deployment.

4. **readme.md:** Project documentation.

## Getting Started

1. Install Docker
2. Run **docker compose up**
3. Done

For more detailed information, refer to the individual documentation files within the project structure.
