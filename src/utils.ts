export function extractSingleNode(nodes: any[]): Node {
  return singleOrUndefined(nodes);
}

export function singleOrUndefined(array: any[]): any {
  return array && array.length === 1 ? array[0] : undefined;
}

export function updateNode(node: any, original: any): any {
  if (node !== original) node.original = original;
  return node;
}

export function concatenate<T>(array1: T[], array2: T[]): T[] {
  if (!some(array2)) return array1;
  if (!some(array1)) return array2;
  return [...array1, ...array2];
}

export function some<T>(array: readonly T[] | undefined, predicate?: (value: T) => boolean): boolean {
  if (array) {
    if (predicate) {
      for (const v of array) {
        if (predicate(v)) {
          return true;
        }
      }
    } else {
      return array.length > 0;
    }
  }
  return false;
}

export function createNodeArray(elements?: any): any {
  if (elements) {
    if (elements.length !== 0) {
      // Bitwise masks!
      return elements;
    }
  } else {
    elements = [];
  }
  return elements;
}
