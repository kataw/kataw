# Kataw parser test case

## Input

`````js
class Message {
    value: string;
}

function saySize(message: Message | Message[]) {
    if (message instanceof Array) {
        return message.length;  // Should have type Message[] here
    }
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "class Message {\n    value: string;\n}\n\nfunction saySize(message: Message | Message[]) {\n    if (message instanceof Array) {\n        return message.length;  // Should have type Message[] here\n    }\n}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "Message",
                    "rawText": "Message",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 5,
                    "end": 13
                },
                "typeParameters": null,
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [
                        {
                            "kind": 84,
                            "key": {
                                "kind": 196711,
                                "text": "value",
                                "rawText": "value",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 25
                            },
                            "isReadOnly": false,
                            "isOptional": false,
                            "exclamation": false,
                            "type": {
                                "kind": 4202702,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 26,
                                "end": 33
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isStatic": false,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 524352,
                            "start": 15,
                            "end": 34
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 15,
                    "end": 36
                },
                "decorators": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 1,
                "start": 0,
                "end": 36
            },
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "saySize",
                    "rawText": "saySize",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 46,
                    "end": 54
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [
                        {
                            "kind": 89,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "message",
                                "rawText": "message",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 55,
                                "end": 62
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 8432,
                                "types": [
                                    {
                                        "kind": 8428,
                                        "typeName": {
                                            "kind": 196711,
                                            "text": "Message",
                                            "rawText": "Message",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 63,
                                            "end": 71
                                        },
                                        "typeArguments": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 63,
                                        "end": 73
                                    },
                                    {
                                        "kind": 8199,
                                        "elementType": {
                                            "kind": 8428,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "Message",
                                                "rawText": "Message",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 73,
                                                "end": 81
                                            },
                                            "typeArguments": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 73,
                                            "end": 82
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 73,
                                        "end": 84
                                    }
                                ],
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 71,
                                "end": 83
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 55,
                            "end": 83
                        }
                    ],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 55,
                    "end": 84
                },
                "type": null,
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [
                            {
                                "kind": 2097257,
                                "expression": {
                                    "kind": 65563,
                                    "left": {
                                        "kind": 196712,
                                        "text": "message",
                                        "rawText": "message",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 95,
                                        "end": 102
                                    },
                                    "operator": "instanceof",
                                    "right": {
                                        "kind": 196712,
                                        "text": "Array",
                                        "rawText": "Array",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 113,
                                        "end": 119
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 95,
                                    "end": 119
                                },
                                "consequent": {
                                    "kind": 2099237,
                                    "block": {
                                        "kind": 2084,
                                        "statements": [
                                            {
                                                "kind": 2097346,
                                                "expression": {
                                                    "kind": 66232,
                                                    "member": {
                                                        "kind": 196712,
                                                        "text": "message",
                                                        "rawText": "message",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 137,
                                                        "end": 145
                                                    },
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "length",
                                                        "rawText": "length",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 146,
                                                        "end": 152
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 145,
                                                    "end": 152,
                                                    "period": {
                                                        "kind": 254,
                                                        "pos": 145,
                                                        "end": 146
                                                    }
                                                },
                                                "flags": 16384,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 122,
                                                "end": 153
                                            }
                                        ],
                                        "multiline": true,
                                        "flags": 16384,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 122,
                                        "end": 153
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 120,
                                    "end": 195
                                },
                                "alternate": null,
                                "isWebCompat": true,
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 86,
                                "end": 195
                            }
                        ],
                        "multiline": true,
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 86,
                        "end": 195
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 84,
                    "end": 197
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 256,
                "start": 36,
                "end": 197
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 197
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 197
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

