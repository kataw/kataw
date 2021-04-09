# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: class x {async f(foo = await bar){}}
## Input

`````js
class x {async f(foo = await bar){}}
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
                                "start": 14,
                                "end": 16
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
                                            "start": 17,
                                            "end": 20
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 208,
                                            "expression": {
                                                "kind": 81921,
                                                "value": "bar",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 28,
                                                "end": 32
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 22,
                                            "end": 32
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 17,
                                        "end": 32
                                    }
                                ],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 17,
                                "end": 33
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
                                    "start": 34,
                                    "end": 34
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 33,
                                "end": 35
                            },
                            "autofix": 0,
                            "flags": 2048,
                            "start": 16,
                            "end": 35
                        },
                        "flags": 256,
                        "start": 9,
                        "end": 35
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 36
            },
            "flags": 128,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "text": "class x {async f(foo = await bar){}}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 36
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: class x {async f(foo = await bar){}}
## Input

`````js
class x {async f(foo = await bar){}}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: class x {async f(foo = await bar){}}
## Input

`````js
class x {async f(foo = await bar){}}
`````
```

