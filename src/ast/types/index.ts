import { ArrayType } from './array-type';
import { IntersectionType } from './intersection-type';
import { UnionType } from './union-type';
import { TypeAnnotation } from './type-annotation';
import { TupleType } from './tuple-type';
import { FunctionType } from './function-type';
import { FunctionTypeParameter } from './function-type-parameter';
import { NumberType } from './number-type';
import { StringType } from './string-type';
import { ObjectType } from './object-type';
import { GenericType } from './generic-type';
import { NullableType } from './nullable-type';
import { ObjectTypeCallProperty } from './object-type-call-property';
import { ObjectTypeIndexer } from './object-type-indexer';
import { ObjectTypeInternalSlot } from './object-type-internal-slot';
import { ObjectTypeSpreadProperty } from './object-type-spread-property';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { QualifiedType } from './qualified-type';
import { TypeAlias } from './type-alias-declaration';
import { TypeofType } from './typeof-type';
import { FunctionTypeParameterList } from './function-type-parameter-list';
import { BooleanType } from './boolean-type';
import { TypeParameterList } from './type-parameter-list';
import { TypeParameter } from './type-parameter';

/**
 * The set of all syntax items which are types.
 */
export type TypeNode =
  | TypeofType
  | GenericType
  | NullableType
  | TypeParameterList
  | TypeParameter
  | ObjectTypeCallProperty
  | ObjectTypeIndexer
  | ObjectTypeInternalSlot
  | ObjectTypeSpreadProperty
  | QualifiedType
  | TypeAlias
  | BooleanType
  | IntersectionType
  | ArrayType
  | UnionType
  | TypeAnnotation
  | TupleType
  | NumberType
  | StringType
  | ObjectType
  | FunctionType
  | FunctionTypeParameterList
  | FunctionTypeParameter
  | SyntaxToken<TokenSyntaxKind>;
