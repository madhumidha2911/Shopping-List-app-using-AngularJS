(function(){

var app=angular.module('myApp',[]);
    
    app.controller('myController', myControllerFun);
    
    myControllerFun.$inject  =["$scope"];
    
    var itemList =["Dry Fruits", "Perfume", "Toothpaste","Magie","Cookies","Snakes"];
    
    function myControllerFun($scope){
        $scope.name="pankaj";
        $scope.itemList =itemList;
        
        $scope.errormsg="";
        
        $scope.removeIt =function(i){
            $scope.errormsg="";
            $scope.itemList.splice(i,1);
        }
        
        
        $scope.addItemFun =function(){
           if(!$scope.addItem){return ;} 
            if($scope.itemList.indexOf($scope.addItem)== -1)
                {
                     $scope.itemList.push($scope.addItem); 
                }
            else
                {
                $scope.errormsg="This item is already exit in List. Please check.";
                }
             
        }
        
        
    }
    
    
    
    
})();