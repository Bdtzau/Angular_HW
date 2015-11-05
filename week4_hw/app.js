(function() {
	var app = angular.module('store', []);

	app.controller('StoreController', function($scope) {
		console.log($scope);
		this.products = gems;
		this.date = new Date();
	});

	

	app.controller('ReviewFormController', function($scope) {
		this.formReview = {
			stars: '5'
		};

		this.addReview = function(product) {
			product.reviews.push(this.formReview);
		};
	});

	var gems = [
		{
			name: 'Diamond',
			price: 8000,
			description: 'This is the bling.',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					thumb: 'images/diamond.jpg'
				},
				{
					thumb: 'images/amethyst.jpg'
				},
				{
					thumb: 'images/emerald.jpg'
				},
				{
					thumb: 'images/garnet.jpg'
				},
				{
					thumb: 'images/sapphire.jpg'
				}
			],
			reviews: [
				{
					stars: 5,
					body: 'Exactly what I needed!',
					author: 'fake@name.com'
				},
				{
					stars: 1,
					body: 'Not at all what I expected',
					author: 'tom@bombadil.com'
				},
				{
					stars: 3,
					body: 'Pretty middling overall',
					author: 'jessi@mcarthy.com'
				}
			]
		},
		{
			name: 'Emerald',
			price: 5000,
			description: 'It\'s a transparent green rock',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					thumb: 'images/diamond.jpg'
				},
				{
					thumb: 'images/amethyst.jpg'
				},
				{
					thumb: 'images/emerald.jpg'
				},
				{
					thumb: 'images/garnet.jpg'
				},
				{
					thumb: 'images/sapphire.jpg'
				}
			],
			reviews: [
				{
					stars: 5,
					body: 'Exactly what I needed!',
					author: 'fake@name.com'
				},
				{
					stars: 1,
					body: 'Not at all what I expected',
					author: 'tom@bombadil.com'
				},
				{
					stars: 3,
					body: 'Pretty middling overall',
					author: 'jessi@mcarthy.com'
				}
			]
		},
		{
			name: 'Amethyst',
			price: 6000,
			description: 'It\'s a transparent purple rock',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					thumb: 'images/diamond.jpg'
				},
				{
					thumb: 'images/amethyst.jpg'
				},
				{
					thumb: 'images/emerald.jpg'
				},
				{
					thumb: 'images/garnet.jpg'
				},
				{
					thumb: 'images/sapphire.jpg'
				}
			],
			reviews: [
				{
					stars: 5,
					body: 'Exactly what I needed!',
					author: 'fake@name.com'
				},
				{
					stars: 1,
					body: 'Not at all what I expected',
					author: 'tom@bombadil.com'
				},
				{
					stars: 3,
					body: 'Pretty middling overall',
					author: 'jessi@mcarthy.com'
				}
			]
		},
		{
			name: 'Sapphire',
			price: 4000,
			description: 'It\'s a transparent blue rock',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					thumb: 'images/diamond.jpg'
				},
				{
					thumb: 'images/amethyst.jpg'
				},
				{
					thumb: 'images/emerald.jpg'
				},
				{
					thumb: 'images/garnet.jpg'
				},
				{
					thumb: 'images/sapphire.jpg'
				}
			],
			reviews: [
				{
					stars: 5,
					body: 'Exactly what I needed!',
					author: 'fake@name.com'
				},
				{
					stars: 1,
					body: 'Not at all what I expected',
					author: 'tom@bombadil.com'
				},
				{
					stars: 3,
					body: 'Pretty middling overall',
					author: 'jessi@mcarthy.com'
				}
			]
		},
		{
			name: 'Garnet',
			price: 1000,
			description: 'I couldn\'t think of more gems.',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					thumb: 'images/diamond.jpg'
				},
				{
					thumb: 'images/amethyst.jpg'
				},
				{
					thumb: 'images/emerald.jpg'
				},
				{
					thumb: 'images/garnet.jpg'
				},
				{
					thumb: 'images/sapphire.jpg'
				}
			],
			reviews: [
				{
					stars: 5,
					body: 'Exactly what I needed!',
					author: 'fake@name.com'
				},
				{
					stars: 1,
					body: 'Not at all what I expected',
					author: 'tom@bombadil.com'
				},
				{
					stars: 3,
					body: 'Pretty middling overall',
					author: 'jessi@mcarthy.com'
				}
			]
		}
	];

	//console.log(app);
})();
