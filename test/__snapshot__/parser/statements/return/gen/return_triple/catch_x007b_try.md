# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: return triple
> :: case: catch { try
## Input

`````js
return return return catch { try
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
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 0,
                "start": 6,
                "end": 13
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 13,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 6
        },
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 0,
                "start": 13,
                "end": 20
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 20,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 13
        },
        {
            "kind": 159,
            "tryKeyword": null,
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [
                        {
                            "kind": 159,
                            "tryKeyword": {
                                "kind": 37757027,
                                "flags": 0,
                                "start": 28,
                                "end": 32
                            },
                            "block": {
                                "kind": 249,
                                "block": {
                                    "kind": 124,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 32,
                                    "end": 32
                                },
                                "flags": 16,
                                "start": 32,
                                "end": 32
                            },
                            "catchClause": null,
                            "finallyKeyword": null,
                            "finallyBlock": {
                                "kind": 249,
                                "block": {
                                    "kind": 124,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 32,
                                    "end": 32
                                },
                                "flags": 16,
                                "start": 32,
                                "end": 32
                            },
                            "flags": 16,
                            "start": 28,
                            "end": 32
                        }
                    ],
                    "flags": 16,
                    "start": 28,
                    "end": 32
                },
                "flags": 16,
                "start": 26,
                "end": 32
            },
            "catchClause": null,
            "finallyKeyword": null,
            "finallyBlock": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "flags": 16,
                    "start": 32,
                    "end": 32
                },
                "flags": 16,
                "start": 32,
                "end": 32
            },
            "flags": 16,
            "start": 20,
            "end": 32
        }
    ],
    "isModule": false,
    "text": "return return return catch { try",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ A return statement can only be used within a function_body - start: 0, end: 6
✖ Expression expected - start: 6, end: 13
✖ A return statement can only be used within a function_body - start: 6, end: 13
✖ Expression expected - start: 13, end: 20
✖ A return statement can only be used within a function_body - start: 13, end: 20
✖ Expression expected - start: 20, end: 26

```

