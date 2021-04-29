# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: with unclosed array
> :: case: try { !xxx
## Input

`````js
if[ try { !xxx
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
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 3,
                    "end": 3
                },
                "flags": 32,
                "start": 2,
                "end": 3
            },
            "consequent": {
                "kind": 159,
                "tryKeyword": {
                    "kind": 37757027,
                    "flags": 0,
                    "start": 3,
                    "end": 7
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
                                        "start": 9,
                                        "end": 11
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "xxx",
                                        "rawText": "xxx",
                                        "flags": 96,
                                        "start": 11,
                                        "end": 14
                                    },
                                    "flags": 32,
                                    "start": 9,
                                    "end": 14
                                },
                                "flags": 16,
                                "start": 9,
                                "end": 14
                            }
                        ],
                        "flags": 16,
                        "start": 9,
                        "end": 14
                    },
                    "flags": 16,
                    "start": 7,
                    "end": 14
                },
                "catchClause": null,
                "finallyKeyword": null,
                "finallyBlock": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [],
                        "flags": 16,
                        "start": 14,
                        "end": 14
                    },
                    "flags": 16,
                    "start": 14,
                    "end": 14
                },
                "flags": 16,
                "start": 3,
                "end": 14
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 16,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "if[ try { !xxx",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
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

