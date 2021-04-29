# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: else stand alone
> :: case: catch { try
## Input

`````js
else catch { try
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
                            "start": 12,
                            "end": 16
                        }
                    ],
                    "flags": 16,
                    "start": 12,
                    "end": 16
                },
                "flags": 16,
                "start": 10,
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
            "start": 4,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "else catch { try",
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
✖ Statement expected - start: 0, end: 4
✖ 'try' expected - start: 4, end: 10

```

