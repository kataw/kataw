# Kataw parser test case

## Input

`````js
let a = (x => (x, x * 2), 3);
let b = ((x, y) => (x, x * y), 1);
let c = (x => x * x)(2);
let d = (1, 2, 3);
`````

## Options

### Parser Options

`````js
{}
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
                                                            "end": 21
                                                        },
                                                        "right": {
                                                            "kind": 201392130,
                                                            "text": 2,
                                                            "rawText": "2",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 21,
                                                            "end": 23
                                                        },
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 13,
                                                        "end": 23
                                                    }
                                                ],
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 13,
                                                "end": 24
                                            },
                                            "flags": 13,
                                            "transformFlags": 0,
                                            "start": 32,
                                            "end": 24
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 9,
                                        "end": 24
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 3,
                                        "rawText": "3",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 25,
                                        "end": 27
                                    }
                                ],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 27
                            },
                            "flags": 7,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 28
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 3,
                        "end": 28
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 28
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 29
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 29,
                "end": 33
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
                            "start": 33,
                            "end": 35
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
                                                    "start": 40,
                                                    "end": 41
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 42,
                                                    "end": 44
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 40,
                                            "end": 45
                                        },
                                        "returnType": null,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 45,
                                            "end": 48
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
                                                        "start": 50,
                                                        "end": 51
                                                    },
                                                    {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 52,
                                                            "end": 54
                                                        },
                                                        "operatorToken": {
                                                            "kind": 67143222,
                                                            "flags": 96,
                                                            "transformFlags": 32,
                                                            "start": 54,
                                                            "end": 56
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "y",
                                                            "rawText": "y",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 56,
                                                            "end": 58
                                                        },
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 48,
                                                        "end": 58
                                                    }
                                                ],
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 48,
                                                "end": 59
                                            },
                                            "flags": 48,
                                            "transformFlags": 0,
                                            "start": 32,
                                            "end": 59
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 39,
                                        "end": 59
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 60,
                                        "end": 62
                                    }
                                ],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 62
                            },
                            "flags": 37,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 63
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 33,
                        "end": 63
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 33,
                "end": 63
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 29,
            "end": 64
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 64,
                "end": 68
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
                            "start": 68,
                            "end": 70
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
                                        "start": 74,
                                        "end": 75
                                    },
                                    "returnType": null,
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 75,
                                        "end": 78
                                    },
                                    "contents": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 78,
                                            "end": 80
                                        },
                                        "operatorToken": {
                                            "kind": 67143222,
                                            "flags": 96,
                                            "transformFlags": 32,
                                            "start": 80,
                                            "end": 82
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 82,
                                            "end": 84
                                        },
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 78,
                                        "end": 84
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 74,
                                    "end": 84
                                },
                                "flags": 72,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 85
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
                                        "start": 86,
                                        "end": 87
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 86,
                                "end": 87
                            },
                            "flags": 268435488,
                            "transformFlags": 1,
                            "start": 72,
                            "end": 88
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 68,
                        "end": 88
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 68,
                "end": 88
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 64,
            "end": 89
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 89,
                "end": 93
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "d",
                            "rawText": "d",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 93,
                            "end": 95
                        },
                        "type": null,
                        "initializer": {
                            "kind": 121,
                            "expression": {
                                "kind": 132,
                                "expressions": [
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 99,
                                        "end": 100
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 101,
                                        "end": 103
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 3,
                                        "rawText": "3",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 104,
                                        "end": 106
                                    }
                                ],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 97,
                                "end": 106
                            },
                            "flags": 97,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 107
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 93,
                        "end": 107
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 93,
                "end": 107
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 89,
            "end": 108
        }
    ],
    "isModule": false,
    "source": "let a = (x => (x, x * 2), 3);\nlet b = ((x, y) => (x, x * y), 1);\nlet c = (x => x * x)(2);\nlet d = (1, 2, 3);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 108
}
```

### Printed

```javascript

let a = (x => (x, x * 2), 3);
let b = ((x, y) => (x, x * y), 1);

let c = (x => x * x)(2);

let d = (1, 2, 3);

```

### Diagnostics

```javascript
✔ No errors
```

