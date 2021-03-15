# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/expressions/await/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\expressions\await\gen\with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    }
## Input

`````js
'use strict'; async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "'use strict'; async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    }",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "use strict",
                "rawText": "use strict",
                "flags": 33554432,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 12
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 13
        },
        {
            "kind": 1312785,
            "name": {
                "kind": 131102,
                "text": "g",
                "rawText": "g",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 28,
                "end": 30
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 31,
                "end": 32
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 142,
                            "isConst": false,
                            "binding": {
                                "kind": 31,
                                "bindingList": [
                                    {
                                        "kind": 16525,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 36,
                                            "end": 38
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 9439250,
                                            "name": {
                                                "kind": 131102,
                                                "text": "f",
                                                "rawText": "f",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 1025,
                                                "start": 55,
                                                "end": 57
                                            },
                                            "formalParameters": {
                                                "kind": 90,
                                                "formalParameterList": [
                                                    {
                                                        "kind": 16473,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "foo",
                                                            "rawText": "foo",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 1025,
                                                            "start": 58,
                                                            "end": 61
                                                        },
                                                        "isOptional": false,
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 98822,
                                                            "elementList": {
                                                                "kind": 65605,
                                                                "elements": [
                                                                    {
                                                                        "kind": 196712,
                                                                        "text": "h",
                                                                        "rawText": "h",
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 65,
                                                                        "end": 66
                                                                    },
                                                                    {
                                                                        "kind": 98984,
                                                                        "propertyList": {
                                                                            "kind": 65722,
                                                                            "properties": [
                                                                                {
                                                                                    "kind": 65721,
                                                                                    "left": {
                                                                                        "kind": 196711,
                                                                                        "text": "m",
                                                                                        "rawText": "m",
                                                                                        "flags": 0,
                                                                                        "symbol": null,
                                                                                        "transformFlags": 0,
                                                                                        "start": 69,
                                                                                        "end": 70
                                                                                    },
                                                                                    "right": {
                                                                                        "kind": 1073807915,
                                                                                        "expression": {
                                                                                            "kind": 196712,
                                                                                            "text": "t",
                                                                                            "rawText": "t",
                                                                                            "flags": 0,
                                                                                            "symbol": null,
                                                                                            "transformFlags": 0,
                                                                                            "start": 71,
                                                                                            "end": 73
                                                                                        },
                                                                                        "typeArguments": null,
                                                                                        "argumentList": {
                                                                                            "kind": 3,
                                                                                            "elements": [
                                                                                                {
                                                                                                    "kind": 65559,
                                                                                                    "expression": {
                                                                                                        "kind": 196712,
                                                                                                        "text": "bar",
                                                                                                        "rawText": "bar",
                                                                                                        "flags": 0,
                                                                                                        "symbol": null,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 79,
                                                                                                        "end": 83
                                                                                                    },
                                                                                                    "flags": 0,
                                                                                                    "symbol": null,
                                                                                                    "transformFlags": 32780,
                                                                                                    "start": 74,
                                                                                                    "end": 83
                                                                                                }
                                                                                            ],
                                                                                            "trailingComma": false,
                                                                                            "transformFlags": 0,
                                                                                            "flags": 0,
                                                                                            "symbol": null,
                                                                                            "start": 79,
                                                                                            "end": 84
                                                                                        },
                                                                                        "flags": 0,
                                                                                        "symbol": null,
                                                                                        "transformFlags": 0,
                                                                                        "start": 73,
                                                                                        "end": 84
                                                                                    },
                                                                                    "accessModifier": null,
                                                                                    "decorators": null,
                                                                                    "flags": 0,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 0,
                                                                                    "start": 69,
                                                                                    "end": 84
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "multiline": false,
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 69,
                                                                            "end": 84
                                                                        },
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 67,
                                                                        "end": 85
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "multiline": false,
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 65,
                                                                "end": 85
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 63,
                                                            "end": 86
                                                        },
                                                        "decorators": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1,
                                                        "start": 58,
                                                        "end": 86
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 58,
                                                "end": 87
                                            },
                                            "contents": {
                                                "kind": 91,
                                                "functionStatementList": {
                                                    "kind": 94,
                                                    "statements": [],
                                                    "multiline": false,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 88,
                                                    "end": 88
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 87,
                                                "end": 89
                                            },
                                            "typeParameters": null,
                                            "type": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 4,
                                            "start": 40,
                                            "end": 89
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 36,
                                        "end": 89
                                    }
                                ],
                                "flags": 8,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 89
                            },
                            "flags": 8,
                            "symbol": null,
                            "transformFlags": 769,
                            "start": 33,
                            "end": 89
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 89
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 32,
                "end": 94
            },
            "typeParameters": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 260,
            "start": 13,
            "end": 94
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 94
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

