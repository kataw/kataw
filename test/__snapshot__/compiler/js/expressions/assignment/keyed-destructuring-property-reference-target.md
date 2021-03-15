# Kataw parser test case

## Input

`````js

var log = [];

function source() {
    log.push("source");
    return {
        get p() {
            log.push("get");
        }
    };
}
function target() {
    log.push("target");
    return {
        set q(v) {
            log.push("set");
        }
    };
}
function sourceKey() {
    log.push("source-key");
    return {
        toString: function() {
            log.push("source-key-tostring");
            return "p";
        }
    };
}
function targetKey() {
    log.push("target-key");
    return {
        toString: function() {
            log.push("target-key-tostring");
            return "q";
        }
    };
}


({[sourceKey()]: target()[targetKey()]} = source());
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "\nvar log = [];\n\nfunction source() {\n    log.push(\"source\");\n    return {\n        get p() {\n            log.push(\"get\");\n        }\n    };\n}\nfunction target() {\n    log.push(\"target\");\n    return {\n        set q(v) {\n            log.push(\"set\");\n        }\n    };\n}\nfunction sourceKey() {\n    log.push(\"source-key\");\n    return {\n        toString: function() {\n            log.push(\"source-key-tostring\");\n            return \"p\";\n        }\n    };\n}\nfunction targetKey() {\n    log.push(\"target-key\");\n    return {\n        toString: function() {\n            log.push(\"target-key-tostring\");\n            return \"q\";\n        }\n    };\n}\n\n\n({[sourceKey()]: target()[targetKey()]} = source());",
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
                                "text": "log",
                                "rawText": "log",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 4,
                                "end": 8
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 67207686,
                                "elementList": {
                                    "kind": 65605,
                                    "elements": [],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 12,
                                    "end": 12
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 13
                            },
                            "flags": 4,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 13
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 13
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 14
            },
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "source",
                    "rawText": "source",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 24,
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
                "type": null,
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [
                            {
                                "kind": 2097233,
                                "expression": {
                                    "kind": 66091,
                                    "expression": {
                                        "kind": 66232,
                                        "member": {
                                            "kind": 196712,
                                            "text": "log",
                                            "rawText": "log",
                                            "flags": 16384,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 35,
                                            "end": 43
                                        },
                                        "expression": {
                                            "kind": 196711,
                                            "text": "push",
                                            "rawText": "push",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 44,
                                            "end": 48
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 43,
                                        "end": 48,
                                        "period": {
                                            "kind": 254,
                                            "pos": 43,
                                            "end": 44
                                        }
                                    },
                                    "typeArguments": null,
                                    "argumentList": {
                                        "kind": 3,
                                        "elements": [
                                            {
                                                "kind": 4261583,
                                                "text": "source",
                                                "rawText": "source",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 49,
                                                "end": 57
                                            }
                                        ],
                                        "trailingComma": false,
                                        "transformFlags": 0,
                                        "flags": 0,
                                        "intersects": false,
                                        "start": 57,
                                        "end": 58
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 48,
                                    "end": 58
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 35,
                                "end": 59
                            },
                            {
                                "kind": 2097346,
                                "expression": {
                                    "kind": 67224232,
                                    "propertyList": {
                                        "kind": 65722,
                                        "properties": [
                                            {
                                                "kind": 16844946,
                                                "name": {
                                                    "kind": 196711,
                                                    "text": "p",
                                                    "rawText": "p",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 84,
                                                    "end": 86
                                                },
                                                "formalParameters": {
                                                    "kind": 90,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 87,
                                                    "end": 88
                                                },
                                                "isSetter": false,
                                                "isGetter": true,
                                                "contents": {
                                                    "kind": 91,
                                                    "functionStatementList": {
                                                        "kind": 94,
                                                        "statements": [
                                                            {
                                                                "kind": 2097233,
                                                                "expression": {
                                                                    "kind": 66091,
                                                                    "expression": {
                                                                        "kind": 66232,
                                                                        "member": {
                                                                            "kind": 196712,
                                                                            "text": "log",
                                                                            "rawText": "log",
                                                                            "flags": 16384,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "start": 90,
                                                                            "end": 106
                                                                        },
                                                                        "expression": {
                                                                            "kind": 196711,
                                                                            "text": "push",
                                                                            "rawText": "push",
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "start": 107,
                                                                            "end": 111
                                                                        },
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 106,
                                                                        "end": 111,
                                                                        "period": {
                                                                            "kind": 254,
                                                                            "pos": 106,
                                                                            "end": 107
                                                                        }
                                                                    },
                                                                    "typeArguments": null,
                                                                    "argumentList": {
                                                                        "kind": 3,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 4261583,
                                                                                "text": "get",
                                                                                "rawText": "get",
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "start": 112,
                                                                                "end": 117
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "transformFlags": 0,
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "start": 117,
                                                                        "end": 118
                                                                    },
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 111,
                                                                    "end": 118
                                                                },
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 90,
                                                                "end": 119
                                                            }
                                                        ],
                                                        "multiline": true,
                                                        "flags": 16384,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 90,
                                                        "end": 119
                                                    },
                                                    "flags": 16384,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 88,
                                                    "end": 129
                                                },
                                                "decorators": null,
                                                "type": null,
                                                "accessModifier": null,
                                                "typeParameters": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 86,
                                                "end": 129
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 16384,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 72,
                                        "end": 129
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 70,
                                    "end": 135
                                },
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 59,
                                "end": 136
                            }
                        ],
                        "multiline": true,
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 35,
                        "end": 136
                    },
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 138
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 256,
                "start": 14,
                "end": 138
            },
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "target",
                    "rawText": "target",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 147,
                    "end": 154
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 155,
                    "end": 156
                },
                "type": null,
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [
                            {
                                "kind": 2097233,
                                "expression": {
                                    "kind": 66091,
                                    "expression": {
                                        "kind": 66232,
                                        "member": {
                                            "kind": 196712,
                                            "text": "log",
                                            "rawText": "log",
                                            "flags": 16384,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 158,
                                            "end": 166
                                        },
                                        "expression": {
                                            "kind": 196711,
                                            "text": "push",
                                            "rawText": "push",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 167,
                                            "end": 171
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 166,
                                        "end": 171,
                                        "period": {
                                            "kind": 254,
                                            "pos": 166,
                                            "end": 167
                                        }
                                    },
                                    "typeArguments": null,
                                    "argumentList": {
                                        "kind": 3,
                                        "elements": [
                                            {
                                                "kind": 4261583,
                                                "text": "target",
                                                "rawText": "target",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 172,
                                                "end": 180
                                            }
                                        ],
                                        "trailingComma": false,
                                        "transformFlags": 0,
                                        "flags": 0,
                                        "intersects": false,
                                        "start": 180,
                                        "end": 181
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 171,
                                    "end": 181
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 158,
                                "end": 182
                            },
                            {
                                "kind": 2097346,
                                "expression": {
                                    "kind": 67224232,
                                    "propertyList": {
                                        "kind": 65722,
                                        "properties": [
                                            {
                                                "kind": 16844946,
                                                "name": {
                                                    "kind": 196711,
                                                    "text": "q",
                                                    "rawText": "q",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 207,
                                                    "end": 209
                                                },
                                                "formalParameters": {
                                                    "kind": 90,
                                                    "formalParameterList": [
                                                        {
                                                            "kind": 89,
                                                            "ellipsis": false,
                                                            "binding": {
                                                                "kind": 131102,
                                                                "text": "v",
                                                                "rawText": "v",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 1025,
                                                                "start": 210,
                                                                "end": 211
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
                                                            "start": 210,
                                                            "end": 211
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 210,
                                                    "end": 212
                                                },
                                                "isSetter": true,
                                                "isGetter": false,
                                                "contents": {
                                                    "kind": 91,
                                                    "functionStatementList": {
                                                        "kind": 94,
                                                        "statements": [
                                                            {
                                                                "kind": 2097233,
                                                                "expression": {
                                                                    "kind": 66091,
                                                                    "expression": {
                                                                        "kind": 66232,
                                                                        "member": {
                                                                            "kind": 196712,
                                                                            "text": "log",
                                                                            "rawText": "log",
                                                                            "flags": 16384,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "start": 214,
                                                                            "end": 230
                                                                        },
                                                                        "expression": {
                                                                            "kind": 196711,
                                                                            "text": "push",
                                                                            "rawText": "push",
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "start": 231,
                                                                            "end": 235
                                                                        },
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 230,
                                                                        "end": 235,
                                                                        "period": {
                                                                            "kind": 254,
                                                                            "pos": 230,
                                                                            "end": 231
                                                                        }
                                                                    },
                                                                    "typeArguments": null,
                                                                    "argumentList": {
                                                                        "kind": 3,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 4261583,
                                                                                "text": "set",
                                                                                "rawText": "set",
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "start": 236,
                                                                                "end": 241
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "transformFlags": 0,
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "start": 241,
                                                                        "end": 242
                                                                    },
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 235,
                                                                    "end": 242
                                                                },
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 214,
                                                                "end": 243
                                                            }
                                                        ],
                                                        "multiline": true,
                                                        "flags": 16384,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 214,
                                                        "end": 243
                                                    },
                                                    "flags": 16384,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 212,
                                                    "end": 253
                                                },
                                                "decorators": null,
                                                "type": null,
                                                "accessModifier": null,
                                                "typeParameters": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 209,
                                                "end": 253
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 16384,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 195,
                                        "end": 253
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 193,
                                    "end": 259
                                },
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 182,
                                "end": 260
                            }
                        ],
                        "multiline": true,
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 158,
                        "end": 260
                    },
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 156,
                    "end": 262
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 256,
                "start": 138,
                "end": 262
            },
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "sourceKey",
                    "rawText": "sourceKey",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 271,
                    "end": 281
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 282,
                    "end": 283
                },
                "type": null,
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [
                            {
                                "kind": 2097233,
                                "expression": {
                                    "kind": 66091,
                                    "expression": {
                                        "kind": 66232,
                                        "member": {
                                            "kind": 196712,
                                            "text": "log",
                                            "rawText": "log",
                                            "flags": 16384,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 285,
                                            "end": 293
                                        },
                                        "expression": {
                                            "kind": 196711,
                                            "text": "push",
                                            "rawText": "push",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 294,
                                            "end": 298
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 293,
                                        "end": 298,
                                        "period": {
                                            "kind": 254,
                                            "pos": 293,
                                            "end": 294
                                        }
                                    },
                                    "typeArguments": null,
                                    "argumentList": {
                                        "kind": 3,
                                        "elements": [
                                            {
                                                "kind": 4261583,
                                                "text": "source-key",
                                                "rawText": "source-key",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 299,
                                                "end": 311
                                            }
                                        ],
                                        "trailingComma": false,
                                        "transformFlags": 0,
                                        "flags": 0,
                                        "intersects": false,
                                        "start": 311,
                                        "end": 312
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 298,
                                    "end": 312
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 285,
                                "end": 313
                            },
                            {
                                "kind": 2097346,
                                "expression": {
                                    "kind": 67224232,
                                    "propertyList": {
                                        "kind": 65722,
                                        "properties": [
                                            {
                                                "kind": 65721,
                                                "left": {
                                                    "kind": 196711,
                                                    "text": "toString",
                                                    "rawText": "toString",
                                                    "flags": 16384,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 326,
                                                    "end": 343
                                                },
                                                "right": {
                                                    "kind": 8456285,
                                                    "name": null,
                                                    "formalParameters": {
                                                        "kind": 90,
                                                        "formalParameterList": [],
                                                        "trailingComma": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 354,
                                                        "end": 355
                                                    },
                                                    "contents": {
                                                        "kind": 91,
                                                        "functionStatementList": {
                                                            "kind": 94,
                                                            "statements": [
                                                                {
                                                                    "kind": 2097233,
                                                                    "expression": {
                                                                        "kind": 66091,
                                                                        "expression": {
                                                                            "kind": 66232,
                                                                            "member": {
                                                                                "kind": 196712,
                                                                                "text": "log",
                                                                                "rawText": "log",
                                                                                "flags": 16384,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "start": 357,
                                                                                "end": 373
                                                                            },
                                                                            "expression": {
                                                                                "kind": 196711,
                                                                                "text": "push",
                                                                                "rawText": "push",
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "start": 374,
                                                                                "end": 378
                                                                            },
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "start": 373,
                                                                            "end": 378,
                                                                            "period": {
                                                                                "kind": 254,
                                                                                "pos": 373,
                                                                                "end": 374
                                                                            }
                                                                        },
                                                                        "typeArguments": null,
                                                                        "argumentList": {
                                                                            "kind": 3,
                                                                            "elements": [
                                                                                {
                                                                                    "kind": 4261583,
                                                                                    "text": "source-key-tostring",
                                                                                    "rawText": "source-key-tostring",
                                                                                    "flags": 0,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "start": 379,
                                                                                    "end": 400
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "transformFlags": 0,
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "start": 400,
                                                                            "end": 401
                                                                        },
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 378,
                                                                        "end": 401
                                                                    },
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 357,
                                                                    "end": 402
                                                                },
                                                                {
                                                                    "kind": 2097346,
                                                                    "expression": {
                                                                        "kind": 4261583,
                                                                        "text": "p",
                                                                        "rawText": "p",
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 421,
                                                                        "end": 425
                                                                    },
                                                                    "flags": 16384,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 402,
                                                                    "end": 426
                                                                }
                                                            ],
                                                            "multiline": true,
                                                            "flags": 16384,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 357,
                                                            "end": 426
                                                        },
                                                        "flags": 16384,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 355,
                                                        "end": 436
                                                    },
                                                    "typeParameters": null,
                                                    "type": null,
                                                    "flags": 16384,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 344,
                                                    "end": 436
                                                },
                                                "accessModifier": null,
                                                "decorators": null,
                                                "flags": 16384,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 326,
                                                "end": 436
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 16384,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 326,
                                        "end": 436
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 324,
                                    "end": 442
                                },
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 313,
                                "end": 443
                            }
                        ],
                        "multiline": true,
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 285,
                        "end": 443
                    },
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 283,
                    "end": 445
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 256,
                "start": 262,
                "end": 445
            },
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "targetKey",
                    "rawText": "targetKey",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 454,
                    "end": 464
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 465,
                    "end": 466
                },
                "type": null,
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [
                            {
                                "kind": 2097233,
                                "expression": {
                                    "kind": 66091,
                                    "expression": {
                                        "kind": 66232,
                                        "member": {
                                            "kind": 196712,
                                            "text": "log",
                                            "rawText": "log",
                                            "flags": 16384,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 468,
                                            "end": 476
                                        },
                                        "expression": {
                                            "kind": 196711,
                                            "text": "push",
                                            "rawText": "push",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 477,
                                            "end": 481
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 476,
                                        "end": 481,
                                        "period": {
                                            "kind": 254,
                                            "pos": 476,
                                            "end": 477
                                        }
                                    },
                                    "typeArguments": null,
                                    "argumentList": {
                                        "kind": 3,
                                        "elements": [
                                            {
                                                "kind": 4261583,
                                                "text": "target-key",
                                                "rawText": "target-key",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 482,
                                                "end": 494
                                            }
                                        ],
                                        "trailingComma": false,
                                        "transformFlags": 0,
                                        "flags": 0,
                                        "intersects": false,
                                        "start": 494,
                                        "end": 495
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 481,
                                    "end": 495
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 468,
                                "end": 496
                            },
                            {
                                "kind": 2097346,
                                "expression": {
                                    "kind": 67224232,
                                    "propertyList": {
                                        "kind": 65722,
                                        "properties": [
                                            {
                                                "kind": 65721,
                                                "left": {
                                                    "kind": 196711,
                                                    "text": "toString",
                                                    "rawText": "toString",
                                                    "flags": 16384,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 509,
                                                    "end": 526
                                                },
                                                "right": {
                                                    "kind": 8456285,
                                                    "name": null,
                                                    "formalParameters": {
                                                        "kind": 90,
                                                        "formalParameterList": [],
                                                        "trailingComma": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 537,
                                                        "end": 538
                                                    },
                                                    "contents": {
                                                        "kind": 91,
                                                        "functionStatementList": {
                                                            "kind": 94,
                                                            "statements": [
                                                                {
                                                                    "kind": 2097233,
                                                                    "expression": {
                                                                        "kind": 66091,
                                                                        "expression": {
                                                                            "kind": 66232,
                                                                            "member": {
                                                                                "kind": 196712,
                                                                                "text": "log",
                                                                                "rawText": "log",
                                                                                "flags": 16384,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "start": 540,
                                                                                "end": 556
                                                                            },
                                                                            "expression": {
                                                                                "kind": 196711,
                                                                                "text": "push",
                                                                                "rawText": "push",
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "start": 557,
                                                                                "end": 561
                                                                            },
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "start": 556,
                                                                            "end": 561,
                                                                            "period": {
                                                                                "kind": 254,
                                                                                "pos": 556,
                                                                                "end": 557
                                                                            }
                                                                        },
                                                                        "typeArguments": null,
                                                                        "argumentList": {
                                                                            "kind": 3,
                                                                            "elements": [
                                                                                {
                                                                                    "kind": 4261583,
                                                                                    "text": "target-key-tostring",
                                                                                    "rawText": "target-key-tostring",
                                                                                    "flags": 0,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "start": 562,
                                                                                    "end": 583
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "transformFlags": 0,
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "start": 583,
                                                                            "end": 584
                                                                        },
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 561,
                                                                        "end": 584
                                                                    },
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 540,
                                                                    "end": 585
                                                                },
                                                                {
                                                                    "kind": 2097346,
                                                                    "expression": {
                                                                        "kind": 4261583,
                                                                        "text": "q",
                                                                        "rawText": "q",
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 604,
                                                                        "end": 608
                                                                    },
                                                                    "flags": 16384,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 585,
                                                                    "end": 609
                                                                }
                                                            ],
                                                            "multiline": true,
                                                            "flags": 16384,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 540,
                                                            "end": 609
                                                        },
                                                        "flags": 16384,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 538,
                                                        "end": 619
                                                    },
                                                    "typeParameters": null,
                                                    "type": null,
                                                    "flags": 16384,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 527,
                                                    "end": 619
                                                },
                                                "accessModifier": null,
                                                "decorators": null,
                                                "flags": 16384,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 509,
                                                "end": 619
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 16384,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 509,
                                        "end": 619
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 507,
                                    "end": 625
                                },
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 496,
                                "end": 626
                            }
                        ],
                        "multiline": true,
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 468,
                        "end": 626
                    },
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 466,
                    "end": 628
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 256,
                "start": 445,
                "end": 628
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66224,
                    "expression": {
                        "kind": 65550,
                        "left": {
                            "kind": 67224232,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [
                                    {
                                        "kind": 65721,
                                        "left": {
                                            "kind": 65591,
                                            "expression": {
                                                "kind": 66091,
                                                "expression": {
                                                    "kind": 196712,
                                                    "text": "sourceKey",
                                                    "rawText": "sourceKey",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 634,
                                                    "end": 643
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 3,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "transformFlags": 0,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "start": 645,
                                                    "end": 645
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 643,
                                                "end": 645
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 131073,
                                            "start": 633,
                                            "end": 646
                                        },
                                        "right": {
                                            "kind": 66116,
                                            "member": {
                                                "kind": 66091,
                                                "expression": {
                                                    "kind": 196712,
                                                    "text": "target",
                                                    "rawText": "target",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 647,
                                                    "end": 654
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 3,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "transformFlags": 0,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "start": 656,
                                                    "end": 656
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 654,
                                                "end": 656
                                            },
                                            "expression": {
                                                "kind": 66091,
                                                "expression": {
                                                    "kind": 196712,
                                                    "text": "targetKey",
                                                    "rawText": "targetKey",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 657,
                                                    "end": 666
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 3,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "transformFlags": 0,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "start": 668,
                                                    "end": 668
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 666,
                                                "end": 668
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 656,
                                            "end": 669
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 633,
                                        "end": 669
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 633,
                                "end": 669
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 632,
                            "end": 670
                        },
                        "operator": "=",
                        "right": {
                            "kind": 66091,
                            "expression": {
                                "kind": 196712,
                                "text": "source",
                                "rawText": "source",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 672,
                                "end": 679
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "intersects": false,
                                "start": 681,
                                "end": 681
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 679,
                            "end": 681
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 628,
                        "end": 681
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 628,
                    "end": 682
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 628,
                "end": 683
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 683
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 683
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

