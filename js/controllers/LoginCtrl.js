'use strict';

module.exports = function($scope, AuthFactory, $window){
   $scope.login = () => {
       AuthFactory.loginUser($scope.account)
       .then(user => {
           $window.location.href = "#!/forests/favorites";
       })
       .catch(err => {
           console.log('err', err);
       });
   };
   
   $scope.logout = () => {
    AuthFactory.logoutUser()
    .then( (data) => {
        
    })
    .catch(err => {
        console.log('err', err);
    });
  };

  $scope.register  = () => {
      AuthFactory
      .createUser($scope.account)
      .then(() => {
          $scope.login();
      })
      .catch(err => {
        console.log('err', err);
    });
  };
};