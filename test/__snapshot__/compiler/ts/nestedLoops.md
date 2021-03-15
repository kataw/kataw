# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export class Test  {
    constructor() {

        let outerArray: Array<number> = [1, 2, 3];
        let innerArray: Array<number> = [1, 2, 3];

        for (let outer of outerArray)
            for (let inner of innerArray) {
                this.aFunction((newValue, oldValue) => {
                    let x = outer + inner + newValue;
                });
            }
    }

    public aFunction(func: (newValue: any, oldValue: any) => void): void {
    }
}
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "export class Test  {\n    constructor() {\n\n        let outerArray: Array<number> = [1, 2, 3];\n        let innerArray: Array<number> = [1, 2, 3];\n\n        for (let outer of outerArray)\n            for (let inner of innerArray) {\n                this.aFunction((newValue, oldValue) => {\n                    let x = outer + inner + newValue;\n                });\n            }\n    }\n\n    public aFunction(func: (newValue: any, oldValue: any) => void): void {\n    }\n}",
    "filename": "",
    "statements": [
        {
            "kind": 76,
            "declaration": {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "Test",
                    "rawText": "Test",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 12,
                    "end": 17
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
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 32768,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 36
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 37,
                                    "end": 38
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [
                                            {
                                                "kind": 142,
                                                "isConst": false,
                                                "binding": {
                                                    "kind": 31,
                                                    "bindingList": [
                                                        {
                                                            "kind": 16525,
                                                            "binding": {
                                                                "kind": 131102,
                                                                "text": "outerArray",
                                                                "rawText": "outerArray",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 1025,
                                                                "start": 53,
                                                                "end": 64
                                                            },
                                                            "exclamation": false,
                                                            "type": {
                                                                "kind": 134226156,
                                                                "typeName": {
                                                                    "kind": 196711,
                                                                    "text": "Array",
                                                                    "rawText": "Array",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 65,
                                                                    "end": 71
                                                                },
                                                                "typeArguments": {
                                                                    "kind": 8419,
                                                                    "typeArgumentsList": [
                                                                        {
                                                                            "kind": 4202657,
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 2097152,
                                                                            "start": 72,
                                                                            "end": 78
                                                                        }
                                                                    ],
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 2097152,
                                                                    "start": 72,
                                                                    "end": 78
                                                                },
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 2097152,
                                                                "start": 65,
                                                                "end": 81
                                                            },
                                                            "initializer": {
                                                                "kind": 98822,
                                                                "elementList": {
                                                                    "kind": 65605,
                                                                    "elements": [
                                                                        {
                                                                            "kind": 4261540,
                                                                            "text": 1,
                                                                            "rawText": "1",
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "start": 83,
                                                                            "end": 84
                                                                        },
                                                                        {
                                                                            "kind": 4261540,
                                                                            "text": 2,
                                                                            "rawText": "2",
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "start": 85,
                                                                            "end": 87
                                                                        },
                                                                        {
                                                                            "kind": 4261540,
                                                                            "text": 3,
                                                                            "rawText": "3",
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "start": 88,
                                                                            "end": 90
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "multiline": false,
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 83,
                                                                    "end": 90
                                                                },
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 81,
                                                                "end": 91
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 53,
                                                            "end": 91
                                                        }
                                                    ],
                                                    "flags": 8,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 53,
                                                    "end": 91
                                                },
                                                "flags": 32776,
                                                "intersects": false,
                                                "transformFlags": 769,
                                                "start": 40,
                                                "end": 92
                                            },
                                            {
                                                "kind": 142,
                                                "isConst": false,
                                                "binding": {
                                                    "kind": 31,
                                                    "bindingList": [
                                                        {
                                                            "kind": 16525,
                                                            "binding": {
                                                                "kind": 131102,
                                                                "text": "innerArray",
                                                                "rawText": "innerArray",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 1025,
                                                                "start": 104,
                                                                "end": 115
                                                            },
                                                            "exclamation": false,
                                                            "type": {
                                                                "kind": 134226156,
                                                                "typeName": {
                                                                    "kind": 196711,
                                                                    "text": "Array",
                                                                    "rawText": "Array",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 116,
                                                                    "end": 122
                                                                },
                                                                "typeArguments": {
                                                                    "kind": 8419,
                                                                    "typeArgumentsList": [
                                                                        {
                                                                            "kind": 4202657,
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 2097152,
                                                                            "start": 123,
                                                                            "end": 129
                                                                        }
                                                                    ],
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 2097152,
                                                                    "start": 123,
                                                                    "end": 129
                                                                },
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 2097152,
                                                                "start": 116,
                                                                "end": 132
                                                            },
                                                            "initializer": {
                                                                "kind": 98822,
                                                                "elementList": {
                                                                    "kind": 65605,
                                                                    "elements": [
                                                                        {
                                                                            "kind": 4261540,
                                                                            "text": 1,
                                                                            "rawText": "1",
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "start": 134,
                                                                            "end": 135
                                                                        },
                                                                        {
                                                                            "kind": 4261540,
                                                                            "text": 2,
                                                                            "rawText": "2",
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "start": 136,
                                                                            "end": 138
                                                                        },
                                                                        {
                                                                            "kind": 4261540,
                                                                            "text": 3,
                                                                            "rawText": "3",
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "start": 139,
                                                                            "end": 141
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "multiline": false,
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 134,
                                                                    "end": 141
                                                                },
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 132,
                                                                "end": 142
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 104,
                                                            "end": 142
                                                        }
                                                    ],
                                                    "flags": 8,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 104,
                                                    "end": 142
                                                },
                                                "flags": 32776,
                                                "intersects": false,
                                                "transformFlags": 769,
                                                "start": 92,
                                                "end": 143
                                            },
                                            {
                                                "kind": 2099287,
                                                "initializer": {
                                                    "kind": 142,
                                                    "isConst": false,
                                                    "binding": {
                                                        "kind": 31,
                                                        "bindingList": [
                                                            {
                                                                "kind": 16525,
                                                                "binding": {
                                                                    "kind": 131102,
                                                                    "text": "outer",
                                                                    "rawText": "outer",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 1025,
                                                                    "start": 161,
                                                                    "end": 167
                                                                },
                                                                "exclamation": false,
                                                                "type": null,
                                                                "initializer": null,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 161,
                                                                "end": 167
                                                            }
                                                        ],
                                                        "flags": 8,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 161,
                                                        "end": 167
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 256,
                                                    "start": 158,
                                                    "end": 167
                                                },
                                                "expression": {
                                                    "kind": 196712,
                                                    "text": "outerArray",
                                                    "rawText": "outerArray",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 170,
                                                    "end": 181
                                                },
                                                "statement": {
                                                    "kind": 2099287,
                                                    "initializer": {
                                                        "kind": 142,
                                                        "isConst": false,
                                                        "binding": {
                                                            "kind": 31,
                                                            "bindingList": [
                                                                {
                                                                    "kind": 16525,
                                                                    "binding": {
                                                                        "kind": 131102,
                                                                        "text": "inner",
                                                                        "rawText": "inner",
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 1025,
                                                                        "start": 203,
                                                                        "end": 209
                                                                    },
                                                                    "exclamation": false,
                                                                    "type": null,
                                                                    "initializer": null,
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 203,
                                                                    "end": 209
                                                                }
                                                            ],
                                                            "flags": 8,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 203,
                                                            "end": 209
                                                        },
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 256,
                                                        "start": 200,
                                                        "end": 209
                                                    },
                                                    "expression": {
                                                        "kind": 196712,
                                                        "text": "innerArray",
                                                        "rawText": "innerArray",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 212,
                                                        "end": 223
                                                    },
                                                    "statement": {
                                                        "kind": 2099237,
                                                        "block": {
                                                            "kind": 2084,
                                                            "statements": [
                                                                {
                                                                    "kind": 2097233,
                                                                    "expression": {
                                                                        "kind": 1073807915,
                                                                        "expression": {
                                                                            "kind": 67175096,
                                                                            "member": {
                                                                                "kind": 4260571,
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "start": 226,
                                                                                "end": 247
                                                                            },
                                                                            "expression": {
                                                                                "kind": 196711,
                                                                                "text": "aFunction",
                                                                                "rawText": "aFunction",
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "start": 248,
                                                                                "end": 257
                                                                            },
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "start": 247,
                                                                            "end": 257,
                                                                            "period": {
                                                                                "kind": 255,
                                                                                "pos": 247,
                                                                                "end": 248
                                                                            }
                                                                        },
                                                                        "typeArguments": null,
                                                                        "argumentList": {
                                                                            "kind": 3,
                                                                            "elements": [
                                                                                {
                                                                                    "kind": 83976,
                                                                                    "typeParameters": null,
                                                                                    "arrowParameters": {
                                                                                        "kind": 81929,
                                                                                        "elements": [
                                                                                            {
                                                                                                "kind": 16473,
                                                                                                "ellipsis": false,
                                                                                                "binding": {
                                                                                                    "kind": 4325406,
                                                                                                    "text": "oldValue",
                                                                                                    "rawText": "oldValue",
                                                                                                    "flags": 0,
                                                                                                    "intersects": false,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 268,
                                                                                                    "end": 277
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
                                                                                                "start": 258,
                                                                                                "end": 278
                                                                                            },
                                                                                            {
                                                                                                "kind": 16473,
                                                                                                "ellipsis": false,
                                                                                                "binding": {
                                                                                                    "kind": 4325406,
                                                                                                    "text": "newValue",
                                                                                                    "rawText": "newValue",
                                                                                                    "flags": 0,
                                                                                                    "intersects": false,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 259,
                                                                                                    "end": 267
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
                                                                                                "start": 258,
                                                                                                "end": 278
                                                                                            }
                                                                                        ],
                                                                                        "type": null,
                                                                                        "accessModifier": null,
                                                                                        "trailingComma": false,
                                                                                        "flags": 0,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 0,
                                                                                        "start": 259,
                                                                                        "end": 277
                                                                                    },
                                                                                    "contents": {
                                                                                        "kind": 91,
                                                                                        "functionStatementList": {
                                                                                            "kind": 94,
                                                                                            "statements": [
                                                                                                {
                                                                                                    "kind": 142,
                                                                                                    "isConst": false,
                                                                                                    "binding": {
                                                                                                        "kind": 31,
                                                                                                        "bindingList": [
                                                                                                            {
                                                                                                                "kind": 16525,
                                                                                                                "binding": {
                                                                                                                    "kind": 131102,
                                                                                                                    "text": "x",
                                                                                                                    "rawText": "x",
                                                                                                                    "flags": 0,
                                                                                                                    "intersects": false,
                                                                                                                    "transformFlags": 1025,
                                                                                                                    "start": 307,
                                                                                                                    "end": 309
                                                                                                                },
                                                                                                                "exclamation": false,
                                                                                                                "type": null,
                                                                                                                "initializer": {
                                                                                                                    "kind": 65563,
                                                                                                                    "left": {
                                                                                                                        "kind": 65563,
                                                                                                                        "left": {
                                                                                                                            "kind": 196712,
                                                                                                                            "text": "outer",
                                                                                                                            "rawText": "outer",
                                                                                                                            "flags": 0,
                                                                                                                            "intersects": false,
                                                                                                                            "transformFlags": 0,
                                                                                                                            "start": 311,
                                                                                                                            "end": 317
                                                                                                                        },
                                                                                                                        "operator": "+",
                                                                                                                        "right": {
                                                                                                                            "kind": 196712,
                                                                                                                            "text": "inner",
                                                                                                                            "rawText": "inner",
                                                                                                                            "flags": 0,
                                                                                                                            "intersects": false,
                                                                                                                            "transformFlags": 0,
                                                                                                                            "start": 319,
                                                                                                                            "end": 325
                                                                                                                        },
                                                                                                                        "flags": 0,
                                                                                                                        "intersects": false,
                                                                                                                        "transformFlags": 0,
                                                                                                                        "start": 311,
                                                                                                                        "end": 325
                                                                                                                    },
                                                                                                                    "operator": "+",
                                                                                                                    "right": {
                                                                                                                        "kind": 196712,
                                                                                                                        "text": "newValue",
                                                                                                                        "rawText": "newValue",
                                                                                                                        "flags": 0,
                                                                                                                        "intersects": false,
                                                                                                                        "transformFlags": 0,
                                                                                                                        "start": 327,
                                                                                                                        "end": 336
                                                                                                                    },
                                                                                                                    "flags": 0,
                                                                                                                    "intersects": false,
                                                                                                                    "transformFlags": 0,
                                                                                                                    "start": 311,
                                                                                                                    "end": 336
                                                                                                                },
                                                                                                                "flags": 0,
                                                                                                                "intersects": false,
                                                                                                                "transformFlags": 0,
                                                                                                                "start": 307,
                                                                                                                "end": 336
                                                                                                            }
                                                                                                        ],
                                                                                                        "flags": 8,
                                                                                                        "intersects": false,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 307,
                                                                                                        "end": 336
                                                                                                    },
                                                                                                    "flags": 32776,
                                                                                                    "intersects": false,
                                                                                                    "transformFlags": 769,
                                                                                                    "start": 283,
                                                                                                    "end": 337
                                                                                                }
                                                                                            ],
                                                                                            "multiline": true,
                                                                                            "flags": 32768,
                                                                                            "intersects": false,
                                                                                            "transformFlags": 0,
                                                                                            "start": 283,
                                                                                            "end": 337
                                                                                        },
                                                                                        "flags": 0,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 0,
                                                                                        "start": 281,
                                                                                        "end": 355
                                                                                    },
                                                                                    "flags": 1073741824,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "start": 258,
                                                                                    "end": 355
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "transformFlags": 0,
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "start": 259,
                                                                            "end": 356
                                                                        },
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 257,
                                                                        "end": 356
                                                                    },
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 226,
                                                                    "end": 357
                                                                }
                                                            ],
                                                            "multiline": true,
                                                            "flags": 32768,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 226,
                                                            "end": 357
                                                        },
                                                        "flags": 32768,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 224,
                                                        "end": 371
                                                    },
                                                    "isAwait": false,
                                                    "flags": 32768,
                                                    "intersects": false,
                                                    "transformFlags": 1,
                                                    "start": 182,
                                                    "end": 371
                                                },
                                                "isAwait": false,
                                                "flags": 32768,
                                                "intersects": false,
                                                "transformFlags": 1,
                                                "start": 143,
                                                "end": 371
                                            }
                                        ],
                                        "multiline": true,
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 40,
                                        "end": 371
                                    },
                                    "flags": 32768,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 38,
                                    "end": 377
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 524288,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 377
                            },
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 20,
                            "end": 377
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
                                    "text": "aFunction",
                                    "rawText": "aFunction",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 389,
                                    "end": 399
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [
                                        {
                                            "kind": 16473,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "func",
                                                "rawText": "func",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 400,
                                                "end": 404
                                            },
                                            "isOptional": false,
                                            "type": {
                                                "kind": 8287,
                                                "typeParameters": null,
                                                "parameters": {
                                                    "kind": 134226095,
                                                    "parameterList": [
                                                        {
                                                            "kind": 134226094,
                                                            "ellipsis": false,
                                                            "binding": {
                                                                "kind": 131102,
                                                                "text": "newValue",
                                                                "rawText": "newValue",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 1025,
                                                                "start": 407,
                                                                "end": 415
                                                            },
                                                            "isOptional": false,
                                                            "type": {
                                                                "kind": 4202498,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 2097152,
                                                                "start": 416,
                                                                "end": 420
                                                            },
                                                            "initializer": null,
                                                            "accessModifier": null,
                                                            "isReadOnly": false,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1,
                                                            "start": 407,
                                                            "end": 420
                                                        },
                                                        {
                                                            "kind": 134226094,
                                                            "ellipsis": false,
                                                            "binding": {
                                                                "kind": 131102,
                                                                "text": "oldValue",
                                                                "rawText": "oldValue",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 1025,
                                                                "start": 421,
                                                                "end": 430
                                                            },
                                                            "isOptional": false,
                                                            "type": {
                                                                "kind": 4202498,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 2097152,
                                                                "start": 431,
                                                                "end": 435
                                                            },
                                                            "initializer": null,
                                                            "accessModifier": null,
                                                            "isReadOnly": false,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1,
                                                            "start": 421,
                                                            "end": 435
                                                        }
                                                    ],
                                                    "trailingcomma": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "start": 407,
                                                    "end": 435
                                                },
                                                "returnType": {
                                                    "kind": 4202742,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "start": 439,
                                                    "end": 444
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 405,
                                                "end": 444
                                            },
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 400,
                                            "end": 444
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 400,
                                    "end": 445
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": true,
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 453,
                                        "end": 453
                                    },
                                    "flags": 32768,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 451,
                                    "end": 459
                                },
                                "decorators": null,
                                "type": {
                                    "kind": 4202742,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 446,
                                    "end": 451
                                },
                                "accessModifier": {
                                    "kind": 4194494,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 377,
                                    "end": 389
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 399,
                                "end": 459
                            },
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 377,
                            "end": 459
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 20,
                    "end": 461
                },
                "decorators": null,
                "isAbstract": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 1,
                "start": 6,
                "end": 461
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "isTypeOnly": false,
            "flags": 1,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 461
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
    "end": 461
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

