# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: class x {async *f(foo = [{m: t(await bar)}]){}}
## Input

`````js
'use strict'; class x {async *f(foo = [{m: t(await bar)}]){}}
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
            "kind": 178,
            "decorators": null,
            "name": {
                "kind": 81921,
                "value": "x",
                "autofix": 0,
                "flags": 768,
                "start": 19,
                "end": 21
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
                                "start": 30,
                                "end": 31
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
                                            "start": 32,
                                            "end": 35
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
                                                                            "start": 42,
                                                                            "end": 44
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
                                                                                        "start": 50,
                                                                                        "end": 54
                                                                                    },
                                                                                    "autofix": 0,
                                                                                    "flags": 256,
                                                                                    "start": 45,
                                                                                    "end": 54
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "autofix": 0,
                                                                            "flags": 256,
                                                                            "start": 45,
                                                                            "end": 54
                                                                        },
                                                                        "flags": 256,
                                                                        "start": 40,
                                                                        "end": 55
                                                                    },
                                                                    "right": {
                                                                        "kind": 81921,
                                                                        "value": "m",
                                                                        "autofix": 0,
                                                                        "flags": 768,
                                                                        "start": 40,
                                                                        "end": 41
                                                                    },
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 40,
                                                                    "end": 55
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "multiline": false,
                                                            "autofix": 0,
                                                            "flags": 0,
                                                            "start": 40,
                                                            "end": 55
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 39,
                                                        "end": 56
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 39,
                                                "end": 56
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 37,
                                            "end": 57
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 32,
                                        "end": 57
                                    }
                                ],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 32,
                                "end": 58
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
                                    "start": 59,
                                    "end": 59
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 58,
                                "end": 60
                            },
                            "autofix": 0,
                            "flags": 3072,
                            "start": 31,
                            "end": 60
                        },
                        "flags": 256,
                        "start": 23,
                        "end": 60
                    }
                ],
                "flags": 256,
                "start": 23,
                "end": 61
            },
            "flags": 128,
            "start": 13,
            "end": 61
        }
    ],
    "isModule": false,
    "text": "'use strict'; class x {async *f(foo = [{m: t(await bar)}]){}}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 61
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: class x {async *f(foo = [{m: t(await bar)}]){}}
## Input

`````js
'use strict'; class x {async *f(foo = [{m: t(await bar)}]){}}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: class x {async *f(foo = [{m: t(await bar)}]){}}
## Input

`````js
'use strict'; class x {async *f(foo = [{m: t(await bar)}]){}}
`````
```

