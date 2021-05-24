# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-21
- From: d
- Path: e
> :: test: do while
> :: case: =! class function try while with foo!
## Input

`````js
do =! class function try while with foo! while
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
                "start": 40,
                "end": 40
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
                        "start": 2,
                        "end": 2
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 2,
                        "end": 4
                    },
                    "right": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 65584,
                            "flags": 64,
                            "start": 4,
                            "end": 5
                        },
                        "operand": {
                            "kind": 189,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 0,
                                "start": 5,
                                "end": 11
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
                                                "start": 11,
                                                "end": 20
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 11,
                                            "end": 20
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
                                                "start": 20,
                                                "end": 24
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 20,
                                            "end": 24
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
                                                "start": 24,
                                                "end": 30
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 24,
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
                                                "text": "with",
                                                "rawText": "with",
                                                "flags": 96,
                                                "start": 30,
                                                "end": 35
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 30,
                                            "end": 35
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
                                                "start": 35,
                                                "end": 39
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 35,
                                            "end": 39
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 11,
                                    "end": 39
                                },
                                "flags": 11,
                                "start": 32,
                                "end": 39
                            },
                            "flags": 32,
                            "start": 5,
                            "end": 39
                        },
                        "flags": 32,
                        "start": 4,
                        "end": 39
                    },
                    "flags": 32,
                    "start": 2,
                    "end": 39
                },
                "flags": 16,
                "start": 2,
                "end": 39
            },
            "flags": 16,
            "start": 0,
            "end": 40
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 0,
                "start": 40,
                "end": 46
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 46,
                "end": 46
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 46,
                    "end": 46
                },
                "flags": 16,
                "start": 46,
                "end": 46
            },
            "flags": 16,
            "start": 40,
            "end": 46
        }
    ],
    "isModule": false,
    "source": "do =! class function try while with foo! while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expression expected - start: 2, end: 4
✖ Missing an opening brace - '{ - start: 11, end: 20
✖ Expression expected - start: 39, end: 40
✖ Missing an opening parentheses - '( - start: 40, end: 46

```

