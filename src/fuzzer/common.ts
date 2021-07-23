export const enum FuzzerContext {
  None = 0
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
