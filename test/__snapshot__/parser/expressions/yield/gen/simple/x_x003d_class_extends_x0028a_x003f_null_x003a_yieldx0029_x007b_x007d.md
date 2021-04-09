# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: x = class extends (a ? null : yield) { }
## Input

`````js
x = class extends (a ? null : yield) { }
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
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 37814352,
                    "autofix": 0,
                    "flags": 0,
                    "start": 0,
                    "end": 3
                },
                "right": {
                    "kind": 189,
                    "decorators": null,
                    "name": null,
                    "typeParameters": null,
                    "classHeritage": {
                        "kind": 279,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 197,
                                "shortCircuit": {
                                    "kind": 81921,
                                    "value": "a",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 19,
                                    "end": 20
                                },
                                "questionToken": {
                                    "kind": 22,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 20,
                                    "end": 22
                                },
                                "consequent": {
                                    "kind": 269,
                                    "value": null,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 22,
                                    "end": 27
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 27,
                                    "end": 29
                                },
                                "alternate": {
                                    "kind": 81921,
                                    "value": "yield",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 29,
                                    "end": 35
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 17,
                                "end": 35
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 17,
                            "end": 36
                        },
                        "typeParameter": null,
                        "flags": 128,
                        "start": 17,
                        "end": 36
                    },
                    "members": {
                        "kind": 277,
                        "elements": [],
                        "flags": 256,
                        "start": 38,
                        "end": 40
                    },
                    "flags": 256,
                    "start": 3,
                    "end": 40
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 40
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "text": "x = class extends (a ? null : yield) { }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 40
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: x = class extends (a ? null : yield) { }
## Input

`````js
x = class extends (a ? null : yield) { }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: x = class extends (a ? null : yield) { }
## Input

`````js
x = class extends (a ? null : yield) { }
`````
```

