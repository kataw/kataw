import { ArrayType } from './array-type';
import { IntersectionType } from './intersection-type';
import { UnionType } from './union-type';
import { TypeAnnotation } from './type-annotation';
import { TupleType } from './tuple-type';
import { FunctionType } from './function-type';
import { FunctionTypeParameter } from './function-type-parameter';
import { NumberType } from './number-type';
import { BigIntType } from './big-int-type';
import { StringType } from './string-type';
import { ObjectType } from './object-type';
import { TypeReference } from './type-reference';
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
import { TypeParameterDeclaration } from './type-parameter-declaration';
import { TypeParameter } from './type-parameter';
import { IndexedAccessType } from './indexed-access-type';
import { SubtractionType } from './subtraction-type';
import { ArrowTypeParameterList } from './arrow-type-parameter-list';
import { ArrowFunctionType } from './arrow-function-type';
import { ArrowTypeParameter } from './arrow-type-parameter';
import { OptionalIndexedAccess } from './optional-indexed-access';
import { RestType } from './rest-type';
import { OptionalType } from './optional-type';

/**
 * The set of all syntax items which are types.
 */
export type TypeNode =
  | TypeofType
  | ArrowTypeParameterList
  | ArrowFunctionType
  | OptionalIndexedAccess
  | RestType
  | OptionalType
  | ArrowTypeParameter
  | TypeReference
  | NullableType
  | IndexedAccessType
  | TypeParameterDeclaration
  | TypeParameter
  | SubtractionType
  | ObjectTypeCallProperty
  | ObjectTypeIndexer
  | ObjectTypeInternalSlot
  | ObjectTypeSpreadProperty
  | QualifiedType
  | TypeAlias
  | IntersectionType
  | ArrayType
  | UnionType
  | TypeAnnotation
  | TupleType
  | NumberType
  | BigIntType
  | StringType
  | ObjectType
  | FunctionType
  | FunctionTypeParameterList
  | FunctionTypeParameter
  | SyntaxToken<TokenSyntaxKind>;
