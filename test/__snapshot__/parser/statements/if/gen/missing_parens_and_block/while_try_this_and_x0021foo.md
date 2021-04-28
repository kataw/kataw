# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: missing parens and block
> :: case: while try this and !foo
## Input

`````js
if else while try this and !foo
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 2,
                "end": 2
            },
            "consequent": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 2,
                    "end": 2
                },
                "flags": 128,
                "start": 2,
                "end": 2
            },
            "elseKeyword": {
                "kind": 4194389,
                "flags": 2,
                "start": 512,
                "end": 7
            },
            "alternate": {
                "kind": 154,
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 7,
                    "start": 0,
                    "end": 13
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 13,
                    "end": 13
                },
                "statement": {
                    "kind": 159,
                    "tryKeyword": {
                        "kind": 37757027,
                        "flags": 13,
                        "start": 0,
                        "end": 17
                    },
                    "block": {
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
                    "catchClause": null,
                    "finallyKeyword": null,
                    "finallyBlock": {
                        "kind": 249,
                        "block": {
                            "kind": 124,
                            "statements": [],
                            "multiLine": false,
                            "flags": 128,
                            "start": 22,
                            "end": 22
                        },
                        "flags": 128,
                        "start": 22,
                        "end": 22
                    },
                    "flags": 128,
                    "start": 13,
                    "end": 22
                },
                "flags": 128,
                "start": 7,
                "end": 22
            },
            "flags": 128,
            "start": 0,
            "end": 22
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "and",
                "rawText": "and",
                "flags": 768,
                "start": 22,
                "end": 26
            },
            "flags": 128,
            "start": 22,
            "end": 26
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 26,
                    "start": 512,
                    "end": 28
                },
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 768,
                    "start": 28,
                    "end": 31
                },
                "flags": 256,
                "start": 26,
                "end": 31
            },
            "flags": 128,
            "start": 26,
            "end": 31
        }
    ],
    "isModule": false,
    "text": "if else while try this and !foo",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 2, end: 7
✖ Expression expected - start: 2, end: 7
✖ Expression expected - start: 13, end: 17

```

