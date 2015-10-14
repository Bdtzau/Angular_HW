(function() {
	var app = angular.module('library', []);

	app.controller('LibraryController', function($scope) {
		this.games = titles;
	});

	var titles = [{
		name: 'Dark Souls',
		release_date: 'September 22, 2011',
		publisher: 'Namco Bandai Games',
		developer: 'FromSoftware',
		genre: 'Action role-playing',
		description: 'Dark Souls takes place in the fictional kingdom of Lordran. Players assume the role of a cursed human character who has been chosen to make a pilgrimage out of the Undead Asylum to discover the fate of the Undead.',
		steam_id: "211420"
	},
	{
		name: 'The Binding of Isaac: Rebirth',
		release_date: 'November 4, 2014',
		publisher: 'Nicalis',
		developer: 'Nicalis',
		genre: 'Action-adventure, dungeon crawler, roguelike, shooter',
		description: 'The Binding of Isaac is a top-down 2D dungeon crawler game in which the player controls Isaac or one of six(?) other unlockable characters as they explore the dungeons located in Isaac\'s basement. The game\'s mechanics and presentation is similar to the dungeons of The Legend of Zelda, while incorporating random, procedurally-generated levels.',
		steam_id: "250900"
	},
	{
		name: 'The Legend of Zelda: Majora\'s Mask',
		release_date: 'April 27, 2000',
		publisher: 'Nintendo',
		developer: 'Nintendo EAD',
		genre: 'Action-adventure',
		description: 'The gameplay of Majora\'s Mask expands on that of Ocarina of Time; it retains the concept of dungeon puzzles and ocarina songs, and introduces character transformations and a three-day cycle.',
	},
	{
		name: 'Bangai-O',
		release_date: 'March 21, 2001',
		publisher: 'Conspiracy Entertainment',
		developer: 'Treasure',
		genre: 'Shoot \'em up',
		description: 'Bangai-O is split into levels, and the goal of most of them is to run, shoot, fly, slash, dodge, shoot, and shoot (did we say shoot?) anything in your path until you destroy the targets of the level.',
	},
	{
		name: 'Crypt of the NecroDancer',
		release_date: 'April 23, 2015',
		publisher: 'Klei Entertainment',
		developer: 'Brace Yourself Games',
		genre: 'Roguelike, Rhythm game',
		description: 'Crypt of the NecroDancer takes fundamental elements of a roguelike dungeon exploration game, and adds a beat-matching rhythm game set to Danny Baranowsky\'s soundtrack; the player\'s actions are most effective when moving the character set to the beat of the current song and are impaired when they miss a beat, so it is necessary to learn the rhythmic patterns that the various creatures follow.',
		steam_id: "247080"
	}];
})();
