import { Fighter } from '../../fighter.js';

export class Venom extends Fighter {
  constructor(x, y, velocity) {
    super('Venom', x, y, velocity);

    this.image = document.querySelector('img[alt="venom"]');

    this.frames = new Map([
      //move forwards
      ['forwards-1',[7, 2918, 148, 114]],
      ['forwards-2',[186, 2916, 134, 113]],
      ['forwards-3',[348, 2915, 120, 110]],
      ['forwards-4',[494, 2914, 98, 111]],
      ['forwards-5',[614, 2912, 126, 113]],
      ['forwards-6',[769, 2915, 149, 113]],
      ['forwards-7',[942, 2912, 130, 116]],
      ['forwards-8',[1096, 2912, 98, 116]],
      ['forwards-9',[7, 3043, 103, 115]],
      ['forwards-10',[143, 3045, 129, 113]],

      //move backwards
      ['backwards-1',[6, 3252, 125, 120]],
      ['backwards-2',[164, 3248, 108, 125]],
      ['backwards-3',[304, 3247, 103, 125]],
      ['backwards-4',[440, 3250, 124, 122]],
      ['backwards-5',[596, 3251, 138, 121]],
      ['backwards-6',[761, 3250, 118, 119]],
      ['backwards-7',[8, 3393, 130, 120]],
      ['backwards-8',[165, 3388, 138, 121]],
    ]);

    this.animations = {
      'walkForwards': ['forwards-1','forwards-2','forwards-3','forwards-4','forwards-5','forwards-6','forwards-7','forwards-8','forwards-9','forwards-10',],
      'walkBackwards': ['backwards-1','backwards-2','backwards-3','backwards-4','backwards-5','backwards-6','backwards-7','backwards-8'],
    };
  }
}
