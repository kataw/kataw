# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/await/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\await\gen\var
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
    "kind": 196,
    "source": "var await; var f = (async function() { async function f() {\n  let { [await \"a\"]: a } = { a: 1 };\n  return a;\n} });",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "await",
                                "rawText": "await",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 3,
                                "end": 9
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "flags": 3,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 0,
                            "end": 9
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 3,
                    "end": 9
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 10
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "f",
                                "rawText": "f",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
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
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
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
                                                        "intersects": false,
                                                        "transformFlags": 1025,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 53,
                                                        "end": 55
                                                    },
                                                    "formalParameters": {
                                                        "kind": 90,
                                                        "formalParameterList": [],
                                                        "trailingComma": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
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
                                                                                "kind": 141,
                                                                                "binding": {
                                                                                    "kind": 33554598,
                                                                                    "propertyList": {
                                                                                        "kind": 33,
                                                                                        "properties": [
                                                                                            {
                                                                                                "kind": 32,
                                                                                                "ellipsis": false,
                                                                                                "key": {
                                                                                                    "kind": 55,
                                                                                                    "expression": {
                                                                                                        "kind": 65559,
                                                                                                        "expression": {
                                                                                                            "kind": 67279,
                                                                                                            "text": "a",
                                                                                                            "rawText": "a",
                                                                                                            "flags": 0,
                                                                                                            "intersects": false,
                                                                                                            "transformFlags": 0,
                                                                                                            "parent": null,
                                                                                                            "emitNode": null,
                                                                                                            "start": 74,
                                                                                                            "end": 78
                                                                                                        },
                                                                                                        "flags": 0,
                                                                                                        "intersects": false,
                                                                                                        "transformFlags": 32780,
                                                                                                        "parent": null,
                                                                                                        "emitNode": null,
                                                                                                        "start": 69,
                                                                                                        "end": 78
                                                                                                    },
                                                                                                    "flags": 0,
                                                                                                    "intersects": false,
                                                                                                    "transformFlags": 131073,
                                                                                                    "parent": null,
                                                                                                    "emitNode": null,
                                                                                                    "start": 67,
                                                                                                    "end": 79
                                                                                                },
                                                                                                "value": {
                                                                                                    "kind": 134217756,
                                                                                                    "ellipsis": false,
                                                                                                    "left": {
                                                                                                        "kind": 131102,
                                                                                                        "text": "a",
                                                                                                        "rawText": "a",
                                                                                                        "flags": 0,
                                                                                                        "intersects": false,
                                                                                                        "transformFlags": 1025,
                                                                                                        "parent": null,
                                                                                                        "emitNode": null,
                                                                                                        "start": 80,
                                                                                                        "end": 82
                                                                                                    },
                                                                                                    "right": null,
                                                                                                    "flags": 0,
                                                                                                    "intersects": false,
                                                                                                    "transformFlags": 1,
                                                                                                    "parent": null,
                                                                                                    "emitNode": null,
                                                                                                    "start": 80,
                                                                                                    "end": 82
                                                                                                },
                                                                                                "flags": 0,
                                                                                                "intersects": false,
                                                                                                "transformFlags": 1025,
                                                                                                "parent": null,
                                                                                                "emitNode": null,
                                                                                                "start": 67,
                                                                                                "end": 82
                                                                                            }
                                                                                        ],
                                                                                        "multiline": false,
                                                                                        "trailingComma": false,
                                                                                        "transformFlags": 1025,
                                                                                        "flags": 0,
                                                                                        "intersects": false,
                                                                                        "parent": null,
                                                                                        "emitNode": null,
                                                                                        "start": 67,
                                                                                        "end": 82
                                                                                    },
                                                                                    "flags": 0,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 1025,
                                                                                    "parent": null,
                                                                                    "emitNode": null,
                                                                                    "start": 65,
                                                                                    "end": 84
                                                                                },
                                                                                "exclamation": false,
                                                                                "type": null,
                                                                                "initializer": {
                                                                                    "kind": 67224232,
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
                                                                                                    "intersects": false,
                                                                                                    "transformFlags": 0,
                                                                                                    "parent": null,
                                                                                                    "emitNode": null,
                                                                                                    "start": 88,
                                                                                                    "end": 90
                                                                                                },
                                                                                                "right": {
                                                                                                    "kind": 4261540,
                                                                                                    "text": 1,
                                                                                                    "rawText": "1",
                                                                                                    "flags": 0,
                                                                                                    "intersects": false,
                                                                                                    "transformFlags": 0,
                                                                                                    "parent": null,
                                                                                                    "emitNode": null,
                                                                                                    "start": 91,
                                                                                                    "end": 93
                                                                                                },
                                                                                                "accessModifier": null,
                                                                                                "decorators": null,
                                                                                                "flags": 0,
                                                                                                "intersects": false,
                                                                                                "transformFlags": 0,
                                                                                                "parent": null,
                                                                                                "emitNode": null,
                                                                                                "start": 88,
                                                                                                "end": 93
                                                                                            }
                                                                                        ],
                                                                                        "trailingComma": false,
                                                                                        "multiline": false,
                                                                                        "flags": 0,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 0,
                                                                                        "parent": null,
                                                                                        "emitNode": null,
                                                                                        "start": 88,
                                                                                        "end": 93
                                                                                    },
                                                                                    "flags": 0,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "parent": null,
                                                                                    "emitNode": null,
                                                                                    "start": 86,
                                                                                    "end": 95
                                                                                },
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "parent": null,
                                                                                "emitNode": null,
                                                                                "start": 65,
                                                                                "end": 95
                                                                            }
                                                                        ],
                                                                        "flags": 16,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 65,
                                                                        "end": 95
                                                                    },
                                                                    "flags": 16400,
                                                                    "intersects": false,
                                                                    "transformFlags": 769,
                                                                    "parent": null,
                                                                    "emitNode": null,
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
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 105,
                                                                        "end": 107
                                                                    },
                                                                    "flags": 16384,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 96,
                                                                    "end": 108
                                                                }
                                                            ],
                                                            "multiline": true,
                                                            "flags": 16384,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 59,
                                                            "end": 108
                                                        },
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 57,
                                                        "end": 110
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 260,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 38,
                                                    "end": 110
                                                }
                                            ],
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 38,
                                            "end": 110
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 36,
                                        "end": 112
                                    },
                                    "typeParameters": null,
                                    "type": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 4,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 20,
                                    "end": 112
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 18,
                                "end": 113
                            },
                            "flags": 14,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 0,
                            "end": 113
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 14,
                    "end": 113
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 10,
                "end": 114
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 114
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
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

