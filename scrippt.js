var numero = 0;
var cleanse = true;
var numero1 = 0;
var numero2 = 0;
var numero3 = 0;
var numero4 = 0;
var numero5 = 0;
var i = 0;
var list= [];



function GetReady() {
  var d = new Date();
  var stuff = document.getElementById("hello").value + " in at " + d.getMonth() +  "."  + d.getDay() + "." + d.getFullYear() + " Time: " +
  d.getHours() + "." + d.getMinutes() + "." + d.getSeconds();
  if (numero === 4) {
    document.getElementById('stop').innerHTML = "Room is full!";
  }
  else if (numero < 4) {
    if (cleanse === false) {
    }
    else {
    list.push(stuff);
    var adding = document.createElement('LI');
    document.getElementById('full').innerHTML = "";
    var text = document.createTextNode(stuff);
    adding.appendChild(text);
    var position = document.getElementsByTagName('ol')[0];
    
    position.appendChild(adding);
    stuff = document.getElementById("hello").value = "";
    numero++;
    }
  }
}
function GetReady2() {
  var d = new Date();
  var stuff = document.getElementById("hello2").value + " in at " + d.getMonth() +  "."  + d.getDay() + "." + d.getFullYear() + " Time: " +
  d.getHours() + "." + d.getMinutes() + "." + d.getSeconds();
  if (numero1 === 4) {
    document.getElementById('stop2').innerHTML = "Room is full!";
  }
  else if (numero1 < 4) {
     if (cleanse === false) {
    }
    else {
    list.push(stuff);
    var adding = document.createElement('li');
    document.getElementById('full2').innerHTML = "";
    var text = document.createTextNode(stuff);
    adding.appendChild(text);
    var position = document.getElementsByTagName('ol')[1];
    position.appendChild(adding);
    stuff = document.getElementById("hello2").value = "";
    numero1++;
    }
  }
}
function GetReady3() {
  var d = new Date();
  var stuff = document.getElementById("hello3").value + " in at " + d.getMonth() +  "."  + d.getDay() + "." + d.getFullYear() + " Time: " +
  d.getHours() + "." + d.getMinutes() + "." + d.getSeconds();
  if (numero2 === 4) {
    document.getElementById('stop3').innerHTML = "Room is full!";
  }
  else if (numero2 < 4) {
    if (cleanse === false) {
    }
    else {
    list.push(stuff);
    var adding = document.createElement('LI');
    document.getElementById('full3').innerHTML = "";
    var text = document.createTextNode(stuff);
    adding.appendChild(text);
    var position = document.getElementsByTagName('ol')[2];
    position.appendChild(adding);
    stuff = document.getElementById("hello3").value = "";
    numero2++;
    }
  }
}
function GetReady4() {
  var d = new Date();
  var stuff = document.getElementById("hello4").value + " in at " + d.getMonth() +  "."  + d.getDay() + "." + d.getFullYear() + " Time: " +
  d.getHours() + "." + d.getMinutes() + "." + d.getSeconds();
  if (numero3 === 4) {
    document.getElementById('stop4').innerHTML = "Room is full!";
  }
  else if (numero3 < 4) {
    if (cleanse === false) {
    }
    else {
    list.push(stuff);
    var adding = document.createElement('LI');
    document.getElementById('full4').innerHTML = "";
    var text = document.createTextNode(stuff);
    adding.appendChild(text);
    var position = document.getElementsByTagName('ol')[3];
    position.appendChild(adding);
    stuff = document.getElementById("hello4").value = "";
    numero3++;
    }
  }
}
function GetReady5() {
  var d = new Date();
  var stuff = document.getElementById("hello5").value + " in at " + d.getMonth() +  "."  + d.getDay() + "." + d.getFullYear() + " Time: " +
  d.getHours() + "." + d.getMinutes() + "." + d.getSeconds();
  if (numero4 === 4) {
    document.getElementById('stop5').innerHTML = "Room is full!";
  }
  else if (numero4 < 4) {
    if (cleanse === false) {
    }
    else {
    list.push(stuff);
    var adding = document.createElement('LI');
    document.getElementById('full5').innerHTML = "";
    var text = document.createTextNode(stuff);
    adding.appendChild(text);
    var position = document.getElementsByTagName('ol')[4];
    position.appendChild(adding);
    stuff = document.getElementById("hello5").value = "";
    numero4++;
    }
  }
}
function GetReady6() {
  var d = new Date();
  var stuff = document.getElementById("hello6").value + " in at " + d.getMonth() +  "."  + d.getDay() + "." + d.getFullYear() + " Time: " +
  d.getHours() + "." + d.getMinutes() + "." + d.getSeconds();
  if (numero5 === 4) {
    document.getElementById('stop6').innerHTML = "Room is full!";
  }
  else if (numero5 < 4) {
    if (cleanse === false) {
    }
    else {
    list.push(stuff);
    var adding = document.createElement('LI');
    document.getElementById('full6').innerHTML = "";
    var text = document.createTextNode(stuff);
    adding.appendChild(text);
    var position = document.getElementsByTagName('ol')[5];
    position.appendChild(adding);
    stuff = document.getElementById("hello6").value = "";
    numero5++;
    }
  }
}



