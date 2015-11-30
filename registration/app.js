(function() {
	var app = angular.module('userSession', ['ngCookies']);

	app.controller('UserController', ['$http', '$cookies', function ($http, $cookies) {

		var vm = this;

		vm.loadUsers = function () {
			$cookies.putObject('userList', [], []);
			console.log($cookies.get('userList'));

			if ($cookies.get('userList').error) {
				console.log("not this way");
				
			}
			vm.userList = $cookies.get('userList');

			// var deferred = $q.defer();

			// $cookies.get('userList')
			// 	.success(function (results) {
			// 		vm.userList = $cookies.get('userList')
			// 	})
			// 	.error(function (error) {
			// 		$cookies.putObject('userList', [], [])
			// 	});

			// vm.userList = $cookies.get('userList') ? $cookies.get('userList') : $cookies.putObject('userList', [], []);


			console.log(vm.userList);
		};

		vm.loadUsers();

		vm.checkUser = function (user) {
			for (var i = 0; i < vm.userList.length; i++) {
				if (vm.userList[i].username === user.username) {
					return true;
				}
			};
			return false;
		};

		vm.createUser = function (user) {
			if (!vm.checkUser(user)) {
				vm.userList.push(user);
			} else {
				return false;
			}
		};
	}]);

	app.controller('RegisterFormController', function() {
		userList = [];

		this.addUser = function(user){
			var newUser = {};

			newUser.username = user.username;
			newUser.password = user.password;
			newUser.email = user.email ? newUser.email : "";
			newUser.remember = user.remember.checked ? true : false;
			newUser.spam = user.spam.checked ? true : false;

			if (user.password === user.passwordVerify) {
				UserController.createUser(newUser);
			}
		};
	});

	app.controller('LoginFormController', function () {
		this.beginSession = function (user) {

		};
	});
})();