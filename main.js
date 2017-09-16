

var Moops = 0;
function moopClick(number){
    Moops = Moops + number;
	document.getElementById("Moops").innerHTML = Moops;
};

var moopers = 0;
function buyMooper(){
	var mooperCost = Math.floor(10 * Math.pow(1.1,moopers));
	if(Moops >= mooperCost){
		moopers = moopers + 1;
		Moops = Moops - mooperCost;
		document.getElementById('moopers').innerHTML = moopers
		document.getElementById('Moops').innerHTML = Moops
	};
	var nextCost = Math.floor(10 * Math.pow(1.1,moopers));
	document.getElementById('mooperCost').innerHTML = nextCost;
};

window.setInterval(function(){

moopClick(moopers);


}, 1000);
