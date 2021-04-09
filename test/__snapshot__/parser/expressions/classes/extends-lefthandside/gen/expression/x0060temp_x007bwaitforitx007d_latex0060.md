# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: `temp {waitforit} late`
## Input

`````js
(class B extends `temp {waitforit} late` {})
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
                            "kind": 458761,
                            "rawText": "temp {waitforit} late",
                            "text": "temp {waitforit} late",
                            "autofix": 0,
                            "flags": 256,
                            "start": 16,
                            "end": 40
                        },
                        "typeParameter": null,
                        "flags": 128,
                        "start": 16,
                        "end": 40
                    },
                    "members": {
                        "kind": 277,
                        "elements": [],
                        "flags": 256,
                        "start": 42,
                        "end": 43
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 43
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 44
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "text": "(class B extends `temp {waitforit} late` {})",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 44
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: `temp {waitforit} late`
## Input

`````js
(class B extends `temp {waitforit} late` {})
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: `temp {waitforit} late`
## Input

`````js
(class B extends `temp {waitforit} late` {})
`````
```

