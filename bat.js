document.body.addEventListener('keyup',(event)=>{
toqueSom( event.code.toLowerCase() );
});


document.querySelector('.composer button').addEventListener('click', ()=>{
  let song =   document.querySelector('#input').value;

  if(song !== ''){
     let songArray = song.split('');
     playComposition(songArray);
  }
});

function toqueSom(sons){
   let audioElement = document.querySelector(`#s_${sons}`);
   let keyElement = document.querySelector(`div[data-key="${sons}"]`);
   if(audioElement){
       audioElement.currentTime = 0;
       audioElement.play();
   }
   if(keyElement){
       keyElement.classList.add('active');

       setTimeout(()=>{
       keyElement.classList.remove('active');
       },300);
   }
}


function playComposition(songArray) {
    let wait = 0;
    for(let songItem of songArray ){
        setTimeout(()=>{
            toqueSom(`key${songItem}`);
        }, wait)

        wait += 250;  
    }
}