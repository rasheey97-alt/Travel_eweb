// Change the text between the quotation marks and run your code to see the name of your favorite 
//language animated!

drawText('Hello Rasheed JavaScript');

// The code below will allow you to interact with the letters
bounceBubbles();


function getRandomColor(){
let letters = '0123456789ABCDEF';
let color = '#';
for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
}
return color;
}
function changeColor(){
let newColor = getRandomColor();
document.body.style.backgroundColor = newColor;
}
