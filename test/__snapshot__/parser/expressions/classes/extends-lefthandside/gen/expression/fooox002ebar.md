# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: fooo.bar
## Input

`````js
(class B extends fooo.bar {})
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
                            "kind": 129,
                            "member": {
                                "kind": 81921,
                                "value": "fooo",
                                "autofix": 0,
                                "flags": 768,
                                "start": 16,
                                "end": 21
                            },
                            "expression": {
                                "kind": 81921,
                                "value": "bar",
                                "autofix": 0,
                                "flags": 768,
                                "start": 22,
                                "end": 25
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 16,
                            "end": 25
                        },
                        "typeParameter": null,
                        "flags": 128,
                        "start": 16,
                        "end": 25
                    },
                    "members": {
                        "kind": 277,
                        "elements": [],
                        "flags": 256,
                        "start": 27,
                        "end": 28
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 28
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 29
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "text": "(class B extends fooo.bar {})",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: fooo.bar
## Input

`````js
(class B extends fooo.bar {})
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: fooo.bar
## Input

`````js
(class B extends fooo.bar {})
`````
```

