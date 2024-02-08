const venom = document.querySelector('img[alt="venom"]');

const position = {
    x: 80,
    y: 110,
};

let velocity = 1;

export function updateVenom(context) {
 position.x += velocity;

 if (position.x > context.canvas.width - venom.width || position.x < 0){
   velocity = -velocity;
 }
}

export function drawVenom(context) {
  context.drawImage(venom, position.x, position.y);
}
