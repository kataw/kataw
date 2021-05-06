# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
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
                "flags": 68,
                "start": 21,
                "end": 21
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
                        "expression": {
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
                            "classHeritage": null,
                            "members": {
                                "kind": 277,
                                "elements": [],
                                "flags": 32,
                                "start": 6,
                                "end": 6
                            },
                            "flags": 32,
                            "start": 6,
                            "end": 12
                        },
                        "flags": 32,
                        "start": 5,
                        "end": 12
                    },
                    "flags": 32,
                    "start": 2,
                    "end": 12
                },
                "flags": 16,
                "start": 2,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 21
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 0,
                "start": 21,
                "end": 25
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "flags": 16,
                    "start": 25,
                    "end": 25
                },
                "flags": 16,
                "start": 25,
                "end": 25
            },
            "catchClause": null,
            "finallyKeyword": null,
            "finallyBlock": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "flags": 16,
                    "start": 31,
                    "end": 31
                },
                "flags": 16,
                "start": 31,
                "end": 31
            },
            "flags": 16,
            "start": 21,
            "end": 31
        },
        {
            "kind": 153,
            "withKeyword": {
                "kind": 37757029,
                "flags": 0,
                "start": 31,
                "end": 36
            },
            "expression": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 36,
                "end": 40
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 64,
                        "start": 40,
                        "end": 41
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 68,
                        "start": 41,
                        "end": 41
                    },
                    "flags": 32,
                    "start": 40,
                    "end": 41
                },
                "flags": 16,
                "start": 40,
                "end": 41
            },
            "flags": 16,
            "start": 31,
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
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Did you forgot a ']' to match the `[` token? - start: 3, end: 5
✖ Expected a `;` - start: 12, end: 21
✖ Expression expected - start: 21, end: 25
✖ Expected a ')' to match the '(' token here - start: 40, end: 41

```

