export const enum DocumentKind {
  None,
  IfBreak,
  Line,
  Concat,
  Indent,
  Group,
}

export const enum DocumentFlags {
  None,
  Normal = 1 << 0,
  Soft = 1 << 1,
  Hard = 1 << 2,
  Literal = 1 << 3,
}

export function concat(parts: any) {
  return { kind: DocumentKind.Concat, parts, flags: DocumentFlags.None };
}

export function indent(contents: any): any {
  return { kind: DocumentKind.Indent, contents, flags: DocumentFlags.None };
}

export function group(contents: any, opts: any): any {
  opts = opts || {};

  return {
    kind: DocumentKind.Group,
    contents: contents,
    break: !!opts.shouldBreak,
    expandedStates: opts.expandedStates,
    flags: DocumentFlags.None,
  };
}

export function ifBreak(contents: any) {
  return { kind: DocumentKind.IfBreak, contents, flags: DocumentFlags.None };
}

export const line = { kind: DocumentKind.Line, flags: DocumentFlags.None };
export const softline = { kind: DocumentKind.Line, flags: DocumentFlags.Soft };
export const hardline = { kind: DocumentKind.Line, flags: DocumentFlags.Hard };
export const literalline = {
  kind: DocumentKind.Line,
  flags: DocumentFlags.Literal | DocumentFlags.Hard,
};

export function join(sep: any, arr: any) {
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    if (i !== 0) {
      res.push(sep);
    }

    res.push(arr[i]);
  }

  return concat(res);
}

const MODE_BREAK = 1;
const MODE_FLAT = 2;

function fits(next: any, restCommands: any, width: any): any {
  let restIdx = restCommands.length;
  const cmds = [next];
  while (width >= 0) {
    if (cmds.length === 0) {
      if (restIdx === 0) {
        return true;
      } else {
        cmds.push(restCommands[restIdx - 1]);

        restIdx--;

        continue;
      }
    }

    const [ind, mode, doc] = cmds.pop();

    if (typeof doc === 'string') {
      width -= doc.length;
    } else {
      switch (doc.kind) {
        case DocumentKind.Concat:
          for (let i = doc.parts.length - 1; i >= 0; i--) {
            cmds.push([ind, mode, doc.parts[i]]);
          }

          break;
        case DocumentKind.Indent:
          cmds.push([ind + 2, mode, doc.contents]);

          break;
        case DocumentKind.Group:
          cmds.push([ind, doc.break ? MODE_BREAK : mode, doc.contents]);

          break;
        case DocumentKind.IfBreak:
          if (mode === MODE_BREAK) {
            cmds.push([ind, mode, doc.contents]);
          }

          break;
        case DocumentKind.Line:
          switch (mode) {
            // fallthrough
            case MODE_FLAT:
              if ((doc.flags & DocumentFlags.Hard) === 0) {
                if ((doc.flags & DocumentFlags.Soft) === 0) {
                  width -= 1;
                }

                break;
              }

            case MODE_BREAK:
              return true;
          }
          break;
      }
    }
  }
  return false;
}

export function toString(width: number, doc: any) {
  let pos = 0;
  const cmds: any = [[0, MODE_BREAK, doc]];
  const out: any = [];
  let shouldRemeasure = false;
  while (cmds.length !== 0) {
    const [ind, mode, doc] = cmds.pop();

    if (typeof doc === 'string') {
      out.push(doc);

      pos += doc.length;
    } else {
      switch (doc.kind) {
        case DocumentKind.Concat:
          for (var i = doc.parts.length - 1; i >= 0; i--) {
            cmds.push([ind, mode, doc.parts[i]]);
          }

          break;
        case DocumentKind.Indent:
          cmds.push([ind + 2, mode, doc.contents]);

          break;
        case DocumentKind.Group:
          switch (mode) {
            // fallthrough
            case MODE_FLAT:
              if (!shouldRemeasure) {
                cmds.push([
                  ind,
                  doc.break ? MODE_BREAK : MODE_FLAT,
                  doc.contents,
                ]);

                break;
              }

            case MODE_BREAK:
              shouldRemeasure = false;

              const next = [ind, MODE_FLAT, doc.contents];
              const rem = width - pos;

              if (!doc.break && fits(next, cmds, rem)) {
                cmds.push(next);
              } else {
                if (doc.expandedStates) {
                  const mostExpanded =
                    doc.expandedStates[doc.expandedStates.length - 1];

                  if (doc.break) {
                    cmds.push([ind, MODE_BREAK, mostExpanded]);

                    break;
                  } else {
                    for (var i = 1; i < doc.expandedStates.length + 1; i++) {
                      if (i >= doc.expandedStates.length) {
                        cmds.push([ind, MODE_BREAK, mostExpanded]);

                        break;
                      } else {
                        const state = doc.expandedStates[i];
                        const cmd = [ind, MODE_FLAT, state];

                        if (fits(cmd, cmds, rem)) {
                          cmds.push(cmd);

                          break;
                        }
                      }
                    }
                  }
                } else {
                  cmds.push([ind, MODE_BREAK, doc.contents]);
                }
              }

              break;
          }
          break;
        case DocumentKind.IfBreak:
          if (mode === MODE_BREAK) {
            cmds.push([ind, MODE_BREAK, doc.contents]);
          }

          break;
        case DocumentKind.Line:
          switch (mode) {
            // fallthrough
            case MODE_FLAT:
              if ((doc.flags & DocumentFlags.Hard) === 0) {
                if ((doc.flags & DocumentFlags.Soft) === 0) {
                  out.push(' ');

                  pos += 1;
                }

                break;
              } else {
                shouldRemeasure = true;
              }

            case MODE_BREAK:
              if (out.length > 0) {
                out[out.length - 1] = out[out.length - 1].replace(
                  /[^\S\n]*$/,
                  ''
                );
              }

              if (doc.flags & DocumentFlags.Literal) {
                out.push('\n');

                pos = 0;
              } else {
                out.push('\n' + ' '.repeat(ind));

                pos = ind;
              }

              break;
          }
          break;
        default:
      }
    }
  }
  return out.join('');
}
