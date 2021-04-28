# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: missing parens and block
> :: case: function while
## Input

`````js
do function while while
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 17,
                "end": 17
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 11,
                "start": 0,
                "end": 17
            },
            "statement": {
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": null,
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 2,
                    "start": 0,
                    "end": 11
                },
                "generatorToken": null,
                "name": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 11,
                    "end": 11
                },
                "formalParameters": {
                    "kind": 214,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 11,
                    "end": 11
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "multiline": false,
                        "flags": 256,
                        "start": 11,
                        "end": 11
                    },
                    "flags": 256,
                    "start": 11,
                    "end": 11
                },
                "typeParameters": null,
                "returnType": null,
                "flags": 128,
                "start": 2,
                "end": 11
            },
            "flags": 128,
            "start": 0,
            "end": 17
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 17,
                "start": 0,
                "end": 23
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 23,
                "end": 23
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 23,
                    "end": 23
                },
                "flags": 128,
                "start": 23,
                "end": 23
            },
            "flags": 128,
            "start": 17,
            "end": 23
        }
    ],
    "isModule": false,
    "text": "do function while while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Function declarations are not allowed in an arbitrary statement position. - start: 2, end: 11
✖ Binding identifier expected - start: 11, end: 17
✖ Unexpected token. - start: 11, end: 17
✖ Expression expected - start: 17, end: 23
✖ Expression expected - start: 23, end: 23
✖ Expression expected - start: 23, end: 23

```

