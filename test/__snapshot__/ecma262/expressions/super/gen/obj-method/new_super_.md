# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/super/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/super/gen/obj-method
> :: test: obj-method
> :: case: new super;
## Options

`````js
{}
`````
## Input

`````js
({ method() { new super; } })
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
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
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
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 10,
                                        "end": 11
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
                                                            "start": 13,
                                                            "end": 17
                                                        },
                                                        "expression": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 4259935,
                                                                "flags": 96,
                                                                "start": 17,
                                                                "end": 23
                                                            },
                                                            "expression": {
                                                                "kind": 16637,
                                                                "text": "",
                                                                "rawText": "",
                                                                "flags": 64,
                                                                "start": 23,
                                                                "end": 23
                                                            },
                                                            "flags": 32,
                                                            "start": 17,
                                                            "end": 23
                                                        },
                                                        "argumentList": null,
                                                        "flags": 96,
                                                        "start": 13,
                                                        "end": 23
                                                    },
                                                    "flags": 16,
                                                    "start": 13,
                                                    "end": 24
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 13,
                                            "end": 24
                                        },
                                        "flags": 32,
                                        "start": 11,
                                        "end": 26
                                    },
                                    "flags": 32,
                                    "start": 9,
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
                "flags": 0,
                "start": 34,
                "end": 29
            },
            "flags": 16,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "({ method() { new super; } })",
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
✖ 'super' must be followed by an argument list or member access. - start: 17, end: 24
✖ Dot property must be an identifier - start: 23, end: 24

```

