# andculture
brewApi and react app
Deployed on Heroku at -- https://cryptic-lake-41162.herokuapp.com/

Brew-Location uses the Openbrewerydb API to pull in data about brewerys in the United States. Through a express API this application retrieves 
data from the the openbrewerydb to serve to the React application. 


Some of this applications features are a state search for breweries, a refined city
and state search, a randomized dashboard to find new breweries along with the option to create an account in order to favorite some of 
a users most liked or anticipated breweries. When a user creates an account they may save information about their 'Favs' to a mongoDB database along with their user
information. This application also utilizes a redux store to hold onto the most recent search results for quick navigation back from seeing 
more information on a brewery such as its address and location on google maps. 


