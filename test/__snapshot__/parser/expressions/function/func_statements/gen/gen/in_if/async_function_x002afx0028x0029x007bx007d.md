# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/expressions/function/func_statements/gen/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/function/func_statements/gen/gen/in_if
> :: test: in if
> :: case: async function *f(){}
## Options

`````js
{}
`````
## Input

`````js
if (x) async function *f(){}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 80,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 4,
                "end": 5
            },
            "consequent": {
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 6,
                    "end": 12
                },
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 64,
                    "start": 12,
                    "end": 21
                },
                "generatorToken": {
                    "kind": 67143222,
                    "flags": 64,
                    "start": 21,
                    "end": 23
                },
                "name": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 23,
                    "end": 24
                },
                "formalParameters": {
                    "kind": 214,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 24,
                    "end": 26
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 27,
                        "end": 27
                    },
                    "flags": 32,
                    "start": 26,
                    "end": 28
                },
                "typeParameters": null,
                "returnType": null,
                "flags": 400,
                "start": 6,
                "end": 28
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 80,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "if (x) async function *f(){}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ An async function declaration is not allowed as `if-else` child - start: 6, end: 12
✖ Generators can only be declared at the top level or inside a block - start: 23, end: 24

```

