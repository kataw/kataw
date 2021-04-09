# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: x in y
## Input

`````js
(class B extends x in y {})
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 198,
                    "left": {
                        "kind": 189,
                        "decorators": null,
                        "name": {
                            "kind": 81921,
                            "value": "B",
                            "autofix": 0,
                            "flags": 768,
                            "start": 6,
                            "end": 8
                        },
                        "typeParameters": null,
                        "classHeritage": {
                            "kind": 279,
                            "expression": {
                                "kind": 81921,
                                "value": "x",
                                "autofix": 0,
                                "flags": 768,
                                "start": 16,
                                "end": 18
                            },
                            "typeParameter": null,
                            "flags": 128,
                            "start": 16,
                            "end": 18
                        },
                        "members": {
                            "kind": 277,
                            "elements": [],
                            "flags": 256,
                            "start": 1,
                            "end": 1
                        },
                        "flags": 256,
                        "start": 1,
                        "end": 18
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "autofix": 0,
                        "flags": 0,
                        "start": 18,
                        "end": 21
                    },
                    "right": {
                        "kind": 81921,
                        "value": "y",
                        "autofix": 0,
                        "flags": 768,
                        "start": 21,
                        "end": 23
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 23
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 23
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 23
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 25,
                "end": 25
            },
            "autofix": 0,
            "flags": 128,
            "start": 23,
            "end": 26
        }
    ],
    "isModule": false,
    "text": "(class B extends x in y {})",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 18,
            "end": 21
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 23,
            "end": 25
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 23,
            "end": 25
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 26,
            "end": 27
        }
    ],
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: x in y
## Input

`````js
(class B extends x in y {})
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: x in y
## Input

`````js
(class B extends x in y {})
`````
```

