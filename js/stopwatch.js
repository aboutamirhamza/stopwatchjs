// Stopwatch code start here
let hr = document.querySelector("#hr");
let mi = document.querySelector("#mi");
let se = document.querySelector("#se");
let con = document.querySelector("#con");
let hour = document.querySelector(".hour");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");
let count = document.querySelector(".count");
let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");
let timer = false;

hour = 1;
min = 1;
sec = 1;
count = 0;

let startbtn = ()=>{
    
    timer = true;
    let counting = ()=>{
        if (timer == true) {
             con.innerHTML = check(count++);

         if (count == 100) {
            se.innerHTML = check(sec++);
            count = 0;
         }

         if (sec == 60) {
            mi.innerHTML = check(min++);
            sec = 0;
         }

         if (min == 60) {
            hr.innerHTML = check(hour++);
            sec = 0;
            min = 0;
         }
        }
    }
   let setIn = setInterval(()=>{
    counting();
   },10);
}

let check = (i)=>{
 if (i < 10) {
     i = "0" + i;
 }
 return i;
}

start.addEventListener("click",startbtn);

stop.addEventListener("click", ()=>{
    timer = false;
});

reset.addEventListener("click",()=>{
    timer = false;
    con.innerHTML = "00";
    se.innerHTML = "00";
    mi.innerHTML = "00";
    hr.innerHTML = "00";
})
// Stopwatch code end here


// color change code start here
let body = document.querySelector("body");
let color = document.querySelectorAll(".color");
let colorConvert = Array.from(color);

colorConvert.map((bodyItem)=>{
    bodyItem.addEventListener("click",()=>{
        body.style.background = bodyItem.dataset.color;
    });
})
// color change code end here