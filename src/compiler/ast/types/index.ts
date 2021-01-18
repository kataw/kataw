import { AnyKeyword } from './any-keyword';
import { ArrayType } from './array-type';
import { BigIntKeyword } from './big-int-keyword';
import { BooleanKeyword } from './boolean-keyword';
import { ConditionalType } from './conditional-type';
import { ConstructorType } from './constructor-type';
import { FunctionType } from './function-type';
import { ImportType } from './import-type';
import { IndexedAccessType } from './indexed-access-type';
import { InferType } from './infer-type';
import { IntersectionType } from './intersection-type';
import { MappedType } from './mapped-type';
import { NamedTupleMember } from './named-tuple-member';
import { NeverKeyword } from './never-keyword';
import { NullKeyword } from './null-keyword';
import { NumberType } from './number-type';
import { ObjectKeyword } from './object-keyword';
import { OptionalType } from './optional-type';
import { ParenthesizedType } from './parenthesized-type';
import { RestType } from './rest-type';
import { StringKeyword } from './string-keyword';
import { SymbolKeyword } from './symbol-keyword';
import { ThisType } from './this-type';
import { TupleType } from './tuple-type';
import { TypeLiteral } from './type-literal';
import { TypeOperator } from './type-operator';
import { TypePredicate } from './type-predicate';
import { TypeQuery } from './type-query';
import { TypeReference } from './type-reference';
import { UndefinedKeyword } from './undefined-keyword';
import { UnionType } from './union-type';
import { UnknownKeyword } from './unknown-keyword';
import { VoidKeyword } from './void-keyword';
import { NumberKeyword } from './number-keyword';
import { TrueType } from './true-type';
import { FalseType } from './false-type';
import { MinusType } from './minus-type';

/**
 * The set of all syntax items which are types.
 */
export type TypeNode =
  | TrueType
  | FalseType
  | MinusType
  | AnyKeyword
  | ArrayType
  | BigIntKeyword
  | BooleanKeyword
  | ConditionalType
  | ConstructorType
  | FunctionType
  | ImportType
  | IndexedAccessType
  | InferType
  | NumberType
  //| InterfaceHeritage
  | IntersectionType
  //  | LiteralType
  | MappedType
  | NamedTupleMember
  | NeverKeyword
  | NullKeyword
  | NumberKeyword
  | ObjectKeyword
  | OptionalType
  | ParenthesizedType
  | RestType
  | StringKeyword
  | SymbolKeyword
  // | TemplateLiteralType
  | ThisType
  | TupleType
  | TypeLiteral
  | TypeOperator
  | TypePredicate
  | TypeQuery
  | TypeReference
  | UndefinedKeyword
  | UnionType
  | UnknownKeyword
  | VoidKeyword;
