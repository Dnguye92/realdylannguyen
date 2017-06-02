//Constructor object notation for Bike function
function Bike(name, size, price, image) {
	this.name = name
	this.size = size
	this.price = price
	this.image = image
}

//Create bikeArray which will push all bike variables into the array
var bikeArray = []

//Push each individual variable into bikeArray
var bike0 = new Bike('Gods Breath', '58cm', 395.00, 'fixd/img/bike0.png')

var bike1 = new Bike('Quasimodo', '56cm', 350.00, 'fixd/img/bike1.png')

var bike2 = new Bike('Kona', '58cm', 425.00, 'fixd/img/bike2.png')

var bike3 = new Bike('Airstream', '56cm', 450.00, 'fixd/img/bike3.png')

var bike4 = new Bike('iRobot', '60cm', 400.00, 'fixd/img/bike4.png')

var bike5 = new Bike('Barney', '56cm', 495.00, 'fixd/img/bike5.png')

bikeArray.push(bike0)
bikeArray.push(bike1)
bikeArray.push(bike2)
bikeArray.push(bike3)
bikeArray.push(bike4)
bikeArray.push(bike5)

for(i = 0; i < bikeArray.length; i++) {
	var bikeName = document.createTextNode(bikeArray[i].name)
	var bikeSize = document.createTextNode('Size: ' + bikeArray[i].size)
	var bikePrice = document.createTextNode('Price: $' + bikeArray[i].price + ".00")
	var bikeImage = bikeArray[i].image

	var newCol = document.createElement('div')
	var newDiv = document.createElement('div')
	var bikeHeader = document.createElement('h1')
	var bikeHeight = document.createElement('h4')
	var bikePriceTag = document.createElement('h5')
	var image = document.createElement('img')
	var landingImage = document.createElement('img')
	landingImage.setAttribute('src', 'fixd/img/landing.jpg')

	var overLay = document.createElement('a')
	overLay.setAttribute('id', 'overLay')


	bikeHeader.appendChild(bikeName)
	bikeHeight.appendChild(bikeSize)
	bikePriceTag.appendChild(bikePrice)
	image.src = bikeImage
	image.className = 'img-responsive'
	image.setAttribute('id', 'products')

	landingImage.className = 'img-responsive'
	newCol.className = 'col-sm-4'
	newDiv.className = 'bikeDiv name' + i + " thumbnail"
	newDiv.appendChild(bikeHeader)
	newDiv.appendChild(image)
	newDiv.appendChild(bikeHeight)
	newDiv.appendChild(bikePriceTag)
	newCol.appendChild(newDiv)

	// image.appendChild(newLink)

	
	document.getElementById('bikes').appendChild(newCol)
}
document.getElementById('products').appendChild(overLay)
document.getElementById('topSection').appendChild(landingImage)
