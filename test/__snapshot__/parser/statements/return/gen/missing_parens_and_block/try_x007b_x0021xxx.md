# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: missing parens and block
> :: case: try { !xxx
## Input

`````js
return catch try { !xxx
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
            "tryKeyword": null,
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 16,
                    "start": 12,
                    "end": 12
                },
                "flags": 16,
                "start": 12,
                "end": 12
            },
            "catchClause": null,
            "finallyKeyword": null,
            "finallyBlock": {
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
                                    "start": 18,
                                    "end": 20
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "xxx",
                                    "rawText": "xxx",
                                    "flags": 96,
                                    "start": 20,
                                    "end": 23
                                },
                                "flags": 32,
                                "start": 18,
                                "end": 23
                            },
                            "flags": 16,
                            "start": 18,
                            "end": 23
                        }
                    ],
                    "multiLine": false,
                    "flags": 16,
                    "start": 18,
                    "end": 23
                },
                "flags": 16,
                "start": 16,
                "end": 23
            },
            "flags": 16,
            "start": 6,
            "end": 23
        }
    ],
    "isModule": false,
    "text": "return catch try { !xxx",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ A return statement can only be used within a function_body - start: 0, end: 6
✖ Expression expected - start: 6, end: 12

```

