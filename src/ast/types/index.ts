import { ArrayType } from './array-type';
import { IntersectionType } from './intersection-type';
import { UnionType } from './union-type';
import { TypeAnnotation } from './type-annotation';
import { TupleType } from './tuple-type';
import { FunctionType } from './function-type';
import { FunctionTypeParameters } from './function-type-parameters';
import { NumberType } from './number-type';
import { StringType } from './string-type';

/**
 * The set of all syntax items which are types.
 */
export type TypeNode =
  | IntersectionType
  | ArrayType
  | UnionType
  | TypeAnnotation
  | TupleType
  | NumberType
  | StringType
  | FunctionType
  | FunctionTypeParameters;
