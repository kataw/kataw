# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: new-expr
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
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
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
                                "importKeyword": {
                                    "kind": 37814364,
                                    "flags": 768,
                                    "start": 7,
                                    "end": 14
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 15,
                                    "end": 16
                                },
                                "flags": 256,
                                "start": 14,
                                "end": 17
                            },
                            "flags": 128,
                            "start": 14,
                            "end": 17
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 17
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 17
            },
            "flags": 128,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "text": "var x = import(x)",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

