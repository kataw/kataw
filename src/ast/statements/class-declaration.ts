import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { Identifier } from '../expressions/identifier-expr';
import { ClassTail } from '../expressions/class-tail';
import { TypeParameterList } from '../types/type-parameter-list';
import { DecoratorList } from '../expressions/decorator-list';

/**
 * Class declaration.
 */
export interface ClassDeclaration extends SyntaxNode {
  readonly declareKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly decorators: DecoratorList | null;
  readonly classKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly name: Identifier | null;
  readonly typeParameters: TypeParameterList | null;
  readonly tail: ClassTail;
}

export function createClassDeclaration(
  declareKeyword: SyntaxToken<TokenSyntaxKind> | null,
  decorators: DecoratorList | null,
  classKeyword: SyntaxToken<TokenSyntaxKind>,
  name: Identifier | null,
  typeParameters: TypeParameterList | null,
  tail: ClassTail,
  start: number,
  end: number
): ClassDeclaration {
  return {
    kind: SyntaxKind.ClassDeclaration,
    declareKeyword,
    decorators,
    classKeyword,
    name,
    typeParameters,
    tail,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
