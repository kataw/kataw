# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/expressions/super/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\super\gen\obj-expr-get
> :: test: obj-expr-get
> :: case: y = super
## Input

`````js
({ get x() { y = super } })
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
                                                        "kind": 125,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "y",
                                                            "rawText": "y",
                                                            "flags": 96,
                                                            "start": 12,
                                                            "end": 14
                                                        },
                                                        "operatorToken": {
                                                            "kind": 4125,
                                                            "flags": 64,
                                                            "start": 14,
                                                            "end": 16
                                                        },
                                                        "right": {
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
                                                        "flags": 32,
                                                        "start": 12,
                                                        "end": 22
                                                    },
                                                    "flags": 16,
                                                    "start": 12,
                                                    "end": 22
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 12,
                                            "end": 22
                                        },
                                        "flags": 32,
                                        "start": 10,
                                        "end": 24
                                    },
                                    "flags": 1056,
                                    "start": 8,
                                    "end": 24
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 24
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 24
                    },
                    "flags": 48,
                    "start": 1,
                    "end": 26
                },
                "flags": 32,
                "start": 0,
                "end": 27
            },
            "flags": 16,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "({ get x() { y = super } })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' must be followed by an argument list or member access. - start: 16, end: 24
✖ Dot property must be an identifier - start: 22, end: 24

```

