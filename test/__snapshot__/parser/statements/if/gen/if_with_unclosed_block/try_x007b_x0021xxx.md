# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: if with unclosed block
> :: case: try { !xxx
## Input

`````js
else {} if(x) { try { !xxx
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
                "statements": [],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 6,
                "end": 6
            },
            "autofix": 0,
            "flags": 128,
            "start": 4,
            "end": 7
        },
        {
            "kind": 164,
            "expression": {
                "kind": 81921,
                "value": "x",
                "autofix": 0,
                "flags": 768,
                "start": 11,
                "end": 12
            },
            "consequent": {
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
                                                    "start": 21,
                                                    "end": 23
                                                },
                                                "expression": {
                                                    "kind": 81921,
                                                    "value": "xxx",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 23,
                                                    "end": 26
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 21,
                                                "end": 26
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 21,
                                            "end": 26
                                        }
                                    ],
                                    "multiLine": false,
                                    "autofix": 0,
                                    "flags": 128,
                                    "start": 21,
                                    "end": 26
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 19,
                                "end": 26
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
                                    "start": 26,
                                    "end": 26
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 26,
                                "end": 26
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 15,
                            "end": 26
                        }
                    ],
                    "multiLine": false,
                    "autofix": 0,
                    "flags": 128,
                    "start": 15,
                    "end": 26
                },
                "autofix": 0,
                "flags": 128,
                "start": 13,
                "end": 26
            },
            "alternate": null,
            "autofix": 0,
            "flags": 128,
            "start": 7,
            "end": 26
        }
    ],
    "isModule": false,
    "text": "else {} if(x) { try { !xxx",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 0,
            "end": 4
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 26,
            "end": 26
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 26,
            "end": 26
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 26,
            "end": 26
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 26,
            "end": 26
        }
    ],
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: if with unclosed block
> :: case: try { !xxx
## Input

`````js
else {} if(x) { try { !xxx
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: if with unclosed block
> :: case: try { !xxx
## Input

`````js
else {} if(x) { try { !xxx
`````
```

