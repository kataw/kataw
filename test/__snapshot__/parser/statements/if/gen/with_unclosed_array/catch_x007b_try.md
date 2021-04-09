# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: with unclosed array
> :: case: catch { try
## Input

`````js
if[ catch { try
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 164,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 3,
                    "end": 3
                },
                "autofix": 0,
                "flags": 256,
                "start": 2,
                "end": 3
            },
            "consequent": {
                "kind": 159,
                "block": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [],
                        "multiLine": false,
                        "autofix": 0,
                        "flags": 128,
                        "start": 3,
                        "end": 3
                    },
                    "autofix": 0,
                    "flags": 128,
                    "start": 3,
                    "end": 3
                },
                "catchClause": {
                    "kind": 173,
                    "catchParameter": null,
                    "block": {
                        "kind": 249,
                        "block": {
                            "kind": 124,
                            "statements": [
                                {
                                    "kind": 159,
                                    "block": {
                                        "kind": 249,
                                        "block": {
                                            "kind": 124,
                                            "statements": [],
                                            "multiLine": false,
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 15,
                                            "end": 15
                                        },
                                        "autofix": 0,
                                        "flags": 128,
                                        "start": 15,
                                        "end": 15
                                    },
                                    "catchClause": null,
                                    "finallyBlock": {
                                        "kind": 249,
                                        "block": {
                                            "kind": 124,
                                            "statements": [],
                                            "multiLine": false,
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 15,
                                            "end": 15
                                        },
                                        "autofix": 0,
                                        "flags": 128,
                                        "start": 15,
                                        "end": 15
                                    },
                                    "autofix": 0,
                                    "flags": 128,
                                    "start": 11,
                                    "end": 15
                                }
                            ],
                            "multiLine": false,
                            "autofix": 0,
                            "flags": 128,
                            "start": 11,
                            "end": 15
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 9,
                        "end": 15
                    },
                    "autofix": 0,
                    "flags": 128,
                    "start": 3,
                    "end": 15
                },
                "finallyBlock": null,
                "autofix": 0,
                "flags": 128,
                "start": 3,
                "end": 15
            },
            "alternate": null,
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "text": "if[ catch { try",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 2,
            "end": 3
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 3,
            "end": 9
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 3,
            "end": 9
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 3,
            "end": 9
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 3,
            "end": 9
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 15,
            "end": 15
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 15,
            "end": 15
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 15,
            "end": 15
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 15,
            "end": 15
        }
    ],
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: with unclosed array
> :: case: catch { try
## Input

`````js
if[ catch { try
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: with unclosed array
> :: case: catch { try
## Input

`````js
if[ catch { try
`````
```

