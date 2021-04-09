# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: if with unclosed block
> :: case: catch
## Input

`````js
else {} if(x) { catch
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 6,
                "end": 6
            },
            "autofix": 0,
            "flags": 128,
            "start": 4,
            "end": 7
        },
        {
            "kind": 164,
            "expression": {
                "kind": 81921,
                "value": "x",
                "autofix": 0,
                "flags": 768,
                "start": 11,
                "end": 12
            },
            "consequent": {
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
                            "catchClause": {
                                "kind": 173,
                                "catchParameter": null,
                                "block": {
                                    "kind": 249,
                                    "block": {
                                        "kind": 124,
                                        "statements": [],
                                        "multiLine": false,
                                        "autofix": 0,
                                        "flags": 128,
                                        "start": 21,
                                        "end": 21
                                    },
                                    "autofix": 0,
                                    "flags": 128,
                                    "start": 21,
                                    "end": 21
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 15,
                                "end": 21
                            },
                            "finallyBlock": null,
                            "autofix": 0,
                            "flags": 128,
                            "start": 15,
                            "end": 21
                        }
                    ],
                    "multiLine": false,
                    "autofix": 0,
                    "flags": 128,
                    "start": 15,
                    "end": 21
                },
                "autofix": 0,
                "flags": 128,
                "start": 13,
                "end": 21
            },
            "alternate": null,
            "autofix": 0,
            "flags": 128,
            "start": 7,
            "end": 21
        }
    ],
    "isModule": false,
    "text": "else {} if(x) { catch",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 0,
            "end": 4
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 15,
            "end": 21
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 15,
            "end": 21
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 21,
            "end": 21
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 21,
            "end": 21
        }
    ],
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: if with unclosed block
> :: case: catch
## Input

`````js
else {} if(x) { catch
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: if with unclosed block
> :: case: catch
## Input

`````js
else {} if(x) { catch
`````
```

