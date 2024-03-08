let number = document.getElementById('num1');
let counter=0;

setInterval(() =>{
    if(counter==90){
        clearInterval;
    }
    else{
        counter+=1;
        number.innerHTML=`${counter}%`
    }
},22)

let number2 = document.getElementById('num2');
let counter2=0;

setInterval(() =>{
    if(counter2==80){
        clearInterval;
    }
    else{
        counter2+=1;
        number2.innerHTML=`${counter2}%`
    }
},25)

let number3 = document.getElementById('num3');
let counter3=0;
setInterval(() =>{
if(counter3==70){
    clearInterval;
}
else{
    counter3+=1;
    number3.innerHTML=`${counter3}%`
}
},29)
