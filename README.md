# Bubblelist

## Table of Contents

-   [Overview](#overview)
-   [Dependencies and Technology](#dependencies-and-technology)
-   [File Architecture](#file-architecture)
    -   [Server](#server)
        -   [Models](#models)
        -   [Routes](#routes)
    -   [Client](#client)
-   [Known Bugs](#known-bugs)
-   [TODO](#todo)
<hr>

# Overview

Bubblelist is a movie list generator in two stages. In the first stage, or the 'adding' stage, the user creates a list of movies either through direct title search, or by clicking 'add' on any displayed movie.

During the second stage, the user is given a choice between two movies to remove from the list. Once the user makes their selection, two more random movies are chosen from the list until there is only one movie left.

<hr>

# Dependencies and Technology

Tech Stack: MongoDB - ExpressJS - ReactJS

[Client Link](http://bubblelist.netlify.app/)

[API Link](https://protected-scrubland-08240.herokuapp.com/api/)

[TheMovieDatabase API](https://developers.themoviedb.org/3/getting-started/introduction)

Front End Libraries

-   [CreateReactApp](https://create-react-app.dev/)

Back End Libraries

-   [axios](https://www.npmjs.com/package/axios)
-   [cors](https://www.npmjs.com/package/cors)
-   [dotenv](https://www.npmjs.com/package/dotenv)
-   [express](https://www.npmjs.com/package/express)
-   [mongoose](https://www.npmjs.com/package/mongoose)
<hr>

# File Architecture

| route                          | desc                                                                              |
| ------------------------------ | --------------------------------------------------------------------------------- |
| \|-- client                    | frontend app folder                                                               |
| \|-- \|-- public               |                                                                                   |
| \|-- \|-- src                  |                                                                                   |
| \|-- \|-- \|-- components      | All Components                                                                    |
| \|-- \|-- \|-- \|-- displays   | Display Components: SplashDisplay, AddingDisplay, ComparisonDisplay, FinalDisplay |
| \|-- \|-- \|-- \|-- movie      | Movie Components: Movie, MovieDetails, MovieCompareDetails, MoviesContainer       |
| \|-- \|-- \|-- \|-- search     | Search Components: Search                                                         |
| \|-- \|-- \|-- \|-- sidebar    | Sidebar Components: Sidebar, ListItem                                             |
| \|-- \|-- \|-- \|-- UIElements | UI Components: Header, Footer                                                     |
| \|-- \|-- \|-- context         | Context API files for List and Movie Contexts                                     |
| \|-- \|-- \|-- \|-- list       | List Context files                                                                |
| \|-- \|-- \|-- \|-- movie      | Movie Context files                                                               |
| \|-- \|-- \|-- \|-- types.js   | Contains all dispatch functions to be passed to reducers                          |
| \|-- \|-- \|-- App.js          | Main App Component                                                                |
| \|-- \|-- \|-- index.js        | Main Index Component                                                              |
| \|-- controllers               | routes/api endpoints                                                              |
| \|-- \|-- listController.js    | endpoints related to the LIST model                                               |
| \|-- \|-- movieController.js   | endpoints related to the MOVIE model                                              |
| \|-- \|-- searchController.js  | endpoints related to any external API queries                                     |
| \|-- models                    | mongoose schemas                                                                  |
| \|-- \|-- List.js              | [List Model](#model)                                                              |
| \|-- \|-- Movie.js             | [Movie Model](#model)                                                             |
| \|-- \|-- User.js              | User Model (to be implemented)                                                    |
| \|-- server.js                 | main server file                                                                  |
|                                |                                                                                   |
|                                |                                                                                   |

## ENDPOINTS

### <strong>/search/</strong>

| CALL | CONTENTS OF RES.DATA                        | ENDPOINT                                                                        |
| ---- | ------------------------------------------- | ------------------------------------------------------------------------------- |
| GET  | Array of popular movies based on pageNumber | https://protected-scrubland-08240.herokuapp.com/api/search/popular/{pageNumber} |
| GET  | Array of similar movies based on id         | https://protected-scrubland-08240.herokuapp.com/api/search/similar/{id}         |
| GET  | Array of movies matching search query       | https://protected-scrubland-08240.herokuapp.com/api/search/title/{query}        |
| GET  | Object containing movie details based on id | https://protected-scrubland-08240.herokuapp.com/api/search/id/{id}              |

<br>
<br>

### <strong>/list/</strong>

See [TODO](#todo)
| CALL | CONTENTS OF RES.DATA | ENDPOINT |
| ---- | ------------------------ | -------------------------------------------------------- |
| POST | New LIST document object | https://protected-scrubland-08240.herokuapp.com/api/list |

<br>
<br>

### <strong>/movie/</strong>

Basic Crud - See [TODO](#todo)

<br>
<br>

## MODELS

List Schema - will be further utilized once users and saved lists are implemented

    const listSchema = mongoose.Schema(
        {
            initialList: { type: Array },
            result: { type: Number },
            rankings: { type: Array },
            stage: { type: String, default: "adding" }
        },
        {
            timestamps: true
        }
    );

Movie Schema - will be utilized once users and saved lists are implemented

    const movieSchema = mongoose.Schema(
        {
            timesOnList: { type: Number, default: 0 },
            timesChosen: { type: Number, default: 0 },
            timdbid: { type: Number, default: null },
        },
        {
            timestamps: true
        }
    );

<hr>

# Known Bugs

<hr>

# TODO

-   Implement Users to allow data tracking
-   Implement Genre and Keyword query search
-   Optimize for Mobile Use
