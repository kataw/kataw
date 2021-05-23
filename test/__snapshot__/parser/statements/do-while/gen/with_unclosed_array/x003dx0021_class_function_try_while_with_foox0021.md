# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-21
- From: d
- Path: y
> :: test: with unclosed array
> :: case: =! class function try while with foo!
## Input

`````js
do[ =! class function try while with foo!
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
                "start": 41,
                "end": 41
            },
            "whileKeyword": null,
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 3,
                            "end": 3
                        },
                        "flags": 32,
                        "start": 2,
                        "end": 3
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 3,
                        "end": 5
                    },
                    "right": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 65584,
                            "flags": 64,
                            "start": 5,
                            "end": 6
                        },
                        "operand": {
                            "kind": 189,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 0,
                                "start": 6,
                                "end": 12
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
                                                "start": 12,
                                                "end": 21
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 12,
                                            "end": 21
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
                                                "start": 21,
                                                "end": 25
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 21,
                                            "end": 25
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
                                                "start": 25,
                                                "end": 31
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 25,
                                            "end": 31
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
                                                "start": 31,
                                                "end": 36
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 31,
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
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "start": 36,
                                                "end": 40
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 36,
                                            "end": 40
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 12,
                                    "end": 40
                                },
                                "flags": 32,
                                "start": 12,
                                "end": 40
                            },
                            "flags": 32,
                            "start": 6,
                            "end": 40
                        },
                        "flags": 32,
                        "start": 5,
                        "end": 40
                    },
                    "flags": 32,
                    "start": 2,
                    "end": 40
                },
                "flags": 16,
                "start": 2,
                "end": 40
            },
            "flags": 16,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "do[ =! class function try while with foo!",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Did you forgot a ']' to match the `[` token? - start: 3, end: 5
✖ Missing an opening brace - '{ - start: 12, end: 21
✖ Expression expected - start: 40, end: 41

```

