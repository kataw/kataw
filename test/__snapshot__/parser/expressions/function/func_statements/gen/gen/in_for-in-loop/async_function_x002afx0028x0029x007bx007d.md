# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/expressions/function/func_statements/gen/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\function\func_statements\gen\gen\in_for-in-loop
> :: test: in for-in-loop
> :: case: async function *f(){}
## Input

`````js
for (a in b) async function *f(){}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 5,
                "end": 6
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 6,
                "end": 9
            },
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 96,
                "start": 9,
                "end": 11
            },
            "statement": {
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 12,
                    "end": 18
                },
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 64,
                    "start": 18,
                    "end": 27
                },
                "generatorToken": {
                    "kind": 67143222,
                    "flags": 64,
                    "start": 27,
                    "end": 29
                },
                "name": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 29,
                    "end": 30
                },
                "formalParameters": {
                    "kind": 214,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 30,
                    "end": 32
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 33,
                        "end": 33
                    },
                    "flags": 32,
                    "start": 32,
                    "end": 34
                },
                "typeParameters": null,
                "returnType": null,
                "flags": 400,
                "start": 12,
                "end": 34
            },
            "flags": 16,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "for (a in b) async function *f(){}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Function declarations cannot be used in a single-statement context - start: 12, end: 18

```

