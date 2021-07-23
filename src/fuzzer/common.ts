export const enum FuzzerContext {
  None = 0,
  Strict = 1 << 0,
  Module = 1 << 1
}

export function pickRandomOne<T>(values: T[]): T {
  return values[rng(values.length)];
}

export function getTrueOrFalse(): boolean {
  return Math.random() < 0.5;
}

// Returns a random integer in the range [0, max)
export function rng(max: number): number {
  return (Math.random() * max) >> 0;
}

export function oi(n: any, m = 1) {
  return Math.random() * n < m;
}

export function repeat(recurmax: number, context: FuzzerContext, times: any, func: any): any[] {
  const result = [];
  let count = Math.floor(rng(times) * times + 1);
  for (let i = 0; i < count; ++i) {
    result.push(func(recurmax, context));
  }
  return result;
}

// TODO: Support unicode
export function createString(): string {
  let len = 12;
  let str = ''; // String result
  while (len--) {
    let rand = (Math.random() * 62) >> 0; // random: 0..61
    const charCode = (rand += rand > 9 ? (rand < 36 ? 55 : 61) : 48); // Get correct charCode
    str += String.fromCharCode(charCode); // add Character to str
  }
  return str;
}

// Creates a unique identifier.
export function createId() {
  let count = rng(7);
  const result = [];
  do {
    result.push(
      pickRandomOne([
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
        '$',
        '_',
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9'
      ])
    );
  } while (count-- > 0);

  return (
    pickRandomOne([
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
      '$_'
    ]) + result.join('')
  );
}
