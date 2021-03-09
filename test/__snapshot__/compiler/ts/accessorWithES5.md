# Kataw parser test case

## Input

`````js
class C {
    get x() {
        return 1;
    }
}

class D {
    set x(v) {
    }
}

var x = {
    get a() { return 1 }
}

var y = {
    set b(v) { }
}

`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "class C {\n    get x() {\n        return 1;\n    }\n}\n\nclass D {\n    set x(v) {\n    }\n}\n\nvar x = {\n    get a() { return 1 }\n}\n\nvar y = {\n    set b(v) { }\n}\n",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "C",
                    "rawText": "C",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 5,
                    "end": 7
                },
                "typeParameters": null,
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [
                        {
                            "kind": 49,
                            "isStatic": false,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "method": {
                                "kind": 16844946,
                                "name": {
                                    "kind": 196711,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 17,
                                    "end": 19
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 21
                                },
                                "isSetter": false,
                                "isGetter": true,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [
                                            {
                                                "kind": 2097346,
                                                "expression": {
                                                    "kind": 4261540,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 38,
                                                    "end": 40
                                                },
                                                "flags": 16384,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 23,
                                                "end": 41
                                            }
                                        ],
                                        "multiline": true,
                                        "flags": 16384,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 23,
                                        "end": 41
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 21,
                                    "end": 47
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 47
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 9,
                            "end": 47
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 9,
                    "end": 49
                },
                "decorators": null,
                "isAbstract": false,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 1,
                "start": 0,
                "end": 49
            },
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "D",
                    "rawText": "D",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 56,
                    "end": 58
                },
                "typeParameters": null,
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [
                        {
                            "kind": 49,
                            "isStatic": false,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "method": {
                                "kind": 16844946,
                                "name": {
                                    "kind": 196711,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 68,
                                    "end": 70
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
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 71,
                                    "end": 73
                                },
                                "isSetter": true,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": true,
                                        "flags": 16384,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 75,
                                        "end": 75
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 73,
                                    "end": 81
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 70,
                                "end": 81
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 60,
                            "end": 81
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 60,
                    "end": 83
                },
                "decorators": null,
                "isAbstract": false,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 1,
                "start": 49,
                "end": 83
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
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 88,
                                "end": 90
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 67224232,
                                "propertyList": {
                                    "kind": 65722,
                                    "properties": [
                                        {
                                            "kind": 16844946,
                                            "name": {
                                                "kind": 196711,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 102,
                                                "end": 104
                                            },
                                            "formalParameters": {
                                                "kind": 90,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 105,
                                                "end": 106
                                            },
                                            "isSetter": false,
                                            "isGetter": true,
                                            "contents": {
                                                "kind": 91,
                                                "functionStatementList": {
                                                    "kind": 94,
                                                    "statements": [
                                                        {
                                                            "kind": 2097346,
                                                            "expression": {
                                                                "kind": 4261540,
                                                                "text": 1,
                                                                "rawText": "1",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 115,
                                                                "end": 117
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 108,
                                                            "end": 117
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 108,
                                                    "end": 117
                                                },
                                                "flags": 16384,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 106,
                                                "end": 119
                                            },
                                            "decorators": null,
                                            "type": null,
                                            "accessModifier": null,
                                            "typeParameters": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 104,
                                            "end": 119
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": true,
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 94,
                                    "end": 119
                                },
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 92,
                                "end": 121
                            },
                            "flags": 88,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 16384,
                            "end": 121
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 88,
                    "end": 121
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 83,
                "end": 121
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
                                "text": "y",
                                "rawText": "y",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 126,
                                "end": 128
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 67224232,
                                "propertyList": {
                                    "kind": 65722,
                                    "properties": [
                                        {
                                            "kind": 16844946,
                                            "name": {
                                                "kind": 196711,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 140,
                                                "end": 142
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
                                                            "start": 143,
                                                            "end": 144
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
                                                        "start": 143,
                                                        "end": 144
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 143,
                                                "end": 145
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
                                                    "start": 147,
                                                    "end": 147
                                                },
                                                "flags": 16384,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 145,
                                                "end": 149
                                            },
                                            "decorators": null,
                                            "type": null,
                                            "accessModifier": null,
                                            "typeParameters": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 142,
                                            "end": 149
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": true,
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 132,
                                    "end": 149
                                },
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 130,
                                "end": 151
                            },
                            "flags": 126,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 16384,
                            "end": 151
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 126,
                    "end": 151
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 121,
                "end": 151
            }
        ],
        "transformFlags": 0,
        "flags": 16384,
        "intersects": false,
        "start": 0,
        "end": 151
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 152
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

