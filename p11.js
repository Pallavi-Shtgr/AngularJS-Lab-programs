angular.module('myApp', []).controller('appCtrl', function($scope) { 
    $scope.students = [ 
      { name: "John Doe", cgpa: 3.8 }, 
      { name: "Jane Doe", cgpa: 3.6 }, 
      { name: "Peter Parker", cgpa: 3.9 }, 
      { name: "Mary Jane Watson", cgpa: 3.7 } 
    ]; 
  });