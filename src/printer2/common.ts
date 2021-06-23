import { getLeadingComments } from '../parser/scanner/comments';
import { concat, line, hardline, softline } from './formatter';

/**
 * The printer interface
 */
export interface Printer {
  source: string;

  lineMap: any;
  declarationListContainerEnd: number;
  detachedCommentsInfo: any;
  containerPos: number;
  containerEnd: number;
}

export function lastOrUndefined<T>(array: readonly T[]): any {
  return array.length === 0 ? undefined : array[array.length - 1];
}

export function printDetachedComments(
  printer: Printer,
  node: any,
  sameIndent: boolean,
  newLine: string
) {
  let leadingComments = getLeadingComments(printer.source, node.start);
  if (!leadingComments) return '';

  let detachedComments = [];
  let currentDetachedCommentInfo: any;
  for (const comment of leadingComments) {
    detachedComments.push(
      concat([printer.source.substring(comment.pos, comment.end), line])
    );
  }

  if (currentDetachedCommentInfo) {
    if (printer.detachedCommentsInfo) {
      printer.detachedCommentsInfo.push(currentDetachedCommentInfo);
    } else {
      printer.detachedCommentsInfo = [currentDetachedCommentInfo];
    }
  }

  return concat(detachedComments);
}

export function printLeadingComments(printer: Printer, pos: number) {
  let leadingComments!: any[] | undefined;

  if (printer.containerPos === -1 || pos !== printer.containerPos) {
    leadingComments =
      printer.detachedCommentsInfo !== undefined &&
      lastOrUndefined(printer.detachedCommentsInfo).nodePos === pos
        ? getLeadingCommentsWithoutDetachedComments(printer)
        : getLeadingComments(printer.source, pos);
  }
  if (!leadingComments) return '';
  let comments = [hardline];
  if (leadingComments && leadingComments.length > 0) {
    for (const comment of leadingComments) {
      comments.push(
        concat([
          hardline,
          printer.source.substring(comment.pos, comment.end),
          hardline,
        ])
      );
    }
  }
  return concat(comments);
}

function getLeadingCommentsWithoutDetachedComments(printer: Printer) {
  const pos = lastOrUndefined(
    printer.detachedCommentsInfo
  ).detachedCommentEndPos;
  const leadingComments = getLeadingComments(printer.source, pos);
  if (printer.detachedCommentsInfo.length - 1) {
    printer.detachedCommentsInfo.pop();
  } else {
    printer.detachedCommentsInfo = undefined;
  }

  return leadingComments;
}

export function printTrailingComments(printer: Printer, pos: number) {
  return '';
}
