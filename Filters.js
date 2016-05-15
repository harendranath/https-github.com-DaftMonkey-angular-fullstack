<!DOCTYPE html>
<html>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<body bgcolor="lightblue">
<marquee>  See This Exotic Demonstration  Usage of Filters In AngularJS@author HarendraNath.V </marquee>

<p>Click the table headers to change the sorting order:</p>

<div ng-app="foodAngler" ng-controller="namesCtrl">

<table border="1" width="100%">
<tr>
<th ng-click="orderByMe('name')">Name</th>
<th ng-click="orderByMe('country')">Country</th>
</tr>
<tr ng-repeat="x in names | orderBy:hari">
<td>{{x.name}}</td>
<td>{{x.country}}</td>
</tr>
</table>
</div>

<script>
angular.module('foodAngler', []).controller('namesCtrl', function($scope) {
    $scope.names = [
        {name:'Ramesh',country:'USA'},
        {name:'V.Harendranath',country:'USA'},
        {name:'Harendranath.V',country:'India'},
        {name:'Radha',country:'Asutralia'},
        {name:'Ram',country:'Malaysia'},
        {name:'Sirisha',country:'Singapore'},
        {name:'vandana',country:'USA'},
        {name:'KrishnaDilip',country:'Dubai'},
        {name:'Ashok',country:'India'}
        ];
    $scope.orderByMe = function(x) {
        $scope.hari = x;
    }
});
</script>

</body>
</html>
