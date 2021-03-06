# Kataw parser test case

## Input

`````js
({ get x<T>(): string {}});
({ get x<T>(x): string {}});
({ get x<T>(x,y,z): string {}});
({ set x<T>(x): string {}});
({ set x<T>(public x): string {}});
({ set x<T>(public x): string});
({ get x() {}});
({ set x(x) {}});
({ set x(this): string {}});
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "({ get x<T>(): string {}});\n({ get x<T>(x): string {}});\n({ get x<T>(x,y,z): string {}});\n({ set x<T>(x): string {}});\n({ set x<T>(public x): string {}});\n({ set x<T>(public x): string});\n({ get x() {}});\n({ set x(x) {}});\n({ set x(this): string {}});",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66224,
                    "expression": {
                        "kind": 67224232,
                        "propertyList": {
                            "kind": 65722,
                            "properties": [
                                {
                                    "kind": 16844946,
                                    "name": {
                                        "kind": 196711,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 6,
                                        "end": 8
                                    },
                                    "formalParameters": {
                                        "kind": 90,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 12,
                                        "end": 13
                                    },
                                    "isSetter": false,
                                    "isGetter": true,
                                    "contents": {
                                        "kind": 91,
                                        "functionStatementList": {
                                            "kind": 94,
                                            "statements": [],
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 23,
                                            "end": 23
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 21,
                                        "end": 24
                                    },
                                    "decorators": null,
                                    "type": {
                                        "kind": 4202702,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 14,
                                        "end": 21
                                    },
                                    "accessModifier": null,
                                    "typeParameters": {
                                        "kind": 8425,
                                        "typeParameterList": [
                                            {
                                                "kind": 8424,
                                                "name": {
                                                    "kind": 196711,
                                                    "text": "T",
                                                    "rawText": "T",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 9,
                                                    "end": 10
                                                },
                                                "constraint": null,
                                                "defaultType": null,
                                                "expression": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 9,
                                                "end": 10
                                            }
                                        ],
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 9,
                                        "end": 10
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 8,
                                    "end": 24
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 24
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 25
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 26
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 27
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66224,
                    "expression": {
                        "kind": 67224232,
                        "propertyList": {
                            "kind": 65722,
                            "properties": [
                                {
                                    "kind": 16844946,
                                    "name": {
                                        "kind": 196711,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 34,
                                        "end": 36
                                    },
                                    "formalParameters": {
                                        "kind": 90,
                                        "formalParameterList": [
                                            {
                                                "kind": 89,
                                                "ellipsis": false,
                                                "binding": {
                                                    "kind": 131102,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 1025,
                                                    "start": 40,
                                                    "end": 41
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
                                                "start": 40,
                                                "end": 41
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 40,
                                        "end": 42
                                    },
                                    "isSetter": false,
                                    "isGetter": true,
                                    "contents": {
                                        "kind": 91,
                                        "functionStatementList": {
                                            "kind": 94,
                                            "statements": [],
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 52,
                                            "end": 52
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 50,
                                        "end": 53
                                    },
                                    "decorators": null,
                                    "type": {
                                        "kind": 4202702,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 43,
                                        "end": 50
                                    },
                                    "accessModifier": null,
                                    "typeParameters": {
                                        "kind": 8425,
                                        "typeParameterList": [
                                            {
                                                "kind": 8424,
                                                "name": {
                                                    "kind": 196711,
                                                    "text": "T",
                                                    "rawText": "T",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 37,
                                                    "end": 38
                                                },
                                                "constraint": null,
                                                "defaultType": null,
                                                "expression": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 37,
                                                "end": 38
                                            }
                                        ],
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 37,
                                        "end": 38
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 36,
                                    "end": 53
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 30,
                            "end": 53
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 29,
                        "end": 54
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 27,
                    "end": 55
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 27,
                "end": 56
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66224,
                    "expression": {
                        "kind": 67224232,
                        "propertyList": {
                            "kind": 65722,
                            "properties": [
                                {
                                    "kind": 16844946,
                                    "name": {
                                        "kind": 196711,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 63,
                                        "end": 65
                                    },
                                    "formalParameters": {
                                        "kind": 90,
                                        "formalParameterList": [
                                            {
                                                "kind": 89,
                                                "ellipsis": false,
                                                "binding": {
                                                    "kind": 131102,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 1025,
                                                    "start": 69,
                                                    "end": 70
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
                                                "start": 69,
                                                "end": 70
                                            },
                                            {
                                                "kind": 89,
                                                "ellipsis": false,
                                                "binding": {
                                                    "kind": 131102,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 1025,
                                                    "start": 71,
                                                    "end": 72
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
                                                "start": 71,
                                                "end": 72
                                            },
                                            {
                                                "kind": 89,
                                                "ellipsis": false,
                                                "binding": {
                                                    "kind": 131102,
                                                    "text": "z",
                                                    "rawText": "z",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 1025,
                                                    "start": 73,
                                                    "end": 74
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
                                                "end": 74
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 69,
                                        "end": 75
                                    },
                                    "isSetter": false,
                                    "isGetter": true,
                                    "contents": {
                                        "kind": 91,
                                        "functionStatementList": {
                                            "kind": 94,
                                            "statements": [],
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 85,
                                            "end": 85
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 83,
                                        "end": 86
                                    },
                                    "decorators": null,
                                    "type": {
                                        "kind": 4202702,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 76,
                                        "end": 83
                                    },
                                    "accessModifier": null,
                                    "typeParameters": {
                                        "kind": 8425,
                                        "typeParameterList": [
                                            {
                                                "kind": 8424,
                                                "name": {
                                                    "kind": 196711,
                                                    "text": "T",
                                                    "rawText": "T",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 66,
                                                    "end": 67
                                                },
                                                "constraint": null,
                                                "defaultType": null,
                                                "expression": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 66,
                                                "end": 67
                                            }
                                        ],
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 66,
                                        "end": 67
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 65,
                                    "end": 86
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 59,
                            "end": 86
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 58,
                        "end": 87
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 56,
                    "end": 88
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 56,
                "end": 89
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66224,
                    "expression": {
                        "kind": 67224232,
                        "propertyList": {
                            "kind": 65722,
                            "properties": [
                                {
                                    "kind": 16844946,
                                    "name": {
                                        "kind": 196711,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 96,
                                        "end": 98
                                    },
                                    "formalParameters": {
                                        "kind": 90,
                                        "formalParameterList": [
                                            {
                                                "kind": 89,
                                                "ellipsis": false,
                                                "binding": {
                                                    "kind": 131102,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 1025,
                                                    "start": 102,
                                                    "end": 103
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
                                                "start": 102,
                                                "end": 103
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 102,
                                        "end": 104
                                    },
                                    "isSetter": true,
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
                                            "start": 114,
                                            "end": 114
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 112,
                                        "end": 115
                                    },
                                    "decorators": null,
                                    "type": {
                                        "kind": 4202702,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 105,
                                        "end": 112
                                    },
                                    "accessModifier": null,
                                    "typeParameters": {
                                        "kind": 8425,
                                        "typeParameterList": [
                                            {
                                                "kind": 8424,
                                                "name": {
                                                    "kind": 196711,
                                                    "text": "T",
                                                    "rawText": "T",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 99,
                                                    "end": 100
                                                },
                                                "constraint": null,
                                                "defaultType": null,
                                                "expression": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 99,
                                                "end": 100
                                            }
                                        ],
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 99,
                                        "end": 100
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 98,
                                    "end": 115
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 92,
                            "end": 115
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 91,
                        "end": 116
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 89,
                    "end": 117
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 89,
                "end": 118
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66224,
                    "expression": {
                        "kind": 67224232,
                        "propertyList": {
                            "kind": 65722,
                            "properties": [
                                {
                                    "kind": 16844946,
                                    "name": {
                                        "kind": 196711,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 125,
                                        "end": 127
                                    },
                                    "formalParameters": {
                                        "kind": 90,
                                        "formalParameterList": [
                                            {
                                                "kind": 89,
                                                "ellipsis": false,
                                                "binding": {
                                                    "kind": 131102,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 1025,
                                                    "start": 137,
                                                    "end": 139
                                                },
                                                "isOptional": false,
                                                "type": null,
                                                "initializer": null,
                                                "decorators": null,
                                                "accessModifier": {
                                                    "kind": 4194494,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "start": 131,
                                                    "end": 137
                                                },
                                                "isReadOnly": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097153,
                                                "start": 131,
                                                "end": 139
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 131,
                                        "end": 140
                                    },
                                    "isSetter": true,
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
                                            "start": 150,
                                            "end": 150
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 148,
                                        "end": 151
                                    },
                                    "decorators": null,
                                    "type": {
                                        "kind": 4202702,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 141,
                                        "end": 148
                                    },
                                    "accessModifier": null,
                                    "typeParameters": {
                                        "kind": 8425,
                                        "typeParameterList": [
                                            {
                                                "kind": 8424,
                                                "name": {
                                                    "kind": 196711,
                                                    "text": "T",
                                                    "rawText": "T",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 128,
                                                    "end": 129
                                                },
                                                "constraint": null,
                                                "defaultType": null,
                                                "expression": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 128,
                                                "end": 129
                                            }
                                        ],
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 128,
                                        "end": 129
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 127,
                                    "end": 151
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 121,
                            "end": 151
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 120,
                        "end": 152
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 118,
                    "end": 153
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 118,
                "end": 154
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66224,
                    "expression": {
                        "kind": 67224232,
                        "propertyList": {
                            "kind": 65722,
                            "properties": [
                                {
                                    "kind": 16844946,
                                    "name": {
                                        "kind": 196711,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 161,
                                        "end": 163
                                    },
                                    "formalParameters": {
                                        "kind": 90,
                                        "formalParameterList": [
                                            {
                                                "kind": 89,
                                                "ellipsis": false,
                                                "binding": {
                                                    "kind": 131102,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 1025,
                                                    "start": 173,
                                                    "end": 175
                                                },
                                                "isOptional": false,
                                                "type": null,
                                                "initializer": null,
                                                "decorators": null,
                                                "accessModifier": {
                                                    "kind": 4194494,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "start": 167,
                                                    "end": 173
                                                },
                                                "isReadOnly": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097153,
                                                "start": 167,
                                                "end": 175
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 167,
                                        "end": 176
                                    },
                                    "isSetter": true,
                                    "isGetter": false,
                                    "contents": null,
                                    "decorators": null,
                                    "type": {
                                        "kind": 4202702,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 177,
                                        "end": 184
                                    },
                                    "accessModifier": null,
                                    "typeParameters": {
                                        "kind": 8425,
                                        "typeParameterList": [
                                            {
                                                "kind": 8424,
                                                "name": {
                                                    "kind": 196711,
                                                    "text": "T",
                                                    "rawText": "T",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 164,
                                                    "end": 165
                                                },
                                                "constraint": null,
                                                "defaultType": null,
                                                "expression": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 164,
                                                "end": 165
                                            }
                                        ],
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 164,
                                        "end": 165
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 163,
                                    "end": 184
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 157,
                            "end": 184
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 156,
                        "end": 185
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 154,
                    "end": 186
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 154,
                "end": 187
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66224,
                    "expression": {
                        "kind": 67224232,
                        "propertyList": {
                            "kind": 65722,
                            "properties": [
                                {
                                    "kind": 16844946,
                                    "name": {
                                        "kind": 196711,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 194,
                                        "end": 196
                                    },
                                    "formalParameters": {
                                        "kind": 90,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 197,
                                        "end": 198
                                    },
                                    "isSetter": false,
                                    "isGetter": true,
                                    "contents": {
                                        "kind": 91,
                                        "functionStatementList": {
                                            "kind": 94,
                                            "statements": [],
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 200,
                                            "end": 200
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 198,
                                        "end": 201
                                    },
                                    "decorators": null,
                                    "type": null,
                                    "accessModifier": null,
                                    "typeParameters": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 196,
                                    "end": 201
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 190,
                            "end": 201
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 189,
                        "end": 202
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 187,
                    "end": 203
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 187,
                "end": 204
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66224,
                    "expression": {
                        "kind": 67224232,
                        "propertyList": {
                            "kind": 65722,
                            "properties": [
                                {
                                    "kind": 16844946,
                                    "name": {
                                        "kind": 196711,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 211,
                                        "end": 213
                                    },
                                    "formalParameters": {
                                        "kind": 90,
                                        "formalParameterList": [
                                            {
                                                "kind": 89,
                                                "ellipsis": false,
                                                "binding": {
                                                    "kind": 131102,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 1025,
                                                    "start": 214,
                                                    "end": 215
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
                                                "start": 214,
                                                "end": 215
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 214,
                                        "end": 216
                                    },
                                    "isSetter": true,
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
                                            "start": 218,
                                            "end": 218
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 216,
                                        "end": 219
                                    },
                                    "decorators": null,
                                    "type": null,
                                    "accessModifier": null,
                                    "typeParameters": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 213,
                                    "end": 219
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 207,
                            "end": 219
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 206,
                        "end": 220
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 204,
                    "end": 221
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 204,
                "end": 222
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66224,
                    "expression": {
                        "kind": 67224232,
                        "propertyList": {
                            "kind": 65722,
                            "properties": [
                                {
                                    "kind": 16844946,
                                    "name": {
                                        "kind": 196711,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 229,
                                        "end": 231
                                    },
                                    "formalParameters": {
                                        "kind": 90,
                                        "formalParameterList": [
                                            {
                                                "kind": 89,
                                                "ellipsis": false,
                                                "binding": {
                                                    "kind": 131102,
                                                    "text": "this",
                                                    "rawText": "this",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 1025,
                                                    "start": 232,
                                                    "end": 236
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
                                                "start": 232,
                                                "end": 236
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 232,
                                        "end": 237
                                    },
                                    "isSetter": true,
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
                                            "start": 247,
                                            "end": 247
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 245,
                                        "end": 248
                                    },
                                    "decorators": null,
                                    "type": {
                                        "kind": 4202702,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 238,
                                        "end": 245
                                    },
                                    "accessModifier": null,
                                    "typeParameters": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 231,
                                    "end": 248
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 225,
                            "end": 248
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 224,
                        "end": 249
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 222,
                    "end": 250
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 222,
                "end": 251
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 251
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 251
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

