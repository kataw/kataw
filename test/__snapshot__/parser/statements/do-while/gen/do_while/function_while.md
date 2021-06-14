# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/do-while/gen/do_while
> :: test: do while
> :: case: function while
## Options

`````js
{}
`````
## Input

`````js
do function while while
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 80,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 17,
                "end": 17
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 64,
                "start": 11,
                "end": 17
            },
            "statement": {
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": null,
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 64,
                    "start": 2,
                    "end": 11
                },
                "generatorToken": null,
                "name": null,
                "formalParameters": {
                    "kind": 214,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 11,
                    "end": 11
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 11,
                        "end": 11
                    },
                    "flags": 32,
                    "start": 11,
                    "end": 11
                },
                "typeParameters": null,
                "returnType": null,
                "flags": 16,
                "start": 2,
                "end": 11
            },
            "flags": 80,
            "start": 0,
            "end": 17
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "start": 17,
                "end": 23
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 23,
                "end": 23
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 23,
                    "end": 23
                },
                "flags": 16,
                "start": 23,
                "end": 23
            },
            "flags": 80,
            "start": 17,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "do function while while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Function declarations cannot be used in a single-statement context - start: 2, end: 11
✖ Binding identifier expected - start: 11, end: 17
✖ Missing an opening parentheses - '( - start: 12, end: 17
✖ Missing an opening parentheses - '( - start: 18, end: 23

```

