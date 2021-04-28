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
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 768,
                        "start": 3,
                        "end": 9
                    },
                    "name": null,
                    "typeParameters": null,
                    "classHeritage": {
                        "kind": 279,
                        "extendsKeyword": {
                            "kind": 4194391,
                            "flags": 768,
                            "start": 9,
                            "end": 17
                        },
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 197,
                                "shortCircuit": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 19,
                                    "end": 20
                                },
                                "questionToken": {
                                    "kind": 134217750,
                                    "flags": 768,
                                    "start": 20,
                                    "end": 22
                                },
                                "consequent": {
                                    "kind": 269,
                                    "text": null,
                                    "flags": 768,
                                    "start": 22,
                                    "end": 27
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "flags": 768,
                                    "start": 27,
                                    "end": 29
                                },
                                "alternate": {
                                    "kind": 134299649,
                                    "text": "yield",
                                    "rawText": "yield",
                                    "flags": 768,
                                    "start": 29,
                                    "end": 35
                                },
                                "flags": 256,
                                "start": 17,
                                "end": 35
                            },
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
                "flags": 256,
                "start": 0,
                "end": 40
            },
            "flags": 128,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "text": "x = class extends (a ? null : yield) { }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

