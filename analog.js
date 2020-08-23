const secondhand=document.querySelector("#sec");
const minhand=document.querySelector("#min");
const hourhand=document.querySelector("#hour");

function updatetime(){

const now= new Date();
const second = now.getSeconds();
const min=now.getMinutes();
const hour=now.getHours();
const seconddeg=second*(360/60)+90;
const mindeg=((min*360/60)+second*(360/60)/60)+90;
const hourdeg=((hour*360/12) + ((min * 360/60)/12))+90 ;

console.log(hour,min,second);

secondhand.style.transform=`rotate(${seconddeg}deg)`;
minhand.style.transform=`rotate(${mindeg}deg)`
hourhand.style.transform=`rotate(${hourdeg}deg)`
console.log(seconddeg);
}


setInterval(updatetime,1000);
