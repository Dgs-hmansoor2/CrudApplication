
var app=angular.module("mainApp",[]);

app.controller("CRUDController",function($scope)
{
    $scope.EmpList=[];
    $scope.AddData =function()
    {
        var emp ={
            Id:$scope.EmpList.length + 1,
            Name:$scope.Name,
            Salary:$scope.Salary
        };
        $scope.EmpList.push(emp);
        ClearModel();
    };

    $scope.DeleteData=function(emp)
    {
        var index =$scope.EmpList.indexOf(emp);
        $scope.EmpList=[]
        ClearModel();
        //$scope.Emplist.splice(index,1);
    };

    $scope.BindSelectedData=function(emp)
    {
        $scope.id=emp.id;
        $scope.Salary=emp.Salary;
        $scope.Name=emp.Name;
    };

    $scope.UpdateData=function()
    {
        $.grep($scope.EmpList,function(e){
            if(e.id==$scope.id)
            {
                e.Name=$scope.Name;
                e.Salary=$scope.Salary;
            }
        });
    };

    function ClearModel()
    {
        $scope.Id=0;
        $scope.Name='';
        $scope.Salary=0;
    };  

    
});