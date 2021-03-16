const enum FormatterKind {
  Lazy = 0,
  Eager = 1,
  Array = 2,
  Nest = 3,
  Line = 4,
  Choice = 5,
  With = 6
}

function padding(n: any) {
  return typeof n === 'string' ? n : ' '.repeat(n);
}

function lazy(thunk: any) {
  return { c: FormatterKind.Lazy, v: thunk };
}

function nest(prefix: any, doc: any) {
  return { c: FormatterKind.Nest, p: prefix, d: doc };
}

function With(fn: any) {
  return { c: FormatterKind.With, f: fn };
}

const conOf = (doc: any) =>
  typeof doc === 'object' ? (isArray(doc) ? FormatterKind.Array : doc.c) : FormatterKind.Line;

export const isArray = Array.isArray;

function flatten(doc: any, _isArray?: boolean): any {
  switch (conOf(doc)) {
    case FormatterKind.Lazy:
      return { c: 0, v: () => flatten(force(doc)) };
    case FormatterKind.Eager:
      return flatten(doc.v);
    case FormatterKind.Array: {
      const loop = (i: any) => {
        switch (doc.length - i) {
          case 0:
            return '';
          case 1:
            return flatten(doc[i]);
          default:
            return [flatten(doc[i]), lazy(() => loop(i + 1))];
        }
      };
      return loop(0);
    }
    case FormatterKind.Nest:
      return nest(doc.p, flatten(doc.d));
    case FormatterKind.Line:
      switch (doc) {
        case '\n':
          return ' ';
        case '\r':
          return '';
        default:
          return doc;
      }
    case FormatterKind.Choice:
      return doc.w;
    default:
      return With(flatten(doc.f));
  }
}

const Nil = [0];

function fits(maxCols: any, usedCols: any, print: any): any {
  for (;;) {
    if (maxCols < usedCols) return false;
    print = force(print);
    if (print[0] < 2) {
      return true;
    } else {
      usedCols += print[1].length;
      print = print[2];
    }
  }
}

function layout(maxCols: any, usedCols: any, docs: any): any {
  if (undefined === docs) return Nil;
  const prefix = docs[0];
  const doc = docs[1];
  const rest = docs[2];
  switch (conOf(doc)) {
    case FormatterKind.Lazy:
      return layout(maxCols, usedCols, [prefix, force(doc), rest]);
    case FormatterKind.Eager:
      return layout(maxCols, usedCols, [prefix, doc.v, rest]);
    case FormatterKind.Array:
      return layout(
        maxCols,
        usedCols,
        doc.reduceRight((rest: any, doc: any) => [prefix, doc, rest], rest)
      );
    case FormatterKind.Nest:
      return layout(maxCols, usedCols, [prefix + padding(doc.p), doc.d, rest]);
    case FormatterKind.Line:
      switch (doc) {
        case '\n':
        case '\r':
          return [FormatterKind.Eager, prefix, lazy(() => layout(maxCols, prefix.length, rest))];
        case '':
          return layout(maxCols, usedCols, rest);
        default:
          return [FormatterKind.Array, doc, lazy(() => layout(maxCols, usedCols + doc.length, rest))];
      }
    case FormatterKind.Choice: {
      const wide = layout(maxCols, usedCols, [prefix, doc.w, rest]);
      if (!maxCols || fits(maxCols, usedCols, { c: FormatterKind.Eager, v: wide })) return wide;
      return layout(maxCols, usedCols, [prefix, doc.n, rest]);
    }
    default:
      return layout(maxCols, usedCols, [prefix, doc.f(usedCols, prefix), rest]);
  }
}

//

export const line = '\n';
export const lineBreak = '\r';
export const softLine = { c: 5, w: ' ', n: line };
export const softBreak = { c: 5, w: '', n: lineBreak };

//

export function prepend(lhs: any, rhs: any) {
  return [lhs, rhs];
}

export function append(rhs: any, lhs: any) {
  return [lhs, rhs];
}

export function punctuate(sep: any, docs: any) {
  const last = docs.length - 1;
  return docs.map((doc: any, i: any) => (i !== last ? [doc, sep] : doc));
}

export function choice(wide: any, narrow: any) {
  return { c: FormatterKind.Choice, w: flatten(wide), n: narrow };
}

export function group(doc: any) {
  return { c: FormatterKind.Choice, w: doc, n: doc };
}

export const column = (withColumn: any) => With((column: any, _: any) => withColumn(column));

export const nesting = (withNesting: any) => With((_: any, prefix: any) => withNesting(prefix.length));

export function align(doc: any) {
  return { c: FormatterKind.With, f: (column: any, prefix: any) => nest(column - prefix.length, doc) };
}

export function hang(prefix: any, doc: any) {
  return align(nest(prefix, doc));
}

export function indent(prefix: any, doc: any) {
  return hang(prefix, [padding(prefix), doc]);
}

//
export function intersperse(sep: any, docs: any) {
  const result = [];
  const n = docs.length;
  for (let i = 0; i < n; ++i) {
    if (i) result.push(sep);
    result.push(docs[i]);
  }
  return result;
}

// TODO: Get rid of this method
function force(x: any) {
  if (x.c !== 0) return x.v;
  const th = x.v;
  x.v = undefined;
  x.c = 1;
  return (x.v = th());
}

function output(state: any, print: any) {
  console.log(print);
  for (;;) {
    print = force(print);
    switch (print[0]) {
      case FormatterKind.Lazy:
        return state;
      case FormatterKind.Eager:
        state = state + '\n' + print[1];
        print = print[2];
        break;
      default:
        state = state + print[1];
        print = print[2];
        break;
    }
  }
}


export function render(maxCols: number, doc: any) {
  return output('', { c: FormatterKind.Eager, v: layout(maxCols, 0, ['', doc, undefined]) });
}
