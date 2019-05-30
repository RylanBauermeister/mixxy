# Mixxy
#### A Playful React App for Finding and Storing Cocktails

Mixxy is a lightweight showcase of various react features, encapsulated in the shell of a cocktail search application.

Its features include:

  - API querying using a backend rails proxy
  - JWT login
  - React Routing for situational element display
  - Persistent linking of drinks to a user profile
  - Utilization of an iframe to add site music
  - Use of Semantic UI CSS across a site

## Setup

To fork and boot up Mixxy, follow these steps:

1. Clone the project into a local directory
2. From the terminal, navigate `mixxy-backend` folder and run `rails db:create`
3. Run `rails db:migrate`
4. Run `rails s`
5. Run `cd ../mixxy-frontend`
6. Run `npm i && npm start`
7. When prompted to run on an alternate server, do so.

Mixxy should be up and running on localhost:3001!

## Visit Mixxy
Mixxy isn't running on any live servers right now!  Check back in a bit.

## Using Mixxy
##### Make An Account
You can only actually save drinks if you are logged in.  Please make sure you go through the login portal.  There are no requirements on passwords or usernames.

##### Editing Your Account
Your account details can be edited from the "settings" menu.

##### Turn Off The Music
To turn off the music, simply click the speaker in the top right and it's gone.

##### View Drinks
Drinks can be viewed by searching either by ingredient or name.  Please note: searching by ingredient can take some time--if it's lagging, don't worry!  Mixxy is working on getting you a nice list.

##### Adding and Removing From My Drinks
By clicking on a drink, the user can view details on it. If you do so from the search results, you will be presented with a button to add that cocktail to your list.  If you are viewing from within your drinks, you will instead be given the option to remove it.  Your list of drinks will be persisted across sessions.

## Contributing to Mixxy
Have something you'd like to add, or an issue to report?  Fill out an issue report, or make a commit to a branch, and fill out a pull request and we'll be happy to look it over.  We're a little team of two, so it might take us a little bit, but we promise we'll put your changes under advisement.  

Remember, contributions should be:
- Productive
- Professional
- Practical

When filing an issue report, please include the following:
1. A description of the bug
2. The steps to reproduce the bug
3. The expected behavior
4. The actual behavior

## Using Mixxy
Feel free to use Mixxy, or its associated code if you wish.  We're fine with it provided that you credit the original source material!

## Creators
- Rylan Bauermeister
- Chris Cable

## Sources
Music: [SensualMusic8](https://sensualmusic8.wixsite.com)
Favicon: [Cocktail shaker](https://visualpharm.com/)
API: [TheCocktailDB](https://www.thecocktaildb.com/)

## Licensing
MIT
