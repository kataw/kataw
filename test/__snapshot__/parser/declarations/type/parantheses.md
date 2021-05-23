# Kataw parser test case

## Input

`````js
type A = (<T>(T) => $Foo<T>) & (<T>(T) => $Foo<T>);
type B = (<T>(T) => $Foo<T>) | (<T>(T) => $Foo<T>);
type C = (<T>(T) => $Foo<T>)[];
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
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 0,
                "end": 6
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "type": {
                "kind": 260,
                "type": {
                    "kind": 260,
                    "type": {
                        "kind": 144,
                        "id": {
                            "kind": 134299649,
                            "text": "T",
                            "rawText": "T",
                            "flags": 96,
                            "start": 14,
                            "end": 15
                        },
                        "typeParameters": null,
                        "flags": 0,
                        "start": 14,
                        "end": 15
                    },
                    "flags": 0,
                    "start": 10,
                    "end": 16
                },
                "flags": 0,
                "start": 8,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 16
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "$Foo",
                        "rawText": "$Foo",
                        "flags": 96,
                        "start": 19,
                        "end": 24
                    },
                    "operatorToken": {
                        "kind": 536971330,
                        "flags": 64,
                        "start": 24,
                        "end": 25
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 25,
                        "end": 26
                    },
                    "flags": 32,
                    "start": 19,
                    "end": 26
                },
                "operatorToken": {
                    "kind": 34883,
                    "flags": 64,
                    "start": 26,
                    "end": 27
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 27,
                    "end": 27
                },
                "flags": 32,
                "start": 19,
                "end": 27
            },
            "flags": 16,
            "start": 19,
            "end": 27
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 28,
                    "end": 28
                },
                "operatorToken": {
                    "kind": 134252103,
                    "flags": 64,
                    "start": 28,
                    "end": 30
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 0,
                            "start": 38,
                            "end": 41
                        },
                        "typeParameters": {
                            "kind": 265,
                            "typeParameters": [
                                {
                                    "kind": 146,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 96,
                                        "start": 33,
                                        "end": 34
                                    },
                                    "type": null,
                                    "defaultType": null,
                                    "flags": 0,
                                    "start": 33,
                                    "end": 34
                                }
                            ],
                            "flags": 0,
                            "start": 32,
                            "end": 35
                        },
                        "parameters": [
                            {
                                "kind": 134299649,
                                "text": "T",
                                "rawText": "T",
                                "flags": 96,
                                "start": 36,
                                "end": 37
                            }
                        ],
                        "asyncKeyword": null,
                        "returnType": null,
                        "contents": {
                            "kind": 198,
                            "left": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "$Foo",
                                    "rawText": "$Foo",
                                    "flags": 96,
                                    "start": 41,
                                    "end": 46
                                },
                                "operatorToken": {
                                    "kind": 536971330,
                                    "flags": 64,
                                    "start": 46,
                                    "end": 47
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 96,
                                    "start": 47,
                                    "end": 48
                                },
                                "flags": 32,
                                "start": 41,
                                "end": 48
                            },
                            "operatorToken": {
                                "kind": 34883,
                                "flags": 64,
                                "start": 48,
                                "end": 49
                            },
                            "right": {
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 49,
                                "end": 49
                            },
                            "flags": 32,
                            "start": 41,
                            "end": 49
                        },
                        "flags": 32,
                        "start": 32,
                        "end": 49
                    },
                    "flags": 32,
                    "start": 30,
                    "end": 50
                },
                "flags": 32,
                "start": 28,
                "end": 50
            },
            "flags": 16,
            "start": 28,
            "end": 51
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 51,
                "end": 58
            },
            "name": {
                "kind": 134299649,
                "text": "B",
                "rawText": "B",
                "flags": 96,
                "start": 56,
                "end": 58
            },
            "typeParameters": null,
            "type": {
                "kind": 260,
                "type": {
                    "kind": 260,
                    "type": {
                        "kind": 144,
                        "id": {
                            "kind": 134299649,
                            "text": "T",
                            "rawText": "T",
                            "flags": 96,
                            "start": 66,
                            "end": 67
                        },
                        "typeParameters": null,
                        "flags": 0,
                        "start": 66,
                        "end": 67
                    },
                    "flags": 0,
                    "start": 62,
                    "end": 68
                },
                "flags": 0,
                "start": 60,
                "end": 68
            },
            "flags": 16,
            "start": 51,
            "end": 68
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "$Foo",
                        "rawText": "$Foo",
                        "flags": 96,
                        "start": 71,
                        "end": 76
                    },
                    "operatorToken": {
                        "kind": 536971330,
                        "flags": 64,
                        "start": 76,
                        "end": 77
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 77,
                        "end": 78
                    },
                    "flags": 32,
                    "start": 71,
                    "end": 78
                },
                "operatorToken": {
                    "kind": 34883,
                    "flags": 64,
                    "start": 78,
                    "end": 79
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 79,
                    "end": 79
                },
                "flags": 32,
                "start": 71,
                "end": 79
            },
            "flags": 16,
            "start": 71,
            "end": 79
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 80,
                    "end": 80
                },
                "operatorToken": {
                    "kind": 134251592,
                    "flags": 64,
                    "start": 80,
                    "end": 82
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 0,
                            "start": 90,
                            "end": 93
                        },
                        "typeParameters": {
                            "kind": 265,
                            "typeParameters": [
                                {
                                    "kind": 146,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 96,
                                        "start": 85,
                                        "end": 86
                                    },
                                    "type": null,
                                    "defaultType": null,
                                    "flags": 0,
                                    "start": 85,
                                    "end": 86
                                }
                            ],
                            "flags": 0,
                            "start": 84,
                            "end": 87
                        },
                        "parameters": [
                            {
                                "kind": 134299649,
                                "text": "T",
                                "rawText": "T",
                                "flags": 96,
                                "start": 88,
                                "end": 89
                            }
                        ],
                        "asyncKeyword": null,
                        "returnType": null,
                        "contents": {
                            "kind": 198,
                            "left": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "$Foo",
                                    "rawText": "$Foo",
                                    "flags": 96,
                                    "start": 93,
                                    "end": 98
                                },
                                "operatorToken": {
                                    "kind": 536971330,
                                    "flags": 64,
                                    "start": 98,
                                    "end": 99
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 96,
                                    "start": 99,
                                    "end": 100
                                },
                                "flags": 32,
                                "start": 93,
                                "end": 100
                            },
                            "operatorToken": {
                                "kind": 34883,
                                "flags": 64,
                                "start": 100,
                                "end": 101
                            },
                            "right": {
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 101,
                                "end": 101
                            },
                            "flags": 32,
                            "start": 93,
                            "end": 101
                        },
                        "flags": 32,
                        "start": 84,
                        "end": 101
                    },
                    "flags": 32,
                    "start": 82,
                    "end": 102
                },
                "flags": 32,
                "start": 80,
                "end": 102
            },
            "flags": 16,
            "start": 80,
            "end": 103
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 103,
                "end": 110
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 108,
                "end": 110
            },
            "typeParameters": null,
            "type": {
                "kind": 260,
                "type": {
                    "kind": 260,
                    "type": {
                        "kind": 144,
                        "id": {
                            "kind": 134299649,
                            "text": "T",
                            "rawText": "T",
                            "flags": 96,
                            "start": 118,
                            "end": 119
                        },
                        "typeParameters": null,
                        "flags": 0,
                        "start": 118,
                        "end": 119
                    },
                    "flags": 0,
                    "start": 114,
                    "end": 120
                },
                "flags": 0,
                "start": 112,
                "end": 120
            },
            "flags": 16,
            "start": 103,
            "end": 120
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "$Foo",
                        "rawText": "$Foo",
                        "flags": 96,
                        "start": 123,
                        "end": 128
                    },
                    "operatorToken": {
                        "kind": 536971330,
                        "flags": 64,
                        "start": 128,
                        "end": 129
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 129,
                        "end": 130
                    },
                    "flags": 32,
                    "start": 123,
                    "end": 130
                },
                "operatorToken": {
                    "kind": 34883,
                    "flags": 64,
                    "start": 130,
                    "end": 131
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 131,
                    "end": 131
                },
                "flags": 32,
                "start": 123,
                "end": 131
            },
            "flags": 16,
            "start": 123,
            "end": 131
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 133,
                    "end": 133
                },
                "flags": 32,
                "start": 132,
                "end": 134
            },
            "flags": 16,
            "start": 132,
            "end": 135
        }
    ],
    "isModule": false,
    "source": "type A = (<T>(T) => $Foo<T>) & (<T>(T) => $Foo<T>);\ntype B = (<T>(T) => $Foo<T>) | (<T>(T) => $Foo<T>);\ntype C = (<T>(T) => $Foo<T>)[];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 135
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 16, end: 19
✖ Expression expected - start: 27, end: 28
✖ Expression expected - start: 28, end: 30
✖ Expression expected - start: 49, end: 50
✖ Expected a ')' to match the '(' token here - start: 68, end: 71
✖ Expression expected - start: 79, end: 80
✖ Expression expected - start: 80, end: 82
✖ Expression expected - start: 101, end: 102
✖ Expected a ')' to match the '(' token here - start: 120, end: 123
✖ Expression expected - start: 131, end: 132

```

