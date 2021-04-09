# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: with unclosed block
> :: case: {switch
## Input

`````js
{ {} finally(x) { {switch
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
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
                            "statements": [],
                            "multiLine": false,
                            "autofix": 0,
                            "flags": 128,
                            "start": 3,
                            "end": 3
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 1,
                        "end": 4
                    }
                ],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 1,
                "end": 4
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 4
        },
        {
            "kind": 159,
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "autofix": 0,
                    "flags": 128,
                    "start": 4,
                    "end": 4
                },
                "autofix": 0,
                "flags": 128,
                "start": 4,
                "end": 4
            },
            "catchClause": null,
            "finallyBlock": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "autofix": 0,
                    "flags": 128,
                    "start": 12,
                    "end": 12
                },
                "autofix": 0,
                "flags": 128,
                "start": 12,
                "end": 12
            },
            "autofix": 0,
            "flags": 128,
            "start": 4,
            "end": 12
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 13,
                    "end": 14
                },
                "autofix": 0,
                "flags": 256,
                "start": 12,
                "end": 15
            },
            "autofix": 0,
            "flags": 128,
            "start": 12,
            "end": 15
        },
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
                                    "kind": 160,
                                    "expression": {
                                        "kind": 253,
                                        "text": "",
                                        "autofix": 0,
                                        "flags": 12,
                                        "start": 25,
                                        "end": 25
                                    },
                                    "caseBlock": {
                                        "kind": 152,
                                        "clauses": [],
                                        "autofix": 0,
                                        "flags": 128,
                                        "start": 25,
                                        "end": 25
                                    },
                                    "autofix": 0,
                                    "flags": 128,
                                    "start": 19,
                                    "end": 25
                                }
                            ],
                            "multiLine": false,
                            "autofix": 0,
                            "flags": 128,
                            "start": 19,
                            "end": 25
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 17,
                        "end": 25
                    }
                ],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 17,
                "end": 25
            },
            "autofix": 0,
            "flags": 128,
            "start": 15,
            "end": 25
        }
    ],
    "isModule": false,
    "text": "{ {} finally(x) { {switch",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 4,
            "end": 12
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 4,
            "end": 12
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 4,
            "end": 12
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 12,
            "end": 13
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 15,
            "end": 17
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 25,
            "end": 25
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 25,
            "end": 25
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 25,
            "end": 25
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 25,
            "end": 25
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 25,
            "end": 25
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 25,
            "end": 25
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 25,
            "end": 25
        }
    ],
    "start": 0,
    "end": 25
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: with unclosed block
> :: case: {switch
## Input

`````js
{ {} finally(x) { {switch
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: with unclosed block
> :: case: {switch
## Input

`````js
{ {} finally(x) { {switch
`````
```

