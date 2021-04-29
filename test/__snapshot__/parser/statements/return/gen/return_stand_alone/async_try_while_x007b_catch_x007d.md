# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: return stand alone
> :: case: async try while { catch }
## Input

`````js
return async try while { catch }
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
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 6,
                "end": 12
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
                "start": 12,
                "end": 16
            },
            "block": {
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
            "catchClause": null,
            "finallyKeyword": null,
            "finallyBlock": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [
                        {
                            "kind": 159,
                            "tryKeyword": null,
                            "block": {
                                "kind": 249,
                                "block": {
                                    "kind": 124,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 30,
                                    "end": 30
                                },
                                "flags": 16,
                                "start": 30,
                                "end": 30
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
                            "start": 24,
                            "end": 32
                        }
                    ],
                    "flags": 16,
                    "start": 24,
                    "end": 32
                },
                "flags": 16,
                "start": 22,
                "end": 32
            },
            "flags": 16,
            "start": 12,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "return async try while { catch }",
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

```

