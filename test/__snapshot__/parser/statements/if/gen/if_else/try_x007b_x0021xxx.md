# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: if else
> :: case: try { !xxx
## Input

`````js
if try { !xxx else
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
                "flags": 68,
                "start": 2,
                "end": 2
            },
            "consequent": {
                "kind": 159,
                "tryKeyword": {
                    "kind": 37757027,
                    "flags": 0,
                    "start": 2,
                    "end": 6
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
                                        "start": 8,
                                        "end": 10
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "xxx",
                                        "rawText": "xxx",
                                        "flags": 96,
                                        "start": 10,
                                        "end": 13
                                    },
                                    "flags": 32,
                                    "start": 8,
                                    "end": 13
                                },
                                "flags": 16,
                                "start": 8,
                                "end": 13
                            }
                        ],
                        "flags": 16,
                        "start": 8,
                        "end": 13
                    },
                    "flags": 16,
                    "start": 6,
                    "end": 13
                },
                "catchClause": null,
                "finallyKeyword": null,
                "finallyBlock": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [],
                        "flags": 16,
                        "start": 18,
                        "end": 18
                    },
                    "flags": 16,
                    "start": 18,
                    "end": 18
                },
                "flags": 16,
                "start": 2,
                "end": 18
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 16,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "if try { !xxx else",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 2, end: 6

```

