# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/expressions/super/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/super/gen/obj-expr-method-gen
> :: test: obj-expr-method-gen
> :: case: new super;
## Options

`````js
{}
`````
## Input

`````js
({ *method() { new super; } })
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
                                                        "kind": 210,
                                                        "newKeyword": {
                                                            "kind": 138477661,
                                                            "flags": 96,
                                                            "start": 14,
                                                            "end": 18
                                                        },
                                                        "expression": {
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
                                                        "argumentList": null,
                                                        "flags": 96,
                                                        "start": 14,
                                                        "end": 24
                                                    },
                                                    "flags": 16,
                                                    "start": 14,
                                                    "end": 25
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 14,
                                            "end": 25
                                        },
                                        "flags": 32,
                                        "start": 12,
                                        "end": 27
                                    },
                                    "flags": 160,
                                    "start": 10,
                                    "end": 27
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 27
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 27
                    },
                    "flags": 48,
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
        }
    ],
    "isModule": false,
    "source": "({ *method() { new super; } })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' must be followed by an argument list or member access. - start: 18, end: 25
✖ Dot property must be an identifier - start: 24, end: 25

```

