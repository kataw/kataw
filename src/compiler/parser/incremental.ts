import { ParserState } from '../types';
import { Context } from './common';

export function getCurrentNode(parser: ParserState, context: Context, cb: any): any {
  return cb(parser, context);
}
