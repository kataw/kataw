# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: x = class extends (a ? null : yield) { }
## Input

`````js
'use strict'; x = class extends (a ? null : yield) { }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "use strict",
            "flags": 4194400,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 13,
                    "end": 15
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 15,
                    "end": 17
                },
                "right": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 0,
                        "start": 17,
                        "end": 23
                    },
                    "name": null,
                    "typeParameters": null,
                    "classHeritage": {
                        "kind": 279,
                        "extendsKeyword": {
                            "kind": 4194391,
                            "flags": 0,
                            "start": 23,
                            "end": 31
                        },
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 197,
                                "shortCircuit": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 33,
                                    "end": 34
                                },
                                "questionToken": {
                                    "kind": 134217750,
                                    "flags": 0,
                                    "start": 34,
                                    "end": 36
                                },
                                "consequent": {
                                    "kind": 269,
                                    "text": null,
                                    "flags": 96,
                                    "start": 36,
                                    "end": 41
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "flags": 0,
                                    "start": 41,
                                    "end": 43
                                },
                                "alternate": {
                                    "kind": 134299649,
                                    "text": "yield",
                                    "rawText": "yield",
                                    "flags": 96,
                                    "start": 43,
                                    "end": 49
                                },
                                "flags": 32,
                                "start": 31,
                                "end": 49
                            },
                            "flags": 32,
                            "start": 31,
                            "end": 50
                        },
                        "typeParameter": null,
                        "flags": 16,
                        "start": 31,
                        "end": 50
                    },
                    "members": {
                        "kind": 277,
                        "elements": [],
                        "flags": 32,
                        "start": 52,
                        "end": 54
                    },
                    "flags": 32,
                    "start": 17,
                    "end": 54
                },
                "flags": 32,
                "start": 13,
                "end": 54
            },
            "flags": 16,
            "start": 13,
            "end": 54
        }
    ],
    "isModule": false,
    "text": "'use strict'; x = class extends (a ? null : yield) { }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 54
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

