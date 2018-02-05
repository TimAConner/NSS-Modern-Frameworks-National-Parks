'use strict';

module.exports = function($scope, AuthFactory, $window){
   $scope.login = () => {
       AuthFactory.loginUser($scope.account)
       .then(user => {
           console.log('user', user);
           $window.location.href = "#!/forests/favorites";
       })
       .catch(err => {
           console.log('err', err);
       });
   };
   
   $scope.logout = () => {
    AuthFactory.logoutUser()
    .then( (data) => {
      console.log("logged out", data);
    });
  };
};