import { Venom } from "./entities/fighters/Venom.js";
import { Ryu } from "./entities/fighters/Ryu.js";
import { Stage } from "./entities/Stage.js";

const GameViewport = {
  WIDTH: 384,
  HEIGHT: 224,
};

window.onload = function() {
  const canvasEl = document.querySelector('canvas');
  const context = canvasEl.getContext('2d');

  canvasEl.width = GameViewport.WIDTH;
  canvasEl.height = GameViewport.HEIGHT;

  const venom = new Venom(80, 110,1);
  const ryu = new Ryu(80, 110, -1);
  const stage = new Stage(); 

  function frame() {
    venom.update(context);
    ryu.update(context);

    stage.draw(context);
    venom.draw(context);
    ryu.draw(context);

    window.requestAnimationFrame(frame);
  }

  window.requestAnimationFrame(frame);
}
