# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: if else
> :: case: catch { try
## Input

`````js
if catch { try else
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
                                    "start": 10,
                                    "end": 14
                                },
                                "block": {
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
                                "catchClause": null,
                                "finallyKeyword": null,
                                "finallyBlock": {
                                    "kind": 249,
                                    "block": {
                                        "kind": 124,
                                        "statements": [],
                                        "flags": 16,
                                        "start": 19,
                                        "end": 19
                                    },
                                    "flags": 16,
                                    "start": 19,
                                    "end": 19
                                },
                                "flags": 16,
                                "start": 10,
                                "end": 19
                            }
                        ],
                        "flags": 16,
                        "start": 10,
                        "end": 19
                    },
                    "flags": 16,
                    "start": 8,
                    "end": 19
                },
                "catchClause": null,
                "finallyKeyword": null,
                "finallyBlock": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [],
                        "flags": 16,
                        "start": 19,
                        "end": 19
                    },
                    "flags": 16,
                    "start": 19,
                    "end": 19
                },
                "flags": 16,
                "start": 2,
                "end": 19
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 16,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "if catch { try else",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 2, end: 8
✖ 'try' expected - start: 2, end: 8

```

