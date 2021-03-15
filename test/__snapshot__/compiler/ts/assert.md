# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
const assertString = (x: any): asserts x => {
  console.assert(typeof x === 'string');
}

function assertsString(x: any): asserts x {
  console.assert(typeof x === 'string');
}

const assertStringWithGuard = (x: any): asserts x is string => {
  console.assert(typeof x === 'string');
}

function assertsStringWithGuard(x: any): asserts x is string {
  console.assert(typeof x === 'string');
}

interface AssertFoo {
  isString(node: any): asserts node;
}

class AssertsFoo {
  isBar(): asserts this {
    return;
  }
  isBaz = (): asserts this => {
    return;
  }
}
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "const assertString = (x: any): asserts x => {\n  console.assert(typeof x === 'string');\n}\n\nfunction assertsString(x: any): asserts x {\n  console.assert(typeof x === 'string');\n}\n\nconst assertStringWithGuard = (x: any): asserts x is string => {\n  console.assert(typeof x === 'string');\n}\n\nfunction assertsStringWithGuard(x: any): asserts x is string {\n  console.assert(typeof x === 'string');\n}\n\ninterface AssertFoo {\n  isString(node: any): asserts node;\n}\n\nclass AssertsFoo {\n  isBar(): asserts this {\n    return;\n  }\n  isBaz = (): asserts this => {\n    return;\n  }\n}",
    "filename": "",
    "statements": [
        {
            "kind": 142,
            "isConst": true,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "assertString",
                            "rawText": "assertString",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 5,
                            "end": 18
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 83976,
                            "typeParameters": null,
                            "arrowParameters": {
                                "kind": 81929,
                                "elements": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 16473,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 196712,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 22,
                                                "end": 23
                                            },
                                            "isOptional": false,
                                            "type": {
                                                "kind": 4202498,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 24,
                                                "end": 28
                                            },
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 20,
                                            "end": 28
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
                                        "end": 40
                                    }
                                ],
                                "type": {
                                    "kind": 8426,
                                    "asserts": true,
                                    "parameterName": {
                                        "kind": 196712,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 38,
                                        "end": 40
                                    },
                                    "type": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 30,
                                    "end": 40
                                },
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 40
                            },
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097233,
                                            "expression": {
                                                "kind": 1073807915,
                                                "expression": {
                                                    "kind": 67175096,
                                                    "member": {
                                                        "kind": 196712,
                                                        "text": "console",
                                                        "rawText": "console",
                                                        "flags": 32768,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 45,
                                                        "end": 55
                                                    },
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "assert",
                                                        "rawText": "assert",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 56,
                                                        "end": 62
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 55,
                                                    "end": 62,
                                                    "period": {
                                                        "kind": 255,
                                                        "pos": 55,
                                                        "end": 56
                                                    }
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 3,
                                                    "elements": [
                                                        {
                                                            "kind": 65563,
                                                            "left": {
                                                                "kind": 65774,
                                                                "operator": "typeof",
                                                                "operand": {
                                                                    "kind": 196712,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 69,
                                                                    "end": 71
                                                                },
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 63,
                                                                "end": 71
                                                            },
                                                            "operator": "===",
                                                            "right": {
                                                                "kind": 4261583,
                                                                "text": "string",
                                                                "rawText": "string",
                                                                "flags": 33554432,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 75,
                                                                "end": 84
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 63,
                                                            "end": 84
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "transformFlags": 0,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "start": 69,
                                                    "end": 85
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 62,
                                                "end": 85
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 45,
                                            "end": 86
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 45,
                                    "end": 86
                                },
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 43,
                                "end": 88
                            },
                            "flags": 1073774592,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 88
                        },
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 88
                    }
                ],
                "flags": 32776,
                "intersects": false,
                "transformFlags": 0,
                "start": 5,
                "end": 88
            },
            "flags": 32776,
            "intersects": false,
            "transformFlags": 769,
            "start": 0,
            "end": 88
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "assertsString",
                "rawText": "assertsString",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 98,
                "end": 112
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 113,
                            "end": 114
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 4202498,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 115,
                            "end": 119
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 113,
                        "end": 119
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 113,
                "end": 120
            },
            "type": {
                "kind": 8426,
                "asserts": true,
                "parameterName": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 129,
                    "end": 131
                },
                "type": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 121,
                "end": 131
            },
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 1073807915,
                                "expression": {
                                    "kind": 67175096,
                                    "member": {
                                        "kind": 196712,
                                        "text": "console",
                                        "rawText": "console",
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 133,
                                        "end": 143
                                    },
                                    "expression": {
                                        "kind": 196711,
                                        "text": "assert",
                                        "rawText": "assert",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 144,
                                        "end": 150
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 143,
                                    "end": 150,
                                    "period": {
                                        "kind": 255,
                                        "pos": 143,
                                        "end": 144
                                    }
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [
                                        {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 65774,
                                                "operator": "typeof",
                                                "operand": {
                                                    "kind": 196712,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 157,
                                                    "end": 159
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 151,
                                                "end": 159
                                            },
                                            "operator": "===",
                                            "right": {
                                                "kind": 4261583,
                                                "text": "string",
                                                "rawText": "string",
                                                "flags": 33554432,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 163,
                                                "end": 172
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 151,
                                            "end": 172
                                        }
                                    ],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 0,
                                    "intersects": false,
                                    "start": 157,
                                    "end": 173
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 150,
                                "end": 173
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 133,
                            "end": 174
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 133,
                    "end": 174
                },
                "flags": 32768,
                "intersects": false,
                "transformFlags": 0,
                "start": 131,
                "end": 176
            },
            "typeParameters": null,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 256,
            "start": 88,
            "end": 176
        },
        {
            "kind": 142,
            "isConst": true,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "assertStringWithGuard",
                            "rawText": "assertStringWithGuard",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 183,
                            "end": 205
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 83976,
                            "typeParameters": null,
                            "arrowParameters": {
                                "kind": 81929,
                                "elements": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 16473,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 196712,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 209,
                                                "end": 210
                                            },
                                            "isOptional": false,
                                            "type": {
                                                "kind": 4202498,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 211,
                                                "end": 215
                                            },
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 207,
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
                                        "start": 207,
                                        "end": 237
                                    }
                                ],
                                "type": {
                                    "kind": 8426,
                                    "asserts": true,
                                    "parameterName": {
                                        "kind": 196712,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 225,
                                        "end": 227
                                    },
                                    "type": {
                                        "kind": 4202702,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 230,
                                        "end": 237
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 217,
                                    "end": 237
                                },
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 207,
                                "end": 237
                            },
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097233,
                                            "expression": {
                                                "kind": 1073807915,
                                                "expression": {
                                                    "kind": 67175096,
                                                    "member": {
                                                        "kind": 196712,
                                                        "text": "console",
                                                        "rawText": "console",
                                                        "flags": 32768,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 242,
                                                        "end": 252
                                                    },
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "assert",
                                                        "rawText": "assert",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 253,
                                                        "end": 259
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 252,
                                                    "end": 259,
                                                    "period": {
                                                        "kind": 255,
                                                        "pos": 252,
                                                        "end": 253
                                                    }
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 3,
                                                    "elements": [
                                                        {
                                                            "kind": 65563,
                                                            "left": {
                                                                "kind": 65774,
                                                                "operator": "typeof",
                                                                "operand": {
                                                                    "kind": 196712,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 266,
                                                                    "end": 268
                                                                },
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 260,
                                                                "end": 268
                                                            },
                                                            "operator": "===",
                                                            "right": {
                                                                "kind": 4261583,
                                                                "text": "string",
                                                                "rawText": "string",
                                                                "flags": 33554432,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 272,
                                                                "end": 281
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 260,
                                                            "end": 281
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "transformFlags": 0,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "start": 266,
                                                    "end": 282
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 259,
                                                "end": 282
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 242,
                                            "end": 283
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 242,
                                    "end": 283
                                },
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 240,
                                "end": 285
                            },
                            "flags": 1073774592,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 207,
                            "end": 285
                        },
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 183,
                        "end": 285
                    }
                ],
                "flags": 32776,
                "intersects": false,
                "transformFlags": 0,
                "start": 183,
                "end": 285
            },
            "flags": 32776,
            "intersects": false,
            "transformFlags": 769,
            "start": 176,
            "end": 285
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "assertsStringWithGuard",
                "rawText": "assertsStringWithGuard",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 295,
                "end": 318
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 319,
                            "end": 320
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 4202498,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 321,
                            "end": 325
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 319,
                        "end": 325
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 319,
                "end": 326
            },
            "type": {
                "kind": 8426,
                "asserts": true,
                "parameterName": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 335,
                    "end": 337
                },
                "type": {
                    "kind": 4202702,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 340,
                    "end": 347
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 327,
                "end": 347
            },
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 1073807915,
                                "expression": {
                                    "kind": 67175096,
                                    "member": {
                                        "kind": 196712,
                                        "text": "console",
                                        "rawText": "console",
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 349,
                                        "end": 359
                                    },
                                    "expression": {
                                        "kind": 196711,
                                        "text": "assert",
                                        "rawText": "assert",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 360,
                                        "end": 366
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 359,
                                    "end": 366,
                                    "period": {
                                        "kind": 255,
                                        "pos": 359,
                                        "end": 360
                                    }
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [
                                        {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 65774,
                                                "operator": "typeof",
                                                "operand": {
                                                    "kind": 196712,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 373,
                                                    "end": 375
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 367,
                                                "end": 375
                                            },
                                            "operator": "===",
                                            "right": {
                                                "kind": 4261583,
                                                "text": "string",
                                                "rawText": "string",
                                                "flags": 33554432,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 379,
                                                "end": 388
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 367,
                                            "end": 388
                                        }
                                    ],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 0,
                                    "intersects": false,
                                    "start": 373,
                                    "end": 389
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 366,
                                "end": 389
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 349,
                            "end": 390
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 349,
                    "end": 390
                },
                "flags": 32768,
                "intersects": false,
                "transformFlags": 0,
                "start": 347,
                "end": 392
            },
            "typeParameters": null,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 256,
            "start": 285,
            "end": 392
        },
        {
            "kind": 8311,
            "name": {
                "kind": 196712,
                "text": "AssertFoo",
                "rawText": "AssertFoo",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 403,
                "end": 413
            },
            "typeParameters": null,
            "heritageClauses": null,
            "objectTypeMembers": {
                "kind": 536871081,
                "members": [
                    {
                        "kind": 8339,
                        "name": {
                            "kind": 196711,
                            "text": "isString",
                            "rawText": "isString",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 415,
                            "end": 426
                        },
                        "isStatic": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "accessModifier": null,
                        "typeParameters": null,
                        "parameters": {
                            "kind": 134226095,
                            "parameterList": [
                                {
                                    "kind": 134226094,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "node",
                                        "rawText": "node",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1025,
                                        "start": 427,
                                        "end": 431
                                    },
                                    "isOptional": false,
                                    "type": {
                                        "kind": 4202498,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 432,
                                        "end": 436
                                    },
                                    "initializer": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 427,
                                    "end": 436
                                }
                            ],
                            "trailingcomma": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 427,
                            "end": 436
                        },
                        "returnType": {
                            "kind": 8426,
                            "asserts": true,
                            "parameterName": {
                                "kind": 196712,
                                "text": "node",
                                "rawText": "node",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 446,
                                "end": 451
                            },
                            "type": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 438,
                            "end": 451
                        },
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 415,
                        "end": 452
                    }
                ],
                "multiline": true,
                "flags": 32768,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 415,
                "end": 452
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 392,
            "end": 454
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "AssertsFoo",
                "rawText": "AssertsFoo",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 461,
                "end": 472
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
                                "text": "isBar",
                                "rawText": "isBar",
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 474,
                                "end": 482
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 483,
                                "end": 484
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
                                            "expression": null,
                                            "flags": 32768,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 500,
                                            "end": 512
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 500,
                                    "end": 512
                                },
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 498,
                                "end": 516
                            },
                            "decorators": null,
                            "type": {
                                "kind": 8426,
                                "asserts": true,
                                "parameterName": {
                                    "kind": 4202716,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 493,
                                    "end": 498
                                },
                                "type": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 485,
                                "end": 498
                            },
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 482,
                            "end": 516
                        },
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 474,
                        "end": 516
                    },
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "isBaz",
                            "rawText": "isBaz",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 516,
                            "end": 524
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 83976,
                            "typeParameters": null,
                            "arrowParameters": {
                                "kind": 81929,
                                "elements": [],
                                "type": {
                                    "kind": 8426,
                                    "asserts": true,
                                    "parameterName": {
                                        "kind": 4202716,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 538,
                                        "end": 543
                                    },
                                    "type": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 530,
                                    "end": 543
                                },
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 526,
                                "end": 526
                            },
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097346,
                                            "expression": null,
                                            "flags": 32768,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 548,
                                            "end": 560
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 548,
                                    "end": 560
                                },
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 546,
                                "end": 564
                            },
                            "flags": 1073774592,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 526,
                            "end": 564
                        },
                        "decorators": null,
                        "accessModifier": null,
                        "isStatic": false,
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 524352,
                        "start": 516,
                        "end": 564
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 1,
                "start": 474,
                "end": 566
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 1,
            "start": 454,
            "end": 566
        }
    ],
    "isModule": true,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 566
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

