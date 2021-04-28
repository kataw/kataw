# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: do triple
> :: case: function while
## Input

`````js
do do do function while while while while
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
                "flags": 768,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 35,
                "end": 35
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 768,
                "start": 29,
                "end": 35
            },
            "statement": {
                "kind": 169,
                "doKeyword": {
                    "kind": 4202580,
                    "flags": 768,
                    "start": 2,
                    "end": 5
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 29,
                    "end": 29
                },
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 768,
                    "start": 23,
                    "end": 29
                },
                "statement": {
                    "kind": 169,
                    "doKeyword": {
                        "kind": 4202580,
                        "flags": 768,
                        "start": 5,
                        "end": 8
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 23,
                        "end": 23
                    },
                    "whileKeyword": {
                        "kind": 37757028,
                        "flags": 768,
                        "start": 17,
                        "end": 23
                    },
                    "statement": {
                        "kind": 176,
                        "declareKeyword": null,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 768,
                            "start": 8,
                            "end": 17
                        },
                        "generatorToken": null,
                        "name": {
                            "kind": 16637,
                            "text": "",
                            "flags": 12,
                            "start": 17,
                            "end": 17
                        },
                        "formalParameters": {
                            "kind": 214,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 17,
                            "end": 17
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "multiline": false,
                                "flags": 256,
                                "start": 17,
                                "end": 17
                            },
                            "flags": 256,
                            "start": 17,
                            "end": 17
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 128,
                        "start": 8,
                        "end": 17
                    },
                    "flags": 128,
                    "start": 5,
                    "end": 23
                },
                "flags": 128,
                "start": 2,
                "end": 29
            },
            "flags": 128,
            "start": 0,
            "end": 35
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 768,
                "start": 35,
                "end": 41
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 41,
                "end": 41
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 41,
                    "end": 41
                },
                "flags": 128,
                "start": 41,
                "end": 41
            },
            "flags": 128,
            "start": 35,
            "end": 41
        }
    ],
    "isModule": false,
    "text": "do do do function while while while while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Function declarations are not allowed in an arbitrary statement position. - start: 8, end: 17
✖ Binding identifier expected - start: 17, end: 23
✖ Unexpected token. - start: 17, end: 23
✖ Expression expected - start: 23, end: 29
✖ Expression expected - start: 29, end: 35
✖ Expression expected - start: 35, end: 41
✖ Expression expected - start: 41, end: 41
✖ Expression expected - start: 41, end: 41

```

