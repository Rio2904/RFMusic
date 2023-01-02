    // List Song 1
    let listMusik1 = [
      {
        judul : "Speed of Sound",
        artis : "Coldplay",
        img : "assets/rfmusic_img/SpeedOfSound.png",
        urlSong : "assets/rfmusic_list_song/Coldplay - Speed Of Sound (Official Video)_0k_1kvDh2UA.mp3"
      },
      {
        judul : "Boulevard of Broken Dream",
        artis : "Green Day",
        img : "assets/rfmusic_img/Boulevard.jpg",
        urlSong : "assets/rfmusic_list_song/01 Green Day - Boulevard of Broken Dreams.mp3"
      },
      {
        judul : "The High Road",
        artis : "Broken Bells",
        img : "assets/rfmusic_img/TheHighRoad.jpg",
        urlSong : "assets/rfmusic_list_song/Broken Bells - The High Road (Audio).mp3"
      },
      {
        judul : "In My Place",
        artis : "Coldplay",
        img : "assets/rfmusic_img/InMyPlace.jpg",
        urlSong : "assets/rfmusic_list_song/Coldplay - In My Place (Official Video)_gnIZ7RMuLpU.mp3"
      },
      {
        judul : "Best Friends",
        artis : "Tom Hillock",
        img : "assets/rfmusic_img/BestFriends.png",
        urlSong : "assets/rfmusic_list_song/Best Friends_oyZvPENcGKg.mp3"
      }]
    
    // list song 2
    let listMusik2 = [
      {
        judul : "What You Know",
        artis : "Two Door Cinema Club",
        img : "assets/rfmusic_img/WhatYouKnow.jpg",
        urlSong : "assets/rfmusic_list_song/TWO-DOOR-CINEMA-CLUB-WHAT-YOU-KNOW_YXwYJyrKK5A.mp3"
      },
      {
        judul : "Genghis Khan",
        artis : "Miike Snow",
        img : "assets/rfmusic_img/GenghisKhan.jpg",
        urlSong : "assets/rfmusic_list_song/Miike Snow - Genghis Khan (Official Video)_P_SlAzsXa7E_1.mp3"
      },
      {
        judul : "Take Me For a Ride",
        artis : "Holy Oysters",
        img : "assets/rfmusic_img/TakeMeForaRide.png",
        urlSong : "assets/rfmusic_list_song/Holy Oysters _ Take Me For A Ride.mp3"
      },
      {
        judul : "Ruby",
        artis : "Kaiser Chiefs",
        img : "assets/rfmusic_img/Ruby.jpg",
        urlSong : "assets/rfmusic_list_song/Kaiser Chiefs-Ruby.mp3"
      },
      {
        judul : "The Ballet Girl",
        artis : "Aden Foyer",
        img : "assets/rfmusic_img/TheBalletGirl.jpg",
        urlSong : "assets/rfmusic_list_song/Aden Foyer - The Ballet Girl (Official Music Video)_EzQ-KpvHm60.mp3"
      }]
    
    // list song 3
    let listMusik3 = [
      {
        judul : "The Day You Went Away",
        artis : "M2M",
        img : "assets/rfmusic_img/TheDayYouWentAway.jpg",
        urlSong : "assets/rfmusic_list_song/M2M - The Day You Went Away_A_HekkBbd1M.mp3"
      },
      {
        judul : "Last Night on Earth",
        artis : "Green Day",
        img : "assets/rfmusic_img/LastNightOnEarth.png",
        urlSong : "assets/rfmusic_list_song/Last Night on Earth_xg_Y7Or_hWM.mp3"
      },
      {
        judul : "Trouble",
        artis : "Coldplay",
        img : "assets/rfmusic_img/Trouble.jpg",
        urlSong : "assets/rfmusic_list_song/Coldplay - Trouble Official video.mp3"
      },
      {
        judul : "Starlight",
        artis : "Muse",
        img : "assets/rfmusic_img/Starlight.jpg",
        urlSong : "assets/rfmusic_list_song/Muse - Starlight [Official Music Video]_Pgum6OT_VH8.mp3"
      }
]
    
    
    
    
    // Literal
    let box = ``;
    listMusik1.forEach(function(e,i){
     box += `<div class="box" id="b${i}" >
        <div class="thumb"><img src="${e.img}" alt="" /></div>
        <p class="judul" data="${e.urlSong}" style="font-weight: bold; font-size:1rem;">${e.judul}</p>
        <p class="artis">-${e.artis}-</p>
      </div>`
    })
    
    let box2 = ``;
    listMusik2.forEach(function(e,i){
     box2 += `<div class="box" id="b${i}" >
        <div class="thumb"><img src="${e.img}" alt="" /></div>
        <p class="judul" data="${e.urlSong}" style="font-weight: bold; font-size:1rem;">${e.judul}</p>
        <p class="artis">-${e.artis}-</p>
      </div>`
    })
    
    let box3 = ``;
    listMusik3.forEach(function(e,i){
     box3 += `<div class="box" id="b${i}" >
        <div class="thumb"><img src="${e.img}" alt="" /></div>
        <p class="judul" data="${e.urlSong}" style="font-weight: bold; font-size:1rem;">${e.judul}</p>
        <p class="artis">-${e.artis}-</p>
      </div>`
    })
    
    // push box song
    const container = document.querySelectorAll('.container-box-song');
    container[0].innerHTML = box;
    container[1].innerHTML = box2;
    container[2].innerHTML = box3;
  
  
    
    
    
    
    // Get Url selection
    const audio = document.querySelector('audio');
    const boxThumb = document.querySelectorAll('.box')
  
    
    // Audio Player detail
    const thumbAP = document.querySelector('.thumb-audio-player');
    const judulAP = document.querySelector('.title .judulAP');
    const artisAP = document.querySelector('.title .artisAP');
    
    // next prev play btn
    const plyBtn = document.querySelector('.play-pause');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    // Audio player curr dur 
    let audioDuration = document.querySelector('.duration');
    let audioCurrTime = document.querySelector('.currTime')
    const seekSlider = document.getElementById('seekslider');
    
    
    
    
    
    

  
