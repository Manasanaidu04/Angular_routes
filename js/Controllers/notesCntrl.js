var notesCntrl = angular.module('notesController',[]);

notesCntrl.controller('BasicNotesCntrl', ['$scope', function($scope){
    $scope.name = [
        {
            'name': 'sa'
        },
        {
            'name': 'ri'
        },
        {
            'name': 'ga'
        },
        {
            'name': 'ma'
        }
    ];
}    
]);