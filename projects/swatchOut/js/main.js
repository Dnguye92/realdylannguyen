//Create functions for menu button
let menuButton = document.getElementById('menuButton');
let closeButton = document.getElementById('closeButton');
let sideNav = document.getElementById('sideNav');

menuButton.addEventListener('click', () => {
	sideNav.style.width = '30%';
});
closeButton.addEventListener('click', () => {
	sideNav.style.width = '0';
});

