# Kataw parser test case

## Input

`````js
class A { }
class B extends A { x: number; }

declare function f(p: A, q: B): number;
declare function f(p: B, q: A): string;

var x: B;
var t: number = f(x, x); // Not an error
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "class A { }\nclass B extends A { x: number; }\n\ndeclare function f(p: A, q: B): number;\ndeclare function f(p: B, q: A): string;\n\nvar x: B;\nvar t: number = f(x, x); // Not an error",
    "filename": "",
    "statements": [
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "A",
                "rawText": "A",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 1,
                "start": 9,
                "end": 11
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 1,
            "start": 0,
            "end": 11
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "B",
                "rawText": "B",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 17,
                "end": 19
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 52,
                "expression": {
                    "kind": 196712,
                    "text": "A",
                    "rawText": "A",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 27,
                    "end": 29
                },
                "typeArguments": null,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 27,
                "end": 29
            },
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 31,
                            "end": 33
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
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 34,
                            "end": 41
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isStatic": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 31,
                        "end": 42
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 1,
                "start": 31,
                "end": 44
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 1,
            "start": 11,
            "end": 44
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "f",
                "rawText": "f",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 62,
                "end": 64
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "p",
                            "rawText": "p",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 65,
                            "end": 66
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "A",
                                "rawText": "A",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 67,
                                "end": 69
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 67,
                            "end": 70
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 65,
                        "end": 69
                    },
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "q",
                            "rawText": "q",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 70,
                            "end": 72
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "B",
                                "rawText": "B",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 73,
                                "end": 75
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 73,
                            "end": 76
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 70,
                        "end": 75
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 65,
                "end": 76
            },
            "type": {
                "kind": 4202657,
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 77,
                "end": 84
            },
            "contents": null,
            "typeParameters": null,
            "flags": 402685952,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 53,
            "end": 85
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "f",
                "rawText": "f",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 102,
                "end": 104
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "p",
                            "rawText": "p",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 105,
                            "end": 106
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "B",
                                "rawText": "B",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 107,
                                "end": 109
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 107,
                            "end": 110
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 105,
                        "end": 109
                    },
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "q",
                            "rawText": "q",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 110,
                            "end": 112
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "A",
                                "rawText": "A",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 113,
                                "end": 115
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 113,
                            "end": 116
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 110,
                        "end": 115
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 105,
                "end": 116
            },
            "type": {
                "kind": 4202702,
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 117,
                "end": 124
            },
            "contents": null,
            "typeParameters": null,
            "flags": 402685952,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 93,
            "end": 125
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 130,
                            "end": 132
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "B",
                                "rawText": "B",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 133,
                                "end": 135
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 133,
                            "end": 136
                        },
                        "initializer": null,
                        "flags": 130,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 135
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 130,
                "end": 135
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 125,
            "end": 136
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "t",
                            "rawText": "t",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 140,
                            "end": 142
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 4202657,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 143,
                            "end": 150
                        },
                        "initializer": {
                            "kind": 1073807915,
                            "expression": {
                                "kind": 196712,
                                "text": "f",
                                "rawText": "f",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 152,
                                "end": 154
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [
                                    {
                                        "kind": 196712,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 155,
                                        "end": 156
                                    },
                                    {
                                        "kind": 196712,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 157,
                                        "end": 159
                                    }
                                ],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 156,
                                "end": 160
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 154,
                            "end": 160
                        },
                        "flags": 140,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 160
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 140,
                "end": 160
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 136,
            "end": 161
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 177
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

