var acts = document.getElementById("header-acts");
var webAppActsHTML = document.getElementById("webapp-activities");
var ComprogActsHTML = document.getElementById("comprog-activities");
var STSActsHTML = document.getElementById("sts-activities");
var PurComActsHTML = document.getElementById("purcom-activities");
var FilDisActsHTML = document.getElementById("fildis-activities");
var SSPActsHTML = document.getElementById("ssp-activities");
var InfoManActsHTML = document.getElementById("infoman-activities");
var ProbStatActsHTML = document.getElementById("probstat-activities");
var FitnessActsHTML = document.getElementById("fitness-activities");
var NSTPActsHTML = document.getElementById("nstp-activities");

var webApp = "<h3></h3>";
var comProg = "<h3></h3> ";
var sts ="<h3>STEP 3: Accomplish the Student Contract for Flexible Learning</h3>";
var purcom = "<h3>Quiz [Fri]</h3>";
var fildis = "<h3></h3>";
var ssp = "<h3>EM-at3.  Market Structures [Due: Fri]</h3>";
var infoman = "<h3>Quiz in TBL</h3><h3>Asynchronous Activity (Table)</h3>";
var probstat = "<h3></h3>";
var fitness = "<h3></h3>";
var nstp = "<h3></h3>";

var thereIsWeb = false;
var thereIsComprog = false;
var thereIsSts = true;
var thereIsPurcom = true;
var thereIsFildis = false;
var thereIsSSP = true;
var thereIsInfoman = true;
var thereIsProbstat = false;
var thereIsFitness = false;
var thereIsNstp = false;

if (thereIsWeb) {
  webAppActsHTML.innerHTML = webApp;
  var webAppActHero = "WEBAPP:" + webApp;
} else {
  webAppActHero = "";
  webAppActsHTML.innerHTML = "None";
}

if (thereIsComprog) {
  ComprogActsHTML.innerHTML = comProg;
  var comProgActHero = "COMPROG:" + comProg;
} else {
  comProgActHero = "";
  ComprogActsHTML.innerHTML = "None";
}

if (thereIsSts) {
  STSActsHTML.innerHTML = sts;
  var stsActHero = "STS:" + sts;
} else {
  var stsActHero = "";
  STSActsHTML.innerHTML = "None";
}

if (thereIsPurcom) {
  PurComActsHTML.innerHTML = purcom;
  var purcomActHero = "PURPOSIVE COMM:" + purcom;
} else {
  var purcomActHero = "";
  PurComActsHTML.innerHTML = "None";
}

if (thereIsFildis) {
  FilDisActsHTML.innerHTML = fildis;
  var fildisActHero = "FILDIS:" + fildis;
} else {
  var fildisActHero = "";
  FilDisActsHTML.innerHTML = "None";
}

if (thereIsSSP) {
  SSPActsHTML.innerHTML = ssp;
  var sspActHero = "SSP: " + ssp;
} else {
  var sspActHero = "";
  SSPActsHTML.innerHTML = "None";
}

if (thereIsInfoman) {
  InfoManActsHTML.innerHTML = infoman;
  var infomanActHero = "INFOMAN: " + infoman;
} else {
  var infomanActHero = "";
  InfoManActsHTML.innerHTML = "None";
}

if (thereIsProbstat) {
  ProbStatActsHTML.innerHTML = probstat;
  var probstatActHero = "PROBSTAT: " + probstat;
} else {
  var probstatActHero = "";
  ProbStatActsHTML.innerHTML = "None";
}

if (thereIsFitness) {
  FitnessActsHTML.innerHTML = fitness;
  var fitnessActHero = "FITNESS:" + fitness;
} else {
  var fitnessActHero = "";
  FitnessActsHTML.innerHTML = "None";
}

if (thereIsNstp) {
  NSTPActsHTML.innerHTML = nstp;
  var nstp = "NSTP:" + nstp;
} else {
  var nstp = "";
  NSTPActsHTML.innerHTML = "None";
}

var updateTime = "<p>Updated: 3/4/2022 8:15 PM</p>";

acts.innerHTML = "";
acts.innerHTML =
  updateTime +
  "<h2>Your upcoming activites this week:</h2> " +
  webAppActHero +
  comProgActHero +
  stsActHero +
  purcomActHero +
  fildisActHero +
  sspActHero +
  infomanActHero +
  probstatActHero +
  fitnessActHero +
  nstp;
