# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: try triple
> :: case: try { !xxx
## Input

`````js
try try try try { !xxx
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
                    "start": 3,
                    "end": 3
                },
                "autofix": 0,
                "flags": 128,
                "start": 3,
                "end": 3
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
                    "start": 3,
                    "end": 3
                },
                "autofix": 0,
                "flags": 128,
                "start": 3,
                "end": 3
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 3
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
                    "start": 7,
                    "end": 7
                },
                "autofix": 0,
                "flags": 128,
                "start": 7,
                "end": 7
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
                    "start": 7,
                    "end": 7
                },
                "autofix": 0,
                "flags": 128,
                "start": 7,
                "end": 7
            },
            "autofix": 0,
            "flags": 128,
            "start": 3,
            "end": 7
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
                    "start": 11,
                    "end": 11
                },
                "autofix": 0,
                "flags": 128,
                "start": 11,
                "end": 11
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
                    "start": 11,
                    "end": 11
                },
                "autofix": 0,
                "flags": 128,
                "start": 11,
                "end": 11
            },
            "autofix": 0,
            "flags": 128,
            "start": 7,
            "end": 11
        },
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
                                    "start": 17,
                                    "end": 19
                                },
                                "expression": {
                                    "kind": 81921,
                                    "value": "xxx",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 19,
                                    "end": 22
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 17,
                                "end": 22
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 17,
                            "end": 22
                        }
                    ],
                    "multiLine": false,
                    "autofix": 0,
                    "flags": 128,
                    "start": 17,
                    "end": 22
                },
                "autofix": 0,
                "flags": 128,
                "start": 15,
                "end": 22
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
                    "start": 22,
                    "end": 22
                },
                "autofix": 0,
                "flags": 128,
                "start": 22,
                "end": 22
            },
            "autofix": 0,
            "flags": 128,
            "start": 11,
            "end": 22
        }
    ],
    "isModule": false,
    "text": "try try try try { !xxx",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 3,
            "end": 7
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 3,
            "end": 7
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 3,
            "end": 7
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 7,
            "end": 11
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 7,
            "end": 11
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 7,
            "end": 11
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 11,
            "end": 15
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 11,
            "end": 15
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 11,
            "end": 15
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 22,
            "end": 22
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 22,
            "end": 22
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 22,
            "end": 22
        }
    ],
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: try triple
> :: case: try { !xxx
## Input

`````js
try try try try { !xxx
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: try triple
> :: case: try { !xxx
## Input

`````js
try try try try { !xxx
`````
```

