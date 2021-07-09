# Kataw parser test case

## Input

`````js
const FLAG_A = 1 << 0;
const FLAG_B = 1 << 1;
const FLAG_C = 1 << 2;

const all = FLAG_A | FLAG_B | FLAG_C;
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
                "kind": 37757004,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "FLAG_A",
                            "rawText": "FLAG_A",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 12
                        },
                        "type": null,
                        "initializer": {
                            "kind": 198,
                            "left": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 16
                            },
                            "operatorToken": {
                                "kind": 35140,
                                "flags": 96,
                                "transformFlags": 64,
                                "start": 16,
                                "end": 19
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 21
                            },
                            "flags": 96,
                            "transformFlags": 5120,
                            "start": 14,
                            "end": 21
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 5,
                        "end": 21
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 5,
                "end": 21
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 22
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 22,
                "end": 28
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "FLAG_B",
                            "rawText": "FLAG_B",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 28,
                            "end": 35
                        },
                        "type": null,
                        "initializer": {
                            "kind": 198,
                            "left": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 39
                            },
                            "operatorToken": {
                                "kind": 35140,
                                "flags": 96,
                                "transformFlags": 64,
                                "start": 39,
                                "end": 42
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 42,
                                "end": 44
                            },
                            "flags": 96,
                            "transformFlags": 5120,
                            "start": 37,
                            "end": 44
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 28,
                        "end": 44
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 28,
                "end": 44
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 22,
            "end": 45
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 45,
                "end": 51
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "FLAG_C",
                            "rawText": "FLAG_C",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 51,
                            "end": 58
                        },
                        "type": null,
                        "initializer": {
                            "kind": 198,
                            "left": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 60,
                                "end": 62
                            },
                            "operatorToken": {
                                "kind": 35140,
                                "flags": 96,
                                "transformFlags": 64,
                                "start": 62,
                                "end": 65
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 2,
                                "rawText": "2",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 65,
                                "end": 67
                            },
                            "flags": 96,
                            "transformFlags": 5120,
                            "start": 60,
                            "end": 67
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 51,
                        "end": 67
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 51,
                "end": 67
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 45,
            "end": 68
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 68,
                "end": 75
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "all",
                            "rawText": "all",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 75,
                            "end": 79
                        },
                        "type": null,
                        "initializer": {
                            "kind": 198,
                            "left": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "FLAG_A",
                                    "rawText": "FLAG_A",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 81,
                                    "end": 88
                                },
                                "operatorToken": {
                                    "kind": 134251592,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 88,
                                    "end": 90
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "FLAG_B",
                                    "rawText": "FLAG_B",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 90,
                                    "end": 97
                                },
                                "flags": 96,
                                "transformFlags": 5120,
                                "start": 81,
                                "end": 97
                            },
                            "operatorToken": {
                                "kind": 134251592,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 97,
                                "end": 99
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "FLAG_C",
                                "rawText": "FLAG_C",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 99,
                                "end": 106
                            },
                            "flags": 96,
                            "transformFlags": 5120,
                            "start": 81,
                            "end": 106
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 75,
                        "end": 106
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 75,
                "end": 106
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 68,
            "end": 107
        }
    ],
    "isModule": false,
    "source": "const FLAG_A = 1 << 0;\nconst FLAG_B = 1 << 1;\nconst FLAG_C = 1 << 2;\n\nconst all = FLAG_A | FLAG_B | FLAG_C;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 107
}
```

### Printed

```javascript
const FLAG_A = 1 << 0;
const FLAG_B = 1 << 1;

const FLAG_C = 1 << 2;

const all = FLAG_A | FLAG_B | FLAG_C;

```

### Diagnostics

```javascript
✔ No errors
```

