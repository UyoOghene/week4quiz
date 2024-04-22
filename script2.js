const startBtn = document.getElementById('start');
const musictxt = document.querySelector('#musictxt');
const music = document.querySelector('.music');
const song1 = document.querySelector('#one');

console.log(startBtn)

startBtn.addEventListener('click',function(e){
    console.log('hh');
    window.location.href = './index2.html';
})

// musictxt.addEventListener('click',change)
// function change(){
//     console.log('change');
//     song1.style.display = 'none'

//     if (song1.style.display === 'none'){
//         song1.pause();
//         let song2 = document.createElement("AUDIO");
//         song2.setAttribute("src","/music/Crayon-feat-Ayra-Starr-Ngozi.mp3");
//         song2.setAttribute("controls", "controls");
//         music.appendChild(song2);   
//         }
//         else{
//             song1.style.display = 'block';
//         }
// }

musictxt.addEventListener('click',changeSrc)
let onesrc= document.querySelector('#ones');
function changeSrc(){
    console.log(onesrc);
    let changeattribute = onesrc.getAttribute('src');
    console.log(changeattribute);
    onesrc.setAttribute("src","./music/Crayon-feat-Ayra-Starr-Ngozi.mp3");
    if(changeattribute === './music/French Montana - Ain\'t Worried About Nothin (Explicit).mp3'){
        console.log('ayra');
        onesrc.setAttribute("src","./music/Crayon-feat-Ayra-Starr-Ngozi.mp3");
    }
    else{
        console.log('else')
        onesrc.setAttribute("src","./music/French Montana - Ain\'t Worried About Nothin (Explicit).mp3");
    }
  
}


