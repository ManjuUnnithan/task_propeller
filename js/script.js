function myCtrl($scope, $http) {

 $scope.blocks = [
		{
			"heading": "Section 1",
			"content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore sed aliquam vitae fugit odit voluptate eligendi, blanditiis quasi nobis reiciendis! Rem maiores reprehenderit animi aliquam inventore vel adipisci delectus itaque! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore sed aliquam vitae fugit odit voluptate eligendi, blanditiis quasi nobis reiciendis!"
		},
		{
			"heading": "Section 2",
			"content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore sed aliquam vitae fugit odit voluptate eligendi, blanditiis quasi nobis reiciendis! Rem maiores reprehenderit animi aliquam inventore vel adipisci delectus itaque! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore sed aliquam vitae fugit odit voluptate eligendi, blanditiis quasi nobis reiciendis! Rem maiores reprehenderit animi aliquam inventore vel adipisci delectus itaque!"
		},
		{
			"heading": "Section 3",
			"content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
		}
	]
	
	
 $scope.getSubArray = function (start, end) {
   return array.slice(start, end);
 }

 $scope.activeTabs = [];

 $scope.isOpenTab = function (tab) {
        if ($scope.activeTabs.indexOf(tab) > -1) {
            return true;
        } else {
            return false;
        }
    }
    
 $scope.openTab = function (tab) {
 $scope.activeTabs.splice($scope.activeTabs.indexOf(tab), 1);
   if ($scope.isOpenTab(tab)) {
    $scope.activeTabs.splice($scope.activeTabs.indexOf(tab), 1);
   } else {
    $scope.activeTabs.push(tab);
    }
 }
}