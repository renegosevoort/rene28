<!--
var nu = new Date();
var dag = nu.getDate();
var dag2 = ((dag < 10) ? "0" : "") + dag;
var maand = nu.getMonth() + 1;
var maand2 = ((maand < 10) ? "0" : "") + maand;
var jaar = nu.getYear();
var jaar4 = ((jaar < 1900) ? (jaar + 1900) : (jaar));

document.write(dag2 + "-" + maand2 + "-" + jaar4);
//-->
<!--

function TijdTonen() {
var timerID = null;
var timerRunning = true;
if(timerRunning)
clearTimeout(timerID);
timerRunning = true;

var nu = new Date();
var uren = nu.getHours();
var uren2 = ((uren < 10) ? "0" : "") + uren;
var minuten = nu.getMinutes();
var minuten2 = ((minuten < 10) ? ":0" : ":") + minuten;
var seconden = nu.getSeconds();
var seconden2 = ((seconden < 10) ? ":0" : ":") + seconden;

var tijdweergave = uren2 + minuten2 + seconden2
console.log(tijdweergave);
timerID = setTimeout("TijdTonen()",1000);

document.tijdform.tijdveld.value = tijdweergave;
timerRunning = true;
TijdTonen();
document.write(uren2 + "_" + minuten2 + "_" + seconden2)
}

TijdTonen();

//-->
