# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: catch stand alone
> :: case: /false//a
## Input

`````js
catch /false//a
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
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
                    "start": 0,
                    "end": 0
                },
                "autofix": 0,
                "flags": 128,
                "start": 0,
                "end": 0
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
                        "start": 5,
                        "end": 5
                    },
                    "autofix": 0,
                    "flags": 128,
                    "start": 5,
                    "end": 5
                },
                "autofix": 0,
                "flags": 128,
                "start": 0,
                "end": 5
            },
            "finallyBlock": null,
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 5
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 221,
                    "text": "/false/",
                    "autofix": 0,
                    "flags": 768,
                    "start": 5,
                    "end": 13
                },
                "operatorToken": {
                    "kind": 35640,
                    "autofix": 0,
                    "flags": 0,
                    "start": 13,
                    "end": 14
                },
                "right": {
                    "kind": 81921,
                    "value": "a",
                    "autofix": 0,
                    "flags": 768,
                    "start": 14,
                    "end": 15
                },
                "autofix": 0,
                "flags": 256,
                "start": 5,
                "end": 15
            },
            "autofix": 0,
            "flags": 128,
            "start": 5,
            "end": 15
        }
    ],
    "isModule": false,
    "text": "catch /false//a",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 0,
            "end": 5
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 0,
            "end": 5
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 5,
            "end": 13
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
- Path: e
> :: test: catch stand alone
> :: case: /false//a
## Input

`````js
catch /false//a
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: catch stand alone
> :: case: /false//a
## Input

`````js
catch /false//a
`````
```

