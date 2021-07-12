# Kataw parser test case

## Input

`````js
let a = (x => (x, x /*1*/* 2/*2*/)/*3*/,/*4*/ 3);
let b = ((x, y) => (x, x * /*1*/y), 1);

let c = (x => /*1*/ x * /*2*/ x)(2);

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
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": {
                            "kind": 121,
                            "expression": {
                                "kind": 132,
                                "expressions": [
                                    {
                                        "kind": 271,
                                        "asyncKeyword": null,
                                        "typeParameters": null,
                                        "arrowPatameterList": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 9,
                                            "end": 10
                                        },
                                        "returnType": null,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 10,
                                            "end": 13
                                        },
                                        "contents": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 132,
                                                "expressions": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 15,
                                                        "end": 16
                                                    },
                                                    {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 17,
                                                            "end": 19
                                                        },
                                                        "operatorToken": {
                                                            "kind": 67143222,
                                                            "flags": 96,
                                                            "transformFlags": 32,
                                                            "start": 19,
                                                            "end": 26
                                                        },
                                                        "right": {
                                                            "kind": 201392130,
                                                            "text": 2,
                                                            "rawText": "2",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 26,
                                                            "end": 28
                                                        },
                                                        "flags": 96,
                                                        "transformFlags": 5120,
                                                        "start": 13,
                                                        "end": 28
                                                    }
                                                ],
                                                "flags": 32,
                                                "transformFlags": 1024,
                                                "start": 13,
                                                "end": 34
                                            },
                                            "flags": 13,
                                            "transformFlags": 0,
                                            "start": 32,
                                            "end": 34
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 9,
                                        "end": 34
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 3,
                                        "rawText": "3",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 40,
                                        "end": 47
                                    }
                                ],
                                "flags": 32,
                                "transformFlags": 1024,
                                "start": 7,
                                "end": 47
                            },
                            "flags": 7,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 48
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 48
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 48
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 49
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 49,
                "end": 53
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 53,
                            "end": 55
                        },
                        "type": null,
                        "initializer": {
                            "kind": 121,
                            "expression": {
                                "kind": 132,
                                "expressions": [
                                    {
                                        "kind": 271,
                                        "asyncKeyword": null,
                                        "typeParameters": null,
                                        "arrowPatameterList": {
                                            "kind": 342,
                                            "parameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 60,
                                                    "end": 61
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 62,
                                                    "end": 64
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 60,
                                            "end": 65
                                        },
                                        "returnType": null,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 65,
                                            "end": 68
                                        },
                                        "contents": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 132,
                                                "expressions": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 70,
                                                        "end": 71
                                                    },
                                                    {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 72,
                                                            "end": 74
                                                        },
                                                        "operatorToken": {
                                                            "kind": 67143222,
                                                            "flags": 96,
                                                            "transformFlags": 32,
                                                            "start": 74,
                                                            "end": 76
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "y",
                                                            "rawText": "y",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 76,
                                                            "end": 83
                                                        },
                                                        "flags": 96,
                                                        "transformFlags": 5120,
                                                        "start": 68,
                                                        "end": 83
                                                    }
                                                ],
                                                "flags": 32,
                                                "transformFlags": 1024,
                                                "start": 68,
                                                "end": 84
                                            },
                                            "flags": 68,
                                            "transformFlags": 0,
                                            "start": 32,
                                            "end": 84
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 59,
                                        "end": 84
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 85,
                                        "end": 87
                                    }
                                ],
                                "flags": 32,
                                "transformFlags": 1024,
                                "start": 57,
                                "end": 87
                            },
                            "flags": 57,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 88
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 53,
                        "end": 88
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 53,
                "end": 88
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 49,
            "end": 89
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 89,
                "end": 94
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 94,
                            "end": 96
                        },
                        "type": null,
                        "initializer": {
                            "kind": 131,
                            "expression": {
                                "kind": 121,
                                "expression": {
                                    "kind": 271,
                                    "asyncKeyword": null,
                                    "typeParameters": null,
                                    "arrowPatameterList": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 100,
                                        "end": 101
                                    },
                                    "returnType": null,
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 101,
                                        "end": 104
                                    },
                                    "contents": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 104,
                                            "end": 112
                                        },
                                        "operatorToken": {
                                            "kind": 67143222,
                                            "flags": 96,
                                            "transformFlags": 32,
                                            "start": 112,
                                            "end": 114
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 114,
                                            "end": 122
                                        },
                                        "flags": 96,
                                        "transformFlags": 5120,
                                        "start": 104,
                                        "end": 122
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 100,
                                    "end": 122
                                },
                                "flags": 98,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 123
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 124,
                                        "end": 125
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 124,
                                "end": 125
                            },
                            "flags": 268435488,
                            "transformFlags": 1,
                            "start": 98,
                            "end": 126
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 94,
                        "end": 126
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 94,
                "end": 126
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 89,
            "end": 127
        }
    ],
    "isModule": false,
    "source": "let a = (x => (x, x /*1*/* 2/*2*/)/*3*/,/*4*/ 3);\nlet b = ((x, y) => (x, x * /*1*/y), 1);\n\nlet c = (x => /*1*/ x * /*2*/ x)(2);\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 128
}
```

### Printed

```javascript
let a = (x => (x, x /*1*/ * 2 /*2*/) /*3*/, /*4*/ 3);
let b = ((x, y) => (x, x * y), 1);

let c = (x => x * x)(2);

```

### Diagnostics

```javascript
✔ No errors
```

