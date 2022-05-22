function playAudio(e){
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`)

    if(!audio) return; // stops the function if there's no audio element 

    audio.currentTime = 0;
    audio.play()
    key.classList.add('playing')
  }

  function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    console.log(e.propertyName)
    this.classList.remove('playing')
  }

  window.addEventListener('keyup', playAudio)

  const keys = document.querySelectorAll('.key')
  keys.forEach(key => key.addEventListener('transitionend', removeTransition))