var cleanse = true;
var cleanse2 = true;
var cleanse3 = true;
var cleanse4 = true;
var cleanse5 = true;
var cleanse6 = true;

var numero = 0;
var numero1 = 0;
var numero2 = 0;
var numero3 = 0;
var numero4 = 0;
var numero5 = 0;

var i = 0;
var list= [];
var d = new Date();



function GetReady() {
  var stuff = document.getElementById("hello").value;
  if (numero === 4) {
    document.getElementById('stop').innerHTML = "Room is full!";
  }
  else if (numero < 4) {
    if (cleanse === false) {
    }
    else if (stuff.length === 0) {
    document.getElementById('full').innerHTML = "Can not be Blank";
    }
    else {
    stuff = document.getElementById("hello").value + " Date: " + new Date();
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
  var stuff = document.getElementById("hello2").value;
  if (numero1 === 4) {
    document.getElementById('stop2').innerHTML = "Room is full!";
  }
  else if (numero1 < 4) {
     if (cleanse === false) {
    }
    else if (stuff.length === 0) {
    document.getElementById('full2').innerHTML = "Can not be Blank";
    }
    else {
    stuff = document.getElementById("hello2").value + " Date: " + new Date();
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
  var stuff = document.getElementById("hello3").value;
  if (numero2 === 4) {
    document.getElementById('stop3').innerHTML = "Room is full!";
  }
  else if (numero2 < 4) {
    if (cleanse === false) {
    }
    else if (stuff.length === 0) {
    document.getElementById('full3').innerHTML = "Can not be Blank";
    }
    else {
    stuff = document.getElementById("hello3").value + " Date: " + new Date();
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
  var stuff = document.getElementById("hello4").value;
  if (numero3 === 4) {
    document.getElementById('stop4').innerHTML = "Room is full!";
  }
  else if (numero3 < 4) {
    if (cleanse === false) {
    }
    else if (stuff.length === 0) {
    document.getElementById('full4').innerHTML = "Can not be Blank";
    }
    else {
    stuff = document.getElementById("hello4").value + " Date: " + new Date();
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
  var stuff = document.getElementById("hello5").value;
  if (numero4 === 4) {
    document.getElementById('stop5').innerHTML = "Room is full!";
  }
  else if (numero4 < 4) {
    if (cleanse === false) {
    }
    else if (stuff.length === 0) {
    document.getElementById('full5').innerHTML = "Can not be Blank";
    }
    else {
    stuff = document.getElementById("hello5").value + " Date: " + new Date();
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
  var stuff = document.getElementById("hello6").value;
  if (numero5 === 4) {
    document.getElementById('stop6').innerHTML = "Room is full!";
  }
  else if (numero5 < 4) {
    if (cleanse === false) {
    }
    else if (stuff.length === 0) {
    document.getElementById('full6').innerHTML = "Can not be Blank";
    }
    else {
    stuff = document.getElementById("hello6").value + " Date: " + new Date();
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
    document.getElementById('sss').innerHTML = "Unlock Room 1";
    document.getElementById('sss').style.backgroundColor="#C14242";
    cleanse = false;
    document.getElementById("add").style.cursor = "not-allowed";
    document.getElementById("add").style.opacity = "0.7";
    document.getElementById('add').style.backgroundColor="#C14242";
  }
  else if (cleanse === false) {
    document.getElementById('sss').innerHTML = "Lock Room 1";
    document.getElementById('sss').style.backgroundColor="#7CEA38";
    cleanse = true;
    document.getElementById("add").style.cursor = "pointer";
    document.getElementById("add").style.opacity = "1";
    document.getElementById('add').style.backgroundColor="#44B72D";
  }
}
function cleaning2() {
  if (cleanse2 === true) {
    document.getElementById('sss2').innerHTML = "Unlock Room 2";
    document.getElementById('sss2').style.backgroundColor="#C14242";
    document.getElementById("add2").style.cursor = "not-allowed";
    document.getElementById("add2").style.opacity = "0.7";
    document.getElementById('add2').style.backgroundColor="#C14242";
    cleanse2=false;
  }
  else if (cleanse2 === false) {
    document.getElementById('sss2').innerHTML = "Lock Room 2";
    document.getElementById('sss2').style.backgroundColor="#7CEA38";
    document.getElementById("add2").style.cursor = "pointer";
    document.getElementById("add2").style.opacity = "1";
    document.getElementById('add2').style.backgroundColor="#44B72D";
    cleanse2 = true;
  }
}
function cleaning3() {
   if (cleanse3 === true) {
    document.getElementById('sss3').style.backgroundColor="#C14242";
    document.getElementById('sss3').innerHTML = "Unlock Room 2";
    document.getElementById("add3").style.cursor = "not-allowed";
    document.getElementById("add3").style.opacity = "0.7";
    document.getElementById('add3').style.backgroundColor="#C14242";
    cleanse3 =false;
  }
  else if (cleanse3 === false) {
    document.getElementById('sss3').style.backgroundColor="#7CEA38";
    document.getElementById('sss3').innerHTML = "Lock Room 3";
    document.getElementById("add3").style.cursor = "pointer";
    document.getElementById("add3").style.opacity = "1";
    document.getElementById('add3').style.backgroundColor="#44B72D";
    cleanse3 = true;
  }
}
function cleaning4() {
   if (cleanse4 === true) {
    document.getElementById('sss4').style.backgroundColor="#C14242";
    document.getElementById('sss4').innerHTML = "Unlock Room 4";
    document.getElementById("add4").style.cursor = "not-allowed";
    document.getElementById("add4").style.opacity = "0.7";
    document.getElementById('add4').style.backgroundColor="#C14242";
    cleanse4 =false;
  }
  else if (cleanse4 === false) {
    document.getElementById('sss4').style.backgroundColor="#7CEA38";
    document.getElementById('sss4').innerHTML = "Lock Room 4";
    document.getElementById("add4").style.cursor = "pointer";
    document.getElementById("add4").style.opacity = "1";
    document.getElementById('add4').style.backgroundColor="#44B72D";
    cleanse4 = true;
  }
}
function cleaning5() {
   if (cleanse5 === true) {
    document.getElementById('sss5').style.backgroundColor="#C14242";
    document.getElementById('sss5').innerHTML = "Unlock Room 5";
    document.getElementById("add5").style.cursor = "not-allowed";
    document.getElementById("add5").style.opacity = "0.7";
    document.getElementById('add5').style.backgroundColor="#C14242";
    cleanse5 =false;
  }
  else if (cleanse5 === false) {
    document.getElementById('sss5').style.backgroundColor="#7CEA38";
    document.getElementById('sss5').innerHTML = "Lock Room 5";
    document.getElementById("add5").style.cursor = "pointer";
    document.getElementById("add5").style.opacity = "1";
    document.getElementById('add5').style.backgroundColor="#44B72D";
    cleanse5 = true;
  }
}
function cleaning6() {
   if (cleanse6 === true) {
    document.getElementById('sss6').style.backgroundColor="#C14242";
    document.getElementById('sss6').innerHTML = "Unlock Room 6";
    document.getElementById("add6").style.cursor = "not-allowed";
    document.getElementById("add6").style.opacity = "0.7";
    document.getElementById('add6').style.backgroundColor="#C14242";
    cleanse6 =false;
  }
  else if (cleanse6 === false) {
    document.getElementById('sss6').style.backgroundColor="#7CEA38";
    document.getElementById('sss6').innerHTML = "Lock Room 6";
    document.getElementById("add6").style.cursor = "pointer";
    document.getElementById("add6").style.opacity = "1";
    document.getElementById('add6').style.backgroundColor="#44B72D";
    cleanse6 = true;
  }
}





function hakaiMaster() {
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
function hakai() {
    document.getElementById('stop').innerHTML = "";
    for (i = 0; i < numero; i++) {
    var bye1 = document.getElementById("gohome").value;
    var int1 = parseInt(bye1);
    var subtracting1 = document.getElementsByTagName('li')[0];
    var byez1 = subtracting1.parentNode;
    byez1.removeChild(subtracting1);
  }
  numero = 0;
  document.getElementById('gohome').value = "";
}
function hakai2() {
    document.getElementById('stop2').innerHTML = "";
    for (i = 0; i < numero1; i++) {
    var bye1 = document.getElementById("gohome2").value;
    var int1 = parseInt(bye1);
    var subtracting1 = document.getElementsByTagName('li')[0];
    var byez1 = subtracting1.parentNode;
    byez1.removeChild(subtracting1);
  }
  numero1 = 0;
  document.getElementById('gohome2').value = "";
}
function hakai3() {
    document.getElementById('stop3').innerHTML = "";
    for (i = 0; i < numero2; i++) {
    var bye1 = document.getElementById("gohome3").value;
    var int1 = parseInt(bye1);
    var subtracting1 = document.getElementsByTagName('li')[0];
    var byez1 = subtracting1.parentNode;
    byez1.removeChild(subtracting1);
  }
  numero2 = 0;
  document.getElementById('gohome3').value = "";
}
function hakai4() {
    document.getElementById('stop4').innerHTML = "";
    for (i = 0; i < numero3; i++) {
    var bye1 = document.getElementById("gohome4").value;
    var int1 = parseInt(bye1);
    var subtracting1 = document.getElementsByTagName('li')[0];
    var byez1 = subtracting1.parentNode;
    byez1.removeChild(subtracting1);
  }
  numero3 = 0;
  document.getElementById('gohome4').value = "";
}
function hakai5() {
    document.getElementById('stop5').innerHTML = "";
    for (i = 0; i < numero4; i++) {
    var bye1 = document.getElementById("gohome5").value;
    var int1 = parseInt(bye1);
    var subtracting1 = document.getElementsByTagName('li')[0];
    var byez1 = subtracting1.parentNode;
    byez1.removeChild(subtracting1);
  }
  numero4 = 0;
  document.getElementById('gohome5').value = "";
}
function hakai6() {
    document.getElementById('stop6').innerHTML = "";
    for (i = 0; i < numero5; i++) {
    var bye1 = document.getElementById("gohome6").value;
    var int1 = parseInt(bye1);
    var subtracting1 = document.getElementsByTagName('li')[0];
    var byez1 = subtracting1.parentNode;
    byez1.removeChild(subtracting1);
  }
  numero5 = 0;
  document.getElementById('gohome6').value = "";
}


function listing() {
    document.getElementById("list").innerHTML = "";
    for ( i = 0; i < list.length; i++) {
    var adding = document.createElement('li');
    var text = document.createTextNode(list[i]);
    adding.appendChild(text);
    var position = document.getElementsByTagName('ul')[0];
    position.appendChild(adding);
    }
}
