(function () {
	var webBody = document.body.innerHTML;
	var regexKilometer = /(\d*)\s?\-?kilomet[er][er]s?/g;
	var regexKM = /(\d*)\s?\-?km/g;
	var regexMeter = /(\d*)\s?\-?met[er][er]s?/g;
	// var regexM = /(\d*)\s?\-?m\W/gi;
	var regexKilograms = /(\d*)\s?\-?kilograms?/g;
	var regexKG = /(\d*)\s?\-?kg\.?\s/g;
	var regexCetimeters = /(\d*)\s?\-?centimet[er][er]s?/g;
	var regexCM = /(\d*)\s?\-?cms?/g;
	var regexMillimeters = /(\d*)\s?\-?millimet[er][er]s?/g;
	var regexMM = /(\d*)\smm\s?/g;
	var regexkilperhour = /(\d*)\s?\-?kilomet[er][er]\-?\s?per\-?\s?hour/g;
	var regexKPH = /(\d*)\s?\-?kph/gi;
	var regexP = /£(\d*\.?\d*)/g;
	var regexPounds = /(\d*)\s?\-?pounds?/gi;
	var regexCelcius = /(\d*)\s?\-?Celsius/gi;
	var regexC = /(\d*)\s?\-?°C/g;



	//replaces all the metric to imperial
	//km
	document.body.innerHTML = document.body.innerHTML.replace(regexKilometer, convertKM);
	document.body.innerHTML = document.body.innerHTML.replace(regexKM, convertKM);
	//meter
	document.body.innerHTML = document.body.innerHTML.replace(regexMeter, convertM);
	// document.body.innerHTML = document.body.innerHTML.replace(regexM, convertM);
	//kg
	document.body.innerHTML = document.body.innerHTML.replace(regexKilograms, convertKG);
	document.body.innerHTML = document.body.innerHTML.replace(regexKG, convertKG);
	//cm
	document.body.innerHTML = document.body.innerHTML.replace(regexCetimeters, convertCM);
	document.body.innerHTML = document.body.innerHTML.replace(regexCM, convertCM);
	//mm
	document.body.innerHTML = document.body.innerHTML.replace(regexMillimeters, convertMM);
	document.body.innerHTML = document.body.innerHTML.replace(regexMM, convertMM);
	//kph
	document.body.innerHTML = document.body.innerHTML.replace(regexkilperhour, convertKPH);
	document.body.innerHTML = document.body.innerHTML.replace(regexKPH, convertKPH);
	//pounds
	document.body.innerHTML = document.body.innerHTML.replace(regexPounds, convertP);
	document.body.innerHTML = document.body.innerHTML.replace(regexP, convertP);
	//celcius
	document.body.innerHTML = document.body.innerHTML.replace(regexCelcius, convertCel);
	document.body.innerHTML = document.body.innerHTML.replace(regexC, convertCel);


	function convertKM(str) {
		var kilo = parseInt(str);
		var miles = Math.round(kilo * 0.62137);
		if(!miles) {
			return " miles";
		}
		return miles + " miles";
	}

	function convertM(str) {
		var meter = parseInt(str);
		var feet = Math.round(meter * 3.28084);
		if(!feet) {
			return " feet";
		}
		return feet + " feet";
	}

	function convertKG(str) {
		var KG = parseInt(str);
		var lb = Math.round(KG * 2.20462);
		if(!lb) {
			return " lb";
		}
		return lb + " lb";
	}

	function convertCM(str) {
		var cm = parseInt(str);
		var inches = Math.round(cm * 0.393701);
		if(!inches) {
			return " inches";
		}
		return inches + " inches";
	}

	function convertMM(str) {
		var mm = parseInt(str);
		var inches = Math.round(mm * 0.0393701);
		if(!inches) {
			return " inches";
		}
		return inches + " inches";
	}

	function convertKPH(str) {
		var KPH = parseInt(str);
		var MPH = Math.round(KPH * 0.621371);
		if(!MPH) {
			return " MPH";
		}
		return MPH + " mph";
	}

	function convertP(str) {
		str = str.replace('£', "");
		var pounds = +str;
		var dollars = pounds * 1.46;
		if(dollars) {
			return " $"+dollars;
		}
		else {
			return " $";
		}
	}

	function convertCel(str) {
		str = str.replace('°C', "");
		var celsius = parseInt(str);
		var fahrenheit = Math.round(((celsius*9)/5)+32);
		if(fahrenheit) {
			return fahrenheit + " °F";
		}
		else {
			return "Fahrenheit";
		}
	}

	//change background-image on body
	// var flagURL = chrome.extension.getURL("images/americanflag.jpeg");
	// document.body.style.backgroundImage = "url("+flagURL+")";
	// document.body.style.backgroundSize = "cover";
	// document.body.style.backgroundRepeat = "no-repeat";

	var body = document.querySelector('body');
	var fireworksURL = chrome.extension.getURL("images/firework.png");
	var jetsURL = chrome.extension.getURL("images/jet.png");

	//add fireworks to clicks
	body.addEventListener('click', function(event) {
		var firework = document.createElement("IMG");
		firework.setAttribute("src",  fireworksURL);
		firework.setAttribute("height", "100px");
		firework.setAttribute("width", "100px");
		firework.setAttribute("class", "firework");
		firework.setAttribute("z-index", "1000");
		firework.style.position = "absolute";
		firework.style.left = event.clientX - 50 +"px";
		firework.style.top = event.clientY - 50 +"px";
		body.appendChild(firework);
		setTimeout(function(){
			var fireworkimage = body.querySelector('.firework');
			body.removeChild(fireworkimage);
		},1001);
	});

	//add jets to fly across
	//add random fireworks at the top

	setInterval(function(){
		for(var i = 0; i < 5; i++) {
			var firework = document.createElement("IMG");
			firework.setAttribute("src",  fireworksURL);
			firework.setAttribute("height", "100px");
			firework.setAttribute("width", "100px");
			firework.setAttribute("class", "firework");
			firework.setAttribute("z-index", "1000");
			firework.style.position = "fixed";
			firework.style.left = Math.floor((Math.random() * 100) + 1) + "%";
			firework.style.top = Math.floor((Math.random() * 10) + 1) + "%";
			body.appendChild(firework);
			setTimeout(function(){
				var fireworkimage = body.querySelector('.firework');
				body.removeChild(fireworkimage);
			},1001);
		}


		var jet1 = document.createElement("IMG");
		jet1.setAttribute("src", jetsURL);
		jet1.setAttribute("z-index", "1000");
		jet1.setAttribute("height", "230px");
		jet1.setAttribute("width", "140px");
		jet1.setAttribute("class", "jet");
		jet1.style.position = "fixed";
		jet1.style.left = "90%";
		jet1.style.top = "100%";
		body.appendChild(jet1);

		var jet2 = document.createElement("IMG");
		jet2.setAttribute("src", jetsURL);
		jet2.setAttribute("z-index", "1000");
		jet2.setAttribute("height", "230px");
		jet2.setAttribute("width", "140px");
		jet2.setAttribute("class", "jet");
		jet2.style.position = "fixed";
		jet2.style.top = "100%";
		body.appendChild(jet2);
		setTimeout(function(){
			var jets = body.querySelector('.jet');
			body.removeChild(jets);
		},3000);
	},5000);





})();
