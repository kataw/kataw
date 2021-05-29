# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-29
- From: d
- Path: t
> :: test: obj-expr-get
> :: case: new super;
## Input

`````js
({ get x() { new super; } })
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
                                                            "start": 12,
                                                            "end": 16
                                                        },
                                                        "expression": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 225,
                                                                "superKeyword": {
                                                                    "kind": 4259935,
                                                                    "flags": 96,
                                                                    "start": 16,
                                                                    "end": 22
                                                                },
                                                                "flags": 96,
                                                                "start": 16,
                                                                "end": 22
                                                            },
                                                            "expression": {
                                                                "kind": 16637,
                                                                "text": "",
                                                                "flags": 64,
                                                                "start": 22,
                                                                "end": 22
                                                            },
                                                            "flags": 536870944,
                                                            "start": 16,
                                                            "end": 22
                                                        },
                                                        "argumentList": null,
                                                        "flags": 32,
                                                        "start": 12,
                                                        "end": 22
                                                    },
                                                    "flags": 16,
                                                    "start": 12,
                                                    "end": 23
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 12,
                                            "end": 23
                                        },
                                        "flags": 32,
                                        "start": 10,
                                        "end": 25
                                    },
                                    "flags": 1056,
                                    "start": 8,
                                    "end": 25
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 25
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 25
                    },
                    "flags": 48,
                    "start": 1,
                    "end": 27
                },
                "flags": 32,
                "start": 0,
                "end": 28
            },
            "flags": 16,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "({ get x() { new super; } })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' must be followed by an argument list or member access. - start: 16, end: 23
✖ Dot property must be an identifier - start: 22, end: 23

```

