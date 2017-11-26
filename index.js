var app = angular.module("scan",[]);

app.controller('scancontrol',function($scope){
 
 $scope.itemList =[];
  
 $scope.scan = function(){
	  var itemobj ={
		 name:"",
		 price:"",
		 no:""
	 };
 console.log("clicked");
 cordova.plugins.barcodeScanner.scan(function(result){
 //success callback
     alert("Adding the following into your cart " + JSON.stringify(result));
     itemobj.name = result.name;
	 itemobj.price = result.price;
	 itemobj.no = result.number;
	
	$scope.itemobj.push(itemObj);

 },function(error){
 //error callback
 alert(JSON.stringify(error));

 });
 }
 
 $scope.remove = function(index,obj){
	 $scope.splice(index,1);
	 alert("The object " + obj + "will be removed from the list");
 }
 
});