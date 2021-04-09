# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: class x {async *f(foo = [{m: t(await bar)}]){}}
## Input

`````js
class x {async *f(foo = [{m: t(await bar)}]){}}
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
                "value": "x",
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
                                "value": "f",
                                "autofix": 0,
                                "flags": 768,
                                "start": 16,
                                "end": 17
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [
                                    {
                                        "kind": 215,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 81921,
                                            "value": "foo",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 18,
                                            "end": 21
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 220,
                                                        "propertyList": {
                                                            "kind": 218,
                                                            "properties": [
                                                                {
                                                                    "kind": 219,
                                                                    "left": {
                                                                        "kind": 131,
                                                                        "expression": {
                                                                            "kind": 81921,
                                                                            "value": "t",
                                                                            "autofix": 0,
                                                                            "flags": 768,
                                                                            "start": 28,
                                                                            "end": 30
                                                                        },
                                                                        "argumentList": {
                                                                            "kind": 256,
                                                                            "elements": [
                                                                                {
                                                                                    "kind": 208,
                                                                                    "expression": {
                                                                                        "kind": 81921,
                                                                                        "value": "bar",
                                                                                        "autofix": 0,
                                                                                        "flags": 768,
                                                                                        "start": 36,
                                                                                        "end": 40
                                                                                    },
                                                                                    "autofix": 0,
                                                                                    "flags": 256,
                                                                                    "start": 31,
                                                                                    "end": 40
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "autofix": 0,
                                                                            "flags": 256,
                                                                            "start": 31,
                                                                            "end": 40
                                                                        },
                                                                        "flags": 256,
                                                                        "start": 26,
                                                                        "end": 41
                                                                    },
                                                                    "right": {
                                                                        "kind": 81921,
                                                                        "value": "m",
                                                                        "autofix": 0,
                                                                        "flags": 768,
                                                                        "start": 26,
                                                                        "end": 27
                                                                    },
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 26,
                                                                    "end": 41
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "multiline": false,
                                                            "autofix": 0,
                                                            "flags": 0,
                                                            "start": 26,
                                                            "end": 41
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 25,
                                                        "end": 42
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 25,
                                                "end": 42
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 23,
                                            "end": 43
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 18,
                                        "end": 43
                                    }
                                ],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 18,
                                "end": 44
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "statements": [],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 45,
                                    "end": 45
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 44,
                                "end": 46
                            },
                            "autofix": 0,
                            "flags": 3072,
                            "start": 17,
                            "end": 46
                        },
                        "flags": 256,
                        "start": 9,
                        "end": 46
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 47
            },
            "flags": 128,
            "start": 0,
            "end": 47
        }
    ],
    "isModule": false,
    "text": "class x {async *f(foo = [{m: t(await bar)}]){}}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 47
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: class x {async *f(foo = [{m: t(await bar)}]){}}
## Input

`````js
class x {async *f(foo = [{m: t(await bar)}]){}}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: class x {async *f(foo = [{m: t(await bar)}]){}}
## Input

`````js
class x {async *f(foo = [{m: t(await bar)}]){}}
`````
```

