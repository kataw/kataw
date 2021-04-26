# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: { triple
> :: case: while try this and !foo
## Input

`````js
{ { { while try this and !foo
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 249,
                        "block": {
                            "kind": 124,
                            "statements": [
                                {
                                    "kind": 249,
                                    "block": {
                                        "kind": 124,
                                        "statements": [
                                            {
                                                "kind": 154,
                                                "whileKeyword": {
                                                    "kind": 37757028,
                                                    "flags": 768,
                                                    "start": 5,
                                                    "end": 11
                                                },
                                                "expression": {
                                                    "kind": 16637,
                                                    "text": "",
                                                    "autofix": 0,
                                                    "flags": 12,
                                                    "start": 11,
                                                    "end": 11
                                                },
                                                "statement": {
                                                    "kind": 159,
                                                    "tryKeyword": {
                                                        "kind": 37757027,
                                                        "flags": 768,
                                                        "start": 11,
                                                        "end": 15
                                                    },
                                                    "block": {
                                                        "kind": 249,
                                                        "block": {
                                                            "kind": 124,
                                                            "statements": [],
                                                            "multiLine": false,
                                                            "flags": 128,
                                                            "start": 15,
                                                            "end": 15
                                                        },
                                                        "flags": 128,
                                                        "start": 15,
                                                        "end": 15
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
                                                            "start": 20,
                                                            "end": 20
                                                        },
                                                        "flags": 128,
                                                        "start": 20,
                                                        "end": 20
                                                    },
                                                    "flags": 128,
                                                    "start": 11,
                                                    "end": 20
                                                },
                                                "flags": 128,
                                                "start": 5,
                                                "end": 20
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "and",
                                                    "rawText": "and",
                                                    "flags": 768,
                                                    "start": 20,
                                                    "end": 24
                                                },
                                                "flags": 128,
                                                "start": 20,
                                                "end": 24
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 126,
                                                    "operandToken": {
                                                        "kind": 65584,
                                                        "flags": 768,
                                                        "start": 24,
                                                        "end": 26
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "foo",
                                                        "rawText": "foo",
                                                        "flags": 768,
                                                        "start": 26,
                                                        "end": 29
                                                    },
                                                    "flags": 256,
                                                    "start": 24,
                                                    "end": 29
                                                },
                                                "flags": 128,
                                                "start": 24,
                                                "end": 29
                                            }
                                        ],
                                        "multiLine": false,
                                        "flags": 128,
                                        "start": 5,
                                        "end": 29
                                    },
                                    "flags": 128,
                                    "start": 3,
                                    "end": 29
                                }
                            ],
                            "multiLine": false,
                            "flags": 128,
                            "start": 3,
                            "end": 29
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 29
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 29
            },
            "flags": 128,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "text": "{ { { while try this and !foo",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Expression expected - start: 11, end: 15

```

