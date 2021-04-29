# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: return return
> :: case: try { !xxx
## Input

`````js
return try { !xxx return
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 6,
                "end": 6
            },
            "flags": 16,
            "start": 0,
            "end": 0
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 0,
                "start": 6,
                "end": 10
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
                                    "start": 12,
                                    "end": 14
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "xxx",
                                    "rawText": "xxx",
                                    "flags": 96,
                                    "start": 14,
                                    "end": 17
                                },
                                "flags": 32,
                                "start": 12,
                                "end": 17
                            },
                            "flags": 16,
                            "start": 12,
                            "end": 17
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 0,
                                "start": 17,
                                "end": 24
                            },
                            "expression": null,
                            "flags": 16,
                            "start": 0,
                            "end": 17
                        }
                    ],
                    "flags": 16,
                    "start": 12,
                    "end": 24
                },
                "flags": 16,
                "start": 10,
                "end": 24
            },
            "catchClause": null,
            "finallyKeyword": null,
            "finallyBlock": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "flags": 16,
                    "start": 24,
                    "end": 24
                },
                "flags": 16,
                "start": 24,
                "end": 24
            },
            "flags": 16,
            "start": 6,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "return try { !xxx return",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ A return statement can only be used within a function_body - start: 0, end: 6
✖ Expression expected - start: 6, end: 10
✖ A return statement can only be used within a function_body - start: 17, end: 24

```

