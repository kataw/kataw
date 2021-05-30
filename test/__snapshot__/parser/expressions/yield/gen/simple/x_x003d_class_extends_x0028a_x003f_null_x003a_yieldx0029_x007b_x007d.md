# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-30
- From: kataw7/test\__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw7/test\__snapshot__\parser\expressions\yield\gen\simple
> :: test: simple
> :: case: x = class extends (a ? null : yield) { }
## Input

`````js
x = class extends (a ? null : yield) { }
`````
## Output

### CST

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
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "start": 3,
                        "end": 9
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": {
                            "kind": 279,
                            "extendsKeyword": {
                                "kind": 4194391,
                                "flags": 80,
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
                                        "flags": 96,
                                        "start": 19,
                                        "end": 20
                                    },
                                    "questionToken": {
                                        "kind": 134217750,
                                        "flags": 64,
                                        "start": 20,
                                        "end": 22
                                    },
                                    "consequent": {
                                        "kind": 138477575,
                                        "flags": 96,
                                        "start": 22,
                                        "end": 27
                                    },
                                    "colonToken": {
                                        "kind": 21,
                                        "flags": 64,
                                        "start": 27,
                                        "end": 29
                                    },
                                    "alternate": {
                                        "kind": 134299649,
                                        "text": "yield",
                                        "rawText": "yield",
                                        "flags": 96,
                                        "start": 29,
                                        "end": 35
                                    },
                                    "flags": 32,
                                    "start": 17,
                                    "end": 35
                                },
                                "flags": 32,
                                "start": 17,
                                "end": 36
                            },
                            "typeParameter": null,
                            "flags": 16,
                            "start": 17,
                            "end": 36
                        },
                        "body": {
                            "kind": 262,
                            "elements": [],
                            "flags": 32,
                            "start": 38,
                            "end": 38
                        },
                        "flags": 9,
                        "start": 32,
                        "end": 40
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 40
                },
                "flags": 32,
                "start": 0,
                "end": 40
            },
            "flags": 16,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "x = class extends (a ? null : yield) { }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

x = class   {};
```

### Diagnostics

```javascript
✔ No errors
```

