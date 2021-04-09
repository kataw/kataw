# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: class x {async f(foo = await bar){}}
## Input

`````js
'use strict'; class x {async f(foo = await bar){}}
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
                                "start": 28,
                                "end": 30
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
                                            "start": 31,
                                            "end": 34
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
                                                "start": 42,
                                                "end": 46
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 36,
                                            "end": 46
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 31,
                                        "end": 46
                                    }
                                ],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 31,
                                "end": 47
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
                                    "start": 48,
                                    "end": 48
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 47,
                                "end": 49
                            },
                            "autofix": 0,
                            "flags": 2048,
                            "start": 30,
                            "end": 49
                        },
                        "flags": 256,
                        "start": 23,
                        "end": 49
                    }
                ],
                "flags": 256,
                "start": 23,
                "end": 50
            },
            "flags": 128,
            "start": 13,
            "end": 50
        }
    ],
    "isModule": false,
    "text": "'use strict'; class x {async f(foo = await bar){}}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 50
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: class x {async f(foo = await bar){}}
## Input

`````js
'use strict'; class x {async f(foo = await bar){}}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: class x {async f(foo = await bar){}}
## Input

`````js
'use strict'; class x {async f(foo = await bar){}}
`````
```

