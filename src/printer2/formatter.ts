export function concat(parts: any) {
  return { type: 'concat', parts };
}

export function indent(contents: any) {
  return { type: 'indent', contents };
}

export function align(n: any, contents: any) {
  return { type: 'align', contents, n };
}

export function group(contents: any, shouldBreak: boolean) {
  return {
    type: 'group',
    contents: contents,
    break: !!shouldBreak,
    expandedStates: false
  };
}

export function ifBreak(breakContents: any, flatContents: any) {
  return { type: 'if-break', breakContents, flatContents };
}

export function lineSuffix(contents: any) {
  return { type: 'line-suffix', contents };
}

export const lineSuffixBoundary = { type: 'line-suffix-boundary' };
export const breakParent = { type: 'break-parent' };
export const line = { type: 'line' };
export const softline = { type: 'line', soft: true };
export const hardline = concat([{ type: 'line', hard: true }, breakParent]);
export const literalline = concat([{ type: 'line', hard: true, literal: true }, breakParent]);

export function join(sep: any, arr: any) {
  var res = [];

  for (var i = 0; i < arr.length; i++) {
    if (i !== 0) {
      res.push(sep);
    }

    res.push(arr[i]);
  }

  return concat(res);
}

const MODE_BREAK = 1;
const MODE_FLAT = 2;

function rootIndent() {
  return {
    indent: 0,
    align: {
      spaces: 0,
      tabs: 0
    }
  };
}

function makeIndent(ind: any) {
  return {
    indent: ind.indent + 1,
    align: ind.align
  };
}

function makeAlign(ind: any, n: any) {
  if (n === -Infinity) {
    return {
      indent: 0,
      align: {
        spaces: 0,
        tabs: 0
      }
    };
  }

  return {
    indent: ind.indent,
    align: {
      spaces: ind.align.spaces + n,
      tabs: ind.align.tabs + (n ? 1 : 0)
    }
  };
}

function fits(next: any, restCommands: any, width: any) {
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

    const x = cmds.pop();
    const ind = x[0];
    const mode = x[1];
    const doc = x[2];

    if (typeof doc === 'string') {
      width -= doc.length;
    } else {
      switch (doc.type) {
        case 'concat':
          for (var i = doc.parts.length - 1; i >= 0; i--) {
            cmds.push([ind, mode, doc.parts[i]]);
          }

          break;
        case 'indent':
          cmds.push([makeIndent(ind), mode, doc.contents]);

          break;
        case 'align':
          cmds.push([makeAlign(ind, doc.n), mode, doc.contents]);

          break;
        case 'group':
          cmds.push([ind, doc.break ? MODE_BREAK : mode, doc.contents]);

          break;
        case 'if-break':
          if (mode === MODE_BREAK) {
            if (doc.breakContents) {
              cmds.push([ind, mode, doc.breakContents]);
            }
          }
          if (mode === MODE_FLAT) {
            if (doc.flatContents) {
              cmds.push([ind, mode, doc.flatContents]);
            }
          }

          break;
        case 'line':
          switch (mode) {
            // fallthrough
            case MODE_FLAT:
              if (!doc.hard) {
                if (!doc.soft) {
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

export function toString(doc: any, options: any): any {
  let width = options.printWidth;
  let newLine = options.newLine || '\n';
  let pos = 0;
  // cmds is basically a stack. We've turned a recursive call into a
  // while loop which is much faster. The while loop below adds new
  // cmds to the array instead of recursively calling `print`.
  let cmds = [[rootIndent(), MODE_BREAK, doc]];
  let out: any = [];
  let shouldRemeasure = false;
  let lineSuffix = [];

  while (cmds.length !== 0) {
    const x: any = cmds.pop();
    const ind = x[0];
    const mode = x[1];
    const doc = x[2];

    if (typeof doc === 'string') {
      out.push(doc);

      pos += doc.length;
    } else {
      switch (doc.type) {
        case 'concat':
          for (var i = doc.parts.length - 1; i >= 0; i--) {
            cmds.push([ind, mode, doc.parts[i]]);
          }

          break;
        case 'indent':
          cmds.push([makeIndent(ind), mode, doc.contents]);

          break;
        case 'align':
          cmds.push([makeAlign(ind, doc.n), mode, doc.contents]);

          break;
        case 'group':
          switch (mode) {
            // fallthrough
            case MODE_FLAT:
              if (!shouldRemeasure) {
                cmds.push([ind, doc.break ? MODE_BREAK : MODE_FLAT, doc.contents]);

                break;
              }

            case MODE_BREAK:
              shouldRemeasure = false;

              const next = [ind, MODE_FLAT, doc.contents];
              let rem = width - pos;

              if (!doc.break && fits(next, cmds, rem)) {
                cmds.push(next);
              } else {
                if (doc.expandedStates) {
                  const mostExpanded = doc.expandedStates[doc.expandedStates.length - 1];

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
        case 'if-break':
          if (mode === MODE_BREAK) {
            if (doc.breakContents) {
              cmds.push([ind, mode, doc.breakContents]);
            }
          }
          if (mode === MODE_FLAT) {
            if (doc.flatContents) {
              cmds.push([ind, mode, doc.flatContents]);
            }
          }

          break;
        case 'line-suffix':
          lineSuffix.push([ind, mode, doc.contents]);
          break;
        case 'line-suffix-boundary':
          if (lineSuffix.length > 0) {
            cmds.push([ind, mode, { type: 'line', hard: true }]);
          }
          break;
        case 'line':
          switch (mode) {
            // fallthrough
            case MODE_FLAT:
              if (!doc.hard) {
                if (!doc.soft) {
                  out.push(' ');

                  pos += 1;
                }

                break;
              } else {
                shouldRemeasure = true;
              }

            case MODE_BREAK:
              if (doc.literal) {
                out.push(newLine);
                pos = 0;
              } else {
                if (out.length > 0) {
                  // Trim whitespace at the end of line
                  while (out.length > 0 && out[out.length - 1].match(/^[^\S\n]*$/)) {
                    out.pop();
                  }

                  out[out.length - 1] = out[out.length - 1].replace(/[^\S\n]*$/, '');
                }

                let length = ind.indent * options.tabWidth + ind.align.spaces;
                let indentString = options.useTabs ? '\t'.repeat(ind.indent + ind.align.tabs) : ' '.repeat(length);
                out.push(newLine + indentString);
                pos = length;
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
