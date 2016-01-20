var app = angular.module("MyApp", [
             'ngRoute',
             'welcomeController',
             'notesController']);
 
 app.config(['$routeProvider',
         function($routeProvider){
             $routeProvider
               .when('/hello',{
                  templateUrl: 'js/Templates/welcome.html',
                  controller: 'helloCntrl'
               }).
               when('/notes',{
                   templateUrl: 'js/Templates/notels.html',
                   controller: 'BasicNotesCntrl'
               }).
               otherwise({
                   redirectTo: '/hello'
               })
         }]);