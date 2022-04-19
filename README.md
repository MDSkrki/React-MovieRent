# React Movie-Rent

## Table of Contents
- [React Movie-Rent](#react-movie-rent)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Deployment](#deployment)
  - [Functionality](#functionality)
    - [Forms](#forms)
    - [Hooks](#hooks)
    - [Movies](#movies)
  - [Pending Tasks](#pending-tasks)
  - [Thanks](#thanks)


## Introduction 
This project was made for Geekshubs Academy in order to use React with a MongoDB based Backend

## Deployment
The frontEnd is deployed through Amazon Web Services using their AWS Amplify service, while the backend is hosted on Heroku. You can access the app and use it at the following link: [React Movie-Rent](https://master.d1rixknf384fi5.amplifyapp.com/)

## Functionality

### Forms

Login and SignUp forms are using the following function in order to update automatically their values when the `Input` components send their data: 
```javascript

const updateForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }
```

In this case we grab the event triggered by the `onBlur` attribute of the input, and sets the desired value to its form field.

### Hooks

A hook has been custom created for a PopUp banner. When needed, you just need to instantiate the hook with `const <bannerName> = useBanner();` and you call it as a function, giving a `string` as parameter. The string will represent the message inside the PopUp banner.

### Movies

Movies are gathered from TMDB when accessing the Home page. Every movie can be clicked to see its details and to rent it.
If you are not logged in, when attempting to rent a movie, you will be redirected to the login page.

## Pending Tasks
- [ ] Make app much more beautiful
- [ ] Remake backend in order to relate collections properly and ease data access
- [ ] Find a different solution for inputs instead of onBlur, because using 'Enter' key from keyboards instead of submit in forms can break the data sending due to missing data.
- [ ] Save more information from movies in order to use them properly
- [ ] Add movie filtering feature
- [ ] Add rent dates and timer for the movies to stay unavailable for that user if they rented a movie (so you can't accidentally rent a movie too many times)
- [ ] Add active validations on inputs based on their types
- [ ] Transform the `<PopularMovies />` component into `<MovieList />` in order to reuse it for latest, ordered by genre, etc...
- [ ] Make caroussel-like feature for movieList in order to implement pagination
- [ ] Add environment variables
- [ ] Add feature to banner to be able to show some errors with a different color

## Thanks
- Many thanks to Gonzalo for being an amazing teacher in this journey and inspiring to create better code with attention to Detail
- Also great thanks to the amazing classmates for their constant support 
