'use strict';

const firebase = require('firebase');

module.exports = function ($scope, AuthFactory, $window) {
    $scope.navMenuList = [
        {
            text: "All Forests",
            url: "#!/forests"
        },
        {
            text: "Favorite Forests",
            url: "#!/forests/favorites"
        },
        {
            text: "Logout",
            url: "#!/logout"
        }
    ];

    // If the url is #!/logout, then logout, otherwise go to url.
    $scope.navigate = url => {
        if (url === "#!/logout") logout();
        else $window.location.href = url;
    };

    const logout = () => {
        AuthFactory.logoutUser().then(() => {
            $window.location.href = "#!/login";
        });
    };

    $scope.isLoggedIn = () => firebase.auth().currentUser;

};