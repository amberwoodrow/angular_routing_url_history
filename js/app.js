var app = angular.module("yourAppName", ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'homeController'
    })
    .when('/dogs', {
      templateUrl: 'partials/dogs.html',
      controller: 'dogsController'
    })
    .otherwise({redirectTo:'/'});
});

// EXERCISE: Make a simple portfolio site using Angular. It should have 3 routes: "projects", "bio", and "resume". 
// Add a Bootstrap navbar to the layout file with links to all 3 routes. Figure out how to have the navbar reflect the 
// current route that a user is on.

// EXERCISE: Make a simple route-based calculator. When a user visits "/add/4/10", display "14". Do the same thing for
// division. To accomplish this, your routes will need to have path variables. Research how to define variable segments
// in your route. Next, you'll need to research how you access the value of path variables inside of a controller. You'll
//  need to find the angular equivalent of the params hash in rails or the req.params object in Express.

// EXERCISE: Refactor the above exercise so that your calculator works using the query string. When a user visits
//  "/add/?x=4&y=10", display "14". You will need to research how to access query string data inside of a controller.

// EXERCISE: Configure Angular so that routes do not contain #'s. 
// Research! You may want to start using https://www.npmjs.com/package/superstatic instead of http-server