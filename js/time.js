function getTime(){
   var data=new Date();
   var hours=data.getHours();
   var min=data.getMinutes();
   var sec=data.getSeconds();

   document.getElementById("time").innerHTML=(`Time: ${hours}:${min}:${sec}`);
}

setInterval(getTime, 1000);
