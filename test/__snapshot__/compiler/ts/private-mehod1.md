# Kataw parser test case

## Input

`````js
class Square {
    #size: number;
    constructor(size: number) {
        this.#size = size;
    }
    get #diagonal() {
        return Math.hypot(this.#size, this.#size);
    }
    area() {
        return Math.pow(this.#diagonal, 2) / 2;
    }
}
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "class Square {\n    #size: number;\n    constructor(size: number) {\n        this.#size = size;\n    }\n    get #diagonal() {\n        return Math.hypot(this.#size, this.#size);\n    }\n    area() {\n        return Math.pow(this.#diagonal, 2) / 2;\n    }\n}",
    "filename": "",
    "statements": [
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "Square",
                "rawText": "Square",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 5,
                "end": 12
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 131252,
                            "text": "#size",
                            "rawText": "#size",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 524288,
                            "start": 14,
                            "end": 24
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": {
                            "kind": 4202657,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 25,
                            "end": 32
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isStatic": false,
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 524352,
                        "start": 14,
                        "end": 33
                    },
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
                                "text": "constructor",
                                "rawText": "constructor",
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 49
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "size",
                                            "rawText": "size",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 50,
                                            "end": 54
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 55,
                                            "end": 62
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 50,
                                        "end": 62
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 50,
                                "end": 63
                            },
                            "isSetter": false,
                            "isGetter": false,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097233,
                                            "expression": {
                                                "kind": 65550,
                                                "left": {
                                                    "kind": 67175096,
                                                    "member": {
                                                        "kind": 4260571,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 65,
                                                        "end": 78
                                                    },
                                                    "expression": {
                                                        "kind": 131252,
                                                        "text": "#size",
                                                        "rawText": "#size",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 524288,
                                                        "start": 79,
                                                        "end": 84
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 78,
                                                    "end": 84,
                                                    "period": {
                                                        "kind": 255,
                                                        "pos": 78,
                                                        "end": 79
                                                    }
                                                },
                                                "operator": "=",
                                                "right": {
                                                    "kind": 196712,
                                                    "text": "size",
                                                    "rawText": "size",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 86,
                                                    "end": 91
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 65,
                                                "end": 91
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 65,
                                            "end": 92
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 65,
                                    "end": 92
                                },
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 63,
                                "end": 98
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 524288,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 49,
                            "end": 98
                        },
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 33,
                        "end": 98
                    },
                    {
                        "kind": 49,
                        "isStatic": false,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 131252,
                                "text": "#diagonal",
                                "rawText": "#diagonal",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 524288,
                                "start": 106,
                                "end": 116
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 117,
                                "end": 118
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
                                                "kind": 1073807915,
                                                "expression": {
                                                    "kind": 67175096,
                                                    "member": {
                                                        "kind": 196712,
                                                        "text": "Math",
                                                        "rawText": "Math",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 135,
                                                        "end": 140
                                                    },
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "hypot",
                                                        "rawText": "hypot",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 141,
                                                        "end": 146
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 140,
                                                    "end": 146,
                                                    "period": {
                                                        "kind": 255,
                                                        "pos": 140,
                                                        "end": 141
                                                    }
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 3,
                                                    "elements": [
                                                        {
                                                            "kind": 67175096,
                                                            "member": {
                                                                "kind": 4260571,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 147,
                                                                "end": 151
                                                            },
                                                            "expression": {
                                                                "kind": 131252,
                                                                "text": "#size",
                                                                "rawText": "#size",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 524288,
                                                                "start": 152,
                                                                "end": 157
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 151,
                                                            "end": 157,
                                                            "period": {
                                                                "kind": 255,
                                                                "pos": 151,
                                                                "end": 152
                                                            }
                                                        },
                                                        {
                                                            "kind": 67175096,
                                                            "member": {
                                                                "kind": 4260571,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 158,
                                                                "end": 163
                                                            },
                                                            "expression": {
                                                                "kind": 131252,
                                                                "text": "#size",
                                                                "rawText": "#size",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 524288,
                                                                "start": 164,
                                                                "end": 169
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 163,
                                                            "end": 169,
                                                            "period": {
                                                                "kind": 255,
                                                                "pos": 163,
                                                                "end": 164
                                                            }
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "transformFlags": 0,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "start": 151,
                                                    "end": 170
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 146,
                                                "end": 170
                                            },
                                            "flags": 32768,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 120,
                                            "end": 171
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 120,
                                    "end": 171
                                },
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 118,
                                "end": 177
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 116,
                            "end": 177
                        },
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 98,
                        "end": 177
                    },
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
                                "text": "area",
                                "rawText": "area",
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 177,
                                "end": 186
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 187,
                                "end": 188
                            },
                            "isSetter": false,
                            "isGetter": false,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097346,
                                            "expression": {
                                                "kind": 65563,
                                                "left": {
                                                    "kind": 1073807915,
                                                    "expression": {
                                                        "kind": 67175096,
                                                        "member": {
                                                            "kind": 196712,
                                                            "text": "Math",
                                                            "rawText": "Math",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 205,
                                                            "end": 210
                                                        },
                                                        "expression": {
                                                            "kind": 196711,
                                                            "text": "pow",
                                                            "rawText": "pow",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 211,
                                                            "end": 214
                                                        },
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 210,
                                                        "end": 214,
                                                        "period": {
                                                            "kind": 255,
                                                            "pos": 210,
                                                            "end": 211
                                                        }
                                                    },
                                                    "typeArguments": null,
                                                    "argumentList": {
                                                        "kind": 3,
                                                        "elements": [
                                                            {
                                                                "kind": 67175096,
                                                                "member": {
                                                                    "kind": 4260571,
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 215,
                                                                    "end": 219
                                                                },
                                                                "expression": {
                                                                    "kind": 131252,
                                                                    "text": "#diagonal",
                                                                    "rawText": "#diagonal",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 524288,
                                                                    "start": 220,
                                                                    "end": 229
                                                                },
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 219,
                                                                "end": 229,
                                                                "period": {
                                                                    "kind": 255,
                                                                    "pos": 219,
                                                                    "end": 220
                                                                }
                                                            },
                                                            {
                                                                "kind": 4261540,
                                                                "text": 2,
                                                                "rawText": "2",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 230,
                                                                "end": 232
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "transformFlags": 0,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "start": 219,
                                                        "end": 233
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 214,
                                                    "end": 233
                                                },
                                                "operator": "/",
                                                "right": {
                                                    "kind": 4261540,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 235,
                                                    "end": 237
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 205,
                                                "end": 237
                                            },
                                            "flags": 32768,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 190,
                                            "end": 238
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 190,
                                    "end": 238
                                },
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 188,
                                "end": 244
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 186,
                            "end": 244
                        },
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 177,
                        "end": 244
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 1,
                "start": 14,
                "end": 246
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 0,
            "intersects": false,
            "transformFlags": 1,
            "start": 0,
            "end": 246
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
    "end": 246
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

