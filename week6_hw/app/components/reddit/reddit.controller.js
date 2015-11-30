angular.module('reddit')
	.controller('RedditController', function (RedditFactory) {

		var vm = this;

		vm.reddit = new RedditFactory();

		vm.reddit.nextPage();

		console.log('reddit crtl: ', vm);
	});