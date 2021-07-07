# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/super/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/super/gen/obj-expr-set
> :: test: obj-expr-set
> :: case: new super();
## Options

`````js
{}
`````
## Input

`````js
({ set x(_) { new super(); } })
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
                                "setKeyword": {
                                    "kind": 16499,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 6
                                },
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
                                        "formalParameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "_",
                                                "rawText": "_",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 9,
                                                "end": 10
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 608,
                                        "transformFlags": 0,
                                        "start": 9,
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
                                                            "transformFlags": 0,
                                                            "start": 13,
                                                            "end": 17
                                                        },
                                                        "expression": {
                                                            "kind": 4259935,
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 17,
                                                            "end": 23
                                                        },
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 24,
                                                            "end": 24
                                                        },
                                                        "flags": 96,
                                                        "transformFlags": 2048,
                                                        "start": 13,
                                                        "end": 25
                                                    },
                                                    "flags": 16,
                                                    "transformFlags": 4096,
                                                    "start": 13,
                                                    "end": 26
                                                }
                                            ],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 13,
                                            "end": 26
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 11,
                                        "end": 28
                                    },
                                    "flags": 544,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 28
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 28
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 28
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 30
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 31
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "({ set x(_) { new super(); } })",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 17, end: 24

```

