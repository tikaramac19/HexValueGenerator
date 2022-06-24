const colors = ["green", "crimson", "rgba(133,122,200)", "#f15025","#800000","#800080","#808000","#008080"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
        // console.log(document.body)
        // get random number between 0-7

        const randomNumber = getRandomNumber();

        // console.log(randomNumber);

        document.body.style.backgroundColor = colors[randomNumber];

        color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    // it generates random numbers from 0 - 7
    let randomNum = Math.floor(Math.random()*7) + 1;

    return randomNum;
}