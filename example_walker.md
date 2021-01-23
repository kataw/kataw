## Demo example

This is an short example on how to traverse the AST. 

### Usage

```ts
function visitor(node: Node): void {
   forEachChild(node, visitor);
}

forEachChild(parseScript('function *foo() { yield bar }'), visitor) });
```

### Source

```ts

import { Node, NodeKind } from '../compiler/ast/node';

export function forEachChild(node: Node, visitor: (node: Node) => Node) {
  const kind = node.kind;

  // Childless AST nodes - nodes without any children.
  if (kind & (NodeKind.IsChildless | NodeKind.IsIdentifier)) return node;

  // Function declaration
  if (kind & NodeKind.IsFunctionDeclaration) {
    return (
      visitNode(node.name, visitor) || visitNode(node.formalParameters, visitor) || visitNode(node.contents, visitor)
    );
  }

  // Function expression
  if (kind & NodeKind.IsFunctionExpression) {
    return (
      visitNode(node.name, visitor) || visitNode(node.formalParameters, visitor) || visitNode(node.contents, visitor)
    );
  }

  // Methoddefinition
  if (kind & NodeKind.IsMethod) {
    return (
      visitNode(node.propertySetParameterList, visitor) ||
      visitNode(node.uniqueFormalParameters, visitor) ||
      visitNode(node.name, visitor) ||
      visitNode(node.typeParameters, visitor) ||
      visitNode(node.type, visitor) ||
      visitNode(node.contents, visitor)
    );
  }

  // Switch - Frequently used nodes first
  switch (kind) {
    case NodeKind.Script:
      return visitNode(node.scriptBody, visitor);
    case NodeKind.Module:
      return visitNode(node.moduleBody, visitor);
    case NodeKind.ScriptBody:
      return visitNodes(node.statements, visitor);
    case NodeKind.ModuleBody:
      return visitNodes(node.statements, visitor);
    case NodeKind.FunctionStatementList:
      return visitNodes(node.statements, visitor);
    case NodeKind.FunctionBody:
      return visitNode(node.functionStatementList, visitor);
    case NodeKind.FormalParameterList:
      return visitNodes(node.formalParameterList, visitor);
    case NodeKind.AssignmentExpression:
      return visitNode(node.left, visitor) || visitNode(node.right, visitor);
    case NodeKind.ExpressionStatement:
      return visitNode(node.expression, visitor);
    case NodeKind.ElementList:
      return visitNodes(node.elements, visitor);
    case NodeKind.ArrayLiteral:
      return visitNode(node.elementList, visitor);
    case NodeKind.ParenthesizedExpression:
      return visitNode(node.expression, visitor);
    case NodeKind.BinaryExpression:
      return visitNode(node.left, visitor) || visitNode(node.right, visitor);
    case NodeKind.ObjectLiteral:
      return visitNode(node.propertyDefinitionList, visitor);
    case NodeKind.PropertyDefinitionList:
      return visitNodes(node.properties, visitor);
    case NodeKind.PropertyDefinition:
      return visitNodes(node.key, visitor) || visitNodes(node.value, visitor);
    case NodeKind.ArgumentList:
      return visitNodes(node.elements, visitor);
    case NodeKind.FormalParameter:
      return visitNode(node.binding, visitor) || visitNode(node.type, visitor) || visitNode(node.initializer, visitor);
    case NodeKind.SingleNameBinding:
      return visitNode(node.binding, visitor) || visitNode(node.initializer, visitor);
    case NodeKind.Block:
      return visitNodes(node.statements, visitor);
    case NodeKind.ObjectBindingPattern:
      return visitNode(node.bindingPropertyList, visitor);
    case NodeKind.BindingElement:
      return visitNode(node.left, visitor) || visitNode(node.right, visitor);
    case NodeKind.CallExpression:
      return (
        visitNode(node.expression, visitor) ||
        visitNode(node.typeArguments, visitor) ||
        visitNode(node.argumentList, visitor)
      );
    case NodeKind.BindingElementList:
      return visitNodes(node.elements, visitor);
    case NodeKind.VariableStatement:
      return visitNode(node.declarationList, visitor);
    case NodeKind.VariableDeclaration:
      return visitNode(node.binding, visitor) || visitNode(node.initializer, visitor);
    case NodeKind.VariableDeclarationList:
      return visitNodes(node.declarations, visitor);
    case NodeKind.LexicalDeclaration:
      return visitNode(node.bindingList, visitor);
    case NodeKind.ArrayBindingPattern:
      return visitNode(node.bindingElementList, visitor);
    case NodeKind.LexicalBinding:
      return visitNode(node.binding, visitor) || visitNode(node.type, visitor) || visitNode(node.initializer, visitor);
    case NodeKind.BindingList:
      return visitNodes(node.bindingList, visitor);
    case NodeKind.BindingPropertyList:
      return visitNodes(node.properties, visitor);
    case NodeKind.BlockStatement:
      return visitNode(node.block, visitor);
    case NodeKind.ArrowParameters:
      return (
        visitNode(node.typeParameters, visitor) ||
        visitNodes(node.elements, visitor) ||
        visitNode(node.type, visitor)
      );
    case NodeKind.PropertyAccessExpression:
      return visitNode(node.member, visitor) || visitNode(node.expression, visitor);
    case NodeKind.ArrowFunction:
      return visitNode(node.arrowParameters, visitor) || visitNode(node.contents, visitor);
    case NodeKind.AwaitExpression:
      return visitNode(node.expression, visitor);
    case NodeKind.BindingProperty:
      return visitNode(node.key, visitor) || visitNode(node.value, visitor);
    case NodeKind.OptionalExpression:
      return visitNode(node.member, visitor) || visitNode(node.chain, visitor);
    case NodeKind.ElementAccessExpression:
      return visitNode(node.member, visitor) || visitNode(node.expression, visitor);
    case NodeKind.OptionalChain:
      return visitNode(node.chain, visitor);
    case NodeKind.ClassElement:
      return visitNode(node.method, visitor);
    case NodeKind.ClassElementList:
      return visitNodes(node.elements, visitor);
    case NodeKind.ClassDeclaration:
      return (
        visitNode(node.name, visitor) || visitNode(node.heritageClauses, visitor) || visitNode(node.members, visitor)
      );
    case NodeKind.CommaOperator:
      return visitNodes(node.expressions, visitor);
    case NodeKind.ComputedPropertyName:
      return visitNode(node.expression, visitor);
    case NodeKind.ConditionalExpression:
      return (
        visitNode(node.shortCircuit, visitor) ||
        visitNode(node.consequent, visitor) ||
        visitNode(node.alternate, visitor)
      );
    case NodeKind.CoverInitializedName:
      return visitNode(node.identifierReference, visitor) || visitNode(node.initializer, visitor);
    case NodeKind.ReturnStatement:
      return visitNode(node.expression, visitor);
    case NodeKind.PostfixUpdateExpression:
      return visitNode(node.operand, visitor);
    case NodeKind.PrefixUpdateExpression:
      return visitNode(node.operand, visitor);
    case NodeKind.NewExpression:
      return (
        visitNode(node.expression, visitor),
        visitNode(node.typeArguments, visitor),
        visitNode(node.argumentList, visitor)
      );
    case NodeKind.SpreadProperty:
      return visitNode(node.argument, visitor);
    case NodeKind.ForInStatement:
      return (
        visitNode(node.initializer, visitor) ||
        visitNode(node.expression, visitor) ||
        visitNode(node.statement, visitor)
      );
    case NodeKind.ForOfStatement:
      return (
        visitNode(node.initializer, visitor) ||
        visitNode(node.expression, visitor) ||
        visitNode(node.statement, visitor)
      );
    case NodeKind.ForStatement:
      return (
        visitNode(node.initializer, visitor) ||
        visitNode(node.condition, visitor) ||
        visitNode(node.incrementor, visitor) ||
        visitNode(node.statement, visitor)
      );
    case NodeKind.TaggedTemplate:
      return (
        visitNode(node.member, visitor) || visitNode(node.typeArguments, visitor) || visitNode(node.template, visitor)
      );
    case NodeKind.SpreadElement:
      return visitNode(node.argument, visitor);
    case NodeKind.TemplateExpression:
      return visitNodes(node.spans, visitor) || visitNode(node.tail, visitor);
    case NodeKind.TemplateSpan:
      return visitNode(node.rawText, visitor) || visitNode(node.text, visitor) || visitNode(node.expression, visitor);
    case NodeKind.AssignmentRestElement:
      return visitNode(node.argument, visitor);
    case NodeKind.ClassExpression:
      return (
        visitNode(node.name, visitor) || visitNode(node.heritageClauses, visitor) || visitNode(node.members, visitor)
      );
    case NodeKind.BreakStatement:
      return visitNode(node.label, visitor);
    case NodeKind.ContinueStatement:
      return visitNode(node.label, visitor);
    case NodeKind.DefaultClause:
      return visitNodes(node.statements, visitor);
    case NodeKind.Catch:
      return visitNodes(node.catchParameter, visitor) || visitNodes(node.block, visitor);
    case NodeKind.DoWhileStatement:
      return visitNode(node.expression, visitor) || visitNode(node.statement, visitor);
    case NodeKind.ForBinding:
      return visitNode(node.declarationList, visitor);
    case NodeKind.IfStatement:
      return (
        visitNode(node.expression, visitor) || visitNode(node.consequent, visitor) || visitNode(node.alternate, visitor)
      );
    case NodeKind.PropertyAccessChain:
      return visitNode(node.chain, visitor) || visitNode(node.expression, visitor);
    case NodeKind.LabelledStatement:
      return visitNode(node.label, visitor) || visitNode(node.statement, visitor);
    case NodeKind.CaseBlock:
      return visitNodes(node.clauses, visitor);
    case NodeKind.SwitchStatement:
      return visitNode(node.expression, visitor), visitNode(node.caseBlock, visitor);
    case NodeKind.ThrowStatement:
      return visitNode(node.expression, visitor);
    case NodeKind.TryStatement:
      return (
        visitNode(node.block, visitor) || visitNode(node.catchClause, visitor) || visitNode(node.finallyBlock, visitor)
      );
    case NodeKind.ElementAccessChain:
      return visitNode(node.chain, visitor) || visitNode(node.expression, visitor);
    case NodeKind.AsyncArrowFunction:
      return visitNode(node.arrowParameters, visitor) || visitNode(node.contents, visitor);
    case NodeKind.FieldDefinition:
      return visitNode(node.key, visitor) || visitNode(node.type, visitor) || visitNode(node.initializer, visitor);
    case NodeKind.CallChain:
      return (
        visitNode(node.chain, visitor) ||
        visitNode(node.typeArguments, visitor) ||
        visitNode(node.argumentList, visitor)
      );
    case NodeKind.ImportCall:
      return visitNode(node.expression, visitor);
    case NodeKind.WhileStatement:
      return visitNode(node.expression, visitor) || visitNode(node.statement, visitor);
    case NodeKind.WithStatement:
      return visitNode(node.expression, visitor) || visitNode(node.statement, visitor);
    case NodeKind.AsExpression:
      return visitNode(node.expression, visitor) || visitNode(node.type, visitor);
    default:
      return node;
  }
}

export function visitNode(node: Node, visitor: (node: Node) => Node): Node | undefined {
  if (node === null) return node;
  return visitor(node);
}

export function visitNodes(nodes: Node[], visitor: (node: Node) => Node): Node[] | void {
  if (nodes === null || visitor === null)  return nodes;

  const length = nodes.length;

  if (length === 0) return nodes;

  for (let i = 0; i < length; i++) {
    visitor(nodes[i]);
  }
}

```
