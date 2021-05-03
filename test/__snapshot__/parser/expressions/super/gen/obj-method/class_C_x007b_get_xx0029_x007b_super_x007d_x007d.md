# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: obj-method
> :: case: class C { get x) { super; } }
## Input

`````js
({ method() { class C { get x) { super; } } } })
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
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "method",
                                        "rawText": "method",
                                        "flags": 96,
                                        "start": 2,
                                        "end": 9
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 10,
                                        "end": 11
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
                                                        "start": 13,
                                                        "end": 19
                                                    },
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "C",
                                                        "rawText": "C",
                                                        "flags": 96,
                                                        "start": 19,
                                                        "end": 21
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
                                                                    "start": 27,
                                                                    "end": 29
                                                                },
                                                                "optionalToken": null,
                                                                "type": null,
                                                                "initializer": null,
                                                                "flags": 32,
                                                                "start": 23,
                                                                "end": 29
                                                            }
                                                        ],
                                                        "flags": 32,
                                                        "start": 23,
                                                        "end": 29
                                                    },
                                                    "flags": 16,
                                                    "start": 13,
                                                    "end": 29
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 13,
                                            "end": 29
                                        },
                                        "flags": 32,
                                        "start": 11,
                                        "end": 29
                                    },
                                    "flags": 32,
                                    "start": 9,
                                    "end": 29
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 29
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 29
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 29
                },
                "flags": 32,
                "start": 0,
                "end": 30
            },
            "flags": 16,
            "start": 0,
            "end": 30
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
                                    "start": 32,
                                    "end": 38
                                },
                                "flags": 96,
                                "start": 32,
                                "end": 38
                            },
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "flags": 68,
                                "start": 38,
                                "end": 38
                            },
                            "flags": 32,
                            "start": 32,
                            "end": 38
                        },
                        "flags": 16,
                        "start": 32,
                        "end": 39
                    }
                ],
                "flags": 16,
                "start": 32,
                "end": 39
            },
            "flags": 16,
            "start": 30,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "({ method() { class C { get x) { super; } } } })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 29, end: 30
✖ The parser expected to find a '}' to match the '{' token here - start: 29, end: 30
✖ ',' expected - start: 29, end: 30
✖ The parser expected to find a '}' to match the '{' token here - start: 29, end: 30
✖ Expected a `;` - start: 30, end: 32
✖ 'super' must be followed by an argument list or member access. - start: 38, end: 39
✖ Dot property must be an identifier - start: 38, end: 39
✖ Declaration or statement expected - start: 41, end: 43
✖ Declaration or statement expected - start: 43, end: 45
✖ Declaration or statement expected - start: 45, end: 47
✖ Declaration or statement expected - start: 47, end: 48

```

