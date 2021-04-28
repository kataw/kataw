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
    "directives": [],
    "statements": [
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 5,
                    "end": 5
                },
                "flags": 128,
                "start": 3,
                "end": 6
            },
            "catchClause": null,
            "finallyKeyword": {
                "kind": 37757016,
                "flags": 6,
                "start": 0,
                "end": 14
            },
            "finallyBlock": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 14,
                    "end": 14
                },
                "flags": 128,
                "start": 14,
                "end": 14
            },
            "flags": 128,
            "start": 0,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 15,
                    "end": 16
                },
                "flags": 256,
                "start": 14,
                "end": 17
            },
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
                        "tryKeyword": {
                            "kind": 37757027,
                            "flags": 19,
                            "start": 0,
                            "end": 23
                        },
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
                                                "flags": 512,
                                                "start": 25,
                                                "end": 27
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "xxx",
                                                "rawText": "xxx",
                                                "flags": 768,
                                                "start": 27,
                                                "end": 30
                                            },
                                            "flags": 256,
                                            "start": 25,
                                            "end": 30
                                        },
                                        "flags": 128,
                                        "start": 25,
                                        "end": 30
                                    }
                                ],
                                "multiLine": false,
                                "flags": 128,
                                "start": 25,
                                "end": 30
                            },
                            "flags": 128,
                            "start": 23,
                            "end": 30
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
                        "start": 19,
                        "end": 30
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 19,
                "end": 30
            },
            "flags": 128,
            "start": 17,
            "end": 30
        }
    ],
    "isModule": false,
    "text": "try {} finally(x) { try { !xxx",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

