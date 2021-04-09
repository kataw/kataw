# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: class-constructor
> :: case: new super;
## Input

`````js
class C { constructor() { new super; } }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 178,
            "decorators": null,
            "name": {
                "kind": 81921,
                "value": "C",
                "autofix": 0,
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 81921,
                                "value": "constructor",
                                "autofix": 0,
                                "flags": 768,
                                "start": 9,
                                "end": 21
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 22,
                                "end": 23
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 210,
                                                "expression": {
                                                    "kind": 203,
                                                    "chain": {
                                                        "kind": 225,
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 29,
                                                        "end": 35
                                                    },
                                                    "expression": {
                                                        "kind": 253,
                                                        "text": "",
                                                        "autofix": 0,
                                                        "flags": 12,
                                                        "start": 35,
                                                        "end": 35
                                                    },
                                                    "flags": 256,
                                                    "start": 29,
                                                    "end": 35
                                                },
                                                "argumentList": null,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 25,
                                                "end": 35
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 25,
                                            "end": 36
                                        }
                                    ],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 25,
                                    "end": 36
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 23,
                                "end": 38
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 21,
                            "end": 38
                        },
                        "flags": 256,
                        "start": 9,
                        "end": 38
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 40
            },
            "flags": 128,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "text": "class C { constructor() { new super; } }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 74,
            "error": "'super' must be followed by an argument list or member access.",
            "start": 35,
            "end": 36
        },
        {
            "kind": 2,
            "source": 2,
            "code": 68,
            "error": "Dot property must be an identifier",
            "start": 35,
            "end": 36
        }
    ],
    "start": 0,
    "end": 40
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: class-constructor
> :: case: new super;
## Input

`````js
class C { constructor() { new super; } }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: class-constructor
> :: case: new super;
## Input

`````js
class C { constructor() { new super; } }
`````
```

