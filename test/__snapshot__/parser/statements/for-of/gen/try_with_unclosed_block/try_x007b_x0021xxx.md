# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: try with unclosed block
> :: case: try { !xxx
## Input

`````js
try {} finally(x) { try { !xxx
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
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
                    "start": 5,
                    "end": 5
                },
                "autofix": 0,
                "flags": 128,
                "start": 3,
                "end": 6
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
                    "start": 14,
                    "end": 14
                },
                "autofix": 0,
                "flags": 128,
                "start": 14,
                "end": 14
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 14
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
                    "start": 15,
                    "end": 16
                },
                "autofix": 0,
                "flags": 256,
                "start": 14,
                "end": 17
            },
            "autofix": 0,
            "flags": 128,
            "start": 14,
            "end": 17
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 159,
                        "block": {
                            "kind": 249,
                            "block": {
                                "kind": 124,
                                "statements": [
                                    {
                                        "kind": 120,
                                        "expression": {
                                            "kind": 126,
                                            "operandToken": {
                                                "kind": 65584,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 25,
                                                "end": 27
                                            },
                                            "expression": {
                                                "kind": 81921,
                                                "value": "xxx",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 27,
                                                "end": 30
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 25,
                                            "end": 30
                                        },
                                        "autofix": 0,
                                        "flags": 128,
                                        "start": 25,
                                        "end": 30
                                    }
                                ],
                                "multiLine": false,
                                "autofix": 0,
                                "flags": 128,
                                "start": 25,
                                "end": 30
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 23,
                            "end": 30
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
                                "start": 30,
                                "end": 30
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 30,
                            "end": 30
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 19,
                        "end": 30
                    }
                ],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 19,
                "end": 30
            },
            "autofix": 0,
            "flags": 128,
            "start": 17,
            "end": 30
        }
    ],
    "isModule": false,
    "text": "try {} finally(x) { try { !xxx",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 14,
            "end": 15
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 17,
            "end": 19
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 30,
            "end": 30
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 30,
            "end": 30
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 30,
            "end": 30
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 30,
            "end": 30
        }
    ],
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: try with unclosed block
> :: case: try { !xxx
## Input

`````js
try {} finally(x) { try { !xxx
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: try with unclosed block
> :: case: try { !xxx
## Input

`````js
try {} finally(x) { try { !xxx
`````
```

