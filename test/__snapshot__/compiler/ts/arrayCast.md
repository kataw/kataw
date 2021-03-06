# Kataw parser test case

## Input

`````js
<{ id: number; }[]>[{ foo: "s" }];

<{ id: number; }[]>[{ foo: "s" }, {}];
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "<{ id: number; }[]>[{ foo: \"s\" }];\n\n<{ id: number; }[]>[{ foo: \"s\" }, {}];",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 73956,
                    "type": {
                        "kind": 8199,
                        "elementType": {
                            "kind": 8422,
                            "objectTypeMembers": {
                                "kind": 169,
                                "members": [
                                    {
                                        "kind": 8380,
                                        "name": {
                                            "kind": 196711,
                                            "text": "id",
                                            "rawText": "id",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 2,
                                            "end": 5
                                        },
                                        "isOptional": false,
                                        "accessModifier": null,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 6,
                                            "end": 13
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "initializer": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 2,
                                        "end": 14
                                    }
                                ],
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 2,
                                "end": 16
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 1,
                            "end": 16
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 1,
                        "end": 19
                    },
                    "expression": {
                        "kind": 67207686,
                        "elementList": {
                            "kind": 65605,
                            "elements": [
                                {
                                    "kind": 67224232,
                                    "propertyList": {
                                        "kind": 65722,
                                        "properties": [
                                            {
                                                "kind": 65721,
                                                "left": {
                                                    "kind": 196711,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 21,
                                                    "end": 25
                                                },
                                                "right": {
                                                    "kind": 4261583,
                                                    "text": "s",
                                                    "rawText": "s",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 26,
                                                    "end": 30
                                                },
                                                "accessModifier": null,
                                                "decorators": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 21,
                                                "end": 30
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 21,
                                        "end": 30
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 32
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 32
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 19,
                        "end": 33
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 0,
                    "end": 33
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 34
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 73956,
                    "type": {
                        "kind": 8199,
                        "elementType": {
                            "kind": 8422,
                            "objectTypeMembers": {
                                "kind": 169,
                                "members": [
                                    {
                                        "kind": 8380,
                                        "name": {
                                            "kind": 196711,
                                            "text": "id",
                                            "rawText": "id",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 38,
                                            "end": 41
                                        },
                                        "isOptional": false,
                                        "accessModifier": null,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 42,
                                            "end": 49
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "initializer": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 38,
                                        "end": 50
                                    }
                                ],
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 38,
                                "end": 52
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 37,
                            "end": 52
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 37,
                        "end": 55
                    },
                    "expression": {
                        "kind": 67207686,
                        "elementList": {
                            "kind": 65605,
                            "elements": [
                                {
                                    "kind": 67224232,
                                    "propertyList": {
                                        "kind": 65722,
                                        "properties": [
                                            {
                                                "kind": 65721,
                                                "left": {
                                                    "kind": 196711,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 57,
                                                    "end": 61
                                                },
                                                "right": {
                                                    "kind": 4261583,
                                                    "text": "s",
                                                    "rawText": "s",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 62,
                                                    "end": 66
                                                },
                                                "accessModifier": null,
                                                "decorators": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 57,
                                                "end": 66
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 57,
                                        "end": 66
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 56,
                                    "end": 68
                                },
                                {
                                    "kind": 67224232,
                                    "propertyList": {
                                        "kind": 65722,
                                        "properties": [],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 71,
                                        "end": 71
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 69,
                                    "end": 72
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 56,
                            "end": 72
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 55,
                        "end": 73
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 34,
                    "end": 73
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 34,
                "end": 74
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 74
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 74
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