function CheckOut() {
  document.getElementById('stop').innerHTML = "";
  var list = document.getElementById("yes");
  var bye = document.getElementById("gohome").value;
  var int = parseInt(bye);
  list.removeChild(list.childNodes[int]);
  numero--;
  document.getElementById('gohome').value = "";
}
function CheckOut2() {
  document.getElementById('stop2').innerHTML = "";
  var list = document.getElementById("yes2");
  var bye = document.getElementById("gohome2").value;
  var int = parseInt(bye);
  list.removeChild(list.childNodes[int - 1]);
  numero1--;
  document.getElementById('gohome2').value = "";
}
function CheckOut3() {
  document.getElementById('stop3').innerHTML = "";
  var list = document.getElementById("yes3");
  var bye = document.getElementById("gohome3").value;
  var int = parseInt(bye);
  list.removeChild(list.childNodes[int - 1]);
  numero2--;
  document.getElementById('gohome3').value = "";
}
function CheckOut4() {
  document.getElementById('stop4').innerHTML = "";
  var list = document.getElementById("yes4");
  var bye = document.getElementById("gohome4").value;
  var int = parseInt(bye);
  list.removeChild(list.childNodes[int - 1]);
  numero3--;
  document.getElementById('gohome4').value = "";
}
function CheckOut5() {
  document.getElementById('stop5').innerHTML = "";
  var list = document.getElementById("yes5");
  var bye = document.getElementById("gohome5").value;
  var int = parseInt(bye);
  list.removeChild(list.childNodes[int - 1]);
  numero4--;
  document.getElementById('gohome5').value = "";
}
function CheckOut6() {
  document.getElementById('stop6').innerHTML = "";
  var list = document.getElementById("yes6");
  var bye = document.getElementById("gohome6").value;
  var int = parseInt(bye);
  list.removeChild(list.childNodes[int - 1]);
  numero5--;
  document.getElementById('gohome6').value = "";
}



function cleaning() {
  if (cleanse === true) {
    document.getElementById("clean").innerHTML = "The Rooms are locked for cleaning";
    document.getElementById('sss').innerHTML = "Unlock Rooms for Service";
    document.getElementById('sss').style.backgroundColor="#C14242";
    cleanse = false;

  }
  else if (cleanse === false) {
    document.getElementById("clean").innerHTML = "The Rooms are now available";
    document.getElementById('sss').innerHTML = "Lock Rooms for Cleaning";
    document.getElementById('sss').style.backgroundColor="#7CEA38";
    cleanse = true;
  }
}



function hakai() {
  document.getElementById('stop').innerHTML = "";
  document.getElementById('stop2').innerHTML = "";
  document.getElementById('stop3').innerHTML = "";
  document.getElementById('stop4').innerHTML = "";
  document.getElementById('stop5').innerHTML = "";
  document.getElementById('stop6').innerHTML = "";
  for (i = 0; i < numero; i++) {
    var bye = document.getElementById("gohome").value;
    var int = parseInt(bye);
    var subtracting = document.getElementsByTagName('li')[0];
    var byez = subtracting.parentNode;
    byez.removeChild(subtracting);
  }
   for (i = 0; i < numero1; i++) {
    var bye1 = document.getElementById("gohome2").value;
    var int1 = parseInt(bye1);
    var subtracting1 = document.getElementsByTagName('li')[0];
    var byez1 = subtracting1.parentNode;
    byez1.removeChild(subtracting1);
  }
    for (i = 0; i < numero2; i++) {
    var bye1 = document.getElementById("gohome3").value;
    var int1 = parseInt(bye1);
    var subtracting1 = document.getElementsByTagName('li')[0];
    var byez1 = subtracting1.parentNode;
    byez1.removeChild(subtracting1);
  }
    for (i = 0; i < numero3; i++) {
    var bye1 = document.getElementById("gohome4").value;
    var int1 = parseInt(bye1);
    var subtracting1 = document.getElementsByTagName('li')[0];
    var byez1 = subtracting1.parentNode;
    byez1.removeChild(subtracting1);
  }
    for (i = 0; i < numero4; i++) {
    var bye1 = document.getElementById("gohome5").value;
    var int1 = parseInt(bye1);
    var subtracting1 = document.getElementsByTagName('li')[0];
    var byez1 = subtracting1.parentNode;
    byez1.removeChild(subtracting1);
  }
    for (i = 0; i < numero5; i++) {
    var bye1 = document.getElementById("gohome6").value;
    var int1 = parseInt(bye1);
    var subtracting1 = document.getElementsByTagName('li')[0];
    var byez1 = subtracting1.parentNode;
    byez1.removeChild(subtracting1);
  }
  i = 0;
  numero = 0;
  numero1 = 0;
  numero2 = 0;
  numero3 = 0;
  numero4 = 0;
  numero5 = 0;
  document.getElementById('gohome').value = "";
  document.getElementById('gohome2').value = "";
  document.getElementById('gohome3').value = "";
  document.getElementById('gohome4').value = "";
  document.getElementById('gohome5').value = "";
  document.getElementById('gohome6').value = "";
}

function list() {
  document.getElementById("list").innerHTML = toString(list);
}
 /* else if (stuff.length === 0) {
    document.getElementById('full').innerHTML = "Room is being Cleaned";
  }// doesnt work//*/
