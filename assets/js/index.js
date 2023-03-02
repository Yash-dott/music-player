
let audio = document.querySelector("audio")
let repeatbtn = document.getElementById("repeat")
let playbtn = document.getElementById("master_play")
let next = document.getElementById("next")
let previous = document.getElementById("pre")
let progressbar = document.getElementById("progressbar")
let totalduration = document.getElementById("total_duration")
let current_duration = document.getElementById("current_duration")
let songcover = document.getElementById("song_cover")
let title = document.getElementById("title")
let cover = document.getElementById("cover")


//pause and play

playbtn.addEventListener("click", ()=>{
    
    if (audio.paused || audio.currentTime<=0) {
        
        audio.play();
        playbtn.classList.replace("fa-circle-play", "fa-circle-pause")
        songcover.classList.add("rotate_ani")

    }
     else {
        audio.pause();
        playbtn.classList.replace("fa-circle-pause","fa-circle-play")
        songcover.classList.remove("rotate_ani")
    }
})


// update bar and duration

audio.addEventListener("timeupdate",()=>{

   let progress = parseInt((audio.currentTime/audio.duration)*100)
    progressbar.style.width = `${progress}%`;

    // song duration
    let min_duration = parseInt(audio.duration/60)
    let sec_duration = parseInt(audio.duration%60)
    let totduration = `${min_duration}:${sec_duration}`
    
    totalduration.innerText = `${totduration}`
    
    //  song current_duration
    let current_min = parseInt(audio.currentTime/60)
    let current_sec = parseInt(audio.currentTime%60)
    let totcurrtime = `${current_min}:${current_sec}`

    current_duration.innerText = `${totcurrtime}`

     progress = 0;

    if(audio.currentTime == audio.duration){
        playbtn.classList.replace( "fa-circle-pause","fa-circle-play")
        songcover.classList.remove("rotate_ani")
        progressbar.style.width = `${progress}%`
        audio.currentTime=progress
    }
})

// pre and next task

let songsdata=(songs)=>{
     audio.src = "assets/audio/" + songs.name + ".mp3"
     cover.src = "assets/img/" + songs.name + ".jpg"
     title.innerText = songs.title;
     audio.play();
}

songsindex = 0;

songslistnext = ()=>{
     
       songsdata(songs[songsindex])
       songsindex++;
       

}

songslistpre = ()=>{
    songsdata(songs[songsindex])
    songsindex--;
}
next.addEventListener("click", songslistnext)
previous.addEventListener("click", songslistpre)




// audio repeat

repeatbtn.addEventListener("click",()=>{

    if (audio.loop!=true) {
        
        audio.loop = true;
        audio.play();
    } 
    else {
        audio.loop = false;
        audio.pause();
        audio.currentTime = 0;
    }
})

