# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-01
- From: kataw8/test\__snapshot__/parser/expressions/super/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\super\gen\obj-expr-method-gen
> :: test: obj-expr-method-gen
> :: case: y = super
## Input

`````js
({ *method() { y = super } })
`````
## Output

### CST

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
                                "generatorToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 2,
                                    "end": 4
                                },
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "method",
                                        "rawText": "method",
                                        "flags": 96,
                                        "start": 4,
                                        "end": 10
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 160,
                                        "start": 11,
                                        "end": 12
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [
                                                {
                                                    "kind": 120,
                                                    "expression": {
                                                        "kind": 125,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "y",
                                                            "rawText": "y",
                                                            "flags": 96,
                                                            "start": 14,
                                                            "end": 16
                                                        },
                                                        "operatorToken": {
                                                            "kind": 4125,
                                                            "flags": 64,
                                                            "start": 16,
                                                            "end": 18
                                                        },
                                                        "right": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 225,
                                                                "superKeyword": {
                                                                    "kind": 4259935,
                                                                    "flags": 96,
                                                                    "start": 18,
                                                                    "end": 24
                                                                },
                                                                "flags": 96,
                                                                "start": 18,
                                                                "end": 24
                                                            },
                                                            "expression": {
                                                                "kind": 16637,
                                                                "text": "",
                                                                "flags": 64,
                                                                "start": 24,
                                                                "end": 24
                                                            },
                                                            "flags": 536870944,
                                                            "start": 18,
                                                            "end": 24
                                                        },
                                                        "flags": 32,
                                                        "start": 14,
                                                        "end": 24
                                                    },
                                                    "flags": 16,
                                                    "start": 14,
                                                    "end": 24
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 14,
                                            "end": 24
                                        },
                                        "flags": 32,
                                        "start": 12,
                                        "end": 26
                                    },
                                    "flags": 160,
                                    "start": 10,
                                    "end": 26
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 26
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 26
                    },
                    "flags": 48,
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
        }
    ],
    "isModule": false,
    "source": "({ *method() { y = super } })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' must be followed by an argument list or member access. - start: 18, end: 26
✖ Dot property must be an identifier - start: 24, end: 26

```

