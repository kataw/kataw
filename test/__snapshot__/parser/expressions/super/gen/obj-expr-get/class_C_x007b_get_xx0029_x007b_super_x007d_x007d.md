# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: obj-expr-get
> :: case: class C { get x) { super; } }
## Input

`````js
({ get x() { class C { get x) { super; } } } })
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 257,
                                "asyncKeyword": null,
                                "generatorToken": null,
                                "getKeyword": {
                                    "kind": 16498,
                                    "flags": 64,
                                    "start": 2,
                                    "end": 6
                                },
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 6,
                                        "end": 8
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 1056,
                                        "start": 9,
                                        "end": 10
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [
                                                {
                                                    "kind": 178,
                                                    "declareKeyword": null,
                                                    "decorators": null,
                                                    "classKeyword": {
                                                        "kind": 37822544,
                                                        "flags": 0,
                                                        "start": 12,
                                                        "end": 18
                                                    },
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "C",
                                                        "rawText": "C",
                                                        "flags": 96,
                                                        "start": 18,
                                                        "end": 20
                                                    },
                                                    "typeParameters": null,
                                                    "classHeritage": null,
                                                    "members": {
                                                        "kind": 277,
                                                        "elements": [
                                                            {
                                                                "kind": 280,
                                                                "decorators": null,
                                                                "declaredToken": null,
                                                                "staticToken": null,
                                                                "asyncKeyword": null,
                                                                "key": {
                                                                    "kind": 134299649,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 96,
                                                                    "start": 26,
                                                                    "end": 28
                                                                },
                                                                "optionalToken": null,
                                                                "type": null,
                                                                "initializer": null,
                                                                "flags": 32,
                                                                "start": 22,
                                                                "end": 28
                                                            }
                                                        ],
                                                        "flags": 32,
                                                        "start": 22,
                                                        "end": 28
                                                    },
                                                    "flags": 16,
                                                    "start": 12,
                                                    "end": 28
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 12,
                                            "end": 28
                                        },
                                        "flags": 32,
                                        "start": 10,
                                        "end": 28
                                    },
                                    "flags": 1056,
                                    "start": 8,
                                    "end": 28
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 28
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 28
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 28
                },
                "flags": 32,
                "start": 0,
                "end": 29
            },
            "flags": 16,
            "start": 0,
            "end": 29
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 203,
                            "chain": {
                                "kind": 225,
                                "superKeyword": {
                                    "kind": 4259935,
                                    "flags": 0,
                                    "start": 31,
                                    "end": 37
                                },
                                "flags": 96,
                                "start": 31,
                                "end": 37
                            },
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "flags": 68,
                                "start": 37,
                                "end": 37
                            },
                            "flags": 32,
                            "start": 31,
                            "end": 37
                        },
                        "flags": 16,
                        "start": 31,
                        "end": 38
                    }
                ],
                "flags": 16,
                "start": 31,
                "end": 38
            },
            "flags": 16,
            "start": 29,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "({ get x() { class C { get x) { super; } } } })",
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
✖ ',' expected - start: 28, end: 29
✖ Expected a `;` - start: 29, end: 31
✖ 'super' must be followed by an argument list or member access. - start: 37, end: 38
✖ Dot property must be an identifier - start: 37, end: 38
✖ Declaration or statement expected - start: 40, end: 42
✖ Declaration or statement expected - start: 42, end: 44
✖ Declaration or statement expected - start: 44, end: 46
✖ Declaration or statement expected - start: 46, end: 47

```

