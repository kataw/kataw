# Kataw parser test case

## Input

`````js
({ async *method([x] = g[Symbol.iterator] = function() {}) {} });
({ async *method({ w: [x, y, z] = [4, 5, 6] } = {}) {} });
({ async *method({ x: y = thrower() } = {}) {} });
({ async *method([x = 23]) {} });
({ async *method([_, x]) {} });
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
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
                                "kind": 209,
                                "name": {
                                    "kind": 81921,
                                    "value": "method",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 10,
                                    "end": 16
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 201,
                                                "elementList": {
                                                    "kind": 202,
                                                    "elements": [
                                                        {
                                                            "kind": 244,
                                                            "ellipsisToken": null,
                                                            "binding": {
                                                                "kind": 81921,
                                                                "value": "x",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 18,
                                                                "end": 19
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": null,
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 18,
                                                            "end": 19
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 18,
                                                    "end": 19
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 17,
                                                "end": 20
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 130,
                                                    "member": {
                                                        "kind": 81921,
                                                        "value": "g",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 22,
                                                        "end": 24
                                                    },
                                                    "expression": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 81921,
                                                            "value": "Symbol",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 25,
                                                            "end": 31
                                                        },
                                                        "expression": {
                                                            "kind": 81921,
                                                            "value": "iterator",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 32,
                                                            "end": 40
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 25,
                                                        "end": 40
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 22,
                                                    "end": 41
                                                },
                                                "operatorToken": {
                                                    "kind": 37814362,
                                                    "autofix": 0,
                                                    "flags": 0,
                                                    "start": 22,
                                                    "end": 43
                                                },
                                                "right": {
                                                    "kind": 177,
                                                    "asyncToken": null,
                                                    "generatorToken": null,
                                                    "name": null,
                                                    "formalParameters": {
                                                        "kind": 214,
                                                        "formalParameterList": [],
                                                        "trailingComma": false,
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 53,
                                                        "end": 54
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "statements": [],
                                                            "multiline": false,
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 56,
                                                            "end": 56
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 54,
                                                        "end": 57
                                                    },
                                                    "typeParameters": null,
                                                    "returnType": null,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 43,
                                                    "end": 57
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 22,
                                                "end": 57
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 17,
                                            "end": 57
                                        }
                                    ],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 17,
                                    "end": 58
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "statements": [],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 60,
                                        "end": 60
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 58,
                                    "end": 61
                                },
                                "autofix": 0,
                                "flags": 3328,
                                "start": 16,
                                "end": 61
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 2,
                        "end": 61
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 63
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 64
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 65
        },
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
                                "kind": 209,
                                "name": {
                                    "kind": 81921,
                                    "value": "method",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 76,
                                    "end": 82
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 212,
                                                "propertyList": {
                                                    "kind": 213,
                                                    "properties": [
                                                        {
                                                            "kind": 204,
                                                            "ellipsisToken": null,
                                                            "key": {
                                                                "kind": 81921,
                                                                "value": "w",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 84,
                                                                "end": 87
                                                            },
                                                            "value": {
                                                                "kind": 203,
                                                                "ellipsisToken": null,
                                                                "binding": {
                                                                    "kind": 201,
                                                                    "elementList": {
                                                                        "kind": 202,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 244,
                                                                                "ellipsisToken": null,
                                                                                "binding": {
                                                                                    "kind": 81921,
                                                                                    "value": "x",
                                                                                    "autofix": 0,
                                                                                    "flags": 768,
                                                                                    "start": 89,
                                                                                    "end": 90
                                                                                },
                                                                                "optionalToken": null,
                                                                                "type": null,
                                                                                "initializer": null,
                                                                                "autofix": 0,
                                                                                "flags": 256,
                                                                                "start": 89,
                                                                                "end": 90
                                                                            },
                                                                            {
                                                                                "kind": 244,
                                                                                "ellipsisToken": null,
                                                                                "binding": {
                                                                                    "kind": 81921,
                                                                                    "value": "y",
                                                                                    "autofix": 0,
                                                                                    "flags": 768,
                                                                                    "start": 91,
                                                                                    "end": 93
                                                                                },
                                                                                "optionalToken": null,
                                                                                "type": null,
                                                                                "initializer": null,
                                                                                "autofix": 0,
                                                                                "flags": 256,
                                                                                "start": 91,
                                                                                "end": 93
                                                                            },
                                                                            {
                                                                                "kind": 244,
                                                                                "ellipsisToken": null,
                                                                                "binding": {
                                                                                    "kind": 81921,
                                                                                    "value": "z",
                                                                                    "autofix": 0,
                                                                                    "flags": 768,
                                                                                    "start": 94,
                                                                                    "end": 96
                                                                                },
                                                                                "optionalToken": null,
                                                                                "type": null,
                                                                                "initializer": null,
                                                                                "autofix": 0,
                                                                                "flags": 256,
                                                                                "start": 94,
                                                                                "end": 96
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "autofix": 0,
                                                                        "flags": 256,
                                                                        "start": 89,
                                                                        "end": 96
                                                                    },
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 87,
                                                                    "end": 97
                                                                },
                                                                "initializer": {
                                                                    "kind": 119,
                                                                    "elementList": {
                                                                        "kind": 270,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 81921,
                                                                                "value": 4,
                                                                                "autofix": 0,
                                                                                "flags": 768,
                                                                                "start": 101,
                                                                                "end": 102
                                                                            },
                                                                            {
                                                                                "kind": 81921,
                                                                                "value": 5,
                                                                                "autofix": 0,
                                                                                "flags": 768,
                                                                                "start": 103,
                                                                                "end": 105
                                                                            },
                                                                            {
                                                                                "kind": 81921,
                                                                                "value": 6,
                                                                                "autofix": 0,
                                                                                "flags": 768,
                                                                                "start": 106,
                                                                                "end": 108
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "autofix": 0,
                                                                        "flags": 256,
                                                                        "start": 101,
                                                                        "end": 108
                                                                    },
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 99,
                                                                    "end": 109
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 87,
                                                                "end": 109
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 84,
                                                            "end": 109
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "trailingComma": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 84,
                                                    "end": 109
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 83,
                                                "end": 111
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": {
                                                "kind": 220,
                                                "propertyList": {
                                                    "kind": 218,
                                                    "properties": [],
                                                    "trailingComma": false,
                                                    "multiline": false,
                                                    "autofix": 0,
                                                    "flags": 0,
                                                    "start": 115,
                                                    "end": 115
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 113,
                                                "end": 116
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 83,
                                            "end": 116
                                        }
                                    ],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 83,
                                    "end": 117
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "statements": [],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 119,
                                        "end": 119
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 117,
                                    "end": 120
                                },
                                "autofix": 0,
                                "flags": 3328,
                                "start": 82,
                                "end": 120
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 68,
                        "end": 120
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 67,
                    "end": 122
                },
                "autofix": 0,
                "flags": 256,
                "start": 65,
                "end": 123
            },
            "autofix": 0,
            "flags": 128,
            "start": 65,
            "end": 124
        },
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
                                "kind": 209,
                                "name": {
                                    "kind": 81921,
                                    "value": "method",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 135,
                                    "end": 141
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 212,
                                                "propertyList": {
                                                    "kind": 213,
                                                    "properties": [
                                                        {
                                                            "kind": 204,
                                                            "ellipsisToken": null,
                                                            "key": {
                                                                "kind": 81921,
                                                                "value": "x",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 143,
                                                                "end": 146
                                                            },
                                                            "value": {
                                                                "kind": 203,
                                                                "ellipsisToken": null,
                                                                "binding": {
                                                                    "kind": 81921,
                                                                    "value": "y",
                                                                    "autofix": 0,
                                                                    "flags": 768,
                                                                    "start": 146,
                                                                    "end": 148
                                                                },
                                                                "initializer": {
                                                                    "kind": 131,
                                                                    "expression": {
                                                                        "kind": 81921,
                                                                        "value": "thrower",
                                                                        "autofix": 0,
                                                                        "flags": 768,
                                                                        "start": 150,
                                                                        "end": 158
                                                                    },
                                                                    "argumentList": {
                                                                        "kind": 256,
                                                                        "elements": [],
                                                                        "trailingComma": false,
                                                                        "autofix": 0,
                                                                        "flags": 256,
                                                                        "start": 159,
                                                                        "end": 159
                                                                    },
                                                                    "flags": 256,
                                                                    "start": 150,
                                                                    "end": 160
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 146,
                                                                "end": 160
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 143,
                                                            "end": 160
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "trailingComma": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 143,
                                                    "end": 160
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 142,
                                                "end": 162
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": {
                                                "kind": 220,
                                                "propertyList": {
                                                    "kind": 218,
                                                    "properties": [],
                                                    "trailingComma": false,
                                                    "multiline": false,
                                                    "autofix": 0,
                                                    "flags": 0,
                                                    "start": 166,
                                                    "end": 166
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 164,
                                                "end": 167
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 142,
                                            "end": 167
                                        }
                                    ],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 142,
                                    "end": 168
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "statements": [],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 170,
                                        "end": 170
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 168,
                                    "end": 171
                                },
                                "autofix": 0,
                                "flags": 3328,
                                "start": 141,
                                "end": 171
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 127,
                        "end": 171
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 126,
                    "end": 173
                },
                "autofix": 0,
                "flags": 256,
                "start": 124,
                "end": 174
            },
            "autofix": 0,
            "flags": 128,
            "start": 124,
            "end": 175
        },
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
                                "kind": 209,
                                "name": {
                                    "kind": 81921,
                                    "value": "method",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 186,
                                    "end": 192
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 201,
                                                "elementList": {
                                                    "kind": 202,
                                                    "elements": [
                                                        {
                                                            "kind": 244,
                                                            "ellipsisToken": null,
                                                            "binding": {
                                                                "kind": 81921,
                                                                "value": "x",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 194,
                                                                "end": 195
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 81921,
                                                                "value": 23,
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 197,
                                                                "end": 200
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 194,
                                                            "end": 200
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 194,
                                                    "end": 200
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 193,
                                                "end": 201
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 193,
                                            "end": 201
                                        }
                                    ],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 193,
                                    "end": 202
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "statements": [],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 204,
                                        "end": 204
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 202,
                                    "end": 205
                                },
                                "autofix": 0,
                                "flags": 3328,
                                "start": 192,
                                "end": 205
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 178,
                        "end": 205
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 177,
                    "end": 207
                },
                "autofix": 0,
                "flags": 256,
                "start": 175,
                "end": 208
            },
            "autofix": 0,
            "flags": 128,
            "start": 175,
            "end": 209
        },
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
                                "kind": 209,
                                "name": {
                                    "kind": 81921,
                                    "value": "method",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 220,
                                    "end": 226
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 201,
                                                "elementList": {
                                                    "kind": 202,
                                                    "elements": [
                                                        {
                                                            "kind": 244,
                                                            "ellipsisToken": null,
                                                            "binding": {
                                                                "kind": 81921,
                                                                "value": "_",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 228,
                                                                "end": 229
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": null,
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 228,
                                                            "end": 229
                                                        },
                                                        {
                                                            "kind": 244,
                                                            "ellipsisToken": null,
                                                            "binding": {
                                                                "kind": 81921,
                                                                "value": "x",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 230,
                                                                "end": 232
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": null,
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 230,
                                                            "end": 232
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 228,
                                                    "end": 232
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 227,
                                                "end": 233
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 227,
                                            "end": 233
                                        }
                                    ],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 227,
                                    "end": 234
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "statements": [],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 236,
                                        "end": 236
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 234,
                                    "end": 237
                                },
                                "autofix": 0,
                                "flags": 3328,
                                "start": 226,
                                "end": 237
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 212,
                        "end": 237
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 211,
                    "end": 239
                },
                "autofix": 0,
                "flags": 256,
                "start": 209,
                "end": 240
            },
            "autofix": 0,
            "flags": 128,
            "start": 209,
            "end": 241
        }
    ],
    "isModule": false,
    "text": "({ async *method([x] = g[Symbol.iterator] = function() {}) {} });\n({ async *method({ w: [x, y, z] = [4, 5, 6] } = {}) {} });\n({ async *method({ x: y = thrower() } = {}) {} });\n({ async *method([x = 23]) {} });\n({ async *method([_, x]) {} });",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 241
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

