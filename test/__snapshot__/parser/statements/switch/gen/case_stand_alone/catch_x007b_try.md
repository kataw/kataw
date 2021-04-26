# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: case stand alone
> :: case: catch { try
## Input

`````js
case catch { try
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
                                "flags": 768,
                                "start": 12,
                                "end": 16
                            },
                            "block": {
                                "kind": 249,
                                "block": {
                                    "kind": 124,
                                    "statements": [],
                                    "multiLine": false,
                                    "flags": 128,
                                    "start": 16,
                                    "end": 16
                                },
                                "flags": 128,
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
                                    "multiLine": false,
                                    "flags": 128,
                                    "start": 16,
                                    "end": 16
                                },
                                "flags": 128,
                                "start": 16,
                                "end": 16
                            },
                            "flags": 128,
                            "start": 12,
                            "end": 16
                        }
                    ],
                    "multiLine": false,
                    "flags": 128,
                    "start": 12,
                    "end": 16
                },
                "flags": 128,
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
                    "multiLine": false,
                    "flags": 128,
                    "start": 16,
                    "end": 16
                },
                "flags": 128,
                "start": 16,
                "end": 16
            },
            "flags": 128,
            "start": 4,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "case catch { try",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Statement expected - start: 0, end: 4

```

