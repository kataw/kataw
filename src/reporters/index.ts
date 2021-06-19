import aladdin from './aladdin/aladdin';
import loddy from './loddy/loddy';
import nicoloGreen from './nicolo-green/nicolo-green';
import nicoloPink from './nicolo-pink/nicolo-pink';
import vanilla from './vanilla/vanilla';

export function swapReporter(check: number): any {
  switch (check) {
    case 1:
      return aladdin;
    case 2:
      return loddy;
    case 3:
      return nicoloGreen;
    case 4:
      return nicoloPink;
    default:
      return vanilla;
  }
}
