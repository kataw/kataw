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
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "use strict",
            "flags": 67109632,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 178,
            "decorators": null,
            "classKeyword": {
                "kind": 37814352,
                "flags": 768,
                "start": 13,
                "end": 19
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
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
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
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
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
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
                                                                            "kind": 134299649,
                                                                            "text": "t",
                                                                            "rawText": "t",
                                                                            "flags": 768,
                                                                            "start": 42,
                                                                            "end": 44
                                                                        },
                                                                        "argumentList": {
                                                                            "kind": 256,
                                                                            "elements": [
                                                                                {
                                                                                    "kind": 208,
                                                                                    "awaitToken": {
                                                                                        "kind": 82032,
                                                                                        "flags": 768,
                                                                                        "start": 45,
                                                                                        "end": 50
                                                                                    },
                                                                                    "expression": {
                                                                                        "kind": 134299649,
                                                                                        "text": "bar",
                                                                                        "rawText": "bar",
                                                                                        "flags": 768,
                                                                                        "start": 50,
                                                                                        "end": 54
                                                                                    },
                                                                                    "flags": 256,
                                                                                    "start": 45,
                                                                                    "end": 54
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 256,
                                                                            "start": 45,
                                                                            "end": 54
                                                                        },
                                                                        "flags": 256,
                                                                        "start": 40,
                                                                        "end": 55
                                                                    },
                                                                    "right": {
                                                                        "kind": 134299649,
                                                                        "text": "m",
                                                                        "rawText": "m",
                                                                        "flags": 768,
                                                                        "start": 40,
                                                                        "end": 41
                                                                    },
                                                                    "flags": 256,
                                                                    "start": 40,
                                                                    "end": 55
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "multiline": false,
                                                            "flags": 0,
                                                            "start": 40,
                                                            "end": 55
                                                        },
                                                        "flags": 256,
                                                        "start": 39,
                                                        "end": 56
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 39,
                                                "end": 56
                                            },
                                            "flags": 256,
                                            "start": 37,
                                            "end": 57
                                        },
                                        "flags": 258,
                                        "start": 32,
                                        "end": 57
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 3330,
                                "start": 32,
                                "end": 58
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 59,
                                    "end": 59
                                },
                                "flags": 256,
                                "start": 58,
                                "end": 60
                            },
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
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 61
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

