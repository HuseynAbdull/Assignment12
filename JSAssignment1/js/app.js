
var time= new Date();
var hours = time.getHours();
 
if (hours>=6 && hours<10)
alert('Sabahınız Xeyir');

else if (hours>=10 && hours<19)
alert('Günortanız Xeyir');
 
else if (hours>=19 && hours<24)
   alert('Axshamınız Xeyir');
 
else if (hours>=0 && hours<6)
alert('Gecəniz Xeirə qalsın');



if (hours>=6 && hours<20) {
   body.style.backgroundColor = 'white';
}
else{
   body.style.backgroundColor = 'black';
};




function DarkMode(){
   var body =document.body;
    var button =document.getElementById('dm');

   if(body.style.backgroundColor === 'black'){
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
    button.innerHTML ='D/M';
    button.style.backgroundColor = 'black';
    button.style.color = 'white';
   } 
   else{
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
    button.innerHTML ='L/M';
    button.style.backgroundColor = 'white';
    button.style.color = 'black';
   }

};
