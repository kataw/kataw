# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: do stand alone
> :: case: =! class function try while with foo!
## Input

`````js
do =! class function try while with foo!
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
                "start": 20,
                "end": 20
            },
            "whileKeyword": null,
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 2,
                        "end": 2
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 2,
                        "start": 512,
                        "end": 4
                    },
                    "right": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 65584,
                            "flags": 4,
                            "start": 512,
                            "end": 5
                        },
                        "expression": {
                            "kind": 189,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 5,
                                "start": 0,
                                "end": 11
                            },
                            "name": null,
                            "typeParameters": null,
                            "classHeritage": null,
                            "members": {
                                "kind": 277,
                                "elements": [],
                                "flags": 256,
                                "start": 5,
                                "end": 5
                            },
                            "flags": 256,
                            "start": 5,
                            "end": 11
                        },
                        "flags": 256,
                        "start": 4,
                        "end": 11
                    },
                    "flags": 256,
                    "start": 2,
                    "end": 11
                },
                "flags": 128,
                "start": 2,
                "end": 11
            },
            "flags": 128,
            "start": 0,
            "end": 20
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 20,
                "start": 0,
                "end": 24
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 24,
                    "end": 24
                },
                "flags": 128,
                "start": 24,
                "end": 24
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
                    "start": 30,
                    "end": 30
                },
                "flags": 128,
                "start": 30,
                "end": 30
            },
            "flags": 128,
            "start": 20,
            "end": 30
        },
        {
            "kind": 153,
            "withKeyword": {
                "kind": 37757029,
                "flags": 30,
                "start": 0,
                "end": 35
            },
            "expression": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 768,
                "start": 35,
                "end": 39
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 39,
                        "start": 512,
                        "end": 40
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 40,
                        "end": 40
                    },
                    "flags": 256,
                    "start": 39,
                    "end": 40
                },
                "flags": 128,
                "start": 39,
                "end": 40
            },
            "flags": 128,
            "start": 30,
            "end": 40
        }
    ],
    "isModule": false,
    "text": "do =! class function try while with foo!",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 2, end: 4
✖ Expression expected - start: 20, end: 24
✖ Expression expected - start: 40, end: 40

```

