# Kataw parser test case

## Input

`````js
(private [x]) =>x

(private) =>x

(private public) => x

(x, private public) => x

(private)

({y}?: string) =>x

({y}?: string) =>x

(private {x}?: string, protected {y}?: string) =>x

(private) =>x

({y})

(private {x}?: string, protected {y}?: string) =>x

(private {y}?: string) =>x

({y}?: string) =>x

([x]) =>x
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "(private [x]) =>x\n\n(private) =>x\n\n(private public) => x\n\n(x, private public) => x\n\n(private)\n\n({y}?: string) =>x\n\n({y}?: string) =>x\n\n(private {x}?: string, protected {y}?: string) =>x\n\n(private) =>x\n\n({y})\n\n(private {x}?: string, protected {y}?: string) =>x\n\n(private {y}?: string) =>x\n\n({y}?: string) =>x\n\n([x]) =>x",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 83976,
                "typeParameters": null,
                "arrowParameters": {
                    "kind": 81929,
                    "elements": [
                        {
                            "kind": 16473,
                            "ellipsis": false,
                            "binding": {
                                "kind": 33554437,
                                "elementList": {
                                    "kind": 29,
                                    "elements": [
                                        {
                                            "kind": 16412,
                                            "ellipsis": false,
                                            "left": {
                                                "kind": 131102,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 10,
                                                "end": 11
                                            },
                                            "right": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 10,
                                            "end": 11
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 10,
                                    "end": 11
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 8,
                                "end": 12
                            },
                            "isOptional": false,
                            "type": null,
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": {
                                "kind": 4194485,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 1,
                                "end": 8
                            },
                            "isReadOnly": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097153,
                            "start": 1,
                            "end": 12
                        }
                    ],
                    "type": null,
                    "accessModifier": null,
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 13
                },
                "contents": {
                    "kind": 1073807915,
                    "expression": {
                        "kind": 196712,
                        "text": "x",
                        "rawText": "x",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 17
                    },
                    "typeArguments": null,
                    "argumentList": {
                        "kind": 81929,
                        "elements": [
                            {
                                "kind": 16473,
                                "ellipsis": false,
                                "binding": {
                                    "kind": 4325406,
                                    "text": "private",
                                    "rawText": "private",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 27
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
                                "start": 20,
                                "end": 28
                            }
                        ],
                        "type": null,
                        "accessModifier": null,
                        "trailingComma": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 27,
                        "end": 28
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 28
                },
                "flags": 1073741824,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 28
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 28
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 31,
                    "end": 32
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 81929,
                    "elements": [
                        {
                            "kind": 16473,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "public",
                                "rawText": "public",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 42,
                                "end": 49
                            },
                            "isOptional": false,
                            "type": null,
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": {
                                "kind": 4194485,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 35,
                                "end": 42
                            },
                            "isReadOnly": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097153,
                            "start": 35,
                            "end": 49
                        }
                    ],
                    "type": null,
                    "accessModifier": null,
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 42,
                    "end": 50
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 32,
                "end": 50
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 31,
            "end": 50
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 53,
                    "end": 55
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 81929,
                    "elements": [
                        {
                            "kind": 16473,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "public",
                                "rawText": "public",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 68,
                                "end": 75
                            },
                            "isOptional": false,
                            "type": null,
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": {
                                "kind": 4194485,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 60,
                                "end": 68
                            },
                            "isReadOnly": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097153,
                            "start": 60,
                            "end": 75
                        },
                        {
                            "kind": 16473,
                            "ellipsis": false,
                            "binding": {
                                "kind": 4325406,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 58,
                                "end": 59
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
                            "start": 60,
                            "end": 76
                        }
                    ],
                    "type": null,
                    "accessModifier": null,
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 59,
                    "end": 76
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 55,
                "end": 76
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 53,
            "end": 76
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 1073807915,
                    "expression": {
                        "kind": 196712,
                        "text": "x",
                        "rawText": "x",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 79,
                        "end": 81
                    },
                    "typeArguments": null,
                    "argumentList": {
                        "kind": 3,
                        "elements": [
                            {
                                "kind": 196712,
                                "text": "private",
                                "rawText": "private",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 84,
                                "end": 91
                            }
                        ],
                        "trailingComma": false,
                        "transformFlags": 0,
                        "flags": 32768,
                        "intersects": false,
                        "start": 91,
                        "end": 92
                    },
                    "flags": 32768,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 81,
                    "end": 92
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 81929,
                    "elements": [
                        {
                            "kind": 16473,
                            "ellipsis": false,
                            "binding": {
                                "kind": 33554598,
                                "propertyList": {
                                    "kind": 33,
                                    "properties": [
                                        {
                                            "kind": 4325406,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 96,
                                            "end": 97
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 96,
                                    "end": 97
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 95,
                                "end": 98
                            },
                            "isOptional": true,
                            "type": {
                                "kind": 4202702,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 100,
                                "end": 107
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 95,
                            "end": 107
                        }
                    ],
                    "type": null,
                    "accessModifier": null,
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 96,
                    "end": 108
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 92,
                "end": 108
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 79,
            "end": 108
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 111,
                    "end": 112
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 81929,
                    "elements": [
                        {
                            "kind": 16473,
                            "ellipsis": false,
                            "binding": {
                                "kind": 33554598,
                                "propertyList": {
                                    "kind": 33,
                                    "properties": [
                                        {
                                            "kind": 4325406,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 116,
                                            "end": 117
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 116,
                                    "end": 117
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 115,
                                "end": 118
                            },
                            "isOptional": true,
                            "type": {
                                "kind": 4202702,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 120,
                                "end": 127
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 115,
                            "end": 127
                        }
                    ],
                    "type": null,
                    "accessModifier": null,
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 116,
                    "end": 128
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 112,
                "end": 128
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 111,
            "end": 128
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 131,
                    "end": 132
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 81929,
                    "elements": [
                        {
                            "kind": 16473,
                            "ellipsis": false,
                            "binding": {
                                "kind": 33554598,
                                "propertyList": {
                                    "kind": 33,
                                    "properties": [
                                        {
                                            "kind": 203,
                                            "ellipsis": false,
                                            "left": {
                                                "kind": 131102,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 168,
                                                "end": 169
                                            },
                                            "right": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1024,
                                            "start": 168,
                                            "end": 169
                                        }
                                    ],
                                    "multiline": false,
                                    "trailingComma": false,
                                    "transformFlags": 1025,
                                    "flags": 0,
                                    "intersects": false,
                                    "start": 168,
                                    "end": 169
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 166,
                                "end": 170
                            },
                            "isOptional": true,
                            "type": {
                                "kind": 4202702,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 172,
                                "end": 179
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": {
                                "kind": 4194493,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 156,
                                "end": 166
                            },
                            "isReadOnly": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097153,
                            "start": 156,
                            "end": 179
                        },
                        {
                            "kind": 16473,
                            "ellipsis": false,
                            "binding": {
                                "kind": 33554598,
                                "propertyList": {
                                    "kind": 33,
                                    "properties": [
                                        {
                                            "kind": 203,
                                            "ellipsis": false,
                                            "left": {
                                                "kind": 131102,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 144,
                                                "end": 145
                                            },
                                            "right": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1024,
                                            "start": 144,
                                            "end": 145
                                        }
                                    ],
                                    "multiline": false,
                                    "trailingComma": false,
                                    "transformFlags": 1025,
                                    "flags": 0,
                                    "intersects": false,
                                    "start": 144,
                                    "end": 145
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 142,
                                "end": 146
                            },
                            "isOptional": true,
                            "type": {
                                "kind": 4202702,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 148,
                                "end": 155
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": {
                                "kind": 4194485,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 135,
                                "end": 142
                            },
                            "isReadOnly": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097153,
                            "start": 135,
                            "end": 155
                        }
                    ],
                    "type": null,
                    "accessModifier": null,
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 142,
                    "end": 180
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 132,
                "end": 180
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 131,
            "end": 180
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 183,
                    "end": 184
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 81929,
                    "elements": [
                        {
                            "kind": 16473,
                            "ellipsis": false,
                            "binding": {
                                "kind": 4325406,
                                "text": "private",
                                "rawText": "private",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 187,
                                "end": 194
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
                            "start": 187,
                            "end": 195
                        }
                    ],
                    "type": null,
                    "accessModifier": null,
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 194,
                    "end": 195
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 184,
                "end": 195
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 183,
            "end": 195
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 1073807915,
                    "expression": {
                        "kind": 196712,
                        "text": "x",
                        "rawText": "x",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 198,
                        "end": 199
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
                                            "kind": 196712,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 203,
                                            "end": 204
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 203,
                                    "end": 204
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 202,
                                "end": 205
                            }
                        ],
                        "trailingComma": false,
                        "transformFlags": 0,
                        "flags": 32768,
                        "intersects": false,
                        "start": 203,
                        "end": 206
                    },
                    "flags": 32768,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 199,
                    "end": 206
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 81929,
                    "elements": [
                        {
                            "kind": 16473,
                            "ellipsis": false,
                            "binding": {
                                "kind": 33554598,
                                "propertyList": {
                                    "kind": 33,
                                    "properties": [
                                        {
                                            "kind": 203,
                                            "ellipsis": false,
                                            "left": {
                                                "kind": 131102,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 242,
                                                "end": 243
                                            },
                                            "right": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1024,
                                            "start": 242,
                                            "end": 243
                                        }
                                    ],
                                    "multiline": false,
                                    "trailingComma": false,
                                    "transformFlags": 1025,
                                    "flags": 0,
                                    "intersects": false,
                                    "start": 242,
                                    "end": 243
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 240,
                                "end": 244
                            },
                            "isOptional": true,
                            "type": {
                                "kind": 4202702,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 246,
                                "end": 253
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": {
                                "kind": 4194493,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 230,
                                "end": 240
                            },
                            "isReadOnly": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097153,
                            "start": 230,
                            "end": 253
                        },
                        {
                            "kind": 16473,
                            "ellipsis": false,
                            "binding": {
                                "kind": 33554598,
                                "propertyList": {
                                    "kind": 33,
                                    "properties": [
                                        {
                                            "kind": 203,
                                            "ellipsis": false,
                                            "left": {
                                                "kind": 131102,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 218,
                                                "end": 219
                                            },
                                            "right": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1024,
                                            "start": 218,
                                            "end": 219
                                        }
                                    ],
                                    "multiline": false,
                                    "trailingComma": false,
                                    "transformFlags": 1025,
                                    "flags": 0,
                                    "intersects": false,
                                    "start": 218,
                                    "end": 219
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 216,
                                "end": 220
                            },
                            "isOptional": true,
                            "type": {
                                "kind": 4202702,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 222,
                                "end": 229
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": {
                                "kind": 4194485,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 209,
                                "end": 216
                            },
                            "isReadOnly": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097153,
                            "start": 209,
                            "end": 229
                        }
                    ],
                    "type": null,
                    "accessModifier": null,
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 216,
                    "end": 254
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 206,
                "end": 254
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 198,
            "end": 254
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 257,
                    "end": 258
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 81929,
                    "elements": [
                        {
                            "kind": 16473,
                            "ellipsis": false,
                            "binding": {
                                "kind": 33554598,
                                "propertyList": {
                                    "kind": 33,
                                    "properties": [
                                        {
                                            "kind": 203,
                                            "ellipsis": false,
                                            "left": {
                                                "kind": 131102,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 270,
                                                "end": 271
                                            },
                                            "right": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1024,
                                            "start": 270,
                                            "end": 271
                                        }
                                    ],
                                    "multiline": false,
                                    "trailingComma": false,
                                    "transformFlags": 1025,
                                    "flags": 0,
                                    "intersects": false,
                                    "start": 270,
                                    "end": 271
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 268,
                                "end": 272
                            },
                            "isOptional": true,
                            "type": {
                                "kind": 4202702,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 274,
                                "end": 281
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": {
                                "kind": 4194485,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 261,
                                "end": 268
                            },
                            "isReadOnly": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097153,
                            "start": 261,
                            "end": 281
                        }
                    ],
                    "type": null,
                    "accessModifier": null,
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 268,
                    "end": 282
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 258,
                "end": 282
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 257,
            "end": 282
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 285,
                    "end": 286
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 81929,
                    "elements": [
                        {
                            "kind": 16473,
                            "ellipsis": false,
                            "binding": {
                                "kind": 33554598,
                                "propertyList": {
                                    "kind": 33,
                                    "properties": [
                                        {
                                            "kind": 4325406,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 290,
                                            "end": 291
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 290,
                                    "end": 291
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 289,
                                "end": 292
                            },
                            "isOptional": true,
                            "type": {
                                "kind": 4202702,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 294,
                                "end": 301
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 289,
                            "end": 301
                        }
                    ],
                    "type": null,
                    "accessModifier": null,
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 290,
                    "end": 302
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 286,
                "end": 302
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 285,
            "end": 302
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 305,
                    "end": 306
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 81929,
                    "elements": [
                        {
                            "kind": 16473,
                            "ellipsis": false,
                            "binding": {
                                "kind": 33554437,
                                "elementList": {
                                    "kind": 29,
                                    "elements": [
                                        {
                                            "kind": 4325406,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 310,
                                            "end": 311
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 310,
                                    "end": 311
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 309,
                                "end": 312
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
                            "start": 309,
                            "end": 313
                        }
                    ],
                    "type": null,
                    "accessModifier": null,
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 310,
                    "end": 313
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 306,
                "end": 313
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 305,
            "end": 313
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 316,
                "end": 317
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 316,
            "end": 317
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 283,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 303,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 314,
            "length": 0
        }
    ],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 317
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

