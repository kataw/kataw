# Kataw parser test case

## Input

`````js
interface ICallback {
    (x?: string):void;
}

function load(f: ICallback) {}

var f1: ICallback = function(z?) {}
var f2: ICallback = function(z?) {}
load(f1) // ok
load(f2) // ok
load(function() {}) // this shouldn@{x2019}@t be an error
load(function(z?) {}) // this shouldn't be an error

`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "interface ICallback {\n    (x?: string):void;\n}\n\nfunction load(f: ICallback) {}\n\nvar f1: ICallback = function(z?) {}\nvar f2: ICallback = function(z?) {}\nload(f1) // ok\nload(f2) // ok\nload(function() {}) // this shouldn@{x2019}@t be an error\nload(function(z?) {}) // this shouldn't be an error\n",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 8311,
                "name": {
                    "kind": 196712,
                    "text": "ICallback",
                    "rawText": "ICallback",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 19
                },
                "typeParameters": null,
                "heritageClauses": null,
                "objectTypeMembers": {
                    "kind": 169,
                    "members": [
                        {
                            "kind": 8236,
                            "isReadOnly": false,
                            "accessModifier": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 27,
                                            "end": 28
                                        },
                                        "isOptional": true,
                                        "type": {
                                            "kind": 4202702,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 30,
                                            "end": 37
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 27,
                                        "end": 37
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 27,
                                "end": 37
                            },
                            "returnType": {
                                "kind": 4202742,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 39,
                                "end": 43
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 21,
                            "end": 44
                        }
                    ],
                    "multiline": true,
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 21,
                    "end": 44
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 0,
                "end": 46
            },
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "load",
                    "rawText": "load",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 56,
                    "end": 61
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [
                        {
                            "kind": 89,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "f",
                                "rawText": "f",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 62,
                                "end": 63
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "ICallback",
                                    "rawText": "ICallback",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 64,
                                    "end": 74
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 64,
                                "end": 75
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 62,
                            "end": 74
                        }
                    ],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 62,
                    "end": 75
                },
                "type": null,
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [],
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 77,
                        "end": 77
                    },
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 75,
                    "end": 78
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 256,
                "start": 46,
                "end": 78
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
                                "text": "f1",
                                "rawText": "f1",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 83,
                                "end": 86
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "ICallback",
                                    "rawText": "ICallback",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 87,
                                    "end": 97
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 87,
                                "end": 99
                            },
                            "initializer": {
                                "kind": 8456285,
                                "name": null,
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [
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
                                                "start": 109,
                                                "end": 110
                                            },
                                            "isOptional": true,
                                            "type": null,
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 109,
                                            "end": 111
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 109,
                                    "end": 112
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
                                        "start": 114,
                                        "end": 114
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 112,
                                    "end": 115
                                },
                                "typeParameters": null,
                                "type": null,
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 99,
                                "end": 115
                            },
                            "flags": 83,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 16384,
                            "end": 115
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 83,
                    "end": 115
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 78,
                "end": 115
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
                                "text": "f2",
                                "rawText": "f2",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 119,
                                "end": 122
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "ICallback",
                                    "rawText": "ICallback",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 123,
                                    "end": 133
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 123,
                                "end": 135
                            },
                            "initializer": {
                                "kind": 8456285,
                                "name": null,
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [
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
                                                "start": 145,
                                                "end": 146
                                            },
                                            "isOptional": true,
                                            "type": null,
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 145,
                                            "end": 147
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 145,
                                    "end": 148
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
                                        "start": 150,
                                        "end": 150
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 148,
                                    "end": 151
                                },
                                "typeParameters": null,
                                "type": null,
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 135,
                                "end": 151
                            },
                            "flags": 119,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 16384,
                            "end": 151
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 119,
                    "end": 151
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 115,
                "end": 151
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66091,
                    "expression": {
                        "kind": 196712,
                        "text": "load",
                        "rawText": "load",
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 151,
                        "end": 156
                    },
                    "typeArguments": null,
                    "argumentList": {
                        "kind": 3,
                        "elements": [
                            {
                                "kind": 196712,
                                "text": "f1",
                                "rawText": "f1",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 157,
                                "end": 159
                            }
                        ],
                        "trailingComma": false,
                        "transformFlags": 0,
                        "flags": 16384,
                        "intersects": false,
                        "start": 159,
                        "end": 160
                    },
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 156,
                    "end": 160
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 151,
                "end": 160
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66091,
                    "expression": {
                        "kind": 196712,
                        "text": "load",
                        "rawText": "load",
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 160,
                        "end": 171
                    },
                    "typeArguments": null,
                    "argumentList": {
                        "kind": 3,
                        "elements": [
                            {
                                "kind": 196712,
                                "text": "f2",
                                "rawText": "f2",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 172,
                                "end": 174
                            }
                        ],
                        "trailingComma": false,
                        "transformFlags": 0,
                        "flags": 16384,
                        "intersects": false,
                        "start": 174,
                        "end": 175
                    },
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 171,
                    "end": 175
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 160,
                "end": 175
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66091,
                    "expression": {
                        "kind": 196712,
                        "text": "load",
                        "rawText": "load",
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 175,
                        "end": 186
                    },
                    "typeArguments": null,
                    "argumentList": {
                        "kind": 3,
                        "elements": [
                            {
                                "kind": 8456285,
                                "name": null,
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 196,
                                    "end": 197
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
                                        "start": 199,
                                        "end": 199
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 197,
                                    "end": 200
                                },
                                "typeParameters": null,
                                "type": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 187,
                                "end": 200
                            }
                        ],
                        "trailingComma": false,
                        "transformFlags": 0,
                        "flags": 16384,
                        "intersects": false,
                        "start": 195,
                        "end": 201
                    },
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 186,
                    "end": 201
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 175,
                "end": 201
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66091,
                    "expression": {
                        "kind": 196712,
                        "text": "load",
                        "rawText": "load",
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 201,
                        "end": 236
                    },
                    "typeArguments": null,
                    "argumentList": {
                        "kind": 3,
                        "elements": [
                            {
                                "kind": 8456285,
                                "name": null,
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [
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
                                                "start": 246,
                                                "end": 247
                                            },
                                            "isOptional": true,
                                            "type": null,
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 246,
                                            "end": 248
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 246,
                                    "end": 249
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
                                        "start": 251,
                                        "end": 251
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 249,
                                    "end": 252
                                },
                                "typeParameters": null,
                                "type": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 237,
                                "end": 252
                            }
                        ],
                        "trailingComma": false,
                        "transformFlags": 0,
                        "flags": 16384,
                        "intersects": false,
                        "start": 245,
                        "end": 253
                    },
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 236,
                    "end": 253
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 201,
                "end": 253
            }
        ],
        "transformFlags": 0,
        "flags": 16384,
        "intersects": false,
        "start": 0,
        "end": 253
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 284
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

