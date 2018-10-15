(function(){

  'use strict';

  const btnStart = document.getElementById('btn-start');
  const btnStop  = document.getElementById('btn-stop');

  let context,
      oscillator,
      contextGain;

  function start() {

    context     = new AudioContext();
    oscillator  = context.createOscillator();
    contextGain = context.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.value = 2093;
    oscillator.connect(contextGain);
    contextGain.connect(context.destination);
    oscillator.start(0);

    window.setTimeout(function() {
      stop();
    }, 2000);
  }

  function stop() {

    contextGain.gain.exponentialRampToValueAtTime(
      0.00001,
      context.currentTime + 0.4
    );
  }

  btnStart.addEventListener('click', start);
  btnStop.addEventListener('click', stop);
})();
