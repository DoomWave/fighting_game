import { Fighter } from '../../fighter.js';

export class Venom extends Fighter {
  constructor(x, y, velocity) {
    super('Venom', x, y, velocity);

    this.image = document.querySelector('img[alt="venom"]');
  }
}
