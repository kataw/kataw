# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-21
- From: d
- Path: e
> :: test: do triple
> :: case: =! class function try while with foo!
## Input

`````js
do do do =! class function try while with foo! while while while
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
                "flags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 58,
                "end": 58
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 0,
                "start": 52,
                "end": 58
            },
            "statement": {
                "kind": 169,
                "doKeyword": {
                    "kind": 4202580,
                    "flags": 0,
                    "start": 2,
                    "end": 5
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 52,
                    "end": 52
                },
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 0,
                    "start": 46,
                    "end": 52
                },
                "statement": {
                    "kind": 169,
                    "doKeyword": {
                        "kind": 4202580,
                        "flags": 0,
                        "start": 5,
                        "end": 8
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 46,
                        "end": 46
                    },
                    "whileKeyword": null,
                    "statement": {
                        "kind": 120,
                        "expression": {
                            "kind": 125,
                            "left": {
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 8,
                                "end": 8
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 8,
                                "end": 10
                            },
                            "right": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 65584,
                                    "flags": 64,
                                    "start": 10,
                                    "end": 11
                                },
                                "operand": {
                                    "kind": 189,
                                    "decorators": null,
                                    "classKeyword": {
                                        "kind": 37822544,
                                        "flags": 0,
                                        "start": 11,
                                        "end": 17
                                    },
                                    "name": null,
                                    "typeParameters": null,
                                    "tail": {
                                        "kind": 277,
                                        "classHeritage": null,
                                        "body": {
                                            "kind": 262,
                                            "elements": [
                                                {
                                                    "kind": 280,
                                                    "decorators": null,
                                                    "declaredToken": null,
                                                    "staticToken": null,
                                                    "asyncKeyword": null,
                                                    "key": {
                                                        "kind": 134299649,
                                                        "text": "function",
                                                        "rawText": "function",
                                                        "flags": 96,
                                                        "start": 17,
                                                        "end": 26
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "start": 17,
                                                    "end": 26
                                                },
                                                {
                                                    "kind": 280,
                                                    "decorators": null,
                                                    "declaredToken": null,
                                                    "staticToken": null,
                                                    "asyncKeyword": null,
                                                    "key": {
                                                        "kind": 134299649,
                                                        "text": "try",
                                                        "rawText": "try",
                                                        "flags": 96,
                                                        "start": 26,
                                                        "end": 30
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "start": 26,
                                                    "end": 30
                                                },
                                                {
                                                    "kind": 280,
                                                    "decorators": null,
                                                    "declaredToken": null,
                                                    "staticToken": null,
                                                    "asyncKeyword": null,
                                                    "key": {
                                                        "kind": 134299649,
                                                        "text": "while",
                                                        "rawText": "while",
                                                        "flags": 96,
                                                        "start": 30,
                                                        "end": 36
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "start": 30,
                                                    "end": 36
                                                },
                                                {
                                                    "kind": 280,
                                                    "decorators": null,
                                                    "declaredToken": null,
                                                    "staticToken": null,
                                                    "asyncKeyword": null,
                                                    "key": {
                                                        "kind": 134299649,
                                                        "text": "with",
                                                        "rawText": "with",
                                                        "flags": 96,
                                                        "start": 36,
                                                        "end": 41
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "start": 36,
                                                    "end": 41
                                                },
                                                {
                                                    "kind": 280,
                                                    "decorators": null,
                                                    "declaredToken": null,
                                                    "staticToken": null,
                                                    "asyncKeyword": null,
                                                    "key": {
                                                        "kind": 134299649,
                                                        "text": "foo",
                                                        "rawText": "foo",
                                                        "flags": 96,
                                                        "start": 41,
                                                        "end": 45
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "start": 41,
                                                    "end": 45
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 17,
                                            "end": 45
                                        },
                                        "flags": 17,
                                        "start": 32,
                                        "end": 45
                                    },
                                    "flags": 32,
                                    "start": 11,
                                    "end": 45
                                },
                                "flags": 32,
                                "start": 10,
                                "end": 45
                            },
                            "flags": 32,
                            "start": 8,
                            "end": 45
                        },
                        "flags": 16,
                        "start": 8,
                        "end": 45
                    },
                    "flags": 16,
                    "start": 5,
                    "end": 46
                },
                "flags": 16,
                "start": 2,
                "end": 52
            },
            "flags": 16,
            "start": 0,
            "end": 58
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 0,
                "start": 58,
                "end": 64
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 64,
                "end": 64
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 64,
                    "end": 64
                },
                "flags": 16,
                "start": 64,
                "end": 64
            },
            "flags": 16,
            "start": 58,
            "end": 64
        }
    ],
    "isModule": false,
    "source": "do do do =! class function try while with foo! while while while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 64
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expression expected - start: 8, end: 10
✖ Missing an opening brace - '{ - start: 17, end: 26
✖ Expression expected - start: 45, end: 46
✖ Missing an opening parentheses - '( - start: 46, end: 52
✖ Missing an opening parentheses - '( - start: 52, end: 58
✖ Missing an opening parentheses - '( - start: 58, end: 64

```

