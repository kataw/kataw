# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/super/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/super/gen/obj-expr-get
> :: test: obj-expr-get
> :: case: y = super
## Options

`````js
{}
`````
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
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": {
                                    "kind": 16498,
                                    "flags": 96,
                                    "transformFlags": 0,
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
                                        "transformFlags": 0,
                                        "start": 6,
                                        "end": 8
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 1056,
                                        "transformFlags": 0,
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
                                                            "transformFlags": 0,
                                                            "start": 12,
                                                            "end": 14
                                                        },
                                                        "operatorToken": {
                                                            "kind": 4125,
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 14,
                                                            "end": 16
                                                        },
                                                        "right": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 4259935,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 16,
                                                                "end": 22
                                                            },
                                                            "expression": {
                                                                "kind": 16637,
                                                                "text": "",
                                                                "rawText": "",
                                                                "flags": 64,
                                                                "transformFlags": 0,
                                                                "start": 22,
                                                                "end": 22
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 2,
                                                            "start": 16,
                                                            "end": 22
                                                        },
                                                        "flags": 0,
                                                        "transformFlags": 128,
                                                        "start": 12,
                                                        "end": 22
                                                    },
                                                    "flags": 16,
                                                    "transformFlags": 4096,
                                                    "start": 12,
                                                    "end": 22
                                                }
                                            ],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 12,
                                            "end": 22
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 10,
                                        "end": 24
                                    },
                                    "flags": 1056,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 24
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 24
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 24
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 26
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 27
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "({ get x() { y = super } })",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
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

