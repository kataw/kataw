# Kataw parser test case

## Input

`````js
(x?: number): any => x;
((k?) => k + 1)();

(q, x?: number): any => x;
(q, (k?) => k + 1)();
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 17,
                    "end": 20
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 1,
                            "end": 2
                        },
                        "optionalToken": {
                            "kind": 134217750,
                            "flags": 64,
                            "start": 2,
                            "end": 3
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "start": 4,
                                "end": 11
                            },
                            "flags": 2097152,
                            "start": 4,
                            "end": 11
                        },
                        "right": null,
                        "flags": 32,
                        "start": 0,
                        "end": 11
                    }
                ],
                "asyncKeyword": null,
                "returnType": {
                    "kind": 139,
                    "bitwiseOrToken": null,
                    "bitwiseAndToken": null,
                    "type": {
                        "kind": 134234252,
                        "flags": 2097216,
                        "start": 13,
                        "end": 17
                    },
                    "flags": 2097152,
                    "start": 13,
                    "end": 17
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 20,
                    "end": 22
                },
                "flags": 32,
                "start": 0,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 23
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 29,
                            "end": 32
                        },
                        "typeParameters": null,
                        "parameters": [
                            {
                                "kind": 281,
                                "ellipsisToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "k",
                                    "rawText": "k",
                                    "flags": 96,
                                    "start": 26,
                                    "end": 27
                                },
                                "optionalToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "start": 27,
                                    "end": 28
                                },
                                "type": null,
                                "right": null,
                                "flags": 32,
                                "start": 25,
                                "end": 28
                            }
                        ],
                        "asyncKeyword": null,
                        "returnType": null,
                        "contents": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "k",
                                "rawText": "k",
                                "flags": 96,
                                "start": 32,
                                "end": 34
                            },
                            "operatorToken": {
                                "kind": 99634,
                                "flags": 96,
                                "start": 34,
                                "end": 36
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 36,
                                "end": 38
                            },
                            "flags": 32,
                            "start": 32,
                            "end": 38
                        },
                        "flags": 32,
                        "start": 25,
                        "end": 38
                    },
                    "flags": 32,
                    "start": 23,
                    "end": 39
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 40,
                    "end": 40
                },
                "flags": 268435488,
                "start": 23,
                "end": 41
            },
            "flags": 16,
            "start": 23,
            "end": 42
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 64,
                    "end": 67
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "q",
                        "rawText": "q",
                        "flags": 96,
                        "start": 45,
                        "end": 46
                    },
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 47,
                            "end": 49
                        },
                        "optionalToken": {
                            "kind": 134217750,
                            "flags": 64,
                            "start": 49,
                            "end": 50
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "start": 51,
                                "end": 58
                            },
                            "flags": 2097152,
                            "start": 51,
                            "end": 58
                        },
                        "right": null,
                        "flags": 32,
                        "start": 42,
                        "end": 58
                    }
                ],
                "asyncKeyword": null,
                "returnType": {
                    "kind": 139,
                    "bitwiseOrToken": null,
                    "bitwiseAndToken": null,
                    "type": {
                        "kind": 134234252,
                        "flags": 2097216,
                        "start": 60,
                        "end": 64
                    },
                    "flags": 2097152,
                    "start": 60,
                    "end": 64
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 67,
                    "end": 69
                },
                "flags": 32,
                "start": 42,
                "end": 69
            },
            "flags": 16,
            "start": 42,
            "end": 70
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "expressions": [
                            {
                                "kind": 134299649,
                                "text": "q",
                                "rawText": "q",
                                "flags": 96,
                                "start": 72,
                                "end": 73
                            },
                            {
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 79,
                                    "end": 82
                                },
                                "typeParameters": null,
                                "parameters": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "k",
                                            "rawText": "k",
                                            "flags": 96,
                                            "start": 76,
                                            "end": 77
                                        },
                                        "optionalToken": {
                                            "kind": 134217750,
                                            "flags": 64,
                                            "start": 77,
                                            "end": 78
                                        },
                                        "type": null,
                                        "right": null,
                                        "flags": 32,
                                        "start": 74,
                                        "end": 78
                                    }
                                ],
                                "asyncKeyword": null,
                                "returnType": null,
                                "contents": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "k",
                                        "rawText": "k",
                                        "flags": 96,
                                        "start": 82,
                                        "end": 84
                                    },
                                    "operatorToken": {
                                        "kind": 99634,
                                        "flags": 96,
                                        "start": 84,
                                        "end": 86
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 86,
                                        "end": 88
                                    },
                                    "flags": 32,
                                    "start": 82,
                                    "end": 88
                                },
                                "flags": 32,
                                "start": 74,
                                "end": 88
                            }
                        ],
                        "flags": 32,
                        "start": 70,
                        "end": 88
                    },
                    "flags": 32,
                    "start": 70,
                    "end": 89
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 90,
                    "end": 90
                },
                "flags": 268435488,
                "start": 70,
                "end": 91
            },
            "flags": 16,
            "start": 70,
            "end": 92
        }
    ],
    "isModule": false,
    "source": "(x?: number): any => x;\n((k?) => k + 1)();\n\n(q, x?: number): any => x;\n(q, (k?) => k + 1)();",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 92
}
```

### Printed

```javascript

(x?) =>  x;
((k?) =>  k + 1)();
(q, x?) =>  x;
(q, (k?) =>  k + 1)();
```

### Diagnostics

```javascript
✔ No errors
```

