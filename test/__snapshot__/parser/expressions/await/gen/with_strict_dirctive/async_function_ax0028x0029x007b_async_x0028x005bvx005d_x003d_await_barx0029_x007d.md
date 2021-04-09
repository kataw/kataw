# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: async function a(){     async ([v] = await bar);     }
## Input

`````js
'use strict'; async function a(){     async ([v] = await bar);     }
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
                "kind": 67174403,
                "value": "use strict",
                "autofix": 0,
                "flags": 768,
                "start": 0,
                "end": 12
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 13
        },
        {
            "kind": 176,
            "asyncToken": {
                "kind": 82031,
                "autofix": 0,
                "flags": 0,
                "start": 13,
                "end": 19
            },
            "generatorToken": null,
            "name": {
                "kind": 81921,
                "value": "a",
                "autofix": 0,
                "flags": 768,
                "start": 28,
                "end": 30
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 31,
                "end": 32
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 81921,
                                    "value": "async",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 33,
                                    "end": 43
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 125,
                                            "left": {
                                                "kind": 119,
                                                "elementList": {
                                                    "kind": 270,
                                                    "elements": [
                                                        {
                                                            "kind": 81921,
                                                            "value": "v",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 46,
                                                            "end": 47
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 46,
                                                    "end": 47
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 45,
                                                "end": 48
                                            },
                                            "operatorToken": {
                                                "kind": 4125,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 48,
                                                "end": 50
                                            },
                                            "right": {
                                                "kind": 208,
                                                "expression": {
                                                    "kind": 81921,
                                                    "value": "bar",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 56,
                                                    "end": 60
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 50,
                                                "end": 60
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 45,
                                            "end": 60
                                        }
                                    ],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 45,
                                    "end": 60
                                },
                                "flags": 256,
                                "start": 33,
                                "end": 61
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 33,
                            "end": 62
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 33,
                    "end": 62
                },
                "autofix": 0,
                "flags": 256,
                "start": 32,
                "end": 68
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 1280,
            "start": 13,
            "end": 68
        }
    ],
    "isModule": false,
    "text": "'use strict'; async function a(){     async ([v] = await bar);     }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 68
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: async function a(){     async ([v] = await bar);     }
## Input

`````js
'use strict'; async function a(){     async ([v] = await bar);     }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: async function a(){     async ([v] = await bar);     }
## Input

`````js
'use strict'; async function a(){     async ([v] = await bar);     }
`````
```

