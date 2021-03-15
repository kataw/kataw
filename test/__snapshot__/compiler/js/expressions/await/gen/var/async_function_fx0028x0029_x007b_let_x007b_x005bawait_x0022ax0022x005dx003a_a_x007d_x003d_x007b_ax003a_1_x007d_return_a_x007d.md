# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/expressions/await/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\expressions\await\gen\var
> :: test: var
> :: case: async function f() {
>            let { [await "a"]: a } = { a: 1 };
>            return a;
>          }
## Input

`````js
var await; var f = (async function() { async function f() {
  let { [await "a"]: a } = { a: 1 };
  return a;
} });
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "var await; var f = (async function() { async function f() {\n  let { [await \"a\"]: a } = { a: 1 };\n  return a;\n} });",
    "filename": "",
    "statements": [
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "await",
                            "rawText": "await",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 3,
                            "end": 9
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 9
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 9
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 10
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "f",
                            "rawText": "f",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 14,
                            "end": 16
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 66224,
                            "expression": {
                                "kind": 9439250,
                                "name": null,
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 35,
                                    "end": 36
                                },
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [
                                            {
                                                "kind": 1312785,
                                                "name": {
                                                    "kind": 131102,
                                                    "text": "f",
                                                    "rawText": "f",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 1025,
                                                    "start": 53,
                                                    "end": 55
                                                },
                                                "formalParameters": {
                                                    "kind": 90,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 56,
                                                    "end": 57
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
                                                                                "kind": 33554598,
                                                                                "propertyList": {
                                                                                    "kind": 33,
                                                                                    "properties": [
                                                                                        {
                                                                                            "kind": 32,
                                                                                            "ellipsis": false,
                                                                                            "key": {
                                                                                                "kind": 65591,
                                                                                                "expression": {
                                                                                                    "kind": 65559,
                                                                                                    "expression": {
                                                                                                        "kind": 4261583,
                                                                                                        "text": "a",
                                                                                                        "rawText": "a",
                                                                                                        "flags": 0,
                                                                                                        "symbol": null,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 74,
                                                                                                        "end": 78
                                                                                                    },
                                                                                                    "flags": 0,
                                                                                                    "symbol": null,
                                                                                                    "transformFlags": 32780,
                                                                                                    "start": 69,
                                                                                                    "end": 78
                                                                                                },
                                                                                                "flags": 0,
                                                                                                "symbol": null,
                                                                                                "transformFlags": 131073,
                                                                                                "start": 67,
                                                                                                "end": 79
                                                                                            },
                                                                                            "value": {
                                                                                                "kind": 16412,
                                                                                                "ellipsis": false,
                                                                                                "left": {
                                                                                                    "kind": 131102,
                                                                                                    "text": "a",
                                                                                                    "rawText": "a",
                                                                                                    "flags": 0,
                                                                                                    "symbol": null,
                                                                                                    "transformFlags": 1025,
                                                                                                    "start": 80,
                                                                                                    "end": 82
                                                                                                },
                                                                                                "right": null,
                                                                                                "flags": 0,
                                                                                                "symbol": null,
                                                                                                "transformFlags": 1,
                                                                                                "start": 80,
                                                                                                "end": 82
                                                                                            },
                                                                                            "flags": 0,
                                                                                            "symbol": null,
                                                                                            "transformFlags": 1025,
                                                                                            "start": 67,
                                                                                            "end": 82
                                                                                        }
                                                                                    ],
                                                                                    "multiline": false,
                                                                                    "trailingComma": false,
                                                                                    "transformFlags": 1025,
                                                                                    "flags": 0,
                                                                                    "symbol": null,
                                                                                    "start": 67,
                                                                                    "end": 82
                                                                                },
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 1025,
                                                                                "start": 65,
                                                                                "end": 84
                                                                            },
                                                                            "exclamation": false,
                                                                            "type": null,
                                                                            "initializer": {
                                                                                "kind": 98984,
                                                                                "propertyList": {
                                                                                    "kind": 65722,
                                                                                    "properties": [
                                                                                        {
                                                                                            "kind": 65721,
                                                                                            "left": {
                                                                                                "kind": 196711,
                                                                                                "text": "a",
                                                                                                "rawText": "a",
                                                                                                "flags": 0,
                                                                                                "symbol": null,
                                                                                                "transformFlags": 0,
                                                                                                "start": 88,
                                                                                                "end": 90
                                                                                            },
                                                                                            "right": {
                                                                                                "kind": 4261540,
                                                                                                "text": 1,
                                                                                                "rawText": "1",
                                                                                                "flags": 0,
                                                                                                "symbol": null,
                                                                                                "transformFlags": 0,
                                                                                                "start": 91,
                                                                                                "end": 93
                                                                                            },
                                                                                            "accessModifier": null,
                                                                                            "decorators": null,
                                                                                            "flags": 0,
                                                                                            "symbol": null,
                                                                                            "transformFlags": 0,
                                                                                            "start": 88,
                                                                                            "end": 93
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "multiline": false,
                                                                                    "flags": 0,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 0,
                                                                                    "start": 88,
                                                                                    "end": 93
                                                                                },
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 86,
                                                                                "end": 95
                                                                            },
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 65,
                                                                            "end": 95
                                                                        }
                                                                    ],
                                                                    "flags": 8,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 65,
                                                                    "end": 95
                                                                },
                                                                "flags": 32776,
                                                                "symbol": null,
                                                                "transformFlags": 769,
                                                                "start": 59,
                                                                "end": 96
                                                            },
                                                            {
                                                                "kind": 2097346,
                                                                "expression": {
                                                                    "kind": 196712,
                                                                    "text": "a",
                                                                    "rawText": "a",
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 105,
                                                                    "end": 107
                                                                },
                                                                "flags": 32768,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 96,
                                                                "end": 108
                                                            }
                                                        ],
                                                        "multiline": true,
                                                        "flags": 32768,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 59,
                                                        "end": 108
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 57,
                                                    "end": 110
                                                },
                                                "typeParameters": null,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 260,
                                                "start": 38,
                                                "end": 110
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 38,
                                        "end": 110
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 36,
                                    "end": 112
                                },
                                "typeParameters": null,
                                "type": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 4,
                                "start": 20,
                                "end": 112
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 113
                        },
                        "flags": 14,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 113
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 14,
                "end": 113
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 10,
            "end": 114
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
    "end": 114
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

