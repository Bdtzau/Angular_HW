angular.module('reddit')
	.service('RedditService', function ( $http, $q) {

		console.log('reddit service: ', this);

		this.getItems = function () {
			console.log('get items');
		}

		/**
	   * function getData
	   * service call pattern using angular $q promises
	   * resolve returns response, reject returns error
	   * @returns {promise.promise|jQuery.promise}
	   */
		this.nextPage = function(after) {

		    var deferred = $q.defer(),
		    // url = 'http://api.reddit.com/hot?after=' + after;
		    url = 'http://api.reddit.com/r/glitch_art/hot?after=' + after + '&jsonp=JSON_CALLBACK';
			
			// $http.get(url)
		    $http.jsonp(url)
		      .success(function (results) {
		        var data = results || [];
		        deferred.resolve(data);
		      })
		      .error(function (error) {
		      	console.log(error);
		        deferred.reject (error);
		      });

		    return deferred.promise;
		};
	});