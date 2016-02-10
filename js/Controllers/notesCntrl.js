var notesCntrl = angular.module('notesController',[]);

notesCntrl.controller('BasicNotesCntrl', ['$scope', function($scope){
    $scope.intro = "Swara is a Sanskrit word that means a note in the octave.The seven basic swaras of the scale ";
    $scope.swaras = [
        {
            'name': 'Shadja',
            'Short name': 'Sa',
            'notion': 'S'
        },
        {
            'name': 'Shuddha Rishabha',
            'Short name': 'Ri',
            'notion': 'R1'
        },
        {
            'name': 'Shuddha Gandhara',
            'Short name': 'Ga',
            'notion': 'G1'
        },
        {
            'name': 'Shuddha Madhyama',
            'Short name': 'Ma',
            'notion': 'M'
        }
    ];
}    
]);