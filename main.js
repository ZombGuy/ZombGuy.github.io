
function startUp(){
	load();
	setTimeout(function(){
	save();
	console.log("function startUp called autoSave")
	autoSave();
	}, 1000);
	
	if(isNaN(Moops) == false){
		save();
	};
};

function autoSave(){
	console.log("function autoSave was called succesfully")
	setInterval(function(){
	save();
	
}, 30000)};

 function save(){
		
		var session = {
		 Moops: Moops,
		 moopers: moopers
		
		 };
	 
 
localStorage.setItem('moopdata',JSON.stringify(session));
console.log('Saved data values',session.Moops,session.moopers)
 };

function load(){
	if(localStorage.getItem("moopdata") === null){
	save();
	};
	
  var restoredSession =  JSON.parse(localStorage.getItem('moopdata'));
  if(isNaN(restoredSession.Moops) == false){ document.getElementById("Moops").innerHTML = restoredSession.Moops; console.log('Moops restored last save successfully');
  }else{
	  Moops = 0; console.log('data = undefined, Moops set to 0')}
 
  if(isNaN(restoredSession.moopers) == false){document.getElementById("moopers").innerHTML = restoredSession.moopers; console.log('moopers were restored successfully');
	  }else{
	  moopers = 0; console.log('data = undefined, moopers set to 0')
	  };
	  
    
	 console.log('loading moops and moopers',restoredSession.Moops, restoredSession.moopers);
 };

 
var restoredSession = JSON.parse(localStorage.getItem('moopdata')); 	
var Moops = restoredSession.Moops
var moopers = restoredSession.moopers
if(isNaN(Moops) == true){ 
Moops = 0	
};

if(isNaN(moopers) == true){
	moopers = 0
};



function moopClick(number){
    Moops = Moops + number
	document.getElementById("Moops").innerHTML = Moops;
	

};



function buyMooper(){
	var mooperCost = Math.floor(10 * Math.pow(1.1,moopers));
	if(Moops >= mooperCost){
		moopers = moopers + 1;
		Moops = Moops - mooperCost;
		document.getElementById('moopers').innerHTML = moopers;
		document.getElementById('Moops').innerHTML = Moops;
	};
	var nextCost = Math.floor(10 * Math.pow(1.1,moopers));
	document.getElementById('mooperCost').innerHTML = nextCost;
};

window.setInterval(function(){

moopClick(moopers);

}, 1000);
 
 
 








