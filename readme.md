## Intro to Express and CRUD

***This repo contains my solution to the following exercise:***

### Background

Your task is to build an application that allows the user to see a list of puppies (in JSON) as well as add and see individual puppies. You should use an array of objects to create and display puppies, where each object represents a puppy. Each puppy should have an id which increments, a name, and an age.

## Getting started

### Quick start

```sh
$ mkdir express-puppies
$ cd express-puppies
$ yo galvanize-express
$ npm install
$ nodemon
```

### What's next?

1. CRUD/REST Explanation
1. Setup/Test each route:
  - GET all puppies - `/puppies/`
  - GET single puppy - `/puppy/:id`
  - POST single puppy - `/puppies/`
  - PUT single puppy - `/puppy/:id`
  - DELETE single puppy - `/puppy/:id`
1. Add a route, `/`, to display a form for adding a new puppy
1. Refactor to add Mongo
1. Add unit tests
