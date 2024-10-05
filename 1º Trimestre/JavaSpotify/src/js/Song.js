export default class Song{
    constructor(key, value){
        this.element = document.querySelector(key);
        this.audio = new Audio(value);
        //this.album = document.querySelector(c_song);
    }
}

export function play_song(song){
    console.log(song);
    song.element.onclick = () => {
        if(song.audio.paused){
            song.audio.play();
        }else{
            song.audio.pause();
        }
    } ;
}


