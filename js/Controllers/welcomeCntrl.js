var vlcmCntrl = angular.module('welcomeController',[]);

vlcmCntrl.controller('helloCntrl', ['$scope',
     function($scope){
            $scope.name = "Manasa";
}]);