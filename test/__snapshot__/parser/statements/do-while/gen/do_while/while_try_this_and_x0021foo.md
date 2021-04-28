# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: do while
> :: case: while try this and !foo
## Input

`````js
do while try this and !foo while
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
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 21,
                    "start": 512,
                    "end": 23
                },
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 768,
                    "start": 23,
                    "end": 26
                },
                "flags": 256,
                "start": 21,
                "end": 26
            },
            "whileKeyword": null,
            "statement": {
                "kind": 154,
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 2,
                    "start": 0,
                    "end": 8
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 8,
                    "end": 8
                },
                "statement": {
                    "kind": 159,
                    "tryKeyword": {
                        "kind": 37757027,
                        "flags": 8,
                        "start": 0,
                        "end": 12
                    },
                    "block": {
                        "kind": 249,
                        "block": {
                            "kind": 124,
                            "statements": [],
                            "multiLine": false,
                            "flags": 128,
                            "start": 12,
                            "end": 12
                        },
                        "flags": 128,
                        "start": 12,
                        "end": 12
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
                            "start": 17,
                            "end": 17
                        },
                        "flags": 128,
                        "start": 17,
                        "end": 17
                    },
                    "flags": 128,
                    "start": 8,
                    "end": 17
                },
                "flags": 128,
                "start": 2,
                "end": 17
            },
            "flags": 128,
            "start": 0,
            "end": 26
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 26,
                "start": 0,
                "end": 32
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 32,
                "end": 32
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 32,
                    "end": 32
                },
                "flags": 128,
                "start": 32,
                "end": 32
            },
            "flags": 128,
            "start": 26,
            "end": 32
        }
    ],
    "isModule": false,
    "text": "do while try this and !foo while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 8, end: 12
✖ Expression expected - start: 32, end: 32
✖ Expression expected - start: 32, end: 32

```

