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

var webApp = "<h3>HANDS ON [Due: Mon]</h3>";
var comProg = "<h3>Assignment 1: Review in Control Structures [Due: Sat]</h3> ";
var sts =
  "<h3>STEP 3: Accomplish the Student Contract for Flexible Learning</h3>";
var purcom = "<h3>Quiz [Fri]</h3>";
var fildis = "<h3>GAWAIN 1 [Due: Fri]</h3>";
var ssp = "<h3></h3>";
var infoman = "<h3>Quiz in TBL</h3>";
var probstat = "<h3>Activity 1 - Simple Probability</h3>";
var fitness = "<h3>3.4 Quiz - Water and Hydration [Due: Fri]</h3>";
var nstp = "<h3></h3>";

var thereIsWeb = true;
var thereIsComprog = true;
var thereIsSts = true;
var thereIsPurcom = true;
var thereIsFildis = true;
var thereIsSSP = false;
var thereIsInfoman = true;
var thereIsProbstat = true;
var thereIsFitness = true;
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
  var stsActHero = "STS" + sts;
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

var updateTime = "<p>Updated: 2/24/2022 5:00PM</p>";

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