// Index of Active Box
// important
let index = parseInt("");



// Box Event 
boxThumb.forEach(function(b,i){
    // box event
   b.addEventListener("click",function(e){
      // change Url
      index = i;
       audio.setAttribute('src', b.querySelector('.judul').getAttribute('data'));
      // change Audio Player Tittle 
       judulAP.innerText = b.querySelector('.judul').textContent;
       artisAP.innerText = b.querySelector('.artis').textContent;
       thumbAP.src = b.querySelector('.thumb img').src;
       
       audio.play()
       boxStyle()
       
     })
      
})
// ================




// Prev And Next Buttion Event
prevBtn.onclick = function(){
    if(index > 0){
    index -= 1;
    nextPrev()
    } else {
      if(audio.src != ""){
      index = boxThumb.length-1;
      nextPrev()
      }
    } 
 }
 
nextBtn.onclick = function(){
    if(index < boxThumb.length-1 ){
    index += 1;
    nextPrev()
    } else {
      if(audio.src != ""){
      index = 0;
      nextPrev()
      }
    }  
 }
// ==================
 
// Next Prev Event Function
function nextPrev(){
  console.log(index)
    audio.setAttribute('src', boxThumb[index].querySelector('.judul').getAttribute('data'));
    audio.play()
    judulAP.innerText = boxThumb[index].querySelector('.judul').textContent;
    artisAP.innerText = boxThumb[index].querySelector('.artis').textContent;
    thumbAP.src = boxThumb[index].querySelector('.thumb img').src;
    boxStyle()
}
// ===================


// player Button Event
plyBtn.addEventListener("click",function(e){
    if(audio.paused && audio.src != ""){
      audio.play()
      plyBtn.src = "assets/rfmusic_img/play.png"
      
    }else if(audio.src != ""){
      audio.pause()
      plyBtn.src = "assets/rfmusic_img/paused.png"
    }
})
// ===============
  
// Default Condition  audiiPlayer PlayBtn
audio.onplay = function() {
   plyBtn.src = "assets/rfmusic_img/play.png"};
audio.onpause = function() {
   plyBtn.src = "assets/rfmusic_img/paused.png"
  };     
// ===============


// Set Event When Song Pick
function boxStyle(){
    for(let j = 0; j < boxThumb.length;j++){
     boxThumb[j].style.color = "#a7a7a7"
     boxThumb[j].querySelector('.thumb').style.boxShadow = "none"
     };
     boxThumb[index].style.color = "white"
     boxThumb[index].querySelector('.thumb').style.boxShadow = "2px 2px 2px white, -2px -2px 2px white";
    
}
// ==================


// get slider input
seekSlider.addEventListener('input', () => {
  if(audio.src != ""){
    var seekTo = audio.duration * (seekSlider.value / 100);
    audio.currentTime = seekTo;
  }
});

// get audio currentime
audio.addEventListener('timeupdate', function() {
  var value = (100 / audio.duration) * audio.currentTime; 
  seekSlider.value = value;
  
  // currentTime 
  let menit = Math.floor(audio.currentTime/60)
  let detik = Math.floor(audio.currentTime % 60)
  if(detik < 10){
    detik = `0${detik}`
  }
  let totalCurrTime = `${menit}:${detik}`
  audioCurrTime.innerHTML = totalCurrTime
});    

// Get audio duration
audio.addEventListener('loadedmetadata', function(){
  
  // Total Duration
  let menit = Math.floor(audio.duration/60);
  let detik = Math.floor(audio.duration%60);
  if(detik < 10){
    detik = `0${detik}`
  }
  let durationTotal = `${menit}:${detik}`;
  audioDuration.innerHTML = durationTotal
})


audio.addEventListener('loadstart', function(){
  console.log('loading')
})
  
