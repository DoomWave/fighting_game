const GameViewport = {
  WIDTH: 384,
  HEIGHT: 224,
};

window.onload = function() {
    const canvasEl = document.querySelector('canvas');
    const context = canvasEl.getContext('2d');

    canvasEl.width = GameViewport.WIDTH;
    canvasEl.height = GameViewport.HEIGHT;

    const venom = document.querySelector('img');

    function frame() {
      context.strokeStyle = 'yellow';
      context.moveTo(0, 0);
      context.lineTo(GameViewport.WIDTH, GameViewport.HEIGHT);
      context.moveTo(GameViewport.WIDTH, 0)
      context.lineTo(0, GameViewport.HEIGHT);
      context.stroke(); 
  
      context.drawImage(venom, 0, 0);
    }

    window.requestAnimationFrame(frame);

    console.log(context);

    console.log(context)
}
