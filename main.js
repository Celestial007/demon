let aug = document.getElementById("aug");
let playbtn = document.getElementById("playbtn");
let nextbtn = document.getElementById("nextbtn");
let prebtn = document.getElementById("prebtn");
let shiftbtn = document.getElementById("shiftbtn");
let imgCover = document.getElementById("cover");
let seekBar = document.getElementById("seekBar");
let songtitle = document.getElementById("songtitle");
let body = document.body;

//seekbar
seekBar.value=0
let seeking =true;


aug.onloadedmetadata = function(){
    seekBar.max = aug.duration;
}
seekBar.onchange = function(){
    seeking =false;
    aug.currentTime = seekBar.value;
}

let TotalsongsID =songID.length;
let currentIndex = 0;


imgCover.classList.add("cover");

//shuffle
let shift = false;


//to store images and songs in array
let store = "https://lets.linkpc.net/music/mp3/";
let store1 = "https://lets.linkpc.net/music/jpg/";

//arrays
let audio = [];
let covers = [];

//loops
for(let i=0;i<TotalsongsID;i++){
    audio.push(`${store}${i+1}.mp3`)
    covers.push(`${store1}${i+1}.jpg`)
    songtitle.innerHTML = songFull[i];
}

let signal = true;
songtitle.innerHTML = songFull[currentIndex];
imgCover.src = covers[currentIndex];
aug.src = audio[currentIndex];
body.style.backgroundImage = `url(${covers[currentIndex]})`

playbtn.onclick = function(){
if(signal == true){
    aug.play();
    playbtn.innerHTML = `<i class="fa-solid fa-pause"></i>`
    signal = false;
}else{
    aug.pause();
    playbtn.innerHTML = `<i class="fa-solid fa-play"></i>`
    signal = true;
}
}

prebtn.onclick = function(){
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = audio.length-1;
    }
    chipp();
}

nextbtn.onclick = function(){
    currentIndex++;
    if(currentIndex > audio.length-1){
        currentIndex = 0;
    }
    chipp();
}
shiftbtn.onclick = function(){

    if(shift){
        shift=false
    }else if(!shift){
        shift= true;
    }
}

seekBar.onclick = function(){
    seeking =false;
}
function shifts(){
    let randomizer = Math.floor(Math.random()*(store.length-0))+0
    currentIndex = randomizer;
}
seekBar.onmouseout = function(){
    seeking=true;
}

aug.onended = function(){
        next()
}


setInterval(()=>{
    if(seeking){
    seekBar.value = aug.currentTime;
}
})

function chipp(){
    seeking = true;
    body.style.backgroundImage = `url(${covers[currentIndex]})`
    aug.src = audio[currentIndex];
    imgCover.src = covers[currentIndex];
    songtitle.innerHTML = songFull[currentIndex];
    signal = false;
    playbtn.innerHTML = `<i class="fa-solid fa-pause"></i>`
    aug.play();
}
function next(){
    currentIndex++;
    if(currentIndex > audio.length-1){
        currentIndex = 0;
    }
    chipp();
}