# Kataw parser test case

## Input

`````js
const assert1 = (value: unknown): asserts value is string => {}
const assert2 = (value: unknown): asserts value => {}
const assert3 = (value: unknown): asserts => {}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "const assert1 = (value: unknown): asserts value is string => {}\nconst assert2 = (value: unknown): asserts value => {}\nconst assert3 = (value: unknown): asserts => {}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 142,
                "isConst": true,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "assert1",
                                "rawText": "assert1",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 5,
                                "end": 13
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 67592,
                                "typeParameters": null,
                                "arrowParameters": {
                                    "kind": 65545,
                                    "elements": [
                                        {
                                            "kind": 89,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 89,
                                                "ellipsis": false,
                                                "binding": {
                                                    "kind": 196712,
                                                    "text": "value",
                                                    "rawText": "value",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 17,
                                                    "end": 22
                                                },
                                                "isOptional": false,
                                                "type": {
                                                    "kind": 4202738,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "start": 23,
                                                    "end": 31
                                                },
                                                "initializer": null,
                                                "decorators": null,
                                                "accessModifier": null,
                                                "isReadOnly": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1,
                                                "start": 15,
                                                "end": 31
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
                                            "start": 15,
                                            "end": 57
                                        }
                                    ],
                                    "type": {
                                        "kind": 8426,
                                        "asserts": true,
                                        "parameterName": {
                                            "kind": 196712,
                                            "text": "value",
                                            "rawText": "value",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 41,
                                            "end": 47
                                        },
                                        "type": {
                                            "kind": 4202702,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 50,
                                            "end": 57
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 33,
                                        "end": 57
                                    },
                                    "accessModifier": null,
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 57
                                },
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 62,
                                        "end": 62
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 60,
                                    "end": 63
                                },
                                "flags": 536887296,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 63
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 63
                        }
                    ],
                    "flags": 16400,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 63
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "start": 0,
                "end": 63
            },
            {
                "kind": 142,
                "isConst": true,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "assert2",
                                "rawText": "assert2",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 69,
                                "end": 77
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 67592,
                                "typeParameters": null,
                                "arrowParameters": {
                                    "kind": 65545,
                                    "elements": [
                                        {
                                            "kind": 89,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 89,
                                                "ellipsis": false,
                                                "binding": {
                                                    "kind": 196712,
                                                    "text": "value",
                                                    "rawText": "value",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 81,
                                                    "end": 86
                                                },
                                                "isOptional": false,
                                                "type": {
                                                    "kind": 4202738,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "start": 87,
                                                    "end": 95
                                                },
                                                "initializer": null,
                                                "decorators": null,
                                                "accessModifier": null,
                                                "isReadOnly": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1,
                                                "start": 79,
                                                "end": 95
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
                                            "start": 79,
                                            "end": 111
                                        }
                                    ],
                                    "type": {
                                        "kind": 8426,
                                        "asserts": true,
                                        "parameterName": {
                                            "kind": 196712,
                                            "text": "value",
                                            "rawText": "value",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 105,
                                            "end": 111
                                        },
                                        "type": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 97,
                                        "end": 111
                                    },
                                    "accessModifier": null,
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 79,
                                    "end": 111
                                },
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 116,
                                        "end": 116
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 114,
                                    "end": 117
                                },
                                "flags": 536887296,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 79,
                                "end": 117
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 69,
                            "end": 117
                        }
                    ],
                    "flags": 16400,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 69,
                    "end": 117
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "start": 63,
                "end": 117
            },
            {
                "kind": 142,
                "isConst": true,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "assert3",
                                "rawText": "assert3",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 123,
                                "end": 131
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 67592,
                                "typeParameters": null,
                                "arrowParameters": {
                                    "kind": 65545,
                                    "elements": [
                                        {
                                            "kind": 89,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 89,
                                                "ellipsis": false,
                                                "binding": {
                                                    "kind": 196712,
                                                    "text": "value",
                                                    "rawText": "value",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 135,
                                                    "end": 140
                                                },
                                                "isOptional": false,
                                                "type": {
                                                    "kind": 4202738,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "start": 141,
                                                    "end": 149
                                                },
                                                "initializer": null,
                                                "decorators": null,
                                                "accessModifier": null,
                                                "isReadOnly": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1,
                                                "start": 133,
                                                "end": 149
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
                                            "start": 133,
                                            "end": 159
                                        }
                                    ],
                                    "type": {
                                        "kind": 8428,
                                        "typeName": {
                                            "kind": 196711,
                                            "text": "asserts",
                                            "rawText": "asserts",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 151,
                                            "end": 159
                                        },
                                        "typeArguments": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 151,
                                        "end": 162
                                    },
                                    "accessModifier": null,
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 133,
                                    "end": 159
                                },
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 164,
                                        "end": 164
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 162,
                                    "end": 165
                                },
                                "flags": 536870912,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 133,
                                "end": 165
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 123,
                            "end": 165
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 123,
                    "end": 165
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "start": 117,
                "end": 165
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 165
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 165
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

