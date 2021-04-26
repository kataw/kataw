# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: do parens
> :: case: =! class function try while with foo!
## Input

`````js
do( =! class function try while with foo! while
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
                "autofix": 0,
                "flags": 12,
                "start": 21,
                "end": 21
            },
            "whileKeyword": null,
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 125,
                        "left": {
                            "kind": 16637,
                            "text": "",
                            "autofix": 0,
                            "flags": 12,
                            "start": 3,
                            "end": 3
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 768,
                            "start": 3,
                            "end": 5
                        },
                        "right": {
                            "kind": 126,
                            "operandToken": {
                                "kind": 65584,
                                "flags": 768,
                                "start": 5,
                                "end": 6
                            },
                            "expression": {
                                "kind": 189,
                                "decorators": null,
                                "classKeyword": {
                                    "kind": 37822544,
                                    "flags": 768,
                                    "start": 6,
                                    "end": 12
                                },
                                "name": null,
                                "typeParameters": null,
                                "classHeritage": null,
                                "members": {
                                    "kind": 277,
                                    "elements": [],
                                    "flags": 256,
                                    "start": 6,
                                    "end": 6
                                },
                                "flags": 256,
                                "start": 6,
                                "end": 12
                            },
                            "flags": 256,
                            "start": 5,
                            "end": 12
                        },
                        "flags": 256,
                        "start": 3,
                        "end": 12
                    },
                    "flags": 256,
                    "start": 2,
                    "end": 12
                },
                "flags": 128,
                "start": 2,
                "end": 12
            },
            "flags": 128,
            "start": 0,
            "end": 21
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 768,
                "start": 21,
                "end": 25
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 25,
                    "end": 25
                },
                "flags": 128,
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
                    "multiLine": false,
                    "flags": 128,
                    "start": 31,
                    "end": 31
                },
                "flags": 128,
                "start": 31,
                "end": 31
            },
            "flags": 128,
            "start": 21,
            "end": 31
        },
        {
            "kind": 153,
            "withKeyword": {
                "kind": 37757029,
                "flags": 768,
                "start": 31,
                "end": 36
            },
            "expression": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 768,
                "start": 36,
                "end": 40
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 768,
                        "start": 40,
                        "end": 41
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "autofix": 0,
                        "flags": 12,
                        "start": 41,
                        "end": 41
                    },
                    "flags": 256,
                    "start": 40,
                    "end": 41
                },
                "flags": 128,
                "start": 40,
                "end": 41
            },
            "flags": 128,
            "start": 31,
            "end": 41
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 768,
                "start": 41,
                "end": 47
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "autofix": 0,
                "flags": 12,
                "start": 47,
                "end": 47
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 47,
                    "end": 47
                },
                "flags": 128,
                "start": 47,
                "end": 47
            },
            "flags": 128,
            "start": 41,
            "end": 47
        }
    ],
    "isModule": false,
    "text": "do( =! class function try while with foo! while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Expression expected - start: 3, end: 5
@{x2716}@ Expression expected - start: 21, end: 25
@{x2716}@ Expression expected - start: 41, end: 47
@{x2716}@ Expression expected - start: 47, end: 47
@{x2716}@ Expression expected - start: 47, end: 47

```

