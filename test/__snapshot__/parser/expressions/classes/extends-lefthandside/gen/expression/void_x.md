# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: void x
## Input

`````js
(class B extends void x {})
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
                            "kind": 126,
                            "operandToken": {
                                "kind": 4259887,
                                "autofix": 0,
                                "flags": 0,
                                "start": 16,
                                "end": 21
                            },
                            "expression": {
                                "kind": 81921,
                                "value": "x",
                                "autofix": 0,
                                "flags": 768,
                                "start": 21,
                                "end": 23
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 16,
                            "end": 23
                        },
                        "typeParameter": null,
                        "flags": 128,
                        "start": 16,
                        "end": 23
                    },
                    "members": {
                        "kind": 277,
                        "elements": [],
                        "flags": 256,
                        "start": 25,
                        "end": 26
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 26
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 27
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "text": "(class B extends void x {})",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
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
> :: case: void x
## Input

`````js
(class B extends void x {})
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: void x
## Input

`````js
(class B extends void x {})
`````
```

