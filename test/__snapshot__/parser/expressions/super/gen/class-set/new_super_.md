# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: class-set
> :: case: new super;
## Input

`````js
class C { set x(_) { new super; } }
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
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
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
                        "generatorToken": null,
                        "staticKeyword": null,
                        "asyncKeyword": null,
                        "setKeyword": null,
                        "getKeyword": {
                            "kind": 16499,
                            "flags": 64,
                            "start": 9,
                            "end": 13
                        },
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 13,
                                "end": 15
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
                                            "text": "_",
                                            "rawText": "_",
                                            "flags": 96,
                                            "start": 16,
                                            "end": 17
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 16,
                                        "end": 17
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 544,
                                "start": 16,
                                "end": 18
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 210,
                                                "newKeyword": {
                                                    "kind": 138477661,
                                                    "flags": 0,
                                                    "start": 20,
                                                    "end": 24
                                                },
                                                "expression": {
                                                    "kind": 203,
                                                    "chain": {
                                                        "kind": 225,
                                                        "superKeyword": {
                                                            "kind": 4259935,
                                                            "flags": 0,
                                                            "start": 24,
                                                            "end": 30
                                                        },
                                                        "flags": 96,
                                                        "start": 24,
                                                        "end": 30
                                                    },
                                                    "expression": {
                                                        "kind": 16637,
                                                        "text": "",
                                                        "flags": 68,
                                                        "start": 30,
                                                        "end": 30
                                                    },
                                                    "flags": 32,
                                                    "start": 24,
                                                    "end": 30
                                                },
                                                "argumentList": null,
                                                "flags": 32,
                                                "start": 20,
                                                "end": 30
                                            },
                                            "flags": 16,
                                            "start": 20,
                                            "end": 31
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 20,
                                    "end": 31
                                },
                                "flags": 32,
                                "start": 18,
                                "end": 33
                            },
                            "flags": 512,
                            "start": 15,
                            "end": 33
                        },
                        "flags": 512,
                        "start": 9,
                        "end": 33
                    }
                ],
                "flags": 32,
                "start": 9,
                "end": 35
            },
            "flags": 16,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "class C { set x(_) { new super; } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'super' must be followed by an argument list or member access. - start: 30, end: 31
✖ Dot property must be an identifier - start: 30, end: 31

```

