function ageinday() {
var birthyear=prompt('what is your birth year?');
var ageindays=(2020 - birthyear) * 365;
var h1 = document.createElement('h1');
var answer =document.createTextNode(' you are ' + ageindays + ' days older ');
h1.setAttribute('id' , 'ageinday');
h1.appendChild(answer);
document.getElementById('flexbox-result').appendChild(h1);

}

function shahu() {
document.getElementById('ageinday').remove();
}
//challenge 2: cat generatorr
function catgenerator() {
  var image = document.createElement('img');
  var div = document.getElementById('flex-cat-gen');
  image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
  div.appendChild(image);

}
//game
function rpsgame(yourchoice) {
  console.log(yourchoice);
  var humanchoice, botchoice;
   humanchoice= yourchoice.id;

   botchoice = numberToChoice(randToRpsInt());
   console.log('computer choice:', botchoice);

   results = decidewinner(humnchoice, botchoice);
   console.log(results);

   message = finalmessage(results);
   console.log(message);

  // rpsfrontend(yourchoice.id, botchoice, message);
//}

//function randToRpsInt() {
//return Math.floor(Math.random() * 3);
}

//function numberToChoice(number) {
r//eturn ['rock', 'paper', 'scissor'][number];
}

//function decidewinner(yourchoice, computerchoice) {
 var rpsdatabase = {
  'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0};
  'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0};
  'scissors': {'paper': 1, 'scissor': 0.5, 'rock': 0};
 };

var yourscore= rpsdatabase[yourchoice][computerchoice];
var computerscore= rpsdatabase[computerchoice][yourchoice];

return [yourscore, computerscore];

}

//function finalmessage([yourscore, computerscore]) {
if (yourscore === 0) {
return {'message': 'you lost!', 'color': 'red'};
} else if (yourscore === 0.5){
  return {'message': 'you tired!', 'color': 'yellow'};
} else {
return {'message': 'you won', 'color': 'green'};
}
 }

 //function rpsfrontend(humanchoice, botchoice, finalmessage) {
 var imagesdatabase = {
  'rock': document.getElementById('rock').src,
  'paper': document.getElementById('paper').src,
  'scissor': document.getElementById('scissor').src
 }

// remove picture
//document.getElementById('rock').remove();
document.getElementById('paper').remove();
document.getElementById('scissor').remove();

var huamndiv = document.createElement('div');
var botdiv = document.createElement('div');
var messagediv = document.createElement('div');

huamndiv.innerHTML "<img src='" + imagesdatabase[humanimagechoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1):')>" 
messagediv.innerHTML = "<h1 style='color: " + finalmessage['color'] + "; font-size= 60px paddig=3opx; '>" + finalmessage['message'] + "</h1>"


huamndiv.innerHTML "<img src='" + imagesdatabase[humanimagechoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1):')>" 


document.getElementById('flex-box-div').appendChild[huamndiv];
document.getElementById('flex-box-div').appendChild[messagediv];
document.getElementById('flex-box-div').appendChild[botdiv];