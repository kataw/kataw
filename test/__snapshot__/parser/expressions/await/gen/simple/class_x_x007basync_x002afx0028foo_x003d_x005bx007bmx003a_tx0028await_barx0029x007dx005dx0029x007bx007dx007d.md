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
### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
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
                        "declareToken": null,
                        "decorators": null,
                        "generatorToken": {
                            "kind": 67143222,
                            "flags": 64,
                            "start": 14,
                            "end": 16
                        },
                        "staticKeyword": null,
                        "asyncKeyword": {
                            "kind": 82031,
                            "flags": 64,
                            "start": 9,
                            "end": 14
                        },
                        "setKeyword": null,
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
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
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
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
                                                                    "generatorToken": null,
                                                                    "left": {
                                                                        "kind": 131,
                                                                        "expression": {
                                                                            "kind": 134299649,
                                                                            "text": "t",
                                                                            "rawText": "t",
                                                                            "flags": 96,
                                                                            "start": 28,
                                                                            "end": 30
                                                                        },
                                                                        "argumentList": {
                                                                            "kind": 256,
                                                                            "elements": [
                                                                                {
                                                                                    "kind": 208,
                                                                                    "awaitToken": {
                                                                                        "kind": 82032,
                                                                                        "flags": 0,
                                                                                        "start": 31,
                                                                                        "end": 36
                                                                                    },
                                                                                    "expression": {
                                                                                        "kind": 134299649,
                                                                                        "text": "bar",
                                                                                        "rawText": "bar",
                                                                                        "flags": 96,
                                                                                        "start": 36,
                                                                                        "end": 40
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "start": 31,
                                                                                    "end": 40
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 32,
                                                                            "start": 31,
                                                                            "end": 40
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 26,
                                                                        "end": 41
                                                                    },
                                                                    "right": {
                                                                        "kind": 134299649,
                                                                        "text": "m",
                                                                        "rawText": "m",
                                                                        "flags": 96,
                                                                        "start": 26,
                                                                        "end": 27
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 26,
                                                                    "end": 41
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 16,
                                                            "start": 26,
                                                            "end": 41
                                                        },
                                                        "flags": 32,
                                                        "start": 25,
                                                        "end": 42
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 25,
                                                "end": 42
                                            },
                                            "flags": 32,
                                            "start": 23,
                                            "end": 43
                                        },
                                        "flags": 34,
                                        "start": 18,
                                        "end": 43
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 418,
                                "start": 18,
                                "end": 44
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 45,
                                    "end": 45
                                },
                                "flags": 32,
                                "start": 44,
                                "end": 46
                            },
                            "flags": 384,
                            "start": 17,
                            "end": 46
                        },
                        "flags": 384,
                        "start": 9,
                        "end": 46
                    }
                ],
                "flags": 32,
                "start": 9,
                "end": 47
            },
            "flags": 16,
            "start": 0,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "class x {async *f(foo = [{m: t(await bar)}]){}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 47
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

