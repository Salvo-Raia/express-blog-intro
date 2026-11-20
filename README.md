![Static Badge](https://img.shields.io/badge/Boolean_Tech_Academy-1565C0?style=for-the-badge)

# Exercise 43/50: Express Blog Intro

Create the foundation of a personal blog using Node.js and Express. Build the first API endpoints, manage a collection of blog posts and configure static assets to serve their associated images.

## Project overview

| Repository | Project | Category | Main Focus | Exercise |
|:--|:--|:--|:--|:--|
| express-blog-intro | Express Blog Intro | Exercise | Node.js, Express & REST API | 43/50 |

## Assignment

Build the initial backend structure for a personal blog, which will be expanded with new features as the course progresses.

#### Milestone 1: Create the Express Server

Set up the basic project using Express and create a `/` route that returns the following plain text message:

```text
Server del mio blog
```

#### Milestone 2: Create the Posts Array

Create an array containing at least five blog posts.

Each post must include:

- `title`: The post title.
- `content`: The post content.
- `image`: The associated image.
- `tags`: An array of strings representing the post's tags.

#### Milestone 3: Create the Blog Endpoint

Create a `/bacheca` route that returns a JSON object containing the list of blog posts.

#### Milestone 4: Configure Static Assets

Configure static asset serving in the Express application so that the images associated with each post can be accessed and displayed.

#### Milestone 5: Test the API

Use **Postman** to test the application endpoints and verify that they return the expected responses and that the post images are accessible.

## Technologies
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) 
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white) 
![npm](https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white) 
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)

## What I learned

- Setting up an Express application with Node.js.
- Defining routes and handling HTTP requests.
- Returning plain text and JSON responses.
- Managing structured data using arrays and objects.
- Configuring static file serving with Express.
- Organizing image assets and referencing them in API data.
- Testing API endpoints using Postman.

## Credits

Exercise assigned by **Boolean Tech Academy** as part of the Web Development course (Class 152, A.Y. 2025-2026).
