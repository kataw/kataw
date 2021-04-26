# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: class x {*f(foo = await bar){}}
## Input

`````js
class x {*f(foo = await bar){}}
`````

## Output

### Hybrid CST

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
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
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
                        "declareToken": null,
                        "decorators": null,
                        "staticKeyword": null,
                        "asyncKeyword": null,
                        "setKeyword": null,
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 768,
                                "start": 10,
                                "end": 11
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
                                            "start": 12,
                                            "end": 15
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 134299649,
                                            "text": "await",
                                            "rawText": "await",
                                            "flags": 768,
                                            "start": 17,
                                            "end": 23
                                        },
                                        "flags": 258,
                                        "start": 12,
                                        "end": 23
                                    },
                                    {
                                        "kind": 215,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 768,
                                            "start": 23,
                                            "end": 27
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 256,
                                        "start": 23,
                                        "end": 27
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 258,
                                "start": 12,
                                "end": 28
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
                                    "start": 29,
                                    "end": 29
                                },
                                "flags": 256,
                                "start": 28,
                                "end": 30
                            },
                            "flags": 0,
                            "start": 11,
                            "end": 30
                        },
                        "flags": 0,
                        "start": 9,
                        "end": 30
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 31
            },
            "flags": 128,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "text": "class x {*f(foo = await bar){}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ ',' expected - start: 23, end: 27

```

