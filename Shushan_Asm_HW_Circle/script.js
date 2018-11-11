const BIGCIRCLE = document.createElement('div');
BIGCIRCLE.setAttribute("id", "bigCircle");

const SMALLCIRCLE = document.createElement('div');
SMALLCIRCLE.setAttribute("id", "smallCircle");

BIGCIRCLE.appendChild(SMALLCIRCLE);
document.body.appendChild(BIGCIRCLE);

const STARTBUTTON = document.createElement('button');
STARTBUTTON.setAttribute("id", "start");
STARTBUTTON.innerHTML="Start"
STARTBUTTON.classList.add("button");

const STOPBUTTON = document.createElement('button');
STOPBUTTON.setAttribute("id", "stop");STOPBUTTON.innerHTML="Stop"
STOPBUTTON.classList.add("button");

document.body.appendChild(STARTBUTTON);
document.body.appendChild(STOPBUTTON);


var deg = 0;

function move(){
  deg = deg + 1;
  if(deg == 360){
    deg = 0;
  }

  SMALLCIRCLE.style.transform = "rotate(" + deg + "deg)"


}

var intervalID = null;

function intervalCoordination(flag, action, time) {
   if(flag){
     intervalID =  setInterval(action, time);
   }
   else
     clearInterval(intervalID);
}

function startMove(){
  intervalCoordination(true, move, 10);
}

function stopMove(){
  SMALLCIRCLE.style.transform = "rotate(" + deg + "deg)"
  intervalCoordination(false);
}

document.getElementById("start").onclick = startMove;
document.getElementById("stop").onclick = stopMove;
