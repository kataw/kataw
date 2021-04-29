# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: { triple
> :: case: try { !xxx
## Input

`````js
{ { { try { !xxx
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
                                                "kind": 159,
                                                "tryKeyword": {
                                                    "kind": 37757027,
                                                    "flags": 0,
                                                    "start": 5,
                                                    "end": 9
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
                                                                        "flags": 64,
                                                                        "start": 11,
                                                                        "end": 13
                                                                    },
                                                                    "expression": {
                                                                        "kind": 134299649,
                                                                        "text": "xxx",
                                                                        "rawText": "xxx",
                                                                        "flags": 96,
                                                                        "start": 13,
                                                                        "end": 16
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 11,
                                                                    "end": 16
                                                                },
                                                                "flags": 16,
                                                                "start": 11,
                                                                "end": 16
                                                            }
                                                        ],
                                                        "flags": 16,
                                                        "start": 11,
                                                        "end": 16
                                                    },
                                                    "flags": 16,
                                                    "start": 9,
                                                    "end": 16
                                                },
                                                "catchClause": null,
                                                "finallyKeyword": null,
                                                "finallyBlock": {
                                                    "kind": 249,
                                                    "block": {
                                                        "kind": 124,
                                                        "statements": [],
                                                        "flags": 16,
                                                        "start": 16,
                                                        "end": 16
                                                    },
                                                    "flags": 16,
                                                    "start": 16,
                                                    "end": 16
                                                },
                                                "flags": 16,
                                                "start": 5,
                                                "end": 16
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 5,
                                        "end": 16
                                    },
                                    "flags": 16,
                                    "start": 3,
                                    "end": 16
                                }
                            ],
                            "flags": 16,
                            "start": 3,
                            "end": 16
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 16
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "{ { { try { !xxx",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
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

