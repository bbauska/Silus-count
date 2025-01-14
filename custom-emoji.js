<!-- custom emoji for steak the youtuber -->
var scalar = 2;
var steak = confetti.shapeFromText({ text: '🥩', scalar });

var defaults = {
  spread: 360,
  ticks: 60,
  gravity: 0,
  decay: 0.96,
  startVelocity: 20,
  shapes: [steak],
  scalar
};

function shoot() {
  confetti({
    ...defaults,
    particleCount: 130
  });

  confetti({
    ...defaults,
    particleCount: 15,
    flat: true
  });

  confetti({
    ...defaults,
    particleCount: 115,
    scalar: scalar / 2,
    shapes: ['circle']
  });
}

setTimeout(shoot, 0);
setTimeout(shoot, 100);
setTimeout(shoot, 200);