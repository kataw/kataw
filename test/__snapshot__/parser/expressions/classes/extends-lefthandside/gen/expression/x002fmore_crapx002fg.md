# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: /more crap/g
## Input

`````js
(class B extends /more crap/g {})
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
                            "kind": 221,
                            "text": "/more crap/g",
                            "autofix": 0,
                            "flags": 768,
                            "start": 16,
                            "end": 29
                        },
                        "typeParameter": null,
                        "flags": 128,
                        "start": 16,
                        "end": 29
                    },
                    "members": {
                        "kind": 277,
                        "elements": [],
                        "flags": 256,
                        "start": 31,
                        "end": 32
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 32
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 33
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "text": "(class B extends /more crap/g {})",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: /more crap/g
## Input

`````js
(class B extends /more crap/g {})
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: /more crap/g
## Input

`````js
(class B extends /more crap/g {})
`````
```

