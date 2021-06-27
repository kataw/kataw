export interface SubLine {
  kind: FormatterKind.Subline;
  indent: number;
  doc: SubLine | SubText | null;
};

export interface SubText {
  kind: FormatterKind.Text;
  text: string;
  doc: SubLine | SubText | null;
};

export interface Union {
  kind: FormatterKind.Union;
  a: Formatter;
  b: Formatter;
};

export interface Concat {
  kind: FormatterKind.Concat;
  docs: Formatter[];
};

export interface Nest {
  kind: FormatterKind.Nest;
  indent: number;
  a: Formatter;
};

export interface Line {
  kind: FormatterKind.Line;
};
type Formatter = null | Concat | Nest | Union | string | Line;

const enum FormatterKind {
  Text,
  Union,
  Concat,
  Nest,
  Line,
  Subline,
}

export const line = { kind: FormatterKind.Line };

export function concat(docs: Formatter[]): Concat {
  return {
    kind: FormatterKind.Concat,
    docs,
  };
}

export function nest(indent: number, a: Formatter): Nest {
  return {
    kind: FormatterKind.Nest,
    indent,
    a,
  };
}

export function group(x: Formatter): Union {
  return union(flatten(x), x);
}

function union(a: Formatter, b: Formatter): Union {
  return {
    kind: FormatterKind.Union,
    a,
    b,
  };
}

function flatten(x: any): Formatter {
  if (typeof x === 'string') {
    return x;
  }

  if (x.kind === FormatterKind.Union) {
    return union(flatten(x.a), flatten(x.b));
  }

  if (x.kind === FormatterKind.Concat) {
    return concat(x.docs.map(flatten));
  }
  if (x.kind === FormatterKind.Nest) {
    return {
      kind: FormatterKind.Nest,
      indent: x.indent,
      a: flatten(x.a),
    };
  }
  if (x.kind === FormatterKind.Line) {
    return ' ';
  }
  return x;
}

function best(width: number, k: number, x: Formatter): SubLine | SubText | null {
  return be(width, k, [[0, x]]);
}

function be(width: number, k: number, x: any[]): any {
  if (x.length === 0) return null;
  const [first, ...rest] = x;
  const [i, doc] = first;
  if (typeof doc === 'string') {
    return {
      kind: FormatterKind.Text,
      text: doc,
      doc: be(width, k + doc.length, rest),
    };
  }
  if (doc.kind === FormatterKind.Concat) {
    const concatDocs: [number, Formatter][] = doc.docs.map((d: Formatter) => [i, d]);
    const res = be(width, k, [...concatDocs, ...rest]);
    return res;
  }
  if (doc.kind === FormatterKind.Nest) {
    return be(width, k, [[i + doc.indent, doc.a], ...rest]);
  }
  if (doc.kind === FormatterKind.Line) {
    return {
      kind: FormatterKind.Subline,
      indent: i,
      doc: be(width, i, rest),
    };
  }
  if (doc.kind === FormatterKind.Union) {
    const a = be(width, k, [[i, doc.a], ...rest]);
    const b = be(width, k, [[i, doc.b], ...rest]);
    return fits(width - k, a) ? a : b;
  }
}

function fits(width: number, x: SubLine | SubText | null): boolean {
  if (width < 0) return false;
  if (x === null) {
    return true;
  }
  if (x.kind === FormatterKind.Subline) {
    return true;
  }
  if (x.kind === FormatterKind.Text) {
    return fits(width - x.text.length, x.doc);
  }
  return false;
}

function layout(x: any): any {
  if (x === null) {
    return '';
  }
  if (x.kind === FormatterKind.Subline) {
    return '\n' + ' '.repeat(x.indent) + layout(x.doc);
  }
  if (x.kind === FormatterKind.Text) {
    return x.text + layout(x.doc);
  }
}

export function toString(width: any, x: any): any {
  return layout(best(width, 0, x));
}
