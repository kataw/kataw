# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/function/func_statements/gen/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/function/func_statements/gen/gen/in_for-loop
> :: test: in for-loop
> :: case: async function f(){}
## Options

`````js
{}
`````
## Input

`````js
for (;;) async function f(){}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "initializer": null,
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 8,
                    "end": 14
                },
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 64,
                    "start": 14,
                    "end": 23
                },
                "asteriskToken": null,
                "name": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 23,
                    "end": 25
                },
                "typeParameters": null,
                "formalParameterList": {
                    "kind": 214,
                    "formalParameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 26,
                    "end": 26
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 28,
                        "end": 28
                    },
                    "flags": 32,
                    "start": 27,
                    "end": 29
                },
                "returnType": null,
                "flags": 144,
                "start": 8,
                "end": 29
            },
            "flags": 80,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "for (;;) async function f(){}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Function declarations cannot be used in a single-statement context - start: 8, end: 14

```

