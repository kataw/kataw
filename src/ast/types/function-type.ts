import { SyntaxNode, SyntaxKind, NodeFlags , TransformFlags} from '../syntax-node';
import { TypeParameterDeclaration } from './type-parameter-declaration';
import { FunctionTypeParameterList } from './function-type-parameter-list';
import { TypeNode } from './';

export interface FunctionType extends SyntaxNode {
  readonly functionTypeParameterList: FunctionTypeParameterList;
  readonly returnType: TypeNode;
  readonly typeParameters: TypeParameterDeclaration | null;
}

export function createFunctionType(
  functionTypeParameterList: FunctionTypeParameterList,
  returnType: TypeNode,
  typeParameters: TypeParameterDeclaration | null,
  start: number,
  end: number
): FunctionType {
  return {
    kind: SyntaxKind.FunctionType,
    functionTypeParameterList,
    returnType,
    typeParameters,
    flags: NodeFlags.IsTypeNode,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
