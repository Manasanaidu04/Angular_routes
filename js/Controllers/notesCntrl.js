var notesCntrl = angular.module('notesController',[]);

notesCntrl.controller('BasicNotesCntrl', ['$scope', function($scope){
    $scope.intro = "Swara is a Sanskrit word that means a note in the octave.The basic swaras of the scale ";
    $scope.swaras = [
        {
            'name': 'Shadja',
            'shortName': 'Sa',
            'notion': 'S'
        },
        {
            'name': 'Shuddha Rishabha',
            'shortName': 'Ri',
            'notion': 'R1'
        },
        {
            'name': 'Shuddha Gandhara',
            'shortName': 'Ga',
            'notion': 'G1'
        },
        {
            'name': 'Shuddha Madhyama',
            'shortName': 'Ma',
            'notion': 'M'
        }
    ];
}    
]);