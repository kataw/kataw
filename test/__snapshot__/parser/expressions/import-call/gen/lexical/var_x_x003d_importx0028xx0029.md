# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: lexical
> :: case: var x = import(x)
## Input

`````js
var x = import(x)
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 155,
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 81921,
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 120,
                            "expression": {
                                "kind": 206,
                                "expression": {
                                    "kind": 81921,
                                    "value": "x",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 15,
                                    "end": 16
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 14,
                                "end": 17
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 14,
                            "end": 17
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 3,
                        "end": 17
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 3,
                "end": 17
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "text": "var x = import(x)",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: lexical
> :: case: var x = import(x)
## Input

`````js
var x = import(x)
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: lexical
> :: case: var x = import(x)
## Input

`````js
var x = import(x)
`````
```

