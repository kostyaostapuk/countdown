//Set the date we're counting down to
var countDownDate=new Date("Aug 23, 2017 00:00:00").getTime();

var countdown=setInterval(function(){
   var now =new Date().getTime();

   var distance=countDownDate-now;

   var days=Math.floor(distance/(1000*60*60*24));
   var hours=Math.floor((distance % (1000*60*60*24)) / (1000 * 60 * 60));
   var min=Math.floor((distance%(1000*60*60)) / (1000*60));
   var sec=Math.floor((distance%(1000*60))/1000);

   //Output the result in an element with id="countdown"
   document.getElementById("countdown").innerHTML=(`Kostya your happy birthday through: <br> DAYS:${days} HOURS:${hours} MIN: ${min} SEC: ${sec}`);

   // If the count down is over, write some text
   if (distance<0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "Happy Birthday!";
   }
},1000);
