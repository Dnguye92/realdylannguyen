var kojaItems = [
	{
		name: "short rib koja",
		image: "menuapp/img/shortrib.jpg",
		description: "Korean bbq short rib, sesame viniagrette lettuce, katsu aioli, sesame seeds"
	},
	{
		name: "beef koja",
		image: "menuapp/img/beef.jpg",
		description: "Korean bbq beef, sauteed onions, sesame viniagrette lettuce, pineapple, red sauce, sesame seeds"
	},
	{
		name: "chicken koja",
		image: "menuapp/img/chicken.jpg",
		description: "Korean bbq chiken, sesame viniagrette lettuce, pineapple, red sauce, sesame seeds"
	},
	{
		name: "teriyaki zen koja",
		image: "menuapp/mg/zen.jpg",
		description: "Soy & portabello mushroom patty, sesame viniagrette lettuce, pineapple, teriyaki sauce, sesame seeds"
	}
]

function menuApp() {
	var foodName = document.getElementById('foodName').value.toLowerCase()
	for(i = 0; i < kojaItems.length; i++) {
		if(foodName == kojaItems[i].name) {
			document.getElementById('name').innerHTML = kojaItems[i].name.toUpperCase()
			document.getElementById('picture').src = kojaItems[i].image
			document.getElementById('descript').innerHTML = kojaItems[i].description
			return
		} else{
			document.getElementById('name').innerHTML = "You didn't enter a menu item! Try Again!"
		}
	}
}