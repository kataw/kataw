import { ArrayType } from './array-type';
import { ConditionalType } from './conditional-type';
import { ConstructorType } from './constructor-type';
import { FunctionType } from './function-type';
import { ImportType } from './import-type';
import { IndexedAccessType } from './indexed-access-type';
import { InferType } from './infer-type';
import { IntersectionType } from './intersection-type';
import { MappedType } from './mapped-type';
import { NamedTupleMember } from './named-tuple-member';
import { NumberType } from './number-type';
import { OptionalType } from './optional-type';
import { ParenthesizedType } from './parenthesized-type';
import { RestType } from './rest-type';
import { ThisType } from './this-type';
import { TupleType } from './tuple-type';
import { TypeLiteral } from './type-literal';
import { TypeOperator } from './type-operator';
import { TypePredicate } from './type-predicate';
import { TypeQuery } from './type-query';
import { TypeReference } from './type-reference';
import { UnionType } from './union-type';
import { TrueType } from './true-type';
import { FalseType } from './false-type';
import { MinusType } from './minus-type';
import { CallSignature } from './call-signature';
import { ConstructSignature } from './construct-signature';
import { MethodSignature } from './method-signature';
import { IndexSignature } from './index-signature';

/**
 * The set of all syntax items which are types.
 */
export type TypeNode =
  | TrueType
  | FalseType
  | MinusType
  | ArrayType
  | IndexSignature
  | IndexSignature
  | CallSignature
  | ConstructSignature
  | MethodSignature
  | ConditionalType
  | ConstructorType
  | FunctionType
  | ImportType
  | IndexedAccessType
  | InferType
  | NumberType
  | IntersectionType
  | MappedType
  | NamedTupleMember
  | OptionalType
  | ParenthesizedType
  | RestType
  | ThisType
  | TupleType
  | TypeLiteral
  | TypeOperator
  | TypePredicate
  | TypeQuery
  | TypeReference
  | UnionType;
