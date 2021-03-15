# Kataw parser test case

## Input

`````js
x = { method() { } }

x = { get() { } }

x = { set() { } }

x = { method(test) { } }

({ function(){}});

x = ({ declare(){}});

x = { method(test) { } }
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "x = { method() { } }\n\nx = { get() { } }\n\nx = { set() { } }\n\nx = { method(test) { } }\n\n({ function(){}});\n\nx = ({ declare(){}});\n\nx = { method(test) { } }",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operator": "=",
                "right": {
                    "kind": 98984,
                    "propertyList": {
                        "kind": 65722,
                        "properties": [
                            {
                                "kind": 16844946,
                                "name": {
                                    "kind": 196711,
                                    "text": "method",
                                    "rawText": "method",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 5,
                                    "end": 12
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 14
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 16,
                                        "end": 16
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 14,
                                    "end": 18
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 18
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 18
                    },
                    "flags": 32768,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 20
                },
                "flags": 32768,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 20
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 20
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 32768,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 23
                },
                "operator": "=",
                "right": {
                    "kind": 98984,
                    "propertyList": {
                        "kind": 65722,
                        "properties": [
                            {
                                "kind": 16844946,
                                "name": {
                                    "kind": 196711,
                                    "text": "get",
                                    "rawText": "get",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 27,
                                    "end": 31
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 33
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 35,
                                        "end": 35
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 33,
                                    "end": 37
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 37
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 27,
                        "end": 37
                    },
                    "flags": 32768,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 39
                },
                "flags": 32768,
                "intersects": false,
                "transformFlags": 0,
                "start": 20,
                "end": 39
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 20,
            "end": 39
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 32768,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 39,
                    "end": 42
                },
                "operator": "=",
                "right": {
                    "kind": 98984,
                    "propertyList": {
                        "kind": 65722,
                        "properties": [
                            {
                                "kind": 16844946,
                                "name": {
                                    "kind": 196711,
                                    "text": "set",
                                    "rawText": "set",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 46,
                                    "end": 50
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 51,
                                    "end": 52
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 54,
                                        "end": 54
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 52,
                                    "end": 56
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 50,
                                "end": 56
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 46,
                        "end": 56
                    },
                    "flags": 32768,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 44,
                    "end": 58
                },
                "flags": 32768,
                "intersects": false,
                "transformFlags": 0,
                "start": 39,
                "end": 58
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 39,
            "end": 58
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 32768,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 58,
                    "end": 61
                },
                "operator": "=",
                "right": {
                    "kind": 1073807915,
                    "expression": {
                        "kind": 98984,
                        "propertyList": {
                            "kind": 65722,
                            "properties": [
                                {
                                    "kind": 16844946,
                                    "name": {
                                        "kind": 196711,
                                        "text": "method",
                                        "rawText": "method",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 65,
                                        "end": 72
                                    },
                                    "formalParameters": {
                                        "kind": 90,
                                        "formalParameterList": [
                                            {
                                                "kind": 16473,
                                                "ellipsis": false,
                                                "binding": {
                                                    "kind": 131102,
                                                    "text": "test",
                                                    "rawText": "test",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 1025,
                                                    "start": 73,
                                                    "end": 77
                                                },
                                                "isOptional": false,
                                                "type": null,
                                                "initializer": null,
                                                "decorators": null,
                                                "accessModifier": null,
                                                "isReadOnly": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1,
                                                "start": 73,
                                                "end": 77
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 73,
                                        "end": 78
                                    },
                                    "isSetter": false,
                                    "isGetter": false,
                                    "contents": {
                                        "kind": 91,
                                        "functionStatementList": {
                                            "kind": 94,
                                            "statements": [],
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 80,
                                            "end": 80
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 78,
                                        "end": 82
                                    },
                                    "decorators": null,
                                    "type": null,
                                    "accessModifier": null,
                                    "typeParameters": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 72,
                                    "end": 82
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 65,
                            "end": 82
                        },
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 63,
                        "end": 84
                    },
                    "typeArguments": null,
                    "argumentList": {
                        "kind": 3,
                        "elements": [
                            {
                                "kind": 98984,
                                "propertyList": {
                                    "kind": 65722,
                                    "properties": [
                                        {
                                            "kind": 16844946,
                                            "name": {
                                                "kind": 196711,
                                                "text": "function",
                                                "rawText": "function",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 88,
                                                "end": 97
                                            },
                                            "formalParameters": {
                                                "kind": 90,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 98,
                                                "end": 99
                                            },
                                            "isSetter": false,
                                            "isGetter": false,
                                            "contents": {
                                                "kind": 91,
                                                "functionStatementList": {
                                                    "kind": 94,
                                                    "statements": [],
                                                    "multiline": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 100,
                                                    "end": 100
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 99,
                                                "end": 101
                                            },
                                            "decorators": null,
                                            "type": null,
                                            "accessModifier": null,
                                            "typeParameters": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 97,
                                            "end": 101
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 88,
                                    "end": 101
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 87,
                                "end": 102
                            }
                        ],
                        "trailingComma": false,
                        "transformFlags": 0,
                        "flags": 0,
                        "intersects": false,
                        "start": 88,
                        "end": 103
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 84,
                    "end": 103
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 58,
                "end": 103
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 58,
            "end": 104
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 32768,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 104,
                    "end": 107
                },
                "operator": "=",
                "right": {
                    "kind": 66224,
                    "expression": {
                        "kind": 98984,
                        "propertyList": {
                            "kind": 65722,
                            "properties": [
                                {
                                    "kind": 16844946,
                                    "name": {
                                        "kind": 196711,
                                        "text": "declare",
                                        "rawText": "declare",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 112,
                                        "end": 120
                                    },
                                    "formalParameters": {
                                        "kind": 90,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 121,
                                        "end": 122
                                    },
                                    "isSetter": false,
                                    "isGetter": false,
                                    "contents": {
                                        "kind": 91,
                                        "functionStatementList": {
                                            "kind": 94,
                                            "statements": [],
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 123,
                                            "end": 123
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 122,
                                        "end": 124
                                    },
                                    "decorators": null,
                                    "type": null,
                                    "accessModifier": null,
                                    "typeParameters": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 120,
                                    "end": 124
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 112,
                            "end": 124
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 111,
                        "end": 125
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 109,
                    "end": 126
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 104,
                "end": 126
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 104,
            "end": 127
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 32768,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 127,
                    "end": 130
                },
                "operator": "=",
                "right": {
                    "kind": 98984,
                    "propertyList": {
                        "kind": 65722,
                        "properties": [
                            {
                                "kind": 16844946,
                                "name": {
                                    "kind": 196711,
                                    "text": "method",
                                    "rawText": "method",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 134,
                                    "end": 141
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [
                                        {
                                            "kind": 16473,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "test",
                                                "rawText": "test",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 142,
                                                "end": 146
                                            },
                                            "isOptional": false,
                                            "type": null,
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 142,
                                            "end": 146
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 142,
                                    "end": 147
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 149,
                                        "end": 149
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 147,
                                    "end": 151
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 141,
                                "end": 151
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 134,
                        "end": 151
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 132,
                    "end": 153
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 127,
                "end": 153
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 127,
            "end": 153
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 153
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

