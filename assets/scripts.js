

(function () {

	console.log('scripts.js');

	const theURL = "https://www.airbnb.com/rooms/13926632?guests=1&adults=1&sl_alternate_dates_exclusion=true&source_impression_id=p3_1559487073_Q6bmFEKNjAeOu1ns";
    const myButton = document.getElementsByClassName("btn");

 
 	myButton[0].addEventListener('click', openAirBnB);

 	function openAirBnB(){
 		window.open(theURL, "_self");
 	}


})();








